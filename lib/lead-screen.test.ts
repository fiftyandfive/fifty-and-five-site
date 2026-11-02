import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  screenSubmission,
  normalizeLeadSource,
  leadSourceLabel,
  LEAD_SOURCE_OPTIONS,
} from './lead-screen';

// Real prospect shapes from Sept and Oct 2026, paraphrased. None may be called a vendor.
const PROSPECTS = [
  {
    company: 'Union des Vignerons',
    message:
      'We are a union of 12 wine cooperatives. Our team is looking for a partner for 2027: social media, content, community management, Meta ads and influencers in the US and UK.',
  },
  {
    company: 'Mealz',
    message:
      "We're a restaurant tech company backed by Earl Enterprises. We need help with LinkedIn, social and ads to acquire restaurants. Our team is small.",
  },
  {
    company: 'Finger Lakes Wine Alliance',
    message: 'Would you speak at our December session on wine DTC and social? Our 37 member wineries would love it.',
  },
  {
    company: 'Classic T-Shirt Co',
    message: 'We are a premium US-made apparel company and want someone to own our organic social end to end.',
  },
  {
    company: 'TechnologyMatch',
    message: 'Looking for a fractional CMO. We run about $26K a month in Meta spend and manage a VA team in house.',
  },
  { company: '', message: '' },
];

const VENDORS = [
  {
    company: 'Virtual Ease',
    message: 'Hi, we provide dedicated virtual assistants for agencies at $8 per hour. Free trial for you.',
  },
  {
    company: 'BOL7',
    message: "We're a leading web development company. Our developers can rebuild your site. No obligation.",
  },
  {
    company: 'Leisure Lakes Bikes',
    message: 'Please send the email address you use so we can grant read-only access to our Google Ads account.',
  },
  {
    company: 'Seo Agency',
    message: 'We can rank your website on the first page of Google within 90 days.',
  },
  {
    company: 'Red Hive Digital',
    message: 'We offer white label social media fulfilment for agencies like yours.',
  },
  {
    company: 'CIO Times',
    message: 'We would like to feature your company in our upcoming issue. Partnership opportunity inside.',
  },
];

for (const p of PROSPECTS) {
  test(`prospect stays a lead: ${p.company || '(empty)'}`, () => {
    const r = screenSubmission(p);
    assert.equal(r.verdict, 'lead', `reasons: ${r.reasons.join(', ')}`);
    assert.deepEqual(r.reasons, []);
  });
}

for (const v of VENDORS) {
  test(`vendor pitch is flagged: ${v.company}`, () => {
    const r = screenSubmission(v);
    assert.equal(r.verdict, 'vendor');
    assert.ok(r.reasons.length > 0);
  });
}

test('one weak signal alone is not enough', () => {
  const r = screenSubmission({ message: 'Is there a partnership opportunity for our wine brand in the US?' });
  assert.equal(r.verdict, 'lead');
});

test('source normalization only accepts offered values', () => {
  for (const o of LEAD_SOURCE_OPTIONS) assert.equal(normalizeLeadSource(o.value), o.value);
  assert.equal(normalizeLeadSource(' Google '), 'google');
  assert.equal(normalizeLeadSource('tiktok'), null);
  assert.equal(normalizeLeadSource(undefined), null);
  assert.equal(normalizeLeadSource(42), null);
});

test('source labels', () => {
  assert.equal(leadSourceLabel('ai_assistant'), 'ChatGPT or another AI assistant');
  assert.equal(leadSourceLabel(null), 'Not given');
});
