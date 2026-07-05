#!/usr/bin/env node
// Content verification for fiftyandfive.com. Run after `npm run build`.
// Checks canonical numbers, title patterns, schema validity, and text
// rendering against the prerendered output in .next/server/app.

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '..');
const APP_OUT = path.join(ROOT, '.next/server/app');
let failures = 0;

function check(label, ok, detail = '') {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? ` — ${detail}` : ''}`);
  if (!ok) failures++;
}

function html(route) {
  const p = path.join(APP_OUT, route === '/' ? 'index.html' : `${route}.html`);
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
}

function textContent(markup) {
  return markup
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#x27;|&#39;/g, "'")
    .replace(/\s+/g, ' ');
}

function jsonLdBlocks(markup) {
  const blocks = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(markup)) !== null) {
    try { blocks.push(JSON.parse(m[1])); } catch { blocks.push({ __parseError: m[1].slice(0, 120) }); }
  }
  return blocks;
}

// ── 1. Credential greps ────────────────────────────────────────────────
const grep = (pattern, globs) => {
  try {
    return execSync(`grep -rniE '${pattern}' ${globs} 2>/dev/null || true`, { cwd: ROOT }).toString().trim();
  } catch { return ''; }
};

const hits215 = grep('215', 'app components lib/constants.ts lib/data/verticals.ts lib/data/caseStudies.ts')
  .split('\n').filter((l) => l && !l.includes('215-brands-social-media-strategy-that-works'));
check('no stray "215" in marketing copy (slug/redirect exempt)', hits215.length === 0, hits215.join(' | ').slice(0, 200));

check('no "redondo" anywhere', grep('redondo', 'app components lib public') === '');
check('no "15\\+ wine" / "since 2011"', grep('since 2011', 'app components lib') === '');

// ── 2. Vertical titles: exactly one brand suffix ──────────────────────
const verticalSlugs = fs.readdirSync(path.join(APP_OUT, 'verticals')).filter((f) => f.endsWith('.html'));
let badTitles = [];
for (const f of verticalSlugs) {
  const markup = fs.readFileSync(path.join(APP_OUT, 'verticals', f), 'utf8');
  const title = (markup.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const count = (title.match(/\| Fifty (&amp;|&) Five/g) || []).length;
  if (count !== 1) badTitles.push(`${f}: "${title}"`);
}
check(`all ${verticalSlugs.length} vertical titles have exactly one "| Fifty & Five"`, badTitles.length === 0, badTitles.join(' | '));

// ── 3. Services text render ───────────────────────────────────────────
const services = html('/services');
if (services) {
  const text = textContent(services);
  check('/services H1 renders "What We Do" with spaces', /What We Do/.test(text));
  check('/services has no "- ," glyph artifacts', !/- ,/.test(text));
} else check('/services prerendered output exists', false);

// ── 4. /fractional-cmo schema + metadata ──────────────────────────────
const fcmo = html('/fractional-cmo');
if (fcmo) {
  const blocks = jsonLdBlocks(fcmo);
  const parseErrors = blocks.filter((b) => b.__parseError);
  check('/fractional-cmo JSON-LD all parses', parseErrors.length === 0);
  const faqPages = blocks.filter((b) => b['@type'] === 'FAQPage' || (Array.isArray(b['@graph']) && b['@graph'].some((g) => g['@type'] === 'FAQPage')));
  check('/fractional-cmo has exactly one FAQPage block', faqPages.length === 1, `found ${faqPages.length}`);
  const hasService = blocks.some((b) => Array.isArray(b['@graph']) && b['@graph'].some((g) => g['@type'] === 'Service'));
  check('/fractional-cmo has Service schema', hasService);
  const h1s = (fcmo.match(/<h1[\s>]/g) || []).length;
  check('/fractional-cmo has exactly one H1', h1s === 1, `found ${h1s}`);
  const title = (fcmo.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const plainTitle = title.replace(/&amp;/g, '&');
  check(`/fractional-cmo title under 60 chars (${plainTitle.length})`, plainTitle.length > 0 && plainTitle.length < 60, plainTitle);
  check('/fractional-cmo has meta description', /<meta name="description" content="[^"]{20,}"/.test(fcmo));
  // FAQ answers match visible text
  const faq = faqPages[0];
  const entities = faq && faq.mainEntity ? faq.mainEntity : [];
  const text = textContent(fcmo);
  const mismatch = entities.filter((q) => !text.includes(q.acceptedAnswer.text.slice(0, 60)));
  check('/fractional-cmo FAQ schema answers match visible text', entities.length === 4 && mismatch.length === 0);
} else check('/fractional-cmo prerendered output exists', false);

// ── 5. One FAQPage max on every prerendered page ───────────────────────
let multiFaq = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith('.html')) {
      const blocks = jsonLdBlocks(fs.readFileSync(p, 'utf8'));
      const n = blocks.filter((b) => b['@type'] === 'FAQPage' || (Array.isArray(b['@graph']) && b['@graph'].some((g) => g['@type'] === 'FAQPage'))).length;
      if (n > 1) multiFaq.push(`${path.relative(APP_OUT, p)} (${n})`);
    }
  }
}
walk(APP_OUT);
check('no page has more than one FAQPage block', multiFaq.length === 0, multiFaq.join(' | '));

// ── 6. Case-study titles follow the hook pattern ───────────────────────
const workFiles = fs.readdirSync(path.join(APP_OUT, 'work')).filter((f) => f.endsWith('.html') && f !== 'index.html');
let badCs = [];
for (const f of workFiles) {
  const markup = fs.readFileSync(path.join(APP_OUT, 'work', f), 'utf8');
  const title = (markup.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  if (!/Social Media Case Study \|/.test(title)) badCs.push(`${f}: "${title}"`);
}
check(`all ${workFiles.length} case-study titles use the hook pattern`, badCs.length === 0, badCs.join(' | ').slice(0, 300));

// ── 7. Blog: no future dates, Marblism gone ────────────────────────────
const postsSrc = fs.readFileSync(path.join(ROOT, 'lib/data/blogPosts.ts'), 'utf8');
const dates = [...postsSrc.matchAll(/date: '(\d{4}-\d{2}-\d{2})'/g)].map((m) => m[1]);
const today = process.env.VERIFY_TODAY || new Date().toISOString().slice(0, 10);
const future = dates.filter((d) => d > today);
check(`no blog post dated after ${today}`, future.length === 0, future.join(', '));
check('Marblism posts removed from data', !/marblism/i.test(postsSrc));

// ── 8. Em dashes in new copy files ─────────────────────────────────────
const newFiles = [
  'app/fractional-cmo/page.tsx', 'app/audit/page.tsx',
  'components/ui/AuditForm.tsx', 'components/ui/NewsletterSignup.tsx',
  'app/api/audit-lead/route.ts', 'app/api/newsletter/route.ts', 'lib/rateLimit.ts',
];
const emDashHits = newFiles.filter((f) => fs.readFileSync(path.join(ROOT, f), 'utf8').includes('—'));
check('no em dashes in new copy files', emDashHits.length === 0, emDashHits.join(', '));

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`);
process.exit(failures === 0 ? 0 : 1);
