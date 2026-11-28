// site/src/lib/emailTemplates.ts
// P2-5 询盘确认邮件模板（对外发信文案, 需老板过目）。
// 纯模板层: 不含发送逻辑, 无网络依赖。激活前文案可在此调整, 不动 inquiry.ts。
// 发信条件: 仅当环境变量 RESEND_API_KEY 存在时, inquiry.ts 旁路分支才会调用。

export interface InquiryEmailContext {
  requestId: string;
  name: string;
  company: string;
  productType: string;
  quantity: string;
}

export const INQUIRY_CONFIRM_FROM = 'MLM Lip <noreply@mlmlip.com>'; // mlmlip.com 已在 Resend 验证通过 (2026-11-22)
export const INQUIRY_REPLY_TO = 'nancy@mlmlip.com';

const PLACEHOLDER_VALUES = new Set(['', '未填写', '待确认', 'N/A']);

function isProvided(value: string): boolean {
  return !PLACEHOLDER_VALUES.has(value.trim());
}

/** B2B 专业风英文确认邮件 (纯文本, 送达率优先, 不依赖 HTML 渲染)。 */
export function inquiryConfirmationText(ctx: InquiryEmailContext): string {
  const greeting = ctx.name ? `Dear ${ctx.name},` : 'Hello,';
  const companyPhrase = isProvided(ctx.company) ? ` on behalf of ${ctx.company}` : '';

  const interestLine = [
    isProvided(ctx.productType) ? `- Product interest: ${ctx.productType}` : '',
    isProvided(ctx.quantity) ? `- Estimated quantity: ${ctx.quantity}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const interestBlock = interestLine ? `\n${interestLine}\n` : '\n';

  return `${greeting}

Thank you for contacting MLM Lip (Beautychain Limited). This confirms that we have received your inquiry${companyPhrase}.

Reference number: ${ctx.requestId}
${interestBlock}
A dedicated account manager will follow up with you within 12–24 hours (business days) with tailored pricing, packaging options, and lead times.

Why beauty brands partner with MLM Lip (Beautychain Limited):
- Flexible Low MOQ: 100–200 pcs MOQ for standard stock packaging (500 pcs MOQ for custom mold tooling)
- 7-Day Rapid Sampling: Fast lab bench prototypes so you can validate texture, shade, and finish early
- Full Compliance: ISO 22716 & GMPC certified cleanrooms with US FDA MoCRA & EU CPNP documentation support

Need an immediate quote or faster response?
Chat with us directly on WhatsApp: +86 136 5238 0291
https://wa.me/8613652380291

Best regards,
Nancy — Dedicated Account Manager
MLM Lip (Beautychain Limited)
WhatsApp: +86 136 5238 0291 | https://wa.me/8613652380291
https://mlmlip.com
`;
}

/** 主题行。 */
export function inquiryConfirmationSubject(): string {
  return 'We have received your inquiry — MLM Lip';
}

/** 调试/预览用: 打印完整邮件内容 (不发送)。 */
export function previewInquiryConfirmation(ctx: InquiryEmailContext): string {
  return `To: (buyer email)\nFrom: ${INQUIRY_CONFIRM_FROM}\nReply-To: ${INQUIRY_REPLY_TO}\nSubject: ${inquiryConfirmationSubject()}\n\n${inquiryConfirmationText(ctx)}`;
}
