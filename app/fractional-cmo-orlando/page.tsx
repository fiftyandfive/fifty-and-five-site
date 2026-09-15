import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';
import { PRICING, SITE } from '@/lib/constants';
import { FACTS } from '@/lib/site-facts';

export const metadata: Metadata = {
  title: { absolute: 'Fractional CMO Orlando | Lucas Vandenberg, Fifty & Five' },
  description:
    `Lucas Vandenberg takes on a small number of Orlando-area companies as fractional CMO. Founder of Fifty & Five, ${FACTS.yearsOperating} years, ${FACTS.brandsManaged}+ brands. From $4,000/mo.`,
  alternates: { canonical: 'https://fiftyandfive.com/fractional-cmo-orlando' },
  openGraph: {
    images: ['/opengraph-image'],
    title: 'Fractional CMO Orlando | Lucas Vandenberg, Fifty & Five',
    description:
      `Founder-led fractional CMO seat for Orlando-area owner-operators. ${FACTS.yearsOperating} years, ${FACTS.brandsManaged}+ brands, one senior operator on call.`,
    url: 'https://fiftyandfive.com/fractional-cmo-orlando',
    type: 'website',
  },
};

const TIMELINE = [
  {
    year: '2007',
    text: 'Corporate Marketing Manager, Southern Wine & Spirits. Built the company’s first marketing department. 15% average lift in case sales. Zero prior wine industry experience.',
  },
  {
    year: '2008',
    text: 'Founded Fifty & Five. One of only two American agencies (alongside VaynerMedia) built from scratch as social-first, no pivot from PR or advertising.',
  },
  {
    year: '2016',
    text: 'Gruppo Mezzacorona retainer begins. Ten years, 5+ brands in portfolio, roughly 1M followers added.',
  },
  {
    year: '2020',
    text: 'Kendall-Jackson partnership begins. Multi-year, still active.',
  },
  {
    year: '2026',
    text: '222+ brands managed across 5 continents. Senior + AI operating model in market. Serves on the SoDo Main Street Board in Orlando.',
  },
];

const LOCAL_WORK = [
  {
    client: 'Landmark Contracting',
    what: 'A Central Florida general contractor whose decade-old website had produced one request for quote in ten years. I took the seat, called the site the actual bottleneck, and rebuilt it first. Four requests for quote came in the first two weeks.',
  },
  {
    client: 'Central Florida Talent',
    what: "Orlando's longest-operating SAG-AFTRA franchised talent agency, in business since 1994. We rebuilt their site so casting directors and AI assistants could both find and cite it.",
  },
  {
    client: 'BODYBar SoDo',
    what: 'A boutique fitness studio in SoDo, run on the same operating model as the national franchise stacks we manage, sized to one location.',
  },
  {
    client: 'Solar Bears Orlando and Andretti Indoor Karting',
    what: 'Orlando entertainment venues, where every event is its own micro-campaign and the calendar is set by the schedule, not by a content plan.',
  },
];

const FAQS = [
  {
    q: 'What does a fractional CMO in Orlando cost?',
    a: 'My seats start at $4,000 per month, scoped to the business and how much oversight it needs, on a month-to-month basis with no long-term contract. That is a fraction of what a full-time CMO costs before benefits and equity.',
  },
  {
    q: "What is Lucas Vandenberg's background?",
    a: 'I built the first marketing department at Southern Wine & Spirits starting in 2007, then founded Fifty & Five in 2008. Since then I have led marketing and social strategy for 222+ brands across 5 continents, including Microsoft, Kendall-Jackson, Mezzacorona, Enterprise Holdings, and Tupperware, from Orlando, Florida.',
  },
  {
    q: 'Does a fractional CMO replace my in-house marketing person?',
    a: 'No. I set strategy and direction; your existing marketing person or agency still executes. Most clients keep their in-house hire and use the seat to give them a plan and a senior sounding board instead of guessing alone.',
  },
  {
    q: 'What size company is a good fit?',
    a: 'Owner-operated companies doing $1M to $20M in revenue, in or around Orlando or Central Florida. Large enough that marketing run on instinct is costing real money, not yet large enough to justify a full in-house executive.',
  },
  {
    q: 'Is there a contract?',
    a: 'No lock-in. Month to month, 30-day notice. The work has to earn the renewal every single month, that is the guarantee.',
  },
  {
    q: 'What does a fractional CMO in Orlando do?',
    a: 'The same job a full-time CMO does, part-time, for a local owner-operator. I set marketing strategy, budget, and channel priorities, oversee whoever executes, and stay accountable for the number. In Orlando specifically that has meant calling a general contractor\'s website the bottleneck rather than his ad spend, and rebuilding a thirty-year talent agency\'s digital presence so casting directors and AI assistants could both find it. The full menu of what the seat includes is on the fractional CMO seat page.',
  },
  {
    q: 'Which Orlando companies has Lucas Vandenberg worked with?',
    a: 'Locally the list includes Landmark Contracting, Central Florida Talent, BODYBar SoDo, Crafty Bartender, Solar Bears Orlando, Andretti Indoor Karting, Velocity Title, Laser Lab, Chance 2 Dance, and Teoxane SA. Fifty & Five has operated from Orlando since 2008, and I serve on the SoDo Main Street Board. The national roster, including Microsoft, Kendall-Jackson, and Enterprise Holdings, is run from the same desk.',
  },
  {
    q: 'Do you take fractional CMO clients outside Orlando?',
    a: 'Yes, the seat is not restricted to Central Florida, and several clients are not local. The reason this page exists is that proximity genuinely changes the first ninety days for an Orlando owner-operator: I can sit in your office, walk your location, and meet the people who answer your phone. If you are outside the market, the seat works the same way and the fractional CMO page is the better starting point.',
  },
  {
    q: 'Why hire a fractional CMO in Orlando instead of a national firm?',
    a: 'A national fractional CMO firm assigns you a consultant you may never meet in person and who has not run this specific market. I am based in Orlando, have run Fifty & Five from here since 2008, and take the seat myself, not a firm placement.',
  },
];

export default function FractionalCmoOrlandoPage() {
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
                '@id': 'https://fiftyandfive.com/fractional-cmo-orlando',
                name: 'Fractional CMO Orlando | Lucas Vandenberg, Fifty & Five',
                description:
                  `Lucas Vandenberg, founder of Fifty & Five, takes on a small number of Orlando-area companies as fractional CMO. ${FACTS.yearsOperating} years, ${FACTS.brandsManaged}+ brands.`,
                url: 'https://fiftyandfive.com/fractional-cmo-orlando',
                isPartOf: { '@id': 'https://fiftyandfive.com/#website' },
                about: { '@id': 'https://fiftyandfive.com/fractional-cmo-orlando#service' },
                mainEntity: { '@id': 'https://fiftyandfive.com/#lucas-vandenberg' },
              },
              {
                '@type': 'Person',
                '@id': 'https://fiftyandfive.com/#lucas-vandenberg',
                name: 'Lucas Vandenberg',
                jobTitle: ['Founder', 'Fractional CMO'],
                url: 'https://fiftyandfive.com/fractional-cmo-orlando',
                worksFor: { '@id': 'https://fiftyandfive.com/#organization' },
                description:
                  'Founder of Fifty & Five. Built the first marketing department at Southern Wine & Spirits starting in 2007, then founded Fifty & Five in 2008. Has led marketing and social strategy for 222+ brands across 5 continents since.',
                knowsAbout: [
                  'Fractional CMO',
                  'Marketing Leadership',
                  'Marketing Strategy',
                  'Brand Strategy',
                  'Social Media Marketing',
                  'Wine and Spirits Marketing',
                ],
                homeLocation: {
                  '@type': 'Place',
                  address: { '@type': 'PostalAddress', addressLocality: 'Orlando', addressRegion: 'FL', addressCountry: 'US' },
                },
                sameAs: ['https://www.linkedin.com/in/LucasV/'],
              },
              {
                '@type': 'Service',
                '@id': 'https://fiftyandfive.com/fractional-cmo-orlando#service',
                serviceType: 'Fractional CMO',
                category: 'Marketing Leadership',
                name: 'Fractional CMO, Orlando',
                description:
                  'Founder-led fractional CMO seat for Orlando-area owner-operators. Strategy, budget, and channel oversight from the operator behind 222+ brands.',
                provider: { '@id': 'https://fiftyandfive.com/#lucas-vandenberg' },
                offers: {
                  '@type': 'Offer',
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    minPrice: String(PRICING.fractionalCmo.min),
                    priceCurrency: 'USD',
                  },
                  description: `${PRICING.fractionalCmo.from.replace('/mo', ' per month')}, scoped to your business, month to month.`,
                },
                areaServed: [
                  { '@type': 'City', name: 'Orlando' },
                  { '@type': 'AdministrativeArea', name: 'Orange County' },
                  { '@type': 'AdministrativeArea', name: 'Central Florida' },
                ],
                audience: {
                  '@type': 'BusinessAudience',
                  audienceType: 'Owner-operators, $1M-20M revenue',
                },
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
              { '@type': 'ListItem', position: 2, name: 'Fractional CMO', item: 'https://fiftyandfive.com/fractional-cmo' },
              { '@type': 'ListItem', position: 3, name: 'Fractional CMO Orlando', item: 'https://fiftyandfive.com/fractional-cmo-orlando' },
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
          Orlando, FL &middot; Fractional CMO
        </div>
        <AnimatedHeadline
          as="h1"
          text="Lucas Vandenberg. Fractional CMO in Orlando."
          className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-4xl"
          stagger={0.03}
        />
        <SimpleReveal delay={0.3}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-3xl leading-[1.7]">
            The fractional CMO in Orlando at Fifty &amp; Five is Lucas Vandenberg, the founder,
            not a placement from a national firm. The seat is for owner-operators doing $1M to
            $20M in revenue in Orlando, Winter Park, Lake Nona, and the rest of Central Florida
            who need senior marketing judgment on call without adding a full-time hire. I have
            led marketing and social strategy for 222+ brands across 5 continents since founding
            Fifty &amp; Five in 2008, and I take the seat myself.
          </p>
        </SimpleReveal>
        <SimpleReveal delay={0.35}>
          <p className="mt-4 text-meta text-text-tertiary">
            This is the Orlando seat of Fifty &amp; Five&rsquo;s national{' '}
            <Link href="/fractional-cmo" className="text-accent hover:text-accent-light underline underline-offset-2">
              Fractional CMO practice
            </Link>
            .
          </p>
        </SimpleReveal>
        <SimpleReveal delay={0.4}>
          <div className="mt-10">
            <MagneticButton
              href={SITE.calendly}
              variant="primary"
              size="large"
              trackName="Fractional CMO Orlando Hero CTA"
            >
              Book a working session &rarr;
            </MagneticButton>
          </div>
        </SimpleReveal>
      </section>

      {/* Track record */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Track record
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            {`${FACTS.yearsOperating} years, one operator, running from Orlando.`}
          </h2>
        </div>
        <div className="mt-12 max-w-3xl space-y-6">
          {TIMELINE.map((t) => (
            <SimpleReveal key={t.year}>
              <div className="flex gap-6">
                <div className="font-mono text-caption uppercase text-accent tracking-[0.12em] w-14 shrink-0 pt-1">
                  {t.year}
                </div>
                <p className="text-body-lg text-text-secondary leading-[1.7]">{t.text}</p>
              </div>
            </SimpleReveal>
          ))}
        </div>
      </section>

      {/* Local work */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Local work
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Orlando companies I have actually run marketing for
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.75]">
            The Fortune 500 logos are real, and they are not why an Orlando owner-operator should
            hire me. This is the local work, in this market, where I was the one holding the seat.
          </p>
        </div>
        <div className="mt-12 max-w-3xl space-y-4">
          {LOCAL_WORK.map((item, i) => (
            <SimpleReveal key={item.client} delay={Math.min(i * 0.06, 0.3)}>
              <div className="glass rounded-glass p-6">
                <h3 className="font-serif text-[21px] leading-[1.25] text-text-primary">
                  {item.client}
                </h3>
                <p className="mt-2 text-body text-text-secondary leading-[1.65]">{item.what}</p>
              </div>
            </SimpleReveal>
          ))}
        </div>
        <SimpleReveal>
          <p className="mt-8 max-w-3xl text-body text-text-secondary leading-[1.65]">
            Beyond those, the Orlando and Central Florida roster includes Crafty Bartender,
            Velocity Title, Laser Lab, Chance 2 Dance, and Teoxane SA. Full detail on what the
            engagement includes, what it costs, and how it compares to a full-time hire lives on
            the{' '}
            <Link href="/fractional-cmo" className="text-accent hover:text-accent-light underline underline-offset-2">
              fractional CMO seat
            </Link>{' '}
            page. This page is about who holds it here.
          </p>
        </SimpleReveal>
      </section>

      {/* In the market */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              In the market
            </div>
            <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
              Orlando is where I work, not a service area.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-lg text-text-secondary leading-[1.75] max-w-2xl">
              Fifty &amp; Five has run from 1001 N Orange Ave since 2008, and I serve on the SoDo
              Main Street Board here in Orlando. That matters for a practical reason rather than a
              sentimental one: when an owner-operator in Winter Park or Lake Nona describes their
              market, I do not need it explained. I know which industries in this city run on
              tourism cycles, which run on relocation, and which run on referrals from the same
              two hundred people. Most national fractional CMO firms assign you a consultant who
              learns that on your budget.
            </p>
          </div>
        </div>
      </section>

      {/* Why local matters */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              Why Orlando
            </div>
            <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
              I am here, not remote.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-lg text-text-secondary leading-[1.75] max-w-2xl">
              Fifty &amp; Five has run from Orlando since 2008. If you are an Orlando-area
              owner-operator, you get an operator who has run this playbook in this market for {FACTS.yearsOperating}
              years, backed by the same team that runs marketing for Microsoft, Kendall-Jackson,
              and Enterprise Holdings. Not a coach parachuting in from out of state.
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
            Straight answers about the seat.
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
        headline="Let's talk."
        body="A 30-minute call. Your numbers, your bottleneck, and whether it makes sense. No deck, no pressure."
        ctaLabel="Book a working session &rarr;"
      />
    </>
  );
}
