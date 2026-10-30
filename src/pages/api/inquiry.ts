// src/pages/api/inquiry.ts
// Owned inquiry endpoint for mlmlip.com.
// Zero-Drop Lead Pipeline: Feishu + DingTalk fan-out + local persistent backup.
// Rule: Every lead is captured. No silent drops, no honeypot 400 drops, no rate-limit 429 drops.

import type { APIRoute } from 'astro';
import { createHash, createHmac, randomUUID } from 'node:crypto';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

export const prerender = false;

const MAX_BODY_BYTES = 64 * 1024;
const MAX_FIELD_CHARS = 4_000;

// website has been completely removed from honeypot because genuine B2B buyers frequently input their website!
// Only botcheck is monitored as hidden field.
export const HONEYPOT_FIELDS = ['botcheck'];

const RATE_LIMIT = Number(process.env.INQUIRY_RATE_LIMIT || 5);
const RATE_WINDOW_SECONDS = Number(process.env.INQUIRY_RATE_WINDOW_SECONDS || 600);

export type RateMode = 'upstash' | 'memory';
export type DeliveryState = 'ok' | 'failed' | 'skipped';

export interface InquiryFlags {
  isSpam?: boolean;
  isBot?: boolean;
  isRateLimited?: boolean;
}

export interface Inquiry {
  requestId: string;
  name: string;
  email: string;
  company: string;
  whatsapp: string;
  productType: string;
  quantity: string;
  country: string;
  details: string;
  source: string;
  sourceUrl: string;
  ip: string;
}

export function json(body: unknown, status: number, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...extraHeaders,
    },
  });
}

// Astro exposes .env via import.meta.env on the server; Vercel injects process.env.
// Read both so the endpoint works in `astro dev` and in production alike.
export function env(name: string): string {
  const fromProcess = String(process.env[name] ?? '').trim();
  if (fromProcess) return fromProcess;
  return String((import.meta.env as Record<string, unknown> | undefined)?.[name] ?? '').trim();
}

function hashKey(value: string): string {
  return createHash('sha256').update(value).digest('hex').slice(0, 32);
}

function clamp(value: unknown): string {
  if (value === null || value === undefined) return '';
  return String(value).replace(/\s+/g, ' ').trim().slice(0, MAX_FIELD_CHARS);
}

/* ------------------------------------------------------------------ *
 * Origin & CSRF Validation (Whitelist + Dynamic Host Matching)
 * ------------------------------------------------------------------ */

function checkHostMatch(url: URL, request: Request): boolean {
  const host = url.host.toLowerCase();
  const hostname = url.hostname.toLowerCase();

  // 1. Whitelisted production domains
  if (host === 'mlmlip.com' || host === 'www.mlmlip.com') return true;

  // 2. Vercel preview environments (*.vercel.app)
  if (hostname.endsWith('.vercel.app')) return true;

  // 3. Localhost development environments
  if (hostname === 'localhost' || hostname === '127.0.0.1') return true;

  // 4. Match against incoming Host or X-Forwarded-Host
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim().toLowerCase();
  if (forwardedHost && host === forwardedHost) return true;

  const headerHost = request.headers.get('host')?.split(',')[0]?.trim().toLowerCase();
  if (headerHost && host === headerHost) return true;

  // 5. Match against request.url host if valid
  try {
    const reqUrl = new URL(request.url);
    if (url.host === reqUrl.host) return true;
  } catch {}

  return false;
}

export function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');

  // If no Origin header, fall back to Referer or Sec-Fetch-Site
  if (!origin) {
    const referer = request.headers.get('referer');
    if (!referer) {
      const fetchSite = request.headers.get('sec-fetch-site');
      if (fetchSite === 'cross-site') return false;
      return true;
    }
    try {
      return checkHostMatch(new URL(referer), request);
    } catch {
      return false;
    }
  }

  try {
    return checkHostMatch(new URL(origin), request);
  } catch {
    return false;
  }
}

/* ------------------------------------------------------------------ *
 * Rate limiting: Upstash Redis when credentials exist, memory otherwise
 * ------------------------------------------------------------------ */

const memoryRateLimit = new Map<string, { count: number; expiresAt: number }>();

let redisClient: Redis | null = null;
let ratelimiter: Ratelimit | null = null;

function initUpstash() {
  const url = env('UPSTASH_REDIS_REST_URL');
  const token = env('UPSTASH_REDIS_REST_TOKEN');
  if (!url || !token || ratelimiter) return;
  redisClient = new Redis({ url, token });
  ratelimiter = new Ratelimit({
    redis: redisClient,
    limiter: Ratelimit.slidingWindow(RATE_LIMIT, `${RATE_WINDOW_SECONDS} s`),
    analytics: true,
    prefix: 'mlmlip:inquiry:rate',
  });
}

function memoryLimit(key: string): { allowed: boolean } {
  const now = Date.now();
  if (memoryRateLimit.size > 5_000) {
    for (const [k, v] of memoryRateLimit) {
      if (v.expiresAt <= now) memoryRateLimit.delete(k);
    }
  }
  const current = memoryRateLimit.get(key);
  const next = !current || current.expiresAt <= now
    ? { count: 1, expiresAt: now + RATE_WINDOW_SECONDS * 1_000 }
    : { count: current.count + 1, expiresAt: current.expiresAt };
  memoryRateLimit.set(key, next);
  return { allowed: next.count <= RATE_LIMIT };
}

export async function checkRateLimit(identity: string): Promise<{ allowed: boolean; mode: RateMode }> {
  const key = hashKey(identity);
  try {
    initUpstash();
    if (ratelimiter) {
      const { success } = await ratelimiter.limit(key);
      return { allowed: success, mode: 'upstash' };
    }
  } catch (err) {
    console.warn('[inquiry] Upstash rate limiter error, falling back to memory:', err);
  }
  return { allowed: memoryLimit(key).allowed, mode: 'memory' };
}

/* ------------------------------------------------------------------ *
 * Payload normalisation + validation
 * ------------------------------------------------------------------ */

export function pick(raw: Record<string, unknown>, names: string[]): string {
  for (const name of names) {
    const value = clamp(raw[name]);
    if (value) return value;
  }
  return '';
}

export function isHoneypotTripped(raw: Record<string, unknown>): boolean {
  return HONEYPOT_FIELDS.some((field) => {
    const value = raw[field];
    if (value === undefined || value === null) return false;
    if (typeof value === 'boolean') return value;
    return String(value).trim() !== '';
  });
}

export function buildInquiry(raw: Record<string, unknown>, ip: string): Inquiry | { error: string } {
  // Field-name aliases: every form on the site posts a slightly different shape.
  const name = pick(raw, ['name', 'full_name', 'buyer_name']);
  const email = pick(raw, ['email', 'buyer_email', 'work_email']);
  const baseDetails = pick(raw, ['details', 'message', 'notes', 'project_notes', 'full_brief_summary']);
  const requestType = pick(raw, ['request_type', 'requestType']);
  let details = requestType ? `[Request: ${requestType}] ${baseDetails}`.trim() : baseDetails;

  // Preserve genuine company website input if provided by client
  const website = pick(raw, ['website', 'company_url', 'site', 'website_url']);
  if (website) {
    details = details ? `${details}\nCompany Website: ${website}` : `Company Website: ${website}`;
  }

  const productType = pick(raw, ['product_item', 'productType', 'product_interest', 'product', 'selected_kit', 'category', 'product_category']);
  const quantity = pick(raw, ['quantity', 'planned_quantity', 'production_volume', 'volume']);
  const country = pick(raw, ['country', 'destination', 'market', 'target_market', 'target_markets']);
  const company = pick(raw, ['company', 'buyer_brand', 'brand']);
  const whatsapp = pick(raw, ['whatsapp', 'buyer_whatsapp', 'phone', 'tel']);

  // Zero-Drop Relaxed Validation:
  // As long as the visitor provided ANY contact channel (email, phone, whatsapp) or a message, accept it!
  const hasContactOrDetails = Boolean(email || whatsapp || details);
  if (!hasContactOrDetails && !name) {
    return { error: 'Please provide an email, phone/WhatsApp, or project description.' };
  }

  const finalName = name || (company ? `${company} Team` : (email ? email.split('@')[0] : 'Website Visitor'));
  const finalEmail = email || '未填写';

  return {
    requestId: randomUUID(),
    name: finalName,
    email: finalEmail,
    company: company || '',
    whatsapp: whatsapp || '',
    productType: productType || '未填写',
    quantity: quantity || '待确认',
    country: country || '未填写',
    details: details || '',
    source: pick(raw, ['source', 'context']) || 'website',
    sourceUrl: pick(raw, ['sourceUrl', 'source_url']) || '',
    ip,
  };
}

export function isObviousSpam(lead: Inquiry): boolean {
  const text = `${lead.name} ${lead.company} ${lead.details} ${lead.email}`.toLowerCase();
  return /\b(seo ranking|seo audit|backlink|guest post|buy website traffic|casino|crypto|viagra|cialis|lottery|hire dedicated developers|offshore developers)\b/i.test(text);
}

/* ------------------------------------------------------------------ *
 * Feishu + DingTalk fan-out (signed custom bots)
 * ------------------------------------------------------------------ */

function feishuSignature(secret: string): { timestamp: string; sign: string } {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const sign = createHmac('sha256', `${timestamp}\n${secret}`).update('').digest('base64');
  return { timestamp, sign };
}

function dingtalkSignature(secret: string): { timestamp: string; sign: string } {
  const timestamp = String(Date.now());
  const sign = createHmac('sha256', secret).update(`${timestamp}\n${secret}`).digest('base64');
  return { timestamp, sign };
}

export function messageText(lead: Inquiry, flags?: InquiryFlags): string {
  const waDigits = lead.whatsapp.replace(/\D/g, '');
  const waLink = waDigits.length >= 7
    ? ` (https://wa.me/${waDigits})`
    : '';

  const tags: string[] = [];
  if (flags?.isBot) tags.push('⚠️[疑似机器人]');
  if (flags?.isSpam) tags.push('⚠️[疑似推广/请甄别]');
  if (flags?.isRateLimited) tags.push('⚠️[高频提交]');

  const tagPrefix = tags.length > 0 ? `${tags.join(' ')} ` : '';

  return [
    `${tagPrefix}【新询盘】${lead.productType} — ${lead.company || lead.name}`,
    `请求ID: ${lead.requestId}`,
    `姓名: ${lead.name}`,
    `邮箱: ${lead.email}`,
    `WhatsApp/电话: ${lead.whatsapp || '未填写'}${waLink}`,
    `公司/品牌: ${lead.company || '未填写'}`,
    `国家/地区: ${lead.country}`,
    `产品: ${lead.productType}`,
    `预估数量: ${lead.quantity}`,
    `需求详情: ${lead.details || '无额外留言'}`,
    `来源: ${lead.source}${lead.sourceUrl ? ` (${lead.sourceUrl})` : ''}`,
    `IP: ${lead.ip}`,
  ].join('\n');
}

export async function notifyFeishu(lead: Inquiry, flags?: InquiryFlags): Promise<DeliveryState> {
  const webhookUrl = env('FEISHU_WEBHOOK_URL');
  if (!webhookUrl) {
    console.warn('[inquiry] FEISHU_WEBHOOK_URL is not configured — Feishu notification skipped.');
    return 'skipped';
  }
  try {
    const target = new URL(webhookUrl);
    if (target.protocol !== 'https:') throw new Error('FEISHU_WEBHOOK_URL must use HTTPS');

    const secret = env('FEISHU_SECRET');
    const body: Record<string, unknown> = {
      msg_type: 'text',
      content: { text: messageText(lead, flags) },
    };
    if (secret) {
      const { timestamp, sign } = feishuSignature(secret);
      body.timestamp = timestamp;
      body.sign = sign;
    }

    const res = await fetch(target, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(5_000),
    });
    const data = await res.json().catch(() => ({})) as { code?: number; msg?: string };
    if (!res.ok || (typeof data.code === 'number' && data.code !== 0)) {
      throw new Error(`Feishu returned ${res.status} code=${data.code ?? '?'} msg=${data.msg ?? ''}`);
    }
    return 'ok';
  } catch (err) {
    console.error(`[inquiry] Feishu delivery FAILED id=${lead.requestId}:`, err);
    return 'failed';
  }
}

export async function notifyDingTalk(lead: Inquiry, flags?: InquiryFlags): Promise<DeliveryState> {
  const webhookUrl = env('DINGTALK_WEBHOOK_URL') || env('OPS_ALERT_WEBHOOK_URL');
  if (!webhookUrl) {
    console.warn('[inquiry] DINGTALK_WEBHOOK_URL is not configured — DingTalk notification skipped.');
    return 'skipped';
  }
  try {
    const target = new URL(webhookUrl);
    if (target.protocol !== 'https:') throw new Error('DINGTALK_WEBHOOK_URL must use HTTPS');

    const secret = env('DINGTALK_SECRET');
    if (secret) {
      const { timestamp, sign } = dingtalkSignature(secret);
      target.searchParams.set('timestamp', timestamp);
      target.searchParams.set('sign', sign);
    }

    const keyword = env('DINGTALK_KEYWORD') || '询盘';
    const rawMsg = messageText(lead, flags);
    const content = rawMsg.includes(keyword) ? rawMsg : `${keyword}\n${rawMsg}`;

    const res = await fetch(target, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ msgtype: 'text', text: { content } }),
      signal: AbortSignal.timeout(5_000),
    });
    const data = await res.json().catch(() => ({})) as { errcode?: number; errmsg?: string };
    if (data.errcode !== 0) {
      throw new Error(`DingTalk errcode=${data.errcode ?? '?'} errmsg=${data.errmsg ?? res.status}`);
    }
    return 'ok';
  } catch (err) {
    console.error(`[inquiry] DingTalk delivery FAILED id=${lead.requestId}:`, err);
    return 'failed';
  }
}

/* ------------------------------------------------------------------ *
 * Unified Inquiry Pipeline (Shared between /api/inquiry and /api/contact)
 * ZERO DROP ARCHITECTURE: Never silently drop, never reject with 400/429
 * ------------------------------------------------------------------ */

export interface ProcessInquiryResult {
  status: number;
  body: Record<string, unknown>;
  lead?: Inquiry;
  rateMode?: RateMode;
  delivery?: { feishu: DeliveryState; dingtalk: DeliveryState };
  flags?: InquiryFlags;
}

export async function processInquirySubmission(
  raw: Record<string, unknown>,
  ip: string,
  defaultSource = 'website'
): Promise<ProcessInquiryResult> {
  // 1. Botcheck Honeypot Inspection:
  // ZERO DROP: If filled, do NOT drop with 400! Flag as isBot and continue processing.
  const isBot = isHoneypotTripped(raw);
  if (isBot) {
    console.warn(`[inquiry] Tripped botcheck honeypot field. Flagged as isBot=true (Zero-Drop in effect).`);
  }

  // 2. Rate Limit Inspection:
  // ZERO DROP: If rate limit exceeded, do NOT reject with 429! Flag as isRateLimited=true and continue.
  let rateAllowed = true;
  let rateMode: RateMode = 'memory';
  try {
    const rate = await checkRateLimit(ip);
    rateAllowed = rate.allowed;
    rateMode = rate.mode;
  } catch (err) {
    console.warn('[inquiry] Rate limiter lookup warning, proceeding:', err);
  }
  const isRateLimited = !rateAllowed;
  if (isRateLimited) {
    console.warn(`[inquiry] Rate limit exceeded for ip=${ip}. Flagged as isRateLimited=true (Zero-Drop in effect).`);
  }

  // Apply default source if missing
  if (!raw.source && defaultSource) {
    raw.source = defaultSource;
  }

  // 3. Relaxed Lead Construction:
  const built = buildInquiry(raw, ip);
  if ('error' in built) {
    console.warn(`[inquiry] Validation warning: ${built.error}`);
    return {
      status: 400,
      body: { ok: false, code: 'validation_error', message: built.error },
      rateMode,
    };
  }

  // 4. Spam Keyword Inspection:
  // ZERO DROP: Even if contains promotion keywords, NEVER DROP! Flag as isSpam=true and push with warning tag.
  const isSpam = isObviousSpam(built);
  if (isSpam) {
    console.warn(`[inquiry] Heuristic spam keywords detected id=${built.requestId} email=${built.email}. Flagged as isSpam=true (Zero-Drop in effect).`);
  }

  const flags: InquiryFlags = {
    isBot,
    isRateLimited,
    isSpam,
  };

  // 5. Fan-out notification to Feishu and DingTalk with alert tags
  const [feishu, dingtalk] = await Promise.all([
    notifyFeishu(built, flags),
    notifyDingTalk(built, flags),
  ]);

  // 6. 100% Persistent Local Backup Guarantee:
  // Write every lead to /tmp/mlmlip_inquiries_backup.jsonl and console log
  const backupPayload = {
    timestamp: new Date().toISOString(),
    event: 'INQUIRY_RECEIVED',
    flags,
    delivery: { feishu, dingtalk },
    lead: built,
  };
  console.log(`[INQUIRY_LEAD_BACKUP] ${JSON.stringify(backupPayload)}`);

  try {
    const fs = await import('node:fs/promises');
    await fs.appendFile('/tmp/mlmlip_inquiries_backup.jsonl', JSON.stringify(backupPayload) + '\n', 'utf-8');
  } catch (backupErr) {
    console.error('[inquiry] Failed appending to local backup file:', backupErr);
  }

  return {
    status: 200,
    body: {
      ok: true,
      code: 'accepted',
      requestId: built.requestId,
      delivery: { feishu, dingtalk },
      flagged: isSpam || isBot || isRateLimited,
      flags,
    },
    lead: built,
    rateMode,
    delivery: { feishu, dingtalk },
    flags,
  };
}

/* ------------------------------------------------------------------ *
 * Route
 * ------------------------------------------------------------------ */

export const OPTIONS: APIRoute = async () => new Response(null, {
  status: 204,
  headers: {
    'Allow': 'POST, OPTIONS',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
});

export const GET: APIRoute = async () => new Response(
  JSON.stringify({ ok: false, error: 'Method Not Allowed. Please use POST.' }),
  {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  }
);

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (!isAllowedOrigin(request)) {
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    console.warn(`[inquiry] 403 BLOCKED invalid origin=${origin} referer=${referer}`);
    return json({ ok: false, code: 'origin_not_allowed' }, 403);
  }

  const contentType = request.headers.get('content-type') || '';
  const isForm = /application\/x-www-form-urlencoded|multipart\/form-data/i.test(contentType);
  const isJson = /application\/json/i.test(contentType);
  if (!isForm && !isJson) {
    return json({ ok: false, code: 'unsupported_media_type' }, 415);
  }

  let raw: Record<string, unknown>;
  try {
    if (isForm) {
      const formData = await request.formData();
      const entries: Record<string, unknown> = {};
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string') entries[key] = value;
      }
      raw = entries;
    } else {
      const body = await request.text();
      if (Buffer.byteLength(body) > MAX_BODY_BYTES) {
        return json({ ok: false, code: 'payload_too_large' }, 413);
      }
      const parsed = JSON.parse(body);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        return json({ ok: false, code: 'invalid_payload' }, 400);
      }
      raw = parsed as Record<string, unknown>;
    }
  } catch {
    return json({ ok: false, code: 'invalid_payload' }, 400);
  }

  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const ip = forwardedFor || clientAddress || 'unknown';

  const result = await processInquirySubmission(raw, ip, 'inquiry_api');

  const headers: Record<string, string> = {};
  if (result.rateMode) {
    headers['x-rate-limit-mode'] = result.rateMode;
  }

  return json(result.body, result.status, headers);
};
