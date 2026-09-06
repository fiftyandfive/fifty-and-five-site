import Link from 'next/link';
import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CTASection } from '@/components/layout/CTASection';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Ways to Work With Us | Fifty & Five',
  description:
    'Same senior team at every depth. Run the work, lead the function, or both. Retainers from $4,000/mo, fractional CMO seats from $4,000/mo.',
  alternates: { canonical: 'https://fiftyandfive.com/ways-to-work' },
  openGraph: {
    title: 'Ways to Work With Us | Fifty & Five',
    description: 'Same senior team at every depth. The only difference is how much of the function we hold.',
    url: 'https://fiftyandfive.com/ways-to-work',
    type: 'website',
  },
};

const DOORS = [
  {
    name: 'Run the work',
    copy: 'You have a marketing leader. They need senior capacity on named workstreams: social, content, paid, creative. Delivered by senior practitioners, scoped to specific programs, with no junior layer to manage. Retainers from $4,000/mo.',
    href: '/services',
    cta: 'See services',
  },
  {
    name: 'Lead the function',
    copy: 'No marketing leader in the building. Someone has to own the number, the budget, and the channel mix.',
    href: '/fractional-cmo',
    cta: 'See the seat',
  },
  {
    name: 'Both',
    copy: 'Strategy and the hands to execute it.',
    href: '/contact',
    cta: 'Start a conversation',
  },
];

export default function WaysToWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://fiftyandfive.com/ways-to-work',
                name: 'Ways to Work With Us | Fifty & Five',
                description:
                  'Same senior team at every depth. Run the work, lead the function, or both.',
                url: 'https://fiftyandfive.com/ways-to-work',
                isPartOf: { '@id': 'https://fiftyandfive.com/#website' },
                about: { '@id': 'https://fiftyandfive.com/#organization' },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fiftyandfive.com/' },
              { '@type': 'ListItem', position: 2, name: 'Ways to Work', item: 'https://fiftyandfive.com/ways-to-work' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="container-edge pt-36 md:pt-44 pb-16 md:pb-20">
        <AnimatedHeadline
          as="h1"
          text="Three ways to work with us."
          className="font-serif text-h1 tracking-[-0.02em] max-w-4xl"
          stagger={0.03}
        />
        <SimpleReveal delay={0.3}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-3xl leading-[1.7]">
            Same senior team at every depth. The only difference is how much of the function we
            hold.
          </p>
        </SimpleReveal>
      </section>

      {/* Three doors */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DOORS.map((d) => (
            <Link key={d.name} href={d.href} className="block group h-full">
              <GlassCard className="p-8 h-full flex flex-col">
                <h2 className="font-serif text-h3 tracking-[-0.015em] text-text-primary">
                  {d.name}
                </h2>
                <p className="mt-4 text-body text-text-secondary leading-[1.6] flex-1">
                  {d.copy}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-meta text-accent group-hover:text-accent-light transition-colors">
                  {d.cta}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Proof
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Most agencies sell projects. We sell durations.
          </h2>
        </div>
        <SimpleReveal delay={0.1}>
          <p className="mt-8 text-body-lg text-text-secondary max-w-3xl leading-[1.7]">
            Blaze Pizza, a ten-year national program. Gruppo Mezzacorona, ten years across five
            portfolio brands. Enterprise Holdings, six brands across the US and LATAM.
          </p>
        </SimpleReveal>
      </section>

      <CTASection
        headline="Not sure which door?"
        body="A 30-minute call. Your numbers, your bottleneck, and which door fits. No deck, no pressure."
        ctaLabel="Start a conversation →"
      />
    </>
  );
}
