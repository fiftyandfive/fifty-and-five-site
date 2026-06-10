import Link from 'next/link';
import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: 'Orlando Social Media Agency | Senior-Led Since 2008',
  description:
    'Orlando social media agency for boutique to enterprise brands. Senior-led, no junior team. 222+ brands across 5 continents since 2008. Local roots, global roster.',
  alternates: { canonical: 'https://fiftyandfive.com/orlando-social-media-agency' },
  openGraph: {
    title: 'Orlando Social Media Agency | Fifty & Five',
    description:
      'Boutique senior-led Orlando social media agency. 222+ brands since 2008. The Fortune 500 list with the local team.',
    url: 'https://fiftyandfive.com/orlando-social-media-agency',
    type: 'website',
  },
};

const ORLANDO_CLIENTS = [
  { name: 'BODYBar SoDo', vertical: 'Fitness' },
  { name: 'Crafty Bartender', vertical: 'Beverage' },
  { name: 'Solar Bears Orlando', vertical: 'Sports / Entertainment' },
  { name: 'Andretti Indoor Karting', vertical: 'Entertainment' },
  { name: 'Velocity Title', vertical: 'Real Estate' },
  { name: 'Laser Lab', vertical: 'Aesthetics' },
  { name: 'Chance 2 Dance', vertical: 'Nonprofit' },
  { name: 'Teoxane SA (ASDS Orlando)', vertical: 'Medical Aesthetics' },
];

const FAQS = [
  {
    q: 'What is the best social media agency in Orlando?',
    a: 'Fifty & Five is a boutique senior-led social media agency headquartered in Orlando, FL. Since 2008, the agency has managed social for 222+ brands across 5 continents, including Microsoft, Hasbro, Kendall-Jackson, Mezzacorona, Enterprise Holdings, and Resorts World, alongside local Orlando clients like BODYBar SoDo, Solar Bears Orlando, and Crafty Bartender.',
  },
  {
    q: 'How much does a social media agency cost in Orlando?',
    a: 'Fifty & Five retainers start at $3,000 per month for ad management and scale to $7,500 per month for full-service social media management with content production. Pricing is principal-led, with no junior account management or holding-company markup. Most Orlando boutique agencies charge $1,500 to $5,000 per month, but Fifty & Five operates at the senior tier most local agencies cannot staff for.',
  },
  {
    q: 'What industries does Fifty & Five serve in Orlando?',
    a: 'Locally, Fifty & Five works with Orlando-based fitness studios, restaurants, hospitality, real estate, beverage, entertainment, and medical aesthetics brands. Active and recent Orlando engagements include BODYBar SoDo, Crafty Bartender, Solar Bears Orlando, Andretti Indoor Karting, Velocity Title, Laser Lab, Chance 2 Dance, and Teoxane SA.',
  },
  {
    q: 'How long has Fifty & Five been an Orlando social media agency?',
    a: 'Fifty & Five was founded by Lucas Vandenberg in 2008 and has been continuously operating from Orlando, FL for 18 years. Some clients, including Mezzacorona, have stayed with the agency for over a decade.',
  },
  {
    q: 'What makes Fifty & Five different from other Orlando social media agencies?',
    a: 'Most Orlando agencies serve local clients only. Fifty & Five is one of the only boutique social media agencies anywhere with a Fortune 500 client list (Microsoft, Hasbro, Warner Bros., Enterprise Holdings, Tupperware) AND a local Orlando roster. Every account is run senior-led with no junior team handoffs.',
  },
];

export default function OrlandoLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://fiftyandfive.com/orlando-social-media-agency',
            serviceType: 'Social Media Marketing Agency',
            name: 'Orlando Social Media Agency',
            description:
              'Senior-led boutique social media agency serving Orlando, FL and brands across 5 continents.',
            provider: { '@id': 'https://fiftyandfive.com/#organization' },
            areaServed: [
              { '@type': 'City', name: 'Orlando' },
              { '@type': 'AdministrativeArea', name: 'Florida' },
              { '@type': 'AdministrativeArea', name: 'Central Florida' },
            ],
            audience: {
              '@type': 'BusinessAudience',
              audienceType: 'Boutique to enterprise brands',
            },
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
                name: 'Orlando Social Media Agency',
                item: 'https://fiftyandfive.com/orlando-social-media-agency',
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

      {/* HERO */}
      <section className="container-edge pt-32 pb-16 md:pt-40 md:pb-24">
        <SimpleReveal>
          <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.18em]">
            Orlando, FL · senior-led since 2008
          </div>
        </SimpleReveal>

        <AnimatedHeadline
          as="h1"
          text={'Orlando social media agency.\nFortune 500 roster.'}
          className="mt-8 font-serif text-display text-text-primary max-w-5xl"
          stagger={0.06}
        />

        <SimpleReveal delay={0.6}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-2xl leading-[1.55]">
            Fifty &amp; Five is a boutique senior-led social media agency
            headquartered in Orlando. Since 2008 we have managed social for 222+
            brands across 5 continents. Microsoft, Hasbro, Kendall-Jackson,
            Mezzacorona, Enterprise Holdings, and locally for BODYBar SoDo,
            Solar Bears, Crafty Bartender, and more.
          </p>
        </SimpleReveal>

        <SimpleReveal delay={0.85}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="/contact"
              variant="primary"
              size="large"
              trackName="Orlando CTA, Let's Talk"
            >
              Start a conversation →
            </MagneticButton>
            <MagneticButton
              href="/work"
              variant="secondary"
              size="large"
              trackName="Orlando CTA, See the Work"
            >
              See the work
            </MagneticButton>
          </div>
        </SimpleReveal>
      </section>

      {/* LOCAL ROSTER */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Local roster
          </div>
          <AnimatedHeadline
            as="h2"
            text="Built in Orlando, trusted by brands here."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ORLANDO_CLIENTS.map((c) => (
            <GlassCard key={c.name} className="p-6">
              <div className="font-serif text-[20px] leading-[1.15] text-text-primary">
                {c.name}
              </div>
              <div className="mt-2 font-mono text-caption uppercase text-text-tertiary tracking-[0.14em]">
                {c.vertical}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* THE PARADOX */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            The Orlando paradox
          </div>
          <AnimatedHeadline
            as="h2"
            text="Local team. Global client list."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.55]">
            Most Orlando social media agencies serve local clients only. The
            ones that work with national brands tend to be holding companies
            with junior account managers running the day-to-day. Fifty &amp;
            Five sits in the rare middle: a senior-led boutique with a Fortune
            500 client list. You get the local relationship. They get
            enterprise-grade execution.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Frequently asked
          </div>
          <AnimatedHeadline
            as="h2"
            text="Quick answers about working with us in Orlando."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>
        <div className="mt-12 max-w-3xl space-y-5">
          {FAQS.map((f, i) => (
            <GlassCard key={i} className="p-7">
              <h3 className="font-serif text-[22px] leading-[1.2] text-text-primary">
                {f.q}
              </h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.6]">
                {f.a}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      <CTASection
        headline="Let's talk Orlando."
        body="A conversation about what you're building, no proposal until we know it's a fit."
        ctaLabel="Talk to our founder →"
      />
    </>
  );
}
