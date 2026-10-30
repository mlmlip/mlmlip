// site/scripts/test_zero_drop_and_dual_track.ts
// Comprehensive validation script for Zero Drop and Dual Track System.

import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {
  processInquirySubmission,
  messageText,
  buildInquiry,
  isObviousSpam,
  HONEYPOT_FIELDS,
} from '../src/pages/api/inquiry';
import {
  formatWhatsAppMessage,
  createWhatsAppUrl,
  WHATSAPP_NUMBER,
  WHATSAPP_FALLBACK_URL,
} from '../src/lib/inquiryClient';

async function runTests() {
  console.log('=== RUNNING ZERO DROP & DUAL TRACK SYSTEM VERIFICATION ===\n');

  // Test 1: website field is completely removed from honeypot & NOT blocked
  console.log('Test 1: Verify website field is NOT in HONEYPOT_FIELDS and does NOT return 400...');
  assert.ok(!HONEYPOT_FIELDS.includes('website'), 'HONEYPOT_FIELDS must not contain website');
  assert.deepEqual(HONEYPOT_FIELDS, ['botcheck'], 'HONEYPOT_FIELDS must only contain botcheck');

  const websitePayload = {
    name: 'Alice Founder',
    email: 'alice@indiegloss.com',
    company: 'Indie Gloss Co',
    website: 'https://indiegloss.com',
    product: 'Lip Oil',
    quantity: '500 pcs',
    details: 'Looking for peptide hydrating lip oil with custom glass vial.',
  };
  const res1 = await processInquirySubmission(websitePayload, '192.168.1.101', 'test_website');
  assert.equal(res1.status, 200, `Expected status 200, got ${res1.status}`);
  assert.equal(res1.body.ok, true, 'Expected ok: true');
  assert.ok(res1.lead?.details.includes('Company Website: https://indiegloss.com'), 'Website should be preserved in details');
  console.log('✓ PASS: website field accepted with HTTP 200 and preserved in details\n');

  // Test 2: Honeypot botcheck filled => flagged as bot, but NOT dropped, returns 200
  console.log('Test 2: Verify botcheck field trips bot flag but is NEVER dropped (Zero Drop)...');
  const botPayload = {
    name: 'Robo Buyer',
    email: 'bot@example.com',
    botcheck: 'automated_agent_fill',
    details: 'Automated inquiry test',
  };
  const res2 = await processInquirySubmission(botPayload, '192.168.1.102', 'test_bot');
  assert.equal(res2.status, 200, `Expected status 200, got ${res2.status}`);
  assert.equal(res2.body.ok, true, 'Expected ok: true');
  assert.equal(res2.flags?.isBot, true, 'isBot flag must be true');
  const msg2 = messageText(res2.lead!, res2.flags);
  assert.ok(msg2.includes('⚠️[疑似机器人]'), 'DingTalk message must contain ⚠️[疑似机器人] tag');
  console.log('✓ PASS: Botcheck trips flag, returns 200, tagged with ⚠️[疑似机器人]\n');

  // Test 3: Obvious Spam keywords => flagged as spam, but NOT dropped, returns 200
  console.log('Test 3: Verify obvious spam keywords are NEVER dropped (Zero Drop)...');
  const spamPayload = {
    name: 'Spam Marketer',
    email: 'promo@outreach.biz',
    company: 'SEO Guru',
    details: 'Buy website traffic and get top seo ranking with backlink package today!',
  };
  const res3 = await processInquirySubmission(spamPayload, '192.168.1.103', 'test_spam');
  assert.equal(res3.status, 200, `Expected status 200, got ${res3.status}`);
  assert.equal(res3.body.ok, true, 'Expected ok: true');
  assert.equal(res3.flags?.isSpam, true, 'isSpam flag must be true');
  const msg3 = messageText(res3.lead!, res3.flags);
  assert.ok(msg3.includes('⚠️[疑似推广/请甄别]'), 'DingTalk message must contain ⚠️[疑似推广/请甄别] tag');
  console.log('✓ PASS: Spam keyword inquiry accepted with HTTP 200, tagged with ⚠️[疑似推广/请甄别]\n');

  // Test 4: Rate limit frequency test => does NOT return 429, continues processing with 200
  console.log('Test 4: Verify high-frequency submissions are NOT rejected with 429...');
  const burstIp = '10.0.0.99';
  let lastRes;
  for (let i = 0; i < 7; i++) {
    lastRes = await processInquirySubmission(
      { name: `Frequent User ${i}`, email: `freq${i}@domain.com`, details: 'Burst inquiry' },
      burstIp,
      'test_burst'
    );
    assert.equal(lastRes.status, 200, `Request ${i} should return 200, got ${lastRes.status}`);
  }
  assert.equal(lastRes!.flags?.isRateLimited, true, 'Subsequent request should be flagged as isRateLimited');
  const msg4 = messageText(lastRes!.lead!, lastRes!.flags);
  assert.ok(msg4.includes('⚠️[高频提交]'), 'DingTalk message must contain ⚠️[高频提交] tag');
  console.log('✓ PASS: Burst requests remain HTTP 200, tagged with ⚠️[高频提交]\n');

  // Test 5: Relaxed field validation
  console.log('Test 5: Verify relaxed field validation (WhatsApp only, or details only)...');
  const waOnly = buildInquiry({ whatsapp: '+1234567890', message: 'Interested in lip mud 500 pcs' }, '1.1.1.1');
  assert.ok(!('error' in waOnly), 'WhatsApp + message should be valid lead');
  assert.equal(waOnly.whatsapp, '+1234567890');
  assert.equal(waOnly.email, '未填写');

  const emailOnly = buildInquiry({ email: 'ceo@startup.io', message: 'Send me lip gloss catalog' }, '1.1.1.1');
  assert.ok(!('error' in emailOnly), 'Email + message should be valid lead');
  assert.equal(emailOnly.name, 'ceo');

  console.log('✓ PASS: Relaxed validation successfully captures leads without rigid format requirements\n');

  // Test 6: WhatsApp Message Formatting & Target Number
  console.log('Test 6: Verify WhatsApp message formatting and target number...');
  assert.equal(WHATSAPP_NUMBER, '8613652380291', 'Target number must be 8613652380291');
  assert.equal(WHATSAPP_FALLBACK_URL, 'https://wa.me/8613652380291', 'Fallback URL must match 8613652380291');

  const testBrief = {
    name: 'Sarah Connor',
    company: 'Cyberpunk Cosmetics',
    email: 'sarah@skynetbeauty.com',
    whatsapp: '+1 555 0199',
    product: 'Velvet Lip Mud',
    quantity: '500 pcs',
    market: 'United States',
    details: 'Need transfer-proof matte velvet formula in 3 custom nude shades.',
    sourceUrl: 'https://mlmlip.com/quote',
  };
  const waMsg = formatWhatsAppMessage(testBrief);
  assert.ok(waMsg.includes('Sarah Connor'), 'Message must contain contact name');
  assert.ok(waMsg.includes('Cyberpunk Cosmetics'), 'Message must contain company');
  assert.ok(waMsg.includes('Velvet Lip Mud'), 'Message must contain product');
  assert.ok(waMsg.includes('500 pcs'), 'Message must contain quantity');
  assert.ok(waMsg.includes('United States'), 'Message must contain target market');
  assert.ok(waMsg.includes('https://mlmlip.com/quote'), 'Message must contain sourceUrl');

  const waUrl = createWhatsAppUrl(waMsg);
  assert.ok(waUrl.startsWith('https://wa.me/8613652380291?text='), 'WhatsApp URL must target 8613652380291');
  assert.ok(waUrl.includes(encodeURIComponent('Sarah Connor')), 'Encoded URL must contain contact name');
  console.log('✓ PASS: WhatsApp message format & URL generation verified for 8613652380291\n');

  // Test 7: Verify local persistent backup file
  console.log('Test 7: Verify /tmp/mlmlip_inquiries_backup.jsonl has captured the leads...');
  const backupContent = await fs.readFile('/tmp/mlmlip_inquiries_backup.jsonl', 'utf-8');
  assert.ok(backupContent.length > 0, 'Backup file must contain data');
  assert.ok(backupContent.includes('alice@indiegloss.com'), 'Backup must contain Alice lead');
  assert.ok(backupContent.includes('promo@outreach.biz'), 'Backup must contain spam lead');
  assert.ok(backupContent.includes('bot@example.com'), 'Backup must contain bot lead');
  console.log('✓ PASS: All leads 100% persisted to /tmp/mlmlip_inquiries_backup.jsonl\n');

  console.log('🎉 ALL TESTS PASSED SUCCESSFULLY! Zero Drop & Dual Track System 100% Verified.');
}

runTests().catch((err) => {
  console.error('❌ TEST FAILED:', err);
  process.exit(1);
});
