'use client';

import Link from 'next/link';
import { BrandColorHero } from '@/components/ui/BrandColorHero';
import { CASE_STUDIES } from '@/lib/data/caseStudies';

const CAROUSEL_ORDER = [
  'blaze-pizza',
  'mezzacorona',
  'kendall-jackson',
  'enterprise-holdings',
  'resorts-world',
  'netgear-arlo',
  'tupperware',
  'microsoft',
  'polynesian-cultural-center',
  'selectquote-insurance',
  'centennial-real-estate',
  'axe-unilever',
];

const LABELS: Record<string, { eyebrow: string; body: string }> = {
  'blaze-pizza': {
    eyebrow: 'RESTAURANT · 14-YEAR PROGRAM',
    body: "Built and ran the national social media program through Blaze's rise to one of the fastest-growing restaurant chains in U.S. history.",
  },
  'mezzacorona': {
    eyebrow: 'WINE & SPIRITS · DECADE-LONG PARTNERSHIP',
    body: 'Italian wine portfolio. ~1M followers added across portfolio over a decade-long partnership.',
  },
  'kendall-jackson': {
    eyebrow: 'WINE & SPIRITS · MULTI-YEAR PARTNERSHIP',
    body: 'Multi-year social partnership across the Kendall-Jackson portfolio.',
  },
  'enterprise-holdings': {
    eyebrow: 'AUTOMOTIVE · 6 BRANDS, 2 MARKETS',
    body: 'Enterprise, National, Alamo across US + LATAM.',
  },
  'resorts-world': {
    eyebrow: 'HOSPITALITY · MULTI-PROPERTY',
    body: 'Bimini, Bahamas + Catskills, NY.',
  },
  'netgear-arlo': {
    eyebrow: 'TECH · LAUNCH PARTNER',
    body: "Social layer through Arlo's launch as a NETGEAR product line; Arlo is now publicly traded.",
  },
  'tupperware': {
    eyebrow: 'RETAIL · GLOBAL BRAND',
    body: 'Global social media management for an iconic consumer brand.',
  },
  'microsoft': {
    eyebrow: 'TECH · GLOBAL INITIATIVE',
    body: 'Microsoft Partners in Learning global initiative.',
  },
  'polynesian-cultural-center': {
    eyebrow: "HOSPITALITY · HAWAII'S #1 PAID ATTRACTION",
    body: 'Outcome: 7.8M impressions.',
  },
  'selectquote-insurance': {
    eyebrow: 'FINANCE · MULTI-YEAR',
    body: 'Multi-year social media partnership for insurance services.',
  },
  'centennial-real-estate': {
    eyebrow: 'REAL ESTATE · 9 PROPERTIES',
    body: 'Social media across a portfolio of 9 properties.',
  },
  'axe-unilever': {
    eyebrow: 'RETAIL & CPG · 2010 CAMPAIGN',
    body: 'Axe / Unilever product launch campaign.',
  },
};

export function WorkCarousel() {
  const studies = CAROUSEL_ORDER
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter(Boolean);

  return (
    <section className="bg-ff-bg py-24 md:py-32">
      <div className="container-edge">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <div className="font-receipt text-[12px] uppercase tracking-[0.15em] text-ff-stamp">
              Selected Work
            </div>
            <h2 className="mt-4 font-editorial text-h2 text-ff-paper">
              The receipts.
            </h2>
          </div>
          <Link
            href="/work"
            className="font-receipt text-[12px] uppercase tracking-[0.1em] text-ff-stamp hover:opacity-70 transition-opacity"
          >
            View all work →
          </Link>
        </div>
      </div>

      {/* Horizontal scroll on desktop, vertical stack on mobile */}
      <div className="md:overflow-x-auto md:scrollbar-hide">
        <div className="container-edge grid grid-cols-1 gap-5 md:flex md:gap-5 md:pb-4" style={{ minWidth: 'max-content' }}>
          {studies.map((cs) => {
            if (!cs) return null;
            const label = LABELS[cs.slug];
            const idx = CASE_STUDIES.findIndex((c) => c.slug === cs.slug);
            const caseNumber = String(idx + 1).padStart(2, '0');
            return (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group block md:w-[360px] md:shrink-0 border border-ff-fade-30 hover:border-ff-stamp transition-colors rounded overflow-hidden"
              >
                <div className="aspect-video relative bg-ff-bg">
                  <BrandColorHero
                    client={cs.client}
                    verticalLabel={cs.verticalLabel}
                    verticalColor={cs.verticalColor}
                    caseNumber={caseNumber}
                    aspect="16/9"
                    variant="compact"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="font-receipt text-[11px] uppercase tracking-[0.1em] text-ff-stamp">
                    {label?.eyebrow || cs.verticalLabel}
                  </div>
                  <h3 className="font-editorial text-[24px] md:text-[28px] text-ff-paper tracking-[-0.01em]">
                    {cs.client}
                  </h3>
                  <p className="font-body text-[14px] text-ff-fade-50 leading-[1.6] line-clamp-2">
                    {label?.body || cs.tagline}
                  </p>
                  <div className="font-receipt text-[11px] uppercase tracking-[0.1em] text-ff-stamp group-hover:opacity-70 transition-opacity pt-1">
                    View Case Study →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
