import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Lucas Vandenberg | Fractional CMO Orlando' },
  description:
    'Lucas Vandenberg takes on a small number of Orlando-area companies as fractional CMO. Founder of Fifty & Five, 18 years, 222+ brands. From $4,000/mo.',
  alternates: { canonical: 'https://fiftyandfive.com/fractional-cmo-orlando' },
  openGraph: {
    title: 'Lucas Vandenberg | Fractional CMO Orlando',
    description:
      'Founder-led fractional CMO seat for Orlando-area owner-operators. 18 years, 222+ brands, one senior operator on call.',
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

const MENU = [
  { when: 'Every month', what: 'a 60-90 minute strategy session. Not a status meeting.' },
  { when: 'Every month', what: "a written Marketing Command Brief: what moved, what I'm flagging, what's next." },
  { when: 'Every month', what: 'one prioritized strategic recommendation, scoped and ready to execute.' },
  { when: 'On call', what: 'direct text access to me. Not a support queue.' },
];

const FAQS = [
  {
    q: 'What does a fractional CMO in Orlando cost?',
    a: 'My seats run $4,000-$6,500 per month, scoped to the business and how much oversight it needs, on a month-to-month basis with no long-term contract. That is roughly a third of what a full-time CMO costs before benefits and equity.',
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
    q: 'What does a fractional CMO do?',
    a: 'A fractional CMO sets marketing strategy, budget, and channel priorities on a part-time or advisory basis, without becoming a full-time hire. I run a monthly strategy session, deliver a written brief on what moved and what is next, hand over one prioritized recommendation, and stay on call by text in between.',
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
                name: 'Lucas Vandenberg | Fractional CMO Orlando',
                description:
                  'Lucas Vandenberg, founder of Fifty & Five, takes on a small number of Orlando-area companies as fractional CMO. 18 years, 222+ brands.',
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
                    minPrice: '4000',
                    maxPrice: '6500',
                    priceCurrency: 'USD',
                  },
                  description: '$4,000-$6,500 per month, scoped to your business, month to month.',
                },
                areaServed: [
                  { '@type': 'City', name: 'Orlando' },
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
            I have led marketing and social strategy for 222+ brands across 5 continents since
            founding Fifty &amp; Five in 2008. I take on a small number of Orlando-area
            owner-operators as fractional CMO clients &mdash; senior strategy on call, without
            adding another full-time hire.
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
            Eighteen years, one operator, running from Orlando.
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

      {/* What's included */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            The seat
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            What working with me looks like.
          </h2>
        </div>
        <div className="mt-12 max-w-3xl space-y-4">
          {MENU.map((item, i) => (
            <SimpleReveal key={item.what} delay={Math.min(i * 0.06, 0.3)}>
              <div className="glass rounded-glass p-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <div className="font-mono text-caption uppercase text-accent tracking-[0.12em] sm:w-24 shrink-0">
                  {item.when}
                </div>
                <p className="text-body-lg text-text-primary">{item.what}</p>
              </div>
            </SimpleReveal>
          ))}
        </div>
        <SimpleReveal>
          <div className="mt-6 max-w-3xl glass rounded-glass p-6">
            <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
              Not included
            </div>
            <p className="mt-2 text-body text-text-secondary leading-[1.6]">
              Hands-on execution: content production, ad management, website builds. That is real
              work, priced and scoped separately through <a href="/fractional-cmo" className="text-accent hover:text-accent-light underline underline-offset-2">Fifty &amp; Five</a>, so the seat
              stays strategic advice.
            </p>
          </div>
        </SimpleReveal>
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
              owner-operator, you get an operator who has run this playbook in this market for 18
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
