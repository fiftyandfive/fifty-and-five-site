import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { FACTS } from '@/lib/site-facts';
import { VERTICALS } from '@/lib/data/verticals';

/**
 * Brand proof for /about: the roster as text wordmarks (no logo images until
 * approved logo files are supplied), three duration results, and the verticals
 * as chips linking to their pages. Server rendered, no animation, so every
 * name is in the initial HTML for crawlers and AI readers.
 *
 * These are brands Lucas has worked with across his career, not a list of
 * current accounts.
 */

const FEATURED: { name: string; detail?: string }[] = [
  { name: 'Enterprise Holdings', detail: 'Enterprise Rent-A-Car, National, Alamo' },
  { name: 'Microsoft' },
  { name: 'Warner Bros.' },
  { name: 'SAP' },
  { name: 'Bain & Company' },
  { name: 'Discovery Channel' },
  { name: 'Hasbro' },
  { name: 'Unilever', detail: 'Axe' },
  { name: 'Resorts World' },
  { name: 'Blaze Pizza' },
  { name: 'GolfNow' },
  { name: 'AutoNation' },
  { name: 'Molina Healthcare' },
  { name: 'Kendall-Jackson' },
  { name: 'Penfolds' },
  { name: 'American Airlines Center' },
  { name: 'NETGEAR / Arlo' },
  { name: 'Southern New Hampshire University' },
];

const RESULTS: { brand: string; text: string; href: string }[] = [
  {
    brand: 'Blaze Pizza',
    text: 'A 10 year national program, from day zero to 300+ locations.',
    href: '/work/blaze-pizza',
  },
  {
    brand: 'Enterprise Holdings',
    text: 'Six brands under one umbrella across the US and Latin America.',
    href: '/work/enterprise-holdings',
  },
  {
    brand: 'Gruppo Mezzacorona',
    text: 'A 10 year partnership adding roughly 1 million followers.',
    href: '/work/mezzacorona',
  },
];

const link = 'text-accent hover:text-accent-light underline underline-offset-2';

export function BrandsWorkedWith() {
  return (
    <section className="container-edge py-24 md:py-32" aria-labelledby="brands-heading">
      <div className="max-w-3xl">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          Brands Lucas has worked with
        </div>
        <h2 id="brands-heading" className="mt-4 font-serif text-h2 tracking-[-0.02em]">
          Trusted by brands Fortune 500 teams know
        </h2>
        <p className="mt-5 text-body-lg text-text-secondary leading-[1.7]">
          {FACTS.brandsManaged}+ brands across {FACTS.verticals} verticals since {FACTS.founded}
        </p>
      </div>

      {/* Wordmark grid */}
      <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {FEATURED.map((b) => (
          <li
            key={b.name}
            className="glass rounded-glass px-4 py-5 flex flex-col justify-center min-h-[96px]"
          >
            <span className="font-serif text-[18px] leading-[1.15] tracking-[-0.015em] text-text-primary">
              {b.name}
            </span>
            {b.detail && (
              <span className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary leading-[1.4]">
                {b.detail}
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Proof strip */}
      <div className="mt-14">
        <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
          Selected results
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {RESULTS.map((r) => (
            <GlassCard key={r.brand} className="p-7 h-full flex flex-col">
              <h3 className="font-serif text-[22px] leading-[1.2] text-text-primary">{r.brand}</h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.6] flex-1">{r.text}</p>
              <Link href={r.href} className={`mt-5 text-meta ${link}`}>
                Read the case study
              </Link>
            </GlassCard>
          ))}
        </div>
      </div>

      <p className="mt-10 text-body text-text-secondary">
        Marketing partner and sponsor, EO Westbridge (Entrepreneurs&rsquo; Organization).
      </p>

      {/* Verticals */}
      <div className="mt-14">
        <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
          Verticals supported
        </div>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {VERTICALS.map((v) => (
            <li key={v.slug}>
              <Link
                href={`/verticals/${v.slug}`}
                className="inline-block rounded-full border border-glass-border px-4 py-2 font-mono text-caption uppercase tracking-[0.1em] text-text-secondary hover:text-accent hover:border-accent transition-colors"
              >
                {v.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
