#!/usr/bin/env node
// IndexNow submission, run as a post-build step on Vercel production builds.
// Reads the freshly built sitemap, submits every URL in one batch to
// api.indexnow.org (which fans out to Bing, Yandex, Seznam, Naver), and logs
// the full list. Never fails the build: every error path exits 0.
//
// Key: INDEXNOW_KEY env var, else the key file committed in public/.
// The key file public/<key>.txt must contain the key as its only content.

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '..');
const HOST = 'fiftyandfive.com';
const DEFAULT_KEY = '77d2d0b10bf93789f1bb9717f7be8553';

const log = (...a) => console.log('[indexnow]', ...a);

async function main() {
  const key = (process.env.INDEXNOW_KEY || DEFAULT_KEY).trim();
  const keyFile = path.join(ROOT, 'public', `${key}.txt`);
  if (!fs.existsSync(keyFile)) {
    log(`key file public/${key}.txt is missing; skipping`);
    return;
  }

  const sitemapPath = path.join(ROOT, '.next/server/app/sitemap.xml.body');
  if (!fs.existsSync(sitemapPath)) {
    log('built sitemap not found at .next/server/app/sitemap.xml.body; skipping');
    return;
  }
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  // Pair each <loc> with the <lastmod> in the same <url> block.
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
    .map((m) => ({
      loc: ((m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1] || '').trim(),
      lastmod: ((m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1] || '').trim(),
    }))
    .filter((e) => e.loc.includes(HOST));

  log(`${entries.length} URLs in sitemap`);

  const isProd = process.env.VERCEL_ENV === 'production';
  if (!isProd && !process.env.INDEXNOW_FORCE) {
    log(`VERCEL_ENV=${process.env.VERCEL_ENV || '(unset)'}; not a production build, not submitting`);
    return;
  }

  // Submit only what actually changed recently. Now that sitemap lastmod is a
  // real content date rather than the build time, resubmitting all 109 URLs on
  // every deploy would be the same false freshness signal in a different
  // channel: deploys happen for reasons that have nothing to do with content.
  // INDEXNOW_ALL=1 forces a full resubmit, for a deliberate reindex push.
  const windowDays = Number(process.env.INDEXNOW_WINDOW_DAYS || 30);
  const submitAll = process.env.INDEXNOW_ALL === '1';
  const cutoff = Date.now() - windowDays * 86400000;
  const selected = submitAll
    ? entries
    : entries.filter((e) => {
        const t = Date.parse(e.lastmod);
        return Number.isNaN(t) ? true : t >= cutoff;
      });

  const urls = selected.map((e) => e.loc);
  log(
    submitAll
      ? `INDEXNOW_ALL=1, submitting all ${urls.length}`
      : `${urls.length} of ${entries.length} changed within ${windowDays} days`,
  );
  urls.forEach((u) => log('  ', u));

  if (urls.length === 0) {
    log('nothing changed recently, not submitting');
    return;
  }

  const body = {
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${key}.txt`,
    urlList: urls.slice(0, 10000),
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    log(`submitted ${body.urlList.length} URLs, response ${res.status} ${res.statusText}`);
  } catch (err) {
    log('submission failed:', err instanceof Error ? err.message : String(err));
  }
}

main().catch((err) => {
  log('unexpected error:', err instanceof Error ? err.message : String(err));
}).finally(() => process.exit(0));
