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
  // The FAQ block grows as queries are absorbed into the hub; the guard is that
  // it never empties and that every schema answer is present as visible text.
  check(`/fractional-cmo FAQ schema answers match visible text (${entities.length} Q&A)`, entities.length >= 5 && mismatch.length === 0);
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
// Case-study titles carry "Case Study" and a hook, and must fit the SERP.
// Length is the point: these ran 63 to 88 characters before 2026-09-10.
let badCs = [];
for (const f of workFiles) {
  const markup = fs.readFileSync(path.join(APP_OUT, 'work', f), 'utf8');
  const title = ((markup.match(/<title>([^<]*)<\/title>/) || [])[1] || '')
    .replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'");
  if (!/Case Study/.test(title)) badCs.push(`${f}: no "Case Study": "${title}"`);
  else if (title.length < 30 || title.length > 60) badCs.push(`${f}: ${title.length} chars: "${title}"`);
}
check(`all ${workFiles.length} case-study titles carry "Case Study" and fit 30-60 chars`, badCs.length === 0, badCs.join(' | ').slice(0, 300));

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

// ── 9. Sitemap lastmod dates are not stale ─────────────────────────────
// lastmod is only useful to a crawler while it stays accurate. These dates
// are hand-maintained in lib/sitemap-dates.ts, so verify none of them is
// older than the last commit touching the files that produce that route.
// Skips itself when git history is unavailable (shallow clone): being unable
// to prove a date is not the same as the date being wrong.
{
  // A file with uncommitted edits counts as changed today. Reading commit dates
  // alone let a stale date through until the next commit, one step too late.
  const today = new Date().toISOString().slice(0, 10);
  const gitDate = (file) => {
    try {
      const dirty = execSync(`git status --porcelain -- '${file}' 2>/dev/null`, { cwd: ROOT }).toString().trim();
      if (dirty) return today;
      return execSync(`git log -1 --format=%cs -- '${file}' 2>/dev/null`, { cwd: ROOT }).toString().trim();
    } catch { return ''; }
  };
  const hasGit = (() => {
    try { return execSync('git rev-parse --is-inside-work-tree 2>/dev/null', { cwd: ROOT }).toString().trim() === 'true'; }
    catch { return false; }
  })();

  if (!hasGit || !gitDate('package.json')) {
    console.log('SKIP  sitemap lastmod freshness — git history unavailable');
  } else {
    const src = fs.readFileSync(path.join(ROOT, 'lib/sitemap-dates.ts'), 'utf8');
    const literal = (name) => (src.match(new RegExp(`export const ${name} = '([\\d-]+)'`)) || [])[1] || '';
    const arrayOf = (name) => {
      const raw = (src.match(new RegExp(`export const ${name} = \\[([^\\]]*)\\]`)) || [])[1] || '';
      return [...raw.matchAll(/'([^']+)'/g)].map((m) => m[1]);
    };
    const depsBlock = (src.match(/export const ROUTE_DEPS[^=]*= \{([\s\S]*?)\n\};/) || [])[1] || '';
    const pagesBlock = (src.match(/export const PAGE_UPDATED[^=]*= \{([\s\S]*?)\n\};/) || [])[1] || '';
    const pageDates = Object.fromEntries(
      [...pagesBlock.matchAll(/'([^']+)':\s*'([\d-]+)'/g)].map((m) => [m[1], m[2]]),
    );

    const stale = [];
    for (const m of depsBlock.matchAll(/'([^']+)':\s*\[([^\]]*)\]/g)) {
      const route = m[1];
      const files = [...m[2].matchAll(/'([^']+)'/g)].map((f) => f[1]);
      const newest = files.map(gitDate).filter(Boolean).sort().pop();
      const recorded = pageDates[route];
      if (newest && recorded && newest > recorded) {
        stale.push(`${route}: recorded ${recorded}, sources changed ${newest}`);
      }
    }
    for (const [depsName, dateName, label] of [
      ['CASE_STUDY_DEPS', 'CASE_STUDY_UPDATED', 'case studies'],
      ['VERTICAL_DEPS', 'VERTICAL_UPDATED', 'verticals'],
    ]) {
      const newest = arrayOf(depsName).map(gitDate).filter(Boolean).sort().pop();
      const recorded = literal(dateName);
      if (newest && recorded && newest > recorded) {
        stale.push(`${label}: recorded ${recorded}, sources changed ${newest}`);
      }
    }
    check(
      'sitemap lastmod dates are not older than their source files',
      stale.length === 0,
      stale.join(' | '),
    );
  }
}

// ── 10. SMS consent copy matches the approved compliance file ─────────
{
  const md = fs.readFileSync(path.join(ROOT, 'fiftyandfive-sms-compliance.md'), 'utf8');
  const lib = fs.readFileSync(path.join(ROOT, 'lib/sms-consent.ts'), 'utf8');
  const constants = ['SMS_CONSENT_LABEL', 'SMS_PHONE_LABEL', 'SMS_PHONE_HELPER', 'SMS_PHONE_REQUIRED_ERROR'];
  const drift = constants.filter((name) => {
    // \s* spans the line break when the value sits on the next line.
    const m = lib.match(new RegExp(`${name}\\s*=\\s*'([^']*)'`));
    return !m || !md.includes(m[1]);
  });
  check('SMS consent copy in lib/sms-consent.ts matches fiftyandfive-sms-compliance.md verbatim', drift.length === 0, drift.join(', '));
  for (const route of ['/privacy', '/terms']) {
    const out = html(route);
    check(`${route} prerendered with policy text`, !!out && /Effective September/.test(out) && /hello@fiftyandfive\.com/.test(out));
  }
}

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`);
process.exit(failures === 0 ? 0 : 1);
