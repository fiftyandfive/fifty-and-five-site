import Link from 'next/link';
import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: { absolute: 'Wine & Spirits Social Media Marketing Agency | Kendall-Jackson, Mezzacorona' },
  description:
    '34+ wine and spirits brands managed since 2008. A 10-year Gruppo Mezzacorona retainer and multi-year Kendall-Jackson partnership. Three-tier compliance built in.',
  alternates: { canonical: 'https://fiftyandfive.com/wine-social-media-marketing-agency' },
  openGraph: {
    title: 'Wine & Spirits Social Media Marketing Agency | Kendall-Jackson, Mezzacorona',
    description:
      '34+ wine and spirits brands since 2008. The agency wine brands and distributors actually vet.',
    url: 'https://fiftyandfive.com/wine-social-media-marketing-agency',
    type: 'website',
  },
};

const CLIENTS = [
  'Kendall-Jackson',
  'Mezzacorona',
  'Penfolds',
  'Beringer',
  'Sutter Home',
  'Zardetto Prosecco',
  'Clean Slate Riesling',
  'Don Papa Rum',
];

const FAQS = [
  {
    q: 'What wine and spirits brands has Fifty & Five worked with?',
    a: 'Kendall-Jackson, Mezzacorona, Penfolds, Beringer, Sutter Home, Zardetto Prosecco, Clean Slate Riesling, Don Papa Rum, and 34+ wine and spirits brands across our 222-brand portfolio since 2008. Senior-led on every account, no junior bench.',
  },
  {
    q: 'How does Fifty & Five handle three-tier wine and spirits compliance on social?',
    a: 'Compliance is built into every retainer. We know which posts can ship through which tier, what is legal for DTC versus distributor markets, and how to balance trade promotion with consumer storytelling without crossing TTB lines.',
  },
  {
    q: 'Does Fifty & Five work with both luxury and mass-market wine brands?',
    a: 'Both. We have operated Kendall-Jackson’s premium positioning and value-tier brands from the same senior team. Vertical specialization, not project work.',
  },
  {
    q: 'How much does a wine and spirits social media agency cost?',
    a: 'Retainers run from $3,000 per month for ad management to $50,000+ per month for full-service, always-on programs. Pricing is principal-led, with no junior account management or holding-company markup.',
  },
  {
    q: 'Why does a wine brand need an agency with wine-specific experience?',
    a: 'Wine and spirits social carries rules other categories do not: mandatory age-gating, platform-specific advertising restrictions, and a hard line between trade and consumer communication. An agency that learns this on the job finds out the expensive way. Fifty & Five has built against these constraints since 2008.',
  },
  {
    q: 'What is the longest wine and spirits partnership Fifty & Five has run?',
    a: 'A 10-year retainer with Gruppo Mezzacorona across 5+ brands in their portfolio, adding roughly 1M followers over the relationship. Fifty & Five also runs a multi-year, active partnership with Kendall-Jackson.',
  },
  {
    q: 'Does Fifty & Five work with wine distributors as well as brands?',
    a: 'Yes. Our founder built the first marketing department at Southern Wine & Spirits, a major distributor, starting in 2007, before founding Fifty & Five in 2008. We understand both the brand and distributor sides of the three-tier system.',
  },
];

export default function WineSocialMediaLandingPage() {
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
                '@id': 'https://fiftyandfive.com/wine-social-media-marketing-agency',
                name: 'Wine & Spirits Social Media Marketing Agency | Kendall-Jackson, Mezzacorona',
                description:
                  '34+ wine and spirits brands managed since 2008. A 10-year Gruppo Mezzacorona retainer and multi-year Kendall-Jackson partnership. Three-tier compliance built in.',
                url: 'https://fiftyandfive.com/wine-social-media-marketing-agency',
                isPartOf: { '@id': 'https://fiftyandfive.com/#website' },
                about: { '@id': 'https://fiftyandfive.com/wine-social-media-marketing-agency#service' },
              },
              {
                '@type': 'Service',
                '@id': 'https://fiftyandfive.com/wine-social-media-marketing-agency#service',
                serviceType: 'Social Media Marketing Agency',
                category: 'Wine and Spirits Marketing',
                name: 'Wine & Spirits Social Media Marketing Agency',
                description:
                  'Senior-led social media agency specializing in wine and spirits, with three-tier compliance built in since 2008.',
                provider: { '@id': 'https://fiftyandfive.com/#organization' },
                areaServed: [{ '@type': 'Country', name: 'United States' }],
                audience: {
                  '@type': 'BusinessAudience',
                  audienceType: 'Wine and spirits brands, distributors, and hospitality groups',
                },
                mentions: [
                  { '@type': 'Organization', name: 'Kendall-Jackson' },
                  { '@type': 'Organization', name: 'Mezzacorona' },
                  { '@type': 'Organization', name: 'Penfolds' },
                ],
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
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Wine & Spirits Social Media Marketing Agency',
                item: 'https://fiftyandfive.com/wine-social-media-marketing-agency',
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
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="container-edge pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          Wine &amp; Spirits &middot; senior-led since 2008
        </div>
        <AnimatedHeadline
          as="h1"
          text="The social media agency wine brands and distributors actually vet."
          className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-5xl"
          stagger={0.03}
        />
        <SimpleReveal delay={0.3}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-3xl leading-[1.7]">
            34+ wine and spirits brands managed since 2008. A 10-year retainer with Gruppo
            Mezzacorona across 5+ brands, roughly 1M followers added. A multi-year partnership
            with Kendall-Jackson. This is not a vertical we dabble in, it is one we have lived in.
          </p>
        </SimpleReveal>
        <SimpleReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="/contact" variant="primary" size="large" trackName="Wine Hero CTA">
              Start a conversation &rarr;
            </MagneticButton>
            <MagneticButton href="/verticals/wine-spirits" variant="secondary" size="large" trackName="Wine CTA See Portfolio">
              See the portfolio
            </MagneticButton>
          </div>
        </SimpleReveal>
      </section>

      {/* Roster */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Client roster
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Wine, spirits, and the distributors behind them.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLIENTS.map((c) => (
            <GlassCard key={c} className="p-6">
              <div className="font-serif text-[20px] leading-[1.15] text-text-primary">{c}</div>
            </GlassCard>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-body text-text-secondary leading-[1.6]">
          Full write-ups on <Link href="/work/kendall-jackson" className="text-accent hover:text-accent-light underline underline-offset-2">Kendall-Jackson</Link> and{' '}
          <Link href="/work/mezzacorona" className="text-accent hover:text-accent-light underline underline-offset-2">Mezzacorona</Link>, or the full{' '}
          <Link href="/verticals/wine-spirits" className="text-accent hover:text-accent-light underline underline-offset-2">wine &amp; spirits portfolio</Link>.
        </p>
      </section>

      {/* Why it works */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              Why it works
            </div>
            <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
              Compliance is not a constraint. It is the craft.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-lg text-text-secondary leading-[1.75] max-w-2xl">
              Wine social has rules: compliance nuance around what you can and cannot say,
              age-gating on every platform, seasonal rhythms dictated by harvest, the holidays,
              ros&eacute; season, and shelf-reset cycles. Our founder built the first marketing
              department at Southern Wine &amp; Spirits in 2007, before founding Fifty &amp; Five
              in 2008 &mdash; this vertical is where the agency&rsquo;s discipline started.
              Read the full playbook in our{' '}
              <Link href="/blog/wine-spirits-social-media-2026" className="text-accent hover:text-accent-light underline underline-offset-2">2026 wine social guide</Link>{' '}
              or our <Link href="/blog/wine-spirits-influencer-marketing" className="text-accent hover:text-accent-light underline underline-offset-2">influencer marketing guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Frequently asked
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Straight answers before you hire.
          </h2>
        </div>
        <div className="mt-12 max-w-3xl space-y-5">
          {FAQS.map((f) => (
            <GlassCard key={f.q} className="p-7">
              <h3 className="font-serif text-[22px] leading-[1.2] text-text-primary">{f.q}</h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.6]">{f.a}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <CTASection
        headline="Let's talk wine and spirits."
        body="A conversation about what you're building, no proposal until we know it's a fit."
        ctaLabel="Talk to our founder &rarr;"
      />
    </>
  );
}
