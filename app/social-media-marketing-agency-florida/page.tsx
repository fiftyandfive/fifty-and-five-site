import Link from 'next/link';
import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: { absolute: "Florida's Leading Social Media Marketing Agency for Hospitality, Wine & Consumer Brands" },
  description:
    'Orlando-based, senior-led social media agency serving Florida hospitality, wine & spirits, and consumer brands. 222+ brands across 5 continents since 2008.',
  alternates: { canonical: 'https://fiftyandfive.com/social-media-marketing-agency-florida' },
  openGraph: {
    title: "Florida's Leading Social Media Marketing Agency for Hospitality, Wine & Consumer Brands",
    description:
      'Senior-led social media agency headquartered in Florida. Hospitality, wine & spirits, and consumer brands, backed by an enterprise client list.',
    url: 'https://fiftyandfive.com/social-media-marketing-agency-florida',
    type: 'website',
  },
};

const FAQS = [
  {
    q: 'Is Fifty & Five a Florida-based social media agency?',
    a: 'Yes. Fifty & Five has been headquartered in Orlando, Florida since 2008. The agency is senior-led, with every account run by senior strategists rather than junior account managers.',
  },
  {
    q: 'What Florida industries does Fifty & Five specialize in?',
    a: 'Hospitality and tourism, and wine and spirits, are the two verticals with the deepest track record: 34+ wine and spirits brands including Kendall-Jackson and Mezzacorona, and hospitality clients including Resorts World and the Polynesian Cultural Center. Fifty & Five also serves restaurant, fitness, real estate, and consumer brands statewide.',
  },
  {
    q: 'Do you only work with Florida brands?',
    a: 'No. Fifty & Five is headquartered in Orlando and has managed social media for 222+ brands across 5 continents since 2008, including Microsoft, Hasbro, Warner Bros., and Tupperware. Florida is home base, not the ceiling.',
  },
  {
    q: 'How much does a Florida social media agency cost?',
    a: 'Retainers run from $3,000 per month for ad management to $50,000+ per month for full-service, always-on programs. Pricing is principal-led, with no junior account management or holding-company markup.',
  },
  {
    q: 'What makes Fifty & Five different from other Florida agencies?',
    a: 'Most Florida agencies serve local clients only. Fifty & Five combines a Florida address with a Fortune 500 client list and specialist depth in hospitality and wine and spirits, two categories with real compliance and seasonality rules most generalist agencies have not built against.',
  },
  {
    q: 'What cities does Fifty & Five serve in Florida?',
    a: 'Fifty & Five is headquartered in Orlando and serves clients throughout Central Florida and statewide, alongside a national and international client list. See our dedicated page for Orlando-specific work.',
  },
  {
    q: 'Does Fifty & Five offer fractional CMO services in Florida?',
    a: 'Yes. Alongside social media retainers, Fifty & Five offers a founder-led fractional CMO seat for Florida owner-operators doing $1M-20M in revenue, priced from $4,000 per month.',
  },
];

export default function FloridaLandingPage() {
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
                '@id': 'https://fiftyandfive.com/social-media-marketing-agency-florida',
                name: "Florida's Leading Social Media Marketing Agency for Hospitality, Wine & Consumer Brands",
                description:
                  'Orlando-based, senior-led social media agency serving Florida hospitality, wine & spirits, and consumer brands. 222+ brands across 5 continents since 2008.',
                url: 'https://fiftyandfive.com/social-media-marketing-agency-florida',
                isPartOf: { '@id': 'https://fiftyandfive.com/#website' },
                about: { '@id': 'https://fiftyandfive.com/social-media-marketing-agency-florida#service' },
              },
              {
                '@type': 'Service',
                '@id': 'https://fiftyandfive.com/social-media-marketing-agency-florida#service',
                serviceType: 'Social Media Marketing Agency',
                category: 'Marketing',
                name: 'Social Media Marketing Agency, Florida',
                description:
                  'Senior-led boutique social media agency headquartered in Orlando, Florida, specializing in hospitality, wine and spirits, and consumer brands.',
                provider: { '@id': 'https://fiftyandfive.com/#organization' },
                areaServed: [
                  { '@type': 'AdministrativeArea', name: 'Florida' },
                  { '@type': 'City', name: 'Orlando' },
                ],
                audience: {
                  '@type': 'BusinessAudience',
                  audienceType: 'Hospitality, wine and spirits, and consumer brands',
                },
                mentions: [
                  { '@type': 'Organization', name: 'Kendall-Jackson' },
                  { '@type': 'Organization', name: 'Mezzacorona' },
                  { '@type': 'Organization', name: 'Resorts World' },
                  { '@type': 'Organization', name: 'Polynesian Cultural Center' },
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
                name: 'Social Media Marketing Agency, Florida',
                item: 'https://fiftyandfive.com/social-media-marketing-agency-florida',
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
          Florida &middot; senior-led since 2008
        </div>
        <AnimatedHeadline
          as="h1"
          text="Florida's social media agency for hospitality, wine, and consumer brands."
          className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-5xl"
          stagger={0.03}
        />
        <SimpleReveal delay={0.3}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-3xl leading-[1.7]">
            Fifty &amp; Five is headquartered in Orlando, Florida. Since 2008 we have managed
            social media for 222+ brands across 5 continents, with the deepest track record
            anywhere in hospitality and wine &amp; spirits &mdash; Kendall-Jackson, Mezzacorona,
            Resorts World, the Polynesian Cultural Center, and 34+ wine and spirits brands.
          </p>
        </SimpleReveal>
        <SimpleReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="/contact" variant="primary" size="large" trackName="Florida Hero CTA">
              Start a conversation &rarr;
            </MagneticButton>
            <MagneticButton href="/work" variant="secondary" size="large" trackName="Florida CTA See Work">
              See the work
            </MagneticButton>
          </div>
        </SimpleReveal>
      </section>

      {/* Two pillars */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Where we run deepest
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Two categories most agencies cannot credibly claim.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link href="/hospitality-social-media-agency" className="block group">
            <GlassCard className="p-8 h-full">
              <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
                Hospitality &amp; Tourism
              </div>
              <h3 className="mt-3 font-serif text-[26px] leading-[1.15] text-text-primary">
                Resorts, attractions, and tourism boards.
              </h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.6]">
                Resorts World, the Polynesian Cultural Center, and tourism boards across the US,
                Caribbean, and Asia-Pacific.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-meta text-accent group-hover:text-accent-light transition-colors">
                See the hospitality practice
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
              </div>
            </GlassCard>
          </Link>
          <Link href="/wine-social-media-marketing-agency" className="block group">
            <GlassCard className="p-8 h-full">
              <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
                Wine &amp; Spirits
              </div>
              <h3 className="mt-3 font-serif text-[26px] leading-[1.15] text-text-primary">
                34+ wine and spirits brands since 2008.
              </h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.6]">
                Kendall-Jackson, a 10-year Mezzacorona retainer, and compliance built in from the
                first post.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-meta text-accent group-hover:text-accent-light transition-colors">
                See the wine &amp; spirits practice
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
              </div>
            </GlassCard>
          </Link>
        </div>
      </section>

      {/* Local roots, global roster */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              Florida roots
            </div>
            <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
              Local address. Fortune 500 roster.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-lg text-text-secondary leading-[1.75] max-w-2xl">
              Most Florida social media agencies serve local clients only. Fifty &amp; Five is
              headquartered in Orlando and runs accounts for Microsoft, Hasbro, Warner Bros., and
              Tupperware alongside a local Central Florida roster. Every account is senior-led,
              no junior handoffs. See our <Link href="/orlando-social-media-agency" className="text-accent hover:text-accent-light underline underline-offset-2">Orlando-specific work</Link> for the local roster.
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
            Quick answers about working with us in Florida.
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
        headline="Let's talk Florida."
        body="A conversation about what you're building, no proposal until we know it's a fit."
        ctaLabel="Talk to our founder &rarr;"
      />
    </>
  );
}
