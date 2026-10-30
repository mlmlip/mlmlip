// src/lib/inquiryClient.ts
// Shared browser helper for every lead form on mlmlip.com.
// Provides the Dual-Track System (Channel A: Zero-Drop Backend + Channel B: WhatsApp Direct).

export const INQUIRY_ENDPOINT = '/api/inquiry';
export const WHATSAPP_NUMBER = '8613652380291';
export const WHATSAPP_FALLBACK_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export interface InquiryResult {
  ok: boolean;
  code: string;
  status: number;
}

export interface DualTrackOptions {
  payload: Record<string, unknown>;
  formElement?: HTMLFormElement | null;
  submitButton?: HTMLButtonElement | HTMLElement | null;
  statusElement?: HTMLElement | null;
  customWaText?: string;
  source?: string;
  redirectingText?: string;
  fallbackText?: string;
  onSuccess?: () => void;
}

/** WhatsApp anchor, ready to drop into any failure or confirmation message. */
export function whatsappLink(label: string, color = '#1e7044'): string {
  return `<a href="${WHATSAPP_FALLBACK_URL}" target="_blank" rel="noopener" style="color:${color};font-weight:700;text-decoration:underline;">${label}</a>`;
}

/**
 * Format structured B2B inquiry brief for WhatsApp direct communication.
 * Aligned with 500 pcs OEM lip cosmetics specification format.
 */
export function formatWhatsAppMessage(raw: Record<string, unknown>): string {
  const name = String(raw.name || raw.full_name || raw.buyer_name || '').trim();
  const company = String(raw.company || raw.brand || raw.buyer_brand || '').trim();
  const email = String(raw.email || raw.buyer_email || raw.work_email || '').trim();
  const phone = String(raw.whatsapp || raw.phone || raw.buyer_whatsapp || raw.tel || '').trim();
  const product = String(raw.product || raw.productType || raw.product_item || raw.product_interest || raw.category || raw.selected_kit || '').trim();
  const quantity = String(raw.quantity || raw.volume || raw.planned_quantity || raw.production_volume || '').trim();
  const market = String(raw.market || raw.country || raw.destination || raw.target_market || raw.target_markets || '').trim();
  const details = String(raw.details || raw.message || raw.notes || raw.project_notes || raw.full_brief_summary || '').trim();
  const sourceUrl = String(raw.sourceUrl || (typeof window !== 'undefined' ? window.location.href : '')).trim();

  const lines: string[] = ['*Custom Lip Inquiry — MLM Lip (500 pcs MOQ)*'];
  if (name) lines.push(`Name: ${name}`);
  if (company) lines.push(`Brand: ${company}`);
  if (email) lines.push(`Email: ${email}`);
  if (phone) lines.push(`WhatsApp/Phone: ${phone}`);
  if (product) lines.push(`Product: ${product}`);
  if (quantity) lines.push(`Quantity: ${quantity}`);
  if (market) lines.push(`Target Market: ${market}`);
  if (details) lines.push(`Details: ${details}`);
  lines.push('');
  lines.push(`Sent from ${sourceUrl || 'mlmlip.com'}`);

  return lines.join('\n');
}

/** Build standard wa.me URL targeting 8613652380291 */
export function createWhatsAppUrl(messageText: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
}

/**
 * POST a lead to the owned endpoint.
 */
export async function postInquiry(payload: Record<string, unknown>): Promise<InquiryResult> {
  try {
    const response = await fetch(INQUIRY_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        ...payload,
        sourceUrl: payload.sourceUrl ?? (typeof window !== 'undefined' ? window.location.href : ''),
      }),
      keepalive: true,
    });
    const data = await response.json().catch(() => ({} as { ok?: boolean; code?: string }));
    return {
      ok: response.ok && data.ok === true,
      code: data.code ?? (response.ok ? 'accepted' : 'http_error'),
      status: response.status,
    };
  } catch {
    // SendBeacon fallback if fetch fails
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      try {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(INQUIRY_ENDPOINT, blob);
      } catch {}
    }
    return { ok: false, code: 'network_error', status: 0 };
  }
}

/**
 * Core Dual-Track System (双通道零延迟系统)
 * Channel A: Background API submission (DingTalk + Feishu + Local Storage Backup) with keepalive/beacon
 * Channel B: Instant WhatsApp handoff with smart mobile/desktop detection & fallback UI
 */
export async function submitInquiryDualTrack(options: DualTrackOptions): Promise<{ waUrl: string }> {
  const {
    payload,
    submitButton,
    statusElement,
    customWaText,
    source,
    redirectingText = '✓ Redirecting to WhatsApp...',
    fallbackText = 'If WhatsApp does not open automatically,',
    onSuccess,
  } = options;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const fullPayload: Record<string, unknown> = {
    ...payload,
    source: payload.source || source || 'dual_track',
    sourceUrl: payload.sourceUrl || currentUrl,
  };

  // 1. Channel A: Asynchronous background submission (never blocks user flow)
  try {
    fetch(INQUIRY_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(fullPayload),
      keepalive: true,
    }).then((res) => {
      if (res.ok && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'generate_lead', {
          source: fullPayload.source,
          product: fullPayload.productType || fullPayload.product || fullPayload.product_item,
        });
      }
    }).catch((err) => {
      console.warn('[dual-track] background fetch warning, triggering sendBeacon fallback:', err);
      if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(fullPayload)], { type: 'application/json' });
        navigator.sendBeacon(INQUIRY_ENDPOINT, blob);
      }
    });
  } catch (err) {
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(fullPayload)], { type: 'application/json' });
      navigator.sendBeacon(INQUIRY_ENDPOINT, blob);
    }
  }

  // 2. Channel B: Prepare WhatsApp URL
  const waText = customWaText || formatWhatsAppMessage(fullPayload);
  const waUrl = createWhatsAppUrl(waText);

  // 3. Update UI states in place
  if (submitButton) {
    submitButton.textContent = redirectingText;
    (submitButton as HTMLButtonElement).disabled = true;
  }

  if (statusElement) {
    statusElement.style.display = 'block';
    statusElement.removeAttribute('hidden');
    statusElement.innerHTML = `
      <div style="margin-top:14px; padding:14px 18px; background:#f0fdf4; border-radius:8px; border-left:4px solid #16a34a; box-shadow:0 2px 8px rgba(0,0,0,0.04); text-align:center;">
        <p style="margin:0 0 6px 0; color:#15803d; font-weight:700; font-size:15px;">✓ Request Captured!</p>
        <p style="margin:0; color:#166534; font-size:13.5px; line-height:1.5;">
          ${fallbackText} <a href="${waUrl}" target="_blank" rel="noopener" style="color:#15803d; font-weight:700; text-decoration:underline;">Click here to chat directly via WhatsApp</a>
        </p>
      </div>
    `;
  }

  // 4. Device-aware intelligent navigation:
  // Mobile: window.location.href directly launches native WhatsApp app and avoids iOS Safari popup blockers.
  // Desktop: window.open opens WhatsApp Web / Desktop client in new tab.
  const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = waUrl;
  } else {
    const newWindow = window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // If popup blocker intervened on desktop, fallback to location.href
      window.location.href = waUrl;
    }
  }

  // Re-enable button after a short grace period so user can re-trigger if needed
  setTimeout(() => {
    if (submitButton) {
      (submitButton as HTMLButtonElement).disabled = false;
    }
  }, 4000);

  if (onSuccess) {
    try {
      onSuccess();
    } catch {}
  }

  return { waUrl };
}
