/**
 * Prebuild script — fetches real brand logos at build time.
 * Uses Clearbit Logo API (full logos) with Google Favicon as fallback.
 * Runs via: node scripts/fetch-logos.mjs && next build
 * Skips any brand that already has a local file in /public/logos/.
 */

import { writeFile, mkdir, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOGOS_DIR = join(__dirname, '..', 'public', 'logos');

const BRANDS = [
  { name: 'Microsoft', file: 'microsoft.png', domain: 'microsoft.com' },
  { name: 'SAP', file: 'sap.png', domain: 'sap.com' },
  { name: 'Kendall-Jackson', file: 'kendall-jackson.png', domain: 'kj.com' },
  { name: 'Enterprise', file: 'enterprise.png', domain: 'enterprise.com' },
  { name: 'National Car Rental', file: 'national.png', domain: 'nationalcar.com' },
  { name: 'Alamo', file: 'alamo.png', domain: 'alamo.com' },
  { name: 'Blaze Pizza', file: 'blaze-pizza.png', domain: 'blazepizza.com' },
  { name: 'Discovery Channel', file: 'discovery.png', domain: 'discovery.com' },
  { name: 'American Airlines Center', file: 'american-airlines-center.png', domain: 'americanairlinescenter.com' },
  { name: 'Toys R Us', file: 'toys-r-us.png', domain: 'toysrus.com' },
  { name: 'Resorts World', file: 'resorts-world.png', domain: 'rwsentosa.com' },
  { name: 'Unilever', file: 'unilever.png', domain: 'unilever.com' },
  { name: 'NETGEAR', file: 'netgear.png', domain: 'netgear.com' },
  { name: 'Linksys', file: 'linksys.png', domain: 'linksys.com' },
  { name: 'Tupperware', file: 'tupperware.png', domain: 'tupperware.com' },
  { name: 'Warner Bros.', file: 'warner-bros.png', domain: 'warnerbros.com' },
  { name: 'Penfolds', file: 'penfolds.png', domain: 'penfolds.com' },
  { name: 'Molina Healthcare', file: 'molina.png', domain: 'molinahealthcare.com' },
  { name: 'The Irvine Company', file: 'irvine-company.png', domain: 'irvinecompany.com' },
  { name: 'AutoNation', file: 'autonation.png', domain: 'autonation.com' },
  { name: 'Bain & Company', file: 'bain.png', domain: 'bain.com' },
  { name: "Wolfgang's Steakhouse", file: 'wolfgangs.png', domain: 'wolfgangssteakhouse.net' },
];

/** Clearbit Logo API — returns full company logos */
function clearbitUrl(domain, size = 256) {
  return `https://logo.clearbit.com/${domain}?size=${size}`;
}

/** Google Favicon API — fallback for brands Clearbit misses */
function faviconUrl(domain, size = 128) {
  return `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=${size}`;
}

async function fileExists(path) {
  try { await access(path); return true; } catch { return false; }
}

async function fetchLogo(brand) {
  const outPath = join(LOGOS_DIR, brand.file);

  if (await fileExists(outPath)) {
    console.log(`  \u2713 ${brand.name} \u2014 already exists, skipping`);
    return true;
  }

  // Try Clearbit first (better logos), then Google Favicon
  const sources = [
    { name: 'Clearbit', url: clearbitUrl(brand.domain) },
    { name: 'Favicon', url: faviconUrl(brand.domain) },
  ];

  for (const src of sources) {
    try {
      const res = await fetch(src.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 100) throw new Error('Response too small');
      await writeFile(outPath, buf);
      console.log(`  \u2713 ${brand.name} \u2014 ${(buf.length / 1024).toFixed(1)}KB via ${src.name}`);
      return true;
    } catch {
      // Try next source
    }
  }

  console.warn(`  \u2717 ${brand.name} \u2014 all sources failed`);
  return false;
}

async function main() {
  console.log('Fetching brand logos...\n');
  await mkdir(LOGOS_DIR, { recursive: true });

  const results = await Promise.allSettled(BRANDS.map(fetchLogo));
  const ok = results.filter((r) => r.status === 'fulfilled' && r.value).length;
  console.log(`\nDone: ${ok}/${BRANDS.length} logos ready.`);
}

main();
