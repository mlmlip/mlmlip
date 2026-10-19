// src/lib/inquiryClient.ts
// Shared browser helper for every lead form on mlmlip.com.
// Single source of truth for the owned endpoint and the WhatsApp fallback link,
// so no page has to hardcode a third-party submit URL again.

export const INQUIRY_ENDPOINT = '/api/inquiry';

/** Direct WhatsApp fallback shown whenever a submission cannot be delivered. */
export const WHATSAPP_FALLBACK_URL = 'https://wa.me/8613652380291';

export interface InquiryResult {
  ok: boolean;
  code: string;
  status: number;
}

/** WhatsApp anchor, ready to drop into a localised failure message. */
export function whatsappLink(label: string, color = '#1e7044'): string {
  return `<a href="${WHATSAPP_FALLBACK_URL}" target="_blank" rel="noopener" style="color:${color};font-weight:700;text-decoration:underline;">${label}</a>`;
}

/**
 * POST a lead to the owned endpoint. Never throws: a network failure is
 * reported as { ok: false, code: 'network_error' } so callers can render
 * their failure state instead of blowing up.
 */
export async function postInquiry(payload: Record<string, unknown>): Promise<InquiryResult> {
  try {
    const response = await fetch(INQUIRY_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        ...payload,
        sourceUrl: payload.sourceUrl ?? window.location.href,
      }),
    });
    const data = await response.json().catch(() => ({}) as { code?: string });
    return {
      ok: response.ok && data.ok === true,
      code: data.code ?? (response.ok ? 'accepted' : 'http_error'),
      status: response.status,
    };
  } catch {
    return { ok: false, code: 'network_error', status: 0 };
  }
}
