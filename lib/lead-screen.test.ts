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
  { company: 'Seo Agency', message: 'We can rank your website on the first page of Google within 90 days.' },
  { company: 'Red Hive Digital', message: 'We offer white label social media fulfilment for agencies like yours.' },
  { company: 'CIO Times', message: 'We would like to feature your company in our upcoming issue.' },
  // Misses found by the Nov 2 validator.
  { company: '', message: 'Hello, I came across your website and noticed some issues. We can improve your Google rankings. Reply for a free report.' },
  { company: '', message: 'Hi Lucas, we help agencies scale with our Philippine-based talent. Starting at $6/hr.' },
  { company: '', message: 'Want more clients? We book 15 qualified meetings per month for agencies. Pay per appointment.' },
  { company: '', message: 'Your website is loading slow. Our team can redesign it for $499.' },
  { company: '', message: 'We are a digital marketing agency offering SEO, PPC and SMM services at affordable prices.' },
  { company: '', message: 'I am a freelance video editor, here is my portfolio. Let me know if you need help.' },
];

// Prospect messages the first version wrongly flagged (Nov 2 validator). Every one must stay a lead.
const VALIDATOR_PROSPECTS = [
  ['Napa Family Wines', 'We outsource our social media today and want to bring on an agency instead. Our current freelancer is leaving.'],
  ['Dry Creek', 'We currently outsource content to a freelancer. Looking for a long term partner.'],
  ['Lake Nona Inn', 'Boutique hotel. We have a virtual assistant who posts for us but need real strategy.'],
  ['Acme SaaS', "We're a software company in Orlando looking for help with LinkedIn and paid social. Budget around $5K/month."],
  ['Pixel Studio', "I'm a web design studio owner. We are a design studio and need help marketing ourselves on Instagram."],
  ['Orlando Food Bank', 'Nonprofit. Can you give us a quote? We would need you to rank our website higher in Google and help with social.'],
  ['Smith Law', 'Law firm. We want to get on the first page of Google for personal injury and grow Instagram.'],
  ['Smith Law', 'We need someone to manage our ads. We can grant you access to our Google Ads and Meta accounts.'],
  ['Taco Group', 'Restaurant group with 6 locations. Our previous agency did link building and backlinks but social is dead.'],
  ['Taco Group', 'We need social content for our white label sauce line.'],
  ['Resort', 'We want to feature your company in our vendor directory, and also hire you for social.'],
  ['Staffing Inc', "We're a staffing company (we place nurses) and need social and LinkedIn help. Our VAs handle scheduling."],
  ['IT Firm', "I'm an IT company owner in Tampa, we need SEO and social. What is your hourly rate?"],
  ['Shopify Brand', 'We have a Shopify store and our Shopify experts built it; now need social. Collaboration opportunity with influencers too.'],
  ['Brand', 'What is your rate per hour? Is there a partnership opportunity for a long term retainer?'],
  ['Blaze franchisee', 'Our franchise outsourced social to corporate; we want local content.'],
  ['Offshore Fishing Charters', 'Charter boat company in Destin, need reels and IG growth.'],
  ['Virtual Team Co', 'We run virtual team building events and need a social agency.'],
  ['Lifestyle', 'We sell white-label skincare under our own brand and need IG content.'],
].map(([company, message]) => ({ company, message }));


for (const p of [...PROSPECTS, ...VALIDATOR_PROSPECTS]) {
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

test('company and name are not screened', () => {
  const r = screenSubmission({ name: 'Outsource Logistics', company: 'Virtual Team Co', message: 'Need social media help.' });
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
