// src/pages/api/inquiry.ts
// Owned inquiry endpoint for mlmlip.com.
// Ported from the mature mlmglitter implementation (Upstash rate limit -> IM fan-out),
// adapted: Feishu + DingTalk signed webhooks only (no email provider), in-memory
// rate-limit fallback, honeypot spam gate.
//
// Hard rule: no webhook URL, no signing secret is ever hardcoded. Everything comes
// from environment variables. When they are missing the endpoint degrades to
// "log a warning + still tell the customer success" so a visitor never sees an error.

import type { APIRoute } from 'astro';
import { createHash, createHmac, randomUUID } from 'node:crypto';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

export const prerender = false;

const MAX_BODY_BYTES = 64 * 1024;
const MAX_FIELD_CHARS = 4_000;

// Same-origin forms only. Cross-site POSTs are refused.
const HONEYPOT_FIELDS = ['botcheck', 'website', 'fax', '_honey'];

const RATE_LIMIT = Number(process.env.INQUIRY_RATE_LIMIT || 5);
const RATE_WINDOW_SECONDS = Number(process.env.INQUIRY_RATE_WINDOW_SECONDS || 600);

type RateMode = 'upstash' | 'memory';
type DeliveryState = 'ok' | 'failed' | 'skipped';

interface Inquiry {
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

function json(body: unknown, status: number, extraHeaders: Record<string, string> = {}) {
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
function env(name: string): string {
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

async function checkRateLimit(identity: string): Promise<{ allowed: boolean; mode: RateMode }> {
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

function pick(raw: Record<string, unknown>, names: string[]): string {
  for (const name of names) {
    const value = clamp(raw[name]);
    if (value) return value;
  }
  return '';
}

function isHoneypotTripped(raw: Record<string, unknown>): boolean {
  return HONEYPOT_FIELDS.some((field) => {
    const value = raw[field];
    if (value === undefined || value === null) return false;
    if (typeof value === 'boolean') return value;
    return String(value).trim() !== '';
  });
}

function buildInquiry(raw: Record<string, unknown>, ip: string): Inquiry | { error: string } {
  // Field-name aliases: every legacy form on the site posts a different shape.
  const name = pick(raw, ['name', 'full_name', 'buyer_name']);
  const email = pick(raw, ['email', 'buyer_email', 'work_email']);
  const details = pick(raw, ['details', 'message', 'notes', 'project_notes', 'full_brief_summary']);
  const productType = pick(raw, ['productType', 'product_interest', 'selected_kit', 'category']);
  const quantity = pick(raw, ['quantity', 'planned_quantity', 'production_volume']);
  const country = pick(raw, ['country', 'destination']);
  const company = pick(raw, ['company', 'buyer_brand', 'brand']);
  const whatsapp = pick(raw, ['whatsapp', 'buyer_whatsapp', 'phone']);

  if (!name) return { error: 'name is required' };
  if (!email) return { error: 'email is required' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return { error: 'email is invalid' };

  return {
    requestId: randomUUID(),
    name,
    email,
    company,
    whatsapp,
    productType: productType || '未填写',
    quantity: quantity || '待确认',
    country: country || '未填写',
    details,
    source: pick(raw, ['source', 'context']) || 'website',
    sourceUrl: pick(raw, ['sourceUrl', 'source_url']) || '',
    ip,
  };
}

function isObviousSpam(lead: Inquiry): boolean {
  const text = `${lead.name} ${lead.company} ${lead.details} ${lead.email}`.toLowerCase();
  return /\b(seo ranking|seo audit|backlink|guest post|buy website traffic|casino|crypto|viagra|cialis|lottery|hire dedicated developers|offshore developers)\b/i.test(text);
}

/* ------------------------------------------------------------------ *
 * Feishu + DingTalk fan-out (signed custom bots)
 * ------------------------------------------------------------------ */

function feishuSignature(secret: string): { timestamp: string; sign: string } {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  // Feishu: HMAC key is "<timestamp>\n<secret>", message is empty.
  const sign = createHmac('sha256', `${timestamp}\n${secret}`).update('').digest('base64');
  return { timestamp, sign };
}

function dingtalkSignature(secret: string): { timestamp: string; sign: string } {
  const timestamp = String(Date.now());
  // DingTalk: HMAC key is the secret, message is "<timestamp>\n<secret>".
  const sign = createHmac('sha256', secret).update(`${timestamp}\n${secret}`).digest('base64');
  return { timestamp, sign };
}

function messageText(lead: Inquiry): string {
  const waLink = lead.whatsapp.replace(/\D/g, '').length >= 7
    ? ` (https://wa.me/${lead.whatsapp.replace(/\D/g, '')})`
    : '';
  return [
    `【新询盘】${lead.productType} — ${lead.company || lead.name}`,
    `请求ID: ${lead.requestId}`,
    `姓名: ${lead.name}`,
    `邮箱: ${lead.email}`,
    `WhatsApp: ${lead.whatsapp || '未填写'}${waLink}`,
    `公司/品牌: ${lead.company || '未填写'}`,
    `国家/地区: ${lead.country}`,
    `产品: ${lead.productType}`,
    `预估数量: ${lead.quantity}`,
    `需求详情: ${lead.details || '无额外留言'}`,
    `来源: ${lead.source}${lead.sourceUrl ? ` (${lead.sourceUrl})` : ''}`,
  ].join('\n');
}

async function notifyFeishu(lead: Inquiry): Promise<DeliveryState> {
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
      content: { text: messageText(lead) },
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

async function notifyDingTalk(lead: Inquiry): Promise<DeliveryState> {
  const webhookUrl = env('DINGTALK_WEBHOOK_URL');
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

    // Optional: DingTalk bots secured by "custom keyword" require the keyword in the text.
    const keyword = env('DINGTALK_KEYWORD');
    const content = keyword ? `${keyword}\n${messageText(lead)}` : messageText(lead);

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
 * Route
 * ------------------------------------------------------------------ */

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
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

  // Spam gate 1: hidden honeypot field filled in => discard, never delivered.
  if (isHoneypotTripped(raw)) {
    console.warn(`[inquiry] BLOCKED honeypot fields=${HONEYPOT_FIELDS.filter((f) => raw[f]).join(',') || 'n/a'}`);
    return json({ ok: false, code: 'rejected', reason: 'spam' }, 400);
  }

  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const ip = forwardedFor || clientAddress || 'unknown';

  let rate: { allowed: boolean; mode: RateMode };
  try {
    rate = await checkRateLimit(ip);
  } catch (err) {
    console.error('[inquiry] rate limiter unavailable:', err);
    return json({ ok: false, code: 'service_unavailable' }, 503);
  }
  if (!rate.allowed) {
    return json({ ok: false, code: 'rate_limited' }, 429, {
      'retry-after': String(RATE_WINDOW_SECONDS),
      'x-rate-limit-mode': rate.mode,
    });
  }

  const built = buildInquiry(raw, ip);
  if ('error' in built) {
    return json({ ok: false, code: 'validation_error', message: built.error }, 400, {
      'x-rate-limit-mode': rate.mode,
    });
  }

  // Spam gate 2: cheap keyword heuristic. Silently accepted so bots do not retry.
  if (isObviousSpam(built)) {
    console.warn(`[inquiry] BLOCKED heuristic spam id=${built.requestId} email=${built.email}`);
    return json({ ok: true, code: 'accepted', requestId: built.requestId, filtered: true }, 200, {
      'x-rate-limit-mode': rate.mode,
      'x-spam-filtered': 'true',
    });
  }

  const [feishu, dingtalk] = await Promise.all([
    notifyFeishu(built),
    notifyDingTalk(built),
  ]);

  if (feishu === 'skipped' && dingtalk === 'skipped') {
    console.warn(`[inquiry] NO NOTIFICATION CHANNEL CONFIGURED — lead id=${built.requestId} email=${built.email} was accepted but delivered nowhere. Set FEISHU_WEBHOOK_URL / DINGTALK_WEBHOOK_URL.`);
  }

  // The customer always gets a success response: internal delivery problems are
  // logged, never surfaced as an error page.
  return json(
    {
      ok: true,
      code: 'accepted',
      requestId: built.requestId,
      delivery: { feishu, dingtalk },
    },
    200,
    { 'x-rate-limit-mode': rate.mode },
  );
};
