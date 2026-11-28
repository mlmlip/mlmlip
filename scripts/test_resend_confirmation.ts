// site/scripts/test_resend_confirmation.ts
// Offline unit tests for P2-4 Resend buyer confirmation email & non-blocking pipeline.
// All external network calls (Resend, DingTalk, Feishu, Upstash) are mocked/disabled.
// Run: npx --prefix site tsx site/scripts/test_resend_confirmation.ts

import assert from 'node:assert/strict';
import {
  sendBuyerConfirmationEmail,
  processInquirySubmission,
  type Inquiry,
} from '../src/pages/api/inquiry';
import {
  INQUIRY_CONFIRM_FROM,
  inquiryConfirmationSubject,
} from '../src/lib/emailTemplates';

function makeLead(overrides: Partial<Inquiry> = {}): Inquiry {
  return {
    requestId: 'req-test-p2-4',
    name: 'Alice Chen',
    email: 'alice@indiebeauty.com',
    company: 'Indie Beauty Co.',
    whatsapp: '+1 555 0100',
    productType: 'Private Label Lip Balm',
    quantity: '200 pcs',
    country: 'United States',
    details: 'Interested in organic beeswax lip balm.',
    source: 'unit_test',
    sourceUrl: 'https://mlmlip.com/lip-balm-manufacturer/',
    ip: '127.0.0.1',
    ...overrides,
  };
}

async function runTests() {
  console.log('=== P2-4 RESEND CONFIRMATION EMAIL OFFLINE UNIT TESTS ===\n');

  const originalFetch = globalThis.fetch;
  const savedEnv = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    DINGTALK_WEBHOOK_URL: process.env.DINGTALK_WEBHOOK_URL,
    OPS_ALERT_WEBHOOK_URL: process.env.OPS_ALERT_WEBHOOK_URL,
    FEISHU_WEBHOOK_URL: process.env.FEISHU_WEBHOOK_URL,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  };

  // Ensure no real webhooks or Redis calls happen during offline tests
  delete process.env.DINGTALK_WEBHOOK_URL;
  delete process.env.OPS_ALERT_WEBHOOK_URL;
  delete process.env.FEISHU_WEBHOOK_URL;
  delete process.env.UPSTASH_REDIS_REST_URL;
  delete process.env.UPSTASH_REDIS_REST_TOKEN;

  try {
    // 1. Valid buyer inquiry with RESEND_API_KEY -> sends Resend POST & validates content
    process.env.RESEND_API_KEY = 're_test_mock_key';
    let resendCalls = 0;
    let capturedPayload: Record<string, unknown> | null = null;
    globalThis.fetch = (async (input, init) => {
      const url = String(input);
      if (url === 'https://api.resend.com/emails') {
        resendCalls++;
        capturedPayload = JSON.parse(String(init?.body || '{}'));
        return new Response(JSON.stringify({ id: 'email_mock_123' }), { status: 200 });
      }
      throw new Error(`Unexpected fetch to ${url}`);
    }) as typeof fetch;

    const okRes = await sendBuyerConfirmationEmail(makeLead(), { isSpam: false, isBot: false });
    assert.equal(okRes, 'ok', 'Valid buyer inquiry should return ok');
    assert.equal(resendCalls, 1, 'Resend API should be called once');
    assert.ok(capturedPayload, 'Payload should be captured');
    assert.equal(capturedPayload!['from'], INQUIRY_CONFIRM_FROM);
    assert.deepEqual(capturedPayload!['to'], ['alice@indiebeauty.com']);
    assert.equal(capturedPayload!['subject'], inquiryConfirmationSubject());

    const bodyText = String(capturedPayload!['text'] || '');
    for (const expected of [
      'Beautychain Limited',
      '12–24 hours',
      '100–200 pcs MOQ',
      '7-Day Rapid Sampling',
      'ISO 22716',
      'GMPC',
      'FDA MoCRA',
      '+86 136 5238 0291',
      'https://wa.me/8613652380291',
    ]) {
      assert.ok(bodyText.includes(expected), `Email text must include "${expected}"`);
    }
    console.log('✓ PASS 1: Valid inquiry sends B2B confirmation email with all required terms');

    // 2. Anti-spam & anti-bot guard: must skip Resend completely
    resendCalls = 0;
    const spamRes = await sendBuyerConfirmationEmail(makeLead(), { isSpam: true, isBot: false });
    assert.equal(spamRes, 'skipped', 'Spam inquiry must be skipped');
    const botRes = await sendBuyerConfirmationEmail(makeLead(), { isSpam: false, isBot: true });
    assert.equal(botRes, 'skipped', 'Bot inquiry must be skipped');
    assert.equal(resendCalls, 0, 'Resend API must NOT be called for spam or bot');
    console.log('✓ PASS 2: Anti-spam and anti-bot guards skip Resend');

    // 3. Invalid / missing email -> skipped
    const missingRes = await sendBuyerConfirmationEmail(makeLead({ email: '未填写' }));
    assert.equal(missingRes, 'skipped');
    const invalidRes = await sendBuyerConfirmationEmail(makeLead({ email: 'not-an-email' }));
    assert.equal(invalidRes, 'skipped');
    assert.equal(resendCalls, 0, 'Resend API must NOT be called for invalid emails');
    console.log('✓ PASS 3: Missing and invalid email addresses are skipped');

    // 4. Non-blocking isolation on Resend HTTP 500 & network error during full pipeline
    globalThis.fetch = (async (input) => {
      const url = String(input);
      if (url === 'https://api.resend.com/emails') {
        return new Response('Internal Server Error', { status: 500 });
      }
      throw new Error(`Unexpected fetch to ${url}`);
    }) as typeof fetch;

    const failStatus = await sendBuyerConfirmationEmail(makeLead());
    assert.equal(failStatus, 'failed', 'HTTP 500 must return failed without throwing');

    const pipelineRes500 = await processInquirySubmission(
      {
        name: 'Bob Buyer',
        email: 'bob@brand.co',
        product: 'Lip Balm',
        quantity: '150 pcs',
        details: 'Need custom vanilla balm',
      },
      '198.51.100.10',
      'unit_test'
    );
    assert.equal(pipelineRes500.status, 200, 'Pipeline must still return HTTP 200 when Resend fails');
    assert.equal(pipelineRes500.body.ok, true, 'Pipeline body.ok must remain true');
    assert.equal(pipelineRes500.delivery?.confirmEmail, 'failed');
    console.log('✓ PASS 4: Resend HTTP 500 fails cleanly and never blocks 200 ok pipeline');

    // 5. Full pipeline skips Resend for spam/bot submissions while keeping HTTP 200
    let pipelineResendCalls = 0;
    globalThis.fetch = (async (input) => {
      const url = String(input);
      if (url === 'https://api.resend.com/emails') {
        pipelineResendCalls++;
        return new Response(JSON.stringify({ id: 'should_not_happen' }), { status: 200 });
      }
      throw new Error(`Unexpected fetch to ${url}`);
    }) as typeof fetch;

    const botPipelineRes = await processInquirySubmission(
      {
        name: 'Bot',
        email: 'bot@spam.test',
        botcheck: 'filled',
        details: 'Hello',
      },
      '198.51.100.11',
      'unit_test'
    );
    assert.equal(botPipelineRes.status, 200);
    assert.equal(botPipelineRes.flags?.isBot, true);
    assert.equal(botPipelineRes.delivery?.confirmEmail, 'skipped');

    const spamPipelineRes = await processInquirySubmission(
      {
        name: 'SEO Agency',
        email: 'seo@outreach.test',
        details: 'Buy website traffic and backlink package for seo ranking!',
      },
      '198.51.100.12',
      'unit_test'
    );
    assert.equal(spamPipelineRes.status, 200);
    assert.equal(spamPipelineRes.flags?.isSpam, true);
    assert.equal(spamPipelineRes.delivery?.confirmEmail, 'skipped');
    assert.equal(pipelineResendCalls, 0, 'Pipeline must NOT invoke Resend for bot or spam');
    console.log('✓ PASS 5: End-to-end pipeline returns 200 ok and skips Resend for bot/spam');

    // 6. AbortController timeout protection (50ms test timeout)
    globalThis.fetch = ((_input: RequestInfo | URL, init?: RequestInit) =>
      new Promise<Response>((_resolve, reject) => {
        const signal = init?.signal;
        if (signal?.aborted) {
          const err = new Error('The operation was aborted');
          err.name = 'AbortError';
          reject(err);
          return;
        }
        signal?.addEventListener('abort', () => {
          const err = new Error('The operation was aborted');
          err.name = 'AbortError';
          reject(err);
        });
      })) as typeof fetch;

    const timeoutRes = await sendBuyerConfirmationEmail(makeLead(), {}, 50);
    assert.equal(timeoutRes, 'failed', 'Timed-out fetch must abort and return failed without throwing');
    console.log('✓ PASS 6: AbortController timeout aborts cleanly and returns failed');

    console.log('\n🎉 ALL P2-4 RESEND TESTS PASSED!');
  } finally {
    globalThis.fetch = originalFetch;
    for (const [k, v] of Object.entries(savedEnv)) {
      if (v === undefined) {
        delete process.env[k];
      } else {
        process.env[k] = v;
      }
    }
  }
}

runTests().catch((err) => {
  console.error('❌ TEST FAILED:', err);
  process.exit(1);
});
