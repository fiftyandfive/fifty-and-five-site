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
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].trim())
    .filter((u) => u.includes(HOST));

  log(`${urls.length} URLs in sitemap`);
  urls.forEach((u) => log('  ', u));

  const isProd = process.env.VERCEL_ENV === 'production';
  if (!isProd && !process.env.INDEXNOW_FORCE) {
    log(`VERCEL_ENV=${process.env.VERCEL_ENV || '(unset)'}; not a production build, not submitting`);
    return;
  }
  if (urls.length === 0) {
    log('no URLs to submit');
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
