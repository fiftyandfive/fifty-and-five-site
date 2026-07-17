import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CASE_STUDIES } from '@/lib/data/caseStudies';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Fractional CMO for $1M-20M Companies | Fifty & Five' },
  description:
    'Senior marketing leadership for owner-operators doing $1M-20M. From $4,000/mo, month to month. We run the function and own the number, backed by 222+ brands.',
  alternates: {
    canonical: 'https://fiftyandfive.com/fractional-cmo',
  },
  openGraph: {
    title: 'Fractional CMO for $1M-20M Companies | Fifty & Five',
    description:
      'Senior marketing leadership for owner-operators doing $1M-20M. From $4,000/mo, month to month. We run the function and own the number, backed by 222+ brands.',
    url: 'https://fiftyandfive.com/fractional-cmo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CMO for $1M-20M Companies | Fifty & Five',
    description:
      'Senior marketing leadership for owner-operators doing $1M-20M. From $4,000/mo, month to month. We run the function and own the number, backed by 222+ brands.',
  },
};

const SEAT_MENU = [
  { when: 'Every month', what: 'a 60-90 minute strategy session. Not a status meeting.' },
  { when: 'Every month', what: "a written Marketing Command Brief: what moved, what I'm flagging, what's next." },
  { when: 'Every month', what: 'one prioritized strategic recommendation, scoped and ready to execute.' },
  { when: 'On call', what: 'direct text access to me. Not a support queue.' },
];

const FAQS = [
  {
    q: 'Why not hire a full-time marketer?',
    a: 'You could. A real CMO runs $200K+. A coordinator runs $65K and still needs managing. A seat gives you senior judgment on call, at a third of the cost.',
  },
  {
    q: 'What if we already have a marketing person?',
    a: 'Keep them. The seat gives them direction, systems, and a senior sounding board instead of guessing alone.',
  },
  {
    q: 'What results should we expect?',
    a: 'Fast, then compounding. Month one is foundation fixes you can see. Ninety days in, you have a working system and a scoreboard. Ask our clients: most stay 3+ years.',
  },
  {
    q: 'Is there a contract?',
    a: 'No lock-in. Month to month, 30-day notice. That is the guarantee: the work has to earn the renewal every single month.',
  },
  {
    q: 'Why hire Fifty & Five instead of a fractional CMO?',
    a: 'Most fractional CMOs hand you a strategy and leave. Most agencies execute without one. Fifty & Five does both: senior marketing leadership that owns the number, plus the team that runs the work. A CMO typically runs one brand over a career. Fifty & Five has led marketing for 222+ brands across five continents since 2008.',
  },
];

const PROOF_STATS = [
  { stat: '222', label: 'brands' },
  { stat: '18', label: 'years' },
  { stat: '3+', label: 'year partnerships, most clients' },
];

export default function FractionalCmoPage() {
  const testimonials = ['blaze-pizza', 'barsha']
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug)?.testimonial)
    .filter(Boolean)
    .map((t) => t!);

  return (
    <>
      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fiftyandfive.com/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://fiftyandfive.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Fractional CMO', item: 'https://fiftyandfive.com/fractional-cmo' },
            ],
          }),
        }}
      />
      {/* WebPage + Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                name: 'Fractional CMO for $1M-20M Companies | Fifty & Five',
                description:
                  'Senior marketing leadership for owner-operators doing $1M-20M. From $4,000/mo, month to month. Run by the operator behind 222 brands.',
                url: 'https://fiftyandfive.com/fractional-cmo',
                isPartOf: { '@id': 'https://fiftyandfive.com/#website' },
                about: { '@id': 'https://fiftyandfive.com/fractional-cmo#service' },
              },
              {
                '@type': 'Service',
                '@id': 'https://fiftyandfive.com/fractional-cmo#service',
                serviceType: 'Fractional CMO',
                category: 'Marketing Leadership',
                name: 'Fractional CMO',
                description:
                  'Senior marketing leadership for owner-operators doing $1M-20M. Strategy, oversight, and judgment on call.',
                provider: { '@id': 'https://fiftyandfive.com/#organization' },
                offers: {
                  '@type': 'Offer',
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    minPrice: '4000',
                    maxPrice: '6500',
                    priceCurrency: 'USD',
                  },
                  description:
                    '$4,000-$6,500 per month, scoped to your business, month to month. Projects priced separately.',
                },
                areaServed: [
                  { '@type': 'Country', name: 'United States' },
                  { '@type': 'Country', name: 'Canada' },
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

      {/* Hero */}
      <section className="container-edge pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          Fractional CMO
        </div>
        <AnimatedHeadline
          as="h1"
          text="Most fractional CMOs hand you a strategy and leave. Most agencies execute without one. We do both."
          className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-4xl"
          stagger={0.03}
        />
        <SimpleReveal delay={0.3}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-3xl leading-[1.7]">
            We run the function and own the number. The team runs the work. Strategy, budget,
            channel mix, agency oversight, and a coach for you and your team, so they get sharper
            instead of more dependent.
          </p>
        </SimpleReveal>
        <SimpleReveal delay={0.36}>
          <p className="mt-5 font-serif text-h3 tracking-[-0.015em] text-text-primary max-w-3xl">
            Most CMOs have run one brand. We&rsquo;ve led marketing for over 222.
          </p>
        </SimpleReveal>
        <SimpleReveal delay={0.44}>
          <div className="mt-10">
            <MagneticButton
              href={SITE.calendly}
              variant="primary"
              size="large"
              trackName="Fractional CMO Hero CTA"
            >
              Book a working session →
            </MagneticButton>
          </div>
        </SimpleReveal>
      </section>

      {/* Who this is for */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              Who this is for
            </div>
            <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
              Built on referrals. Buried in your own calendar.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-lg text-text-secondary leading-[1.75] max-w-2xl">
              You built a business on referrals and reputation, and marketing became the thing you
              do at 11pm. Your digital presence is ten years behind your work, and every hour you
              spend fixing it is an hour off running the business. You do not need a $200K CMO or
              another junior hire to manage. You need senior judgment on call, off your plate.
            </p>
          </div>
        </div>
      </section>

      {/* Who this is NOT for */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
              Who this is not for
            </div>
            <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
              Three kinds of company this isn&rsquo;t built for.
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-4 text-body-lg text-text-secondary leading-[1.6] max-w-2xl">
              <li>
                Pre-revenue or early-stage. The seat is built for $1M-20M operators with a real
                business to protect, not a startup still validating an idea.
              </li>
              <li>
                Anyone who wants to manage a marketer day to day. If you want to approve every
                post, hire a coordinator instead.
              </li>
              <li>
                Anyone who wants content volume without strategy. That is a retainer, not a seat.
                See <Link href="/services" className="text-accent hover:text-accent-light underline underline-offset-2">Services</Link> for that.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What a seat includes */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            The menu
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            What a seat includes.
          </h2>
        </div>
        <div className="mt-12 max-w-3xl space-y-4">
          {SEAT_MENU.map((item, i) => (
            <SimpleReveal key={item.when} delay={i * 0.06}>
              <div className="glass rounded-glass p-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <div className="font-mono text-caption uppercase text-accent tracking-[0.12em] sm:w-24 shrink-0">
                  {item.when}
                </div>
                <p className="text-body-lg text-text-primary">{item.what}</p>
              </div>
            </SimpleReveal>
          ))}
        </div>
      </section>

      {/* Why it works */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              Why it works
            </div>
            <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
              You get the strategy and the hands.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-lg text-text-secondary leading-[1.75] max-w-2xl">
              Most fractional CMOs hand you a plan and leave you to execute it. Most agencies
              execute without a plan. We own the number and run the function, and the team runs
              the work, so nothing falls in the gap between strategy and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="container-edge py-16 md:py-24">
        <SimpleReveal>
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Case study
          </div>
          <Link href="/blog/we-made-their-ads-worse" className="block group mt-4">
            <GlassCard className="p-8 md:p-12">
              <h2 className="font-serif text-h2 tracking-[-0.02em] max-w-3xl">
                We made their ads worse. Store revenue went up 156%.
              </h2>
              <p className="mt-4 text-body-lg text-text-secondary max-w-2xl leading-[1.7]">
                A DTC apparel brand was underwater on every ad dollar. We took the seat as a
                fractional CMO, not a media buyer, and fixed the revenue system instead of the ad
                account. Six weeks, same budget.
              </p>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
                <div>
                  <div className="font-serif text-h2 tracking-[-0.03em] text-text-primary">+156%</div>
                  <div className="mt-1 text-meta text-text-secondary">Store revenue</div>
                </div>
                <div>
                  <div className="font-serif text-h2 tracking-[-0.03em] text-text-primary">&minus;32%</div>
                  <div className="mt-1 text-meta text-text-secondary">Customer acquisition cost</div>
                </div>
                <div>
                  <div className="font-serif text-h2 tracking-[-0.03em] text-text-primary">+111%</div>
                  <div className="mt-1 text-meta text-text-secondary">Click-to-purchase</div>
                </div>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-meta text-accent group-hover:text-accent-light transition-colors">
                Read the case study
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </div>
            </GlassCard>
          </Link>
        </SimpleReveal>
      </section>

      {/* Pricing */}
      <section className="container-edge py-16 md:py-24">
        <div className="glass rounded-glass p-8 md:p-12 max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Pricing
          </div>
          <div className="mt-5 flex flex-wrap items-baseline gap-3">
            <span className="font-serif text-h1 tracking-[-0.03em] text-text-primary">$4,000-$6,500</span>
            <span className="text-body-lg text-text-secondary">
              /mo, scoped to your business and how much oversight you need. Month to month.
            </span>
          </div>
          <div className="mt-6 pt-6 border-t border-glass-border">
            <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
              Not included in the seat
            </div>
            <p className="mt-2 text-body text-text-secondary leading-[1.6]">
              Hands-on execution: content production, ad management, website builds. That is real
              work, priced and scoped separately so the seat stays strategic advice, not another
              vendor bill in disguise.
            </p>
          </div>
          <p className="mt-5 text-body-lg text-text-secondary leading-[1.7]">
            Projects (site rebuilds, ad management at scale) priced separately so the seat stays
            strategic.
          </p>
          <div className="mt-6 pt-6 border-t border-glass-border">
            <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
              The de-risker
            </div>
            <p className="mt-2 text-body text-text-secondary leading-[1.6]">
              No contract. Thirty days is the whole commitment. If the work is not earning its
              keep, you walk. No penalty, no hard feelings.
            </p>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-3 gap-5 max-w-3xl">
          {PROOF_STATS.map((s) => (
            <div key={s.label} className="border-t border-ink-black pt-4">
              <div className="font-serif text-h2 tracking-[-0.03em] text-text-primary">{s.stat}</div>
              <div className="mt-1 text-meta text-text-secondary">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
          {testimonials.map((t) => (
            <GlassCard key={t.author} className="h-full flex flex-col">
              <blockquote className="font-serif text-[20px] leading-[1.35] tracking-[-0.015em] text-text-primary flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatarSrc}
                  alt={t.author}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <div className="text-[14px] text-text-primary">{t.author}</div>
                  <div className="text-[13px] text-text-tertiary">{t.title}</div>
                </div>
              </div>
            </GlassCard>
          ))}
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

      {/* FAQPage schema */}
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

      {/* Close CTA */}
      <section className="container-edge py-20 md:py-28 text-center">
        <h2 className="font-serif text-h1 tracking-[-0.02em] text-text-primary max-w-3xl mx-auto">
          One conversation decides fit.
        </h2>
        <p className="mt-6 text-body-lg text-text-secondary max-w-2xl mx-auto">
          A 30-minute call. Your numbers, your bottleneck, and whether it makes sense. No
          deck, no pressure.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <MagneticButton
            href={SITE.calendly}
            variant="primary"
            size="large"
            trackName="Fractional CMO Close CTA"
          >
            Book a working session →
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
