import Link from 'next/link';
import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: { absolute: 'Hotel & Resort Social Media Agency | Fifty & Five' },
  description:
    'Hotel and resort social media agency based in Orlando. Resorts World, Polynesian Cultural Center, and the Hong Kong Tourism Board. Senior-led destination storytelling that converts to bookings, since 2008.',
  alternates: { canonical: 'https://fiftyandfive.com/hospitality-social-media-agency' },
  openGraph: {
    title: 'Hotel & Resort Social Media Agency | Fifty & Five',
    description:
      'Destination storytelling that converts, from awareness to booking. Resorts, attractions, and tourism boards since 2008.',
    url: 'https://fiftyandfive.com/hospitality-social-media-agency',
    type: 'website',
  },
};

const CLIENTS = [
  'Resorts World Bimini',
  'Resorts World Catskills',
  'Polynesian Cultural Center',
  'Hong Kong Tourism Board',
  'Korea Tourism Board',
  'Macau Tourism Office',
  'Newport Beach Tourism',
  'Pali Hotels',
];

const FAQS = [
  {
    q: 'How much does a hospitality social media agency cost?',
    a: 'Retainers run from $4,000 per month for ad management to $50,000+ per month for full-service, always-on programs across multiple properties. Pricing is principal-led, with no junior account management.',
  },
  {
    q: 'Do you work with tourism boards or just individual properties?',
    a: 'Both. Fifty & Five has run social for individual resort properties like Resorts World Bimini and Resorts World Catskills, cultural attractions like the Polynesian Cultural Center, and national tourism boards including Hong Kong, Korea, and Macau.',
  },
  {
    q: 'How do you handle multi-market destination campaigns?',
    a: 'Localization without dilution. We adapt creative, channels, and messaging per market while protecting the global brand, and have operated campaigns across 40+ countries and 5 continents.',
  },
  {
    q: 'Can you handle crisis communications for hospitality or travel brands?',
    a: 'Yes. Weather events, travel advisories, and reputation moments are baked into the retainer playbook. Senior strategists handle crisis comms directly, not outsourced to a junior team.',
  },
  {
    q: "What's the difference between Fifty & Five and a hospitality-only boutique?",
    a: 'Fifty & Five has run hospitality and destination social since 2008, but also carries a Fortune 500 client list in other categories. That means enterprise-grade process and reporting applied to a category most boutiques cannot staff for.',
  },
  {
    q: 'Does Fifty & Five work with luxury resorts specifically?',
    a: 'Yes. Fifty & Five has run social for luxury resort properties including Resorts World Bimini in the Bahamas and Resorts World Catskills in upstate New York, each with content built around the specific character of the property, not a shared template.',
  },
  {
    q: 'Can a hospitality brand start with a smaller retainer?',
    a: 'Yes. Retainers scale from ad-management-only programs at $4,000 per month up to full-service, always-on, multi-property programs at $50,000+ per month.',
  },
];

export default function HospitalityLandingPage() {
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
                '@id': 'https://fiftyandfive.com/hospitality-social-media-agency',
                name: 'Hotel & Resort Social Media Agency | Fifty & Five',
                description:
                  'Hotel and resort social media agency based in Orlando. Resorts World, Polynesian Cultural Center, and the Hong Kong Tourism Board. Senior-led destination storytelling that converts to bookings, since 2008.',
                url: 'https://fiftyandfive.com/hospitality-social-media-agency',
                isPartOf: { '@id': 'https://fiftyandfive.com/#website' },
                about: { '@id': 'https://fiftyandfive.com/hospitality-social-media-agency#service' },
              },
              {
                '@type': 'Service',
                '@id': 'https://fiftyandfive.com/hospitality-social-media-agency#service',
                serviceType: 'Social Media Marketing Agency',
                category: 'Hospitality Marketing',
                name: 'Hotel & Resort Social Media Agency',
                description:
                  'Senior-led social media agency for hotels, resorts, attractions, and tourism boards, with destination storytelling that converts to bookings.',
                provider: { '@id': 'https://fiftyandfive.com/#organization' },
                areaServed: [
                  { '@type': 'Country', name: 'United States' },
                  { '@type': 'AdministrativeArea', name: 'Asia-Pacific' },
                  { '@type': 'AdministrativeArea', name: 'Latin America' },
                ],
                audience: {
                  '@type': 'BusinessAudience',
                  audienceType: 'Hotels, resorts, attractions, and tourism boards',
                },
                mentions: [
                  { '@type': 'Organization', name: 'Resorts World' },
                  { '@type': 'Organization', name: 'Polynesian Cultural Center' },
                  { '@type': 'Organization', name: 'Hong Kong Tourism Board' },
                  { '@type': 'Organization', name: 'Korea Tourism Board' },
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
                name: 'Hotel & Resort Social Media Agency',
                item: 'https://fiftyandfive.com/hospitality-social-media-agency',
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
          Hospitality &amp; Tourism &middot; senior-led since 2008
        </div>
        <AnimatedHeadline
          as="h1"
          text={'Hotel & Resort Social Media Marketing'}
          className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-5xl"
          stagger={0.03}
        />
        <SimpleReveal delay={0.3}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-3xl leading-[1.7]">
            Fifty &amp; Five is a hotel and resort social media agency based in Orlando. Since 2008
            we have run social for luxury resorts including Resorts World Bimini and Resorts
            World Catskills, cultural attractions like the Polynesian Cultural Center, and
            national tourism boards including the Hong Kong Tourism Board. Hotel and resort
            content that converts, from awareness to itinerary to booking.
          </p>
        </SimpleReveal>
        <SimpleReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="/contact" variant="primary" size="large" trackName="Hospitality Hero CTA">
              Start a conversation &rarr;
            </MagneticButton>
            <MagneticButton href="/verticals/hospitality" variant="secondary" size="large" trackName="Hospitality CTA See Portfolio">
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
            Resorts, attractions, and tourism boards.
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
          See the full write-ups on <Link href="/work/resorts-world" className="text-accent hover:text-accent-light underline underline-offset-2">Resorts World</Link> and the{' '}
          <Link href="/work/polynesian-cultural-center" className="text-accent hover:text-accent-light underline underline-offset-2">Polynesian Cultural Center</Link>, or the full portfolio on our{' '}
          <Link href="/verticals/hospitality" className="text-accent hover:text-accent-light underline underline-offset-2">hospitality social media agency</Link> page.
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
              Aspiration that is still authentic.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-lg text-text-secondary leading-[1.75] max-w-2xl">
              Hospitality social is aspirational by nature, but the platforms are flooded with
              resort shots that all blend together. The properties that stand out are the ones
              whose content feels like a specific place, not a stock image. We have operated
              through weather events, travel advisories, and reputation moments across 40+
              countries, so crisis-ready is built in, not bolted on. Read more in{' '}
              <Link href="/blog/social-media-luxury-resorts-hospitality" className="text-accent hover:text-accent-light underline underline-offset-2">
                our luxury resort social guide
              </Link>.
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
        headline="Let's talk hospitality."
        body="A conversation about what you're building, no proposal until we know it's a fit."
        ctaLabel="Talk to our founder &rarr;"
      />
    </>
  );
}
