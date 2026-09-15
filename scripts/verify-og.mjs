#!/usr/bin/env node
// Smoke test for every Open Graph image route. Run after `npm run build`.
//
// These routes render through Satori, which fails at request time rather than
// build time: a div with more than one child and no explicit `display` throws
// "Expected <div> to have explicit display: flex or display: none". The build
// stays green and every social preview on the site silently breaks, which is
// exactly what had happened to the root and case-study images before
// 2026-09-15. Only fetching them catches it.
//
// Boots `next start` on a spare port, fetches each route, and asserts a 200
// PNG of a plausible size. Exits non-zero on any failure.

import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '..');
const PORT = Number(process.env.OG_VERIFY_PORT || 3199);
const MIN_BYTES = 5000;

function slugs(file) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  return [...src.matchAll(/^ {4}slug: '([^']+)'/gm)].map((m) => m[1]);
}

const routes = [
  '/opengraph-image',
  ...slugs('lib/data/caseStudies.ts').map((s) => `/work/${s}/opengraph-image`),
  ...slugs('lib/data/verticals.ts').map((s) => `/verticals/${s}/opengraph-image`),
];

const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
  cwd: ROOT,
  stdio: ['ignore', 'pipe', 'pipe'],
});
let serverLog = '';
server.stdout.on('data', (d) => { serverLog += d; });
server.stderr.on('data', (d) => { serverLog += d; });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/`);
      if (res.ok) return true;
    } catch {}
    await sleep(1000);
  }
  return false;
}

let failures = 0;

try {
  if (!(await waitForServer())) {
    console.error('FAIL  server did not start on port', PORT);
    process.exitCode = 1;
  } else {
    for (const r of routes) {
      let line;
      try {
        const res = await fetch(`http://127.0.0.1:${PORT}${r}`);
        const buf = Buffer.from(await res.arrayBuffer());
        const isPng = buf.length > 8 && buf[0] === 0x89 && buf.toString('latin1', 1, 4) === 'PNG';
        const ok = res.status === 200 && isPng && buf.length >= MIN_BYTES;
        if (!ok) failures++;
        line = `${ok ? 'PASS' : 'FAIL'}  ${r} — ${res.status}, ${buf.length}B${isPng ? ', png' : ', NOT PNG'}`;
      } catch (err) {
        failures++;
        line = `FAIL  ${r} — ${err instanceof Error ? err.message : String(err)}`;
      }
      console.log(line);
    }
    if (/Expected <div> to have explicit/.test(serverLog)) {
      console.log('\nSatori layout error in server log:');
      console.log(
        serverLog.split('\n').filter((l) => /Expected <div>/.test(l)).slice(0, 3).join('\n'),
      );
    }
    console.log(
      failures === 0
        ? `\nAll ${routes.length} OG image routes render.`
        : `\n${failures} of ${routes.length} OG image routes FAILED.`,
    );
    process.exitCode = failures === 0 ? 0 : 1;
  }
} finally {
  server.kill('SIGTERM');
}
