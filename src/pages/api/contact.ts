// src/pages/api/contact.ts
// Direct and legacy contact endpoint for mlmlip.com.
// Compatible with both direct HTML form POSTs (application/x-www-form-urlencoded)
// and AJAX client submissions (application/json).
// Unifies submission handling with /api/inquiry, guaranteeing zero dropped leads.

import type { APIRoute } from 'astro';
import {
  isAllowedOrigin,
  processInquirySubmission,
  json,
} from './inquiry';

export const prerender = false;

const MAX_BODY_BYTES = 64 * 1024;

export const GET: APIRoute = async ({ redirect }) => {
  return redirect('/contact', 302);
};

export const POST: APIRoute = async ({ request, clientAddress, redirect }) => {
  if (!isAllowedOrigin(request)) {
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    console.warn(`[contact] 403 BLOCKED invalid origin=${origin} referer=${referer}`);
    return json({ ok: false, code: 'origin_not_allowed' }, 403);
  }

  const contentType = request.headers.get('content-type') || '';
  const acceptHeader = request.headers.get('accept') || '';
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

  const result = await processInquirySubmission(raw, ip, 'product_contact_form');

  // If the request was a traditional browser HTML form submit (non-AJAX)
  const isHtmlRequest = isForm && !acceptHeader.includes('application/json');
  if (isHtmlRequest) {
    if (result.status === 200) {
      // Return a graceful confirmation page
      const productName = String(raw.product_item || raw.product || 'Lip Product');
      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Inquiry Received — Beautychain Limited</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #faf8f5; color: #2d1822; margin: 0; padding: 40px 20px; text-align: center; }
    .card { max-width: 580px; margin: 60px auto; background: #fff; padding: 40px 32px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.06); border: 1px solid #eee1d5; }
    h1 { color: #5a1e38; margin-top: 0; font-size: 26px; }
    p { line-height: 1.6; color: #555; }
    .badge { display: inline-block; background: #eef7ee; color: #1e7e34; padding: 6px 14px; border-radius: 20px; font-weight: 600; font-size: 13px; margin-bottom: 16px; }
    .btn { display: inline-block; margin-top: 24px; padding: 12px 24px; background: #5a1e38; color: #fff; text-decoration: none; border-radius: 6px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">✓ Request Received</div>
    <h1>Thank You!</h1>
    <p>Your inquiry for <strong>${productName}</strong> has been transmitted directly to our sales engineering team.</p>
    <p>We review formulation requirements and reply with custom pricing and sample options within 12–24 hours.</p>
    <a href="/products" class="btn">← Back to Product Catalog</a>
  </div>
</body>
</html>`;
      return new Response(html, {
        status: 200,
        headers: { 'content-type': 'text/html; charset=utf-8' },
      });
    } else {
      return redirect('/contact?error=' + encodeURIComponent(String((result.body as Record<string, unknown>)?.code || 'error')), 303);
    }
  }

  // Standard JSON response for fetch / API clients
  return json(result.body, result.status);
};
