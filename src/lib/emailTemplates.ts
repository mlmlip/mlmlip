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
export const INQUIRY_REPLY_TO = ''; // 预留: 老板给 nancy 邮箱后填这里

/** B2B 专业风英文确认邮件 (纯文本, 送达率优先, 不依赖 HTML 渲染)。 */
export function inquiryConfirmationText(ctx: InquiryEmailContext): string {
  const greeting = ctx.name ? `Dear ${ctx.name},` : 'Hello,';

  const interestLine = [
    ctx.productType && ctx.productType !== '未填写' ? `Product interest: ${ctx.productType}` : '',
    ctx.quantity && ctx.quantity !== '待确认' ? `Estimated quantity: ${ctx.quantity}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const interestBlock = interestLine
    ? `\n${interestLine}\n`
    : '\n';

  return `${greeting}

Thank you for reaching out to MLM Lip. This is an automated confirmation that we have received your inquiry${ctx.company ? ` on behalf of ${ctx.company}` : ''}.

Your reference number: ${ctx.requestId}
${interestBlock}
Our team replies within 24 hours (business days, China time). For urgent orders, you are also welcome to reply directly to this email.

What happens next:
1. Our product specialist reviews your requirements
2. You receive a tailored quotation with MOQ and lead times
3. Sampling can be arranged within 7 days of confirmation

Thank you for considering MLM Lip as your lip cosmetics manufacturing partner.

Best regards,
Nancy — MLM Lip (Beautychain Limited)
`;
}

/** 主题行。 */
export function inquiryConfirmationSubject(): string {
  return 'We have received your inquiry — MLM Lip';
}

/** 调试/预览用: 打印完整邮件内容 (不发送)。 */
export function previewInquiryConfirmation(ctx: InquiryEmailContext): string {
  return `To: (buyer email)\nFrom: ${INQUIRY_CONFIRM_FROM}\nSubject: ${inquiryConfirmationSubject()}\n\n${inquiryConfirmationText(ctx)}`;
}
