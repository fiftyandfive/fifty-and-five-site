import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CASE_STUDIES } from '@/lib/data/caseStudies';
import { PRICING, SITE } from '@/lib/constants';
import { FACTS } from '@/lib/site-facts';

export const metadata: Metadata = {
  title: { absolute: 'Fractional CMO for $1M to $20M Companies | Fifty & Five' },
  description:
    'Senior marketing leadership for owner-operators doing $1M-20M. From $4,000/mo, month to month. We run the function and own the number, backed by 222+ brands.',
  alternates: {
    canonical: 'https://fiftyandfive.com/fractional-cmo',
  },
  openGraph: {
    images: ['/opengraph-image'],
    title: 'Fractional CMO for $1M to $20M Companies | Fifty & Five',
    description:
      'Senior marketing leadership for owner-operators doing $1M-20M. From $4,000/mo, month to month. We run the function and own the number, backed by 222+ brands.',
    url: 'https://fiftyandfive.com/fractional-cmo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CMO for $1M to $20M Companies | Fifty & Five',
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
    a: 'You could. A real CMO runs $200K+. A coordinator runs $65K and still needs managing. A seat gives you senior judgment on call, at a fraction of the cost.',
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
    q: 'What does a fractional CMO actually do?',
    a: 'A fractional CMO sets marketing strategy, budget, and channel priorities on a part-time basis and stays accountable for the result, without becoming a full-time hire. In practice that is a monthly strategy session, a written brief covering what moved and what is next, one prioritized recommendation scoped and ready to execute, and direct access in between. Hands-on execution is priced separately so the seat stays strategic.',
  },
  {
    q: 'How much does a fractional CMO cost compared to a full-time CMO?',
    a: 'A full-time CMO runs $200,000 or more per year before benefits, bonus, and equity. A fractional CMO seat starts at $4,000 per month on a month-to-month basis with 30 days notice. The seat is not just cheaper, it is a different shape: you are buying senior judgment and accountability rather than headcount you have to manage, onboard, and eventually replace.',
  },
  {
    q: 'What size company needs a fractional CMO?',
    a: 'Owner-operated companies doing roughly $1M to $20M in annual revenue are the best fit. Below $1M, the founder can usually still hold marketing themselves. Above $20M, most companies have the budget and the workload to justify a full-time CMO and an in-house team. In between is where marketing run on instinct starts costing real money and a full executive hire is still hard to fill.',
  },
  {
    q: 'Is a fractional CMO better than an agency?',
    a: 'They solve different problems. An agency gives you a team and production capacity: content, campaigns, paid media. A fractional CMO gives you senior strategy and ownership of the number, without embedded execution. Many companies use both, with the seat setting strategy and an agency or in-house coordinator executing it. If you already have a plan and just need more of it shipped, you want the retainer, not the seat.',
  },
  {
    q: 'Why hire Fifty & Five instead of a fractional CMO?',
    a: 'Most fractional CMOs hand you a strategy and leave. Most agencies execute without one. Fifty & Five does both: senior marketing leadership that owns the number, plus the team that runs the work. A CMO typically runs one brand over a career. Fifty & Five has led marketing for 222+ brands across five continents since 2008.',
  },
];

const SEVEN_SIGNS = [
  { sign: 'Marketing happens after hours, not during them', why: 'If strategy gets decided at 11pm because it never made the calendar during business hours, that is a resourcing problem, not a discipline problem.' },
  { sign: 'You are comparing a $200K salary to doing nothing', why: 'Those are rarely the only two options, but they are the only two most owners have priced out.' },
  { sign: 'Your digital presence is ten years behind your work', why: 'Referral-built businesses are prone to this. The work is excellent and nobody with senior marketing judgment has owned the storefront.' },
  { sign: 'You have a marketing person, but no marketing direction', why: 'A coordinator can execute. Most cannot set strategy, and should not be asked to. The gap is seniority, not headcount.' },
  { sign: 'You want strategy, not another person to manage', why: 'Hiring in-house means onboarding, managing, and eventually replacing someone. The seat is built to skip that.' },
  { sign: 'You are doing $1M to $20M in revenue', why: 'Below that, the founder can usually still hold marketing. Above $20M, most companies can staff a full team. In between is where the seat earns its cost.' },
  { sign: 'You want the option to walk away', why: 'A full-time hire is a long commitment either way it goes. Month to month with 30 days notice is a different kind of bet.' },
];

const COST_COMPARISON = [
  { option: 'Full-time CMO', cost: '$200,000+ per year', get: 'Full ownership and senior strategy, plus a fixed cost and a hire to manage', fits: 'Companies past roughly $20M' },
  { option: 'Marketing coordinator', cost: 'About $65,000 per year', get: 'Execution capacity. A coordinator runs a plan, they do not set one', fits: 'Any of the above, once someone senior sets direction' },
  { option: 'Agency retainer', cost: 'From $4,000 per month', get: 'A team and production capacity: content, campaigns, paid media', fits: 'When you need volume shipped' },
  { option: 'Fractional CMO seat', cost: 'From $4,000 per month', get: 'Senior strategy and accountability on call, with no headcount to manage', fits: '$1M to $20M owner-operators' },
];

const REVENUE_BANDS = [
  { band: '$1M to $3M', what: 'The founder is still the marketing department. The seat buys back the 11pm shift and puts one prioritized move in front of you each month instead of ten half-finished ones.' },
  { band: '$3M to $10M', what: 'There is usually a coordinator or an agency, and nobody senior directing either. The seat sets the plan, holds the vendors to it, and builds the scoreboard.' },
  { band: '$10M to $20M', what: 'Budget is real enough that the wrong channel mix costs six figures a year. The seat owns budget allocation and the decision of what to stop doing.' },
  { band: 'Above $20M', what: 'Most companies here can justify a full-time CMO and an in-house team. We will tell you that rather than sell you a seat you have outgrown.' },
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
                name: 'Fractional CMO for $1M to $20M Companies | Fifty & Five',
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
                    minPrice: String(PRICING.fractionalCmo.min),
                    priceCurrency: 'USD',
                  },
                  description:
                    `${PRICING.fractionalCmo.from.replace('/mo', ' per month')}, scoped to your business, month to month. Projects priced separately.`,
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

      {/* Seven signs */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            The signs
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Do you need a fractional CMO? Seven signs
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.75]">
            You need a fractional CMO when nobody senior owns where marketing goes next and the
            business is large enough that guessing costs real money. If two or more of these sound
            like your company, the seat is worth a conversation.
          </p>
        </div>
        <div className="mt-12 max-w-3xl space-y-4">
          {SEVEN_SIGNS.map((s, i) => (
            <SimpleReveal key={s.sign} delay={Math.min(i * 0.05, 0.3)}>
              <div className="glass rounded-glass p-6 flex gap-5">
                <div className="font-serif text-h3 tracking-[-0.03em] text-accent shrink-0 w-8">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-serif text-[21px] leading-[1.25] text-text-primary">{s.sign}</h3>
                  <p className="mt-2 text-body text-text-secondary leading-[1.6]">{s.why}</p>
                </div>
              </div>
            </SimpleReveal>
          ))}
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

      {/* Revenue bands */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Fit by size
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Fractional CMO for companies doing $1M to $20M
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.75]">
            The seat is built for owner-operated companies between $1M and $20M in revenue, and
            what it does changes across that range. Here is what the job actually looks like at
            each size.
          </p>
        </div>
        <div className="mt-12 max-w-3xl space-y-4">
          {REVENUE_BANDS.map((b, i) => (
            <SimpleReveal key={b.band} delay={Math.min(i * 0.06, 0.3)}>
              <div className="glass rounded-glass p-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <div className="font-mono text-caption uppercase text-accent tracking-[0.12em] sm:w-32 shrink-0">
                  {b.band}
                </div>
                <p className="text-body text-text-secondary leading-[1.6]">{b.what}</p>
              </div>
            </SimpleReveal>
          ))}
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

      {/* Case studies */}
      <section className="container-edge py-16 md:py-24">
        <SimpleReveal>
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Case studies
          </div>
        </SimpleReveal>
        <div className="mt-4 grid grid-cols-1 gap-6">
          <SimpleReveal>
            <Link href="/blog/we-made-their-ads-worse" className="block group">
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
                  Read the case study, now with a July update
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
          <SimpleReveal delay={0.08}>
            <Link href="/blog/landmark-contracting-website-rebuild-fractional-cmo" className="block group">
              <GlassCard className="p-8 md:p-12">
                <h2 className="font-serif text-h2 tracking-[-0.02em] max-w-3xl">
                  One lead in ten years. Four in the first two weeks.
                </h2>
                <p className="mt-4 text-body-lg text-text-secondary max-w-2xl leading-[1.7]">
                  A general contractor&rsquo;s decade-old WordPress site was the actual bottleneck,
                  not ad spend or content volume. We took the seat, rebuilt the site as the first
                  move, and the results showed up in two weeks.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6 max-w-2xl">
                  <div>
                    <div className="font-serif text-h2 tracking-[-0.03em] text-text-primary">1</div>
                    <div className="mt-1 text-meta text-text-secondary">Requests for quote, 10 years, old site</div>
                  </div>
                  <div>
                    <div className="font-serif text-h2 tracking-[-0.03em] text-text-primary">4</div>
                    <div className="mt-1 text-meta text-text-secondary">Requests for quote, first 2 weeks, new site</div>
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
        </div>
      </section>

      {/* Cost comparison */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            The comparison
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Fractional CMO vs full-time CMO vs agency: the real cost
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.75]">
            A full-time CMO runs $200,000 or more per year before benefits, bonus, and equity. A
            fractional CMO seat starts at $4,000 per month. The point is not that the seat is
            cheaper, it is that it is the right shape for a company that needs senior direction
            without needing a full-time executive.
          </p>
        </div>
        <div className="mt-10 max-w-4xl overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                {['Option', 'Cost', 'What you get', 'Best fit'].map((h) => (
                  <th
                    key={h}
                    className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em] pb-3 pr-5 border-b border-glass-border align-bottom"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COST_COMPARISON.map((r) => (
                <tr key={r.option}>
                  <td className="py-4 pr-5 border-b border-glass-border align-top text-body text-text-primary font-medium">
                    {r.option}
                  </td>
                  <td className="py-4 pr-5 border-b border-glass-border align-top text-body text-text-primary whitespace-nowrap">
                    {r.cost}
                  </td>
                  <td className="py-4 pr-5 border-b border-glass-border align-top text-body text-text-secondary">
                    {r.get}
                  </td>
                  <td className="py-4 border-b border-glass-border align-top text-body text-text-secondary">
                    {r.fits}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl text-body text-text-secondary leading-[1.65]">
          None of these are mutually exclusive. The setup we see work most often is a seat setting
          strategy, a coordinator or agency executing it, and the owner finally out of the 11pm
          marketing shift.
        </p>
      </section>

      {/* Pricing */}
      <section className="container-edge py-16 md:py-24">
        <div className="glass rounded-glass p-8 md:p-12 max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Pricing
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            What a fractional CMO costs
          </h2>
          <div className="mt-5 flex flex-wrap items-baseline gap-3">
            <span className="font-serif text-h1 tracking-[-0.03em] text-text-primary">From {PRICING.fractionalCmo.display}</span>
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
          <div className="mt-6 pt-6 border-t border-glass-border">
            <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
              Why the seat is capped
            </div>
            <p className="mt-2 text-body text-text-secondary leading-[1.6]">
              We hold a maximum of three seats at a time. Senior attention does not scale past
              that without becoming the exact problem a fractional seat is supposed to solve.
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

      {/* By industry */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            By category
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Fractional CMO by industry
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.75]">
            The seat is the same in every category. What changes is how much of the first quarter
            goes to learning your rules instead of fixing your bottleneck. Three categories where
            we start on day one instead of month seven.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <SimpleReveal>
            <GlassCard className="h-full flex flex-col p-7">
              <h3 className="font-serif text-[22px] leading-[1.2] text-text-primary">Hospitality and resorts</h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.6] flex-1">
                Hospitality sells a specific place, not a category, and it runs on seasons a
                generalist has to be taught. We have run social for Resorts World and the
                Polynesian Cultural Center.
              </p>
              <Link href="/blog/fractional-cmo-wine-hospitality-brands" className="mt-5 text-meta text-accent hover:text-accent-light">
                A fractional CMO for hospitality &rarr;
              </Link>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.08}>
            <GlassCard className="h-full flex flex-col p-7">
              <h3 className="font-serif text-[22px] leading-[1.2] text-text-primary">Wine and spirits</h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.6] flex-1">
                Three-tier compliance and age-gating shape every post before creative does. The
                founder built the first marketing department at Southern Wine &amp; Spirits before
                starting the agency.
              </p>
              <Link href="/blog/fractional-cmo-wine-hospitality-brands" className="mt-5 text-meta text-accent hover:text-accent-light">
                A fractional CMO for wine brands &rarr;
              </Link>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.16}>
            <GlassCard className="h-full flex flex-col p-7">
              <h3 className="font-serif text-[22px] leading-[1.2] text-text-primary">Franchise and multi-location</h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.6] flex-1">
                The problem is rarely content. It is that nobody has written down who is allowed to
                decide what. Blaze Pizza ran ten years to 300+ locations on that framework.
              </p>
              <Link href="/blog/fractional-cmo-for-franchise-and-multi-location-brands" className="mt-5 text-meta text-accent hover:text-accent-light">
                A fractional CMO at franchise scale &rarr;
              </Link>
            </GlassCard>
          </SimpleReveal>
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

      {/* Orlando seat */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Local seat
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Fractional CMO in Orlando
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.75]">
            Fifty &amp; Five is based in Orlando, and the founder takes a small number of Central
            Florida owner-operators as fractional CMO clients in person.
            If you are in Orlando, Winter Park, or Lake Nona, start with the{' '}
            <Link href="/fractional-cmo-orlando" className="text-accent hover:text-accent-light underline underline-offset-2">
              Fractional CMO Orlando
            </Link>{' '}
            page.
          </p>
        </div>
      </section>

      {/* Close CTA */}
      <section className="container-edge py-20 md:py-28 text-center">
        <h2 className="font-serif text-h1 tracking-[-0.02em] text-text-primary max-w-3xl mx-auto">
          One conversation decides fit.
        </h2>
        <p className="mt-6 text-body-lg text-text-secondary max-w-2xl mx-auto">
          A 30-minute call. Your numbers, your bottleneck, and whether it makes sense. No
          deck, no pressure.
        </p>
        <p className="mt-3 text-meta text-text-tertiary">
          Based in Central Florida?{' '}
          <Link href="/fractional-cmo-orlando" className="text-accent hover:text-accent-light underline underline-offset-2">
            Meet the operator behind the seat
          </Link>.
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
