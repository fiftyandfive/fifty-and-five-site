import Link from 'next/link';
import type { Metadata } from 'next';
import { SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { VerticalPill } from '@/components/ui/DurationBadge';
import { getCaseStudy, VERTICAL_COLOR_HEX } from '@/lib/data/caseStudies';
import { FACTS } from '@/lib/site-facts';
import { SITE } from '@/lib/constants';

// Role of this page: the local service page for businesses in Orlando and
// Central Florida hiring for social media. The Florida page covers statewide
// reach, the industry pages carry sector depth, and the fractional CMO pages
// cover marketing leadership. Copy here links out to those rather than
// repeating them.
//
// Facts only. Local clients are listed as clients the agency has had, not as
// current accounts, and the two documented local results are named for what
// they were (website and search work), not presented as social retainers.
// National and international work is labelled as such.

const URL = 'https://fiftyandfive.com/orlando-social-media-agency';
const DESCRIPTION =
  'Social media management, content, community, and paid social from a senior-led agency based in Orlando. 222 brands since 2008. Retainers from $4,000/mo.';

export const metadata: Metadata = {
  title: { absolute: 'Orlando Social Media Agency | Fifty & Five' },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    images: ['/opengraph-image'],
    title: 'Orlando Social Media Agency | Fifty & Five',
    description: DESCRIPTION,
    url: URL,
    type: 'website',
  },
};

const SERVICES = [
  {
    name: 'Social media strategy',
    text: 'Month one is discovery: the category, the competitive field, and the plan the next year runs on. If month one does not land, we do not continue, and you keep the work.',
  },
  {
    name: 'Social media management',
    text: 'Planning, scheduling, publishing, and monthly reporting across Instagram, Facebook, TikTok, LinkedIn, and X. A typical program runs 8 to 20 posts a month per platform.',
  },
  {
    name: 'Content creation',
    text: 'Platform-specific content with photography and video direction included, built for each channel rather than recycled from another one.',
  },
  {
    name: 'Community management',
    text: 'Comments, messages, and reputation handled by the team that knows the brand, so the reply sounds like you and not like a template.',
  },
  {
    name: 'Paid social',
    text: 'Meta, TikTok, and LinkedIn campaigns for brands running $10,000 or more a month in media. Management starts at $4,000 a month, with weekly reporting.',
  },
];

// Named on the site as Orlando and Central Florida clients. Not labelled as
// current: which of these are active today is an owner confirmation item.
const LOCAL_CLIENTS = [
  'BODYBar SoDo',
  'Solar Bears Orlando',
  'Andretti Indoor Karting',
  'Crafty Bartender',
  'Velocity Title',
  'Laser Lab',
  'Chance 2 Dance',
  'Landmark Contracting',
  'Central Florida Talent',
];

const INDUSTRIES = [
  {
    name: 'Restaurants',
    href: '/verticals/restaurant',
    anchor: 'restaurant social media',
    text: 'Our restaurant proof is national. We ran the Blaze Pizza social program, content strategy, and community management for ten years, starting four months before the first restaurant opened. The chain grew on its own food and operations; our job was the social program that ran alongside it. Other restaurant work includes Shakey’s Pizza, Wolfgang’s Steakhouse, and MidiCi.',
    caseHref: '/work/blaze-pizza',
    caseAnchor: 'Blaze Pizza case study',
  },
  {
    name: 'Hotels, resorts, and attractions',
    href: '/hospitality-social-media-agency',
    anchor: 'hotel and resort social media',
    text: 'Hotel and resort programs are built backwards from the booking window rather than the stay date. That experience comes from Resorts World and the Polynesian Cultural Center, not from Orlando properties. Locally, Solar Bears Orlando and Andretti Indoor Karting sell dated capacity, so the calendar starts from the soft dates, not from a content plan.',
    caseHref: '/work/resorts-world',
    caseAnchor: 'Resorts World case study',
  },
  {
    name: 'Wine and spirits',
    href: '/wine-social-media-marketing-agency',
    anchor: 'wine and spirits social media',
    text: `The deepest category on the roster: ${FACTS.wineSpiritsBrands} wine and spirits brands, including Kendall-Jackson and a ten year Gruppo Mezzacorona retainer across five portfolio brands, with alcohol compliance built into the calendar.`,
    caseHref: '/work/mezzacorona',
    caseAnchor: 'Mezzacorona case study',
  },
  {
    name: 'Fitness, entertainment, and retail',
    href: '/verticals/fitness-wellness',
    anchor: 'fitness and wellness social media',
    text: 'BODYBar SoDo, a boutique fitness studio, runs on the same operating model as the multi-location programs we manage, sized to one location. Consumer and retail experience includes Tupperware and Axe under Unilever.',
    caseHref: '/verticals/retail-cpg',
    caseAnchor: 'retail and CPG work',
  },
];

const PROCESS = [
  'A 30 minute working session about your business, not ours. You leave knowing whether there is a fit.',
  'A scoping conversation once we understand the problem well enough to price it honestly.',
  'A paid pilot within 14 days, on a real workstream, so you see how we operate before a retainer starts.',
  'Month one is discovery, then the program runs on a monthly strategy and reporting rhythm, with weekly reporting on paid media.',
];

const TIERS = [
  ['Growth', '$4,000 to $6,500', 'Strategy, managed calendar, original creative, community, reporting'],
  ['Premium', '$7,500 to $12,000', 'More platforms and content volume, paid media oversight layered in'],
  ['Scale', '$15,000 to $25,000', 'Multi location or multi market programs'],
  ['Enterprise', '$30,000 to $50,000+', 'Portfolios, sub brands, and always on programs'],
];

const CASE_SLUGS = ['blaze-pizza', 'resorts-world', 'polynesian-cultural-center', 'central-florida-talent'];

const FAQS = [
  {
    q: 'Where is Fifty & Five based, and do you only work with Orlando businesses?',
    a: `Fifty & Five is based at ${FACTS.address.streetAddress} in Orlando and works with businesses across Central Florida. Most of the roster is not local: the agency has run social media for ${FACTS.brandsManaged} brands across ${FACTS.continents} continents since ${FACTS.founded}. Orlando clients get the same senior team, plus the option to meet in person.`,
  },
  {
    q: 'What does social media management from Fifty & Five include?',
    a: 'Strategy, a managed content calendar, content creation with photography and video direction, publishing, community management, and monthly reporting across Instagram, Facebook, TikTok, LinkedIn, and X. Paid social on Meta, TikTok, and LinkedIn can be added or run on its own.',
  },
  {
    q: 'How much does a social media agency cost in Orlando?',
    a: 'Fifty & Five retainers start at $4,000 per month and run in four tiers: Growth at $4,000 to $6,500, Premium at $7,500 to $12,000, Scale at $15,000 to $25,000, and Enterprise at $30,000 to $50,000 or more. Engagements run month to month with 30 days notice. Scope sets the tier.',
  },
  {
    q: 'Which Orlando and Central Florida businesses has Fifty & Five worked with?',
    a: 'Orlando and Central Florida clients have included BODYBar SoDo, Solar Bears Orlando, Andretti Indoor Karting, Crafty Bartender, Velocity Title, Laser Lab, and Chance 2 Dance. Two documented local engagements were website and search work rather than social retainers: Landmark Contracting, where a rebuilt site produced four requests for quote in its first two weeks, and Central Florida Talent.',
  },
  {
    q: 'Do you manage social media for Orlando restaurants?',
    a: 'Yes. Restaurant work to date is national rather than local: a ten year social program for Blaze Pizza, plus Shakey’s Pizza, Wolfgang’s Steakhouse, and MidiCi. The same approach applies to an Orlando restaurant or group: content built around what fills seats and drives orders, and community management that treats reviews and messages as service.',
  },
  {
    q: 'Do you work with Orlando hotels, resorts, and attractions?',
    a: 'Yes. Hospitality experience comes from Resorts World and the Polynesian Cultural Center, and destination work for the Hong Kong, Korea, and Macau tourism boards. None of those are Orlando properties. Locally, Solar Bears Orlando and Andretti Indoor Karting are entertainment venues where the calendar is set by dated events and soft dates.',
  },
  {
    q: 'What does senior-led mean for my account?',
    a: 'The people who pitch you are the people who run the work. There is no junior account manager between you and the strategy, and founder Lucas Vandenberg is involved in every engagement. That is also why the retainer floor is $4,000 a month.',
  },
  {
    q: 'Can an Orlando brand hire Fifty & Five for CPG and retail advertising?',
    a: 'Yes. Consumer and retail advertising experience includes Tupperware, Axe under Unilever, Toys R Us, Pelican Products, Happy Egg Co., and Saint Jane Beauty. Brands selling direct and through retail get two measured lines under one creative platform.',
  },
  {
    q: 'How quickly can we start?',
    a: 'Book a 30 minute working session or send a note, and expect a same-day reply in most cases. If there is a fit, a paid pilot can start within 14 days.',
  },
];

const link = 'text-accent hover:text-accent-light underline underline-offset-2';

export default function OrlandoLandingPage() {
  const cases = CASE_SLUGS.map((s) => getCaseStudy(s)).filter(Boolean).map((c) => c!);

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
                '@id': URL,
                url: URL,
                name: 'Orlando Social Media Agency | Fifty & Five',
                description: DESCRIPTION,
                dateModified: '2026-09-24',
                isPartOf: { '@id': 'https://fiftyandfive.com/#website' },
                about: { '@id': `${URL}#service` },
              },
              {
                '@type': 'Service',
                '@id': `${URL}#service`,
                serviceType: 'Social media marketing',
                name: 'Social media marketing agency in Orlando',
                description:
                  'Social media strategy, management, content creation, community management, and paid social for businesses in Orlando and Central Florida.',
                provider: { '@id': 'https://fiftyandfive.com/#organization' },
                areaServed: [
                  { '@type': 'City', name: 'Orlando' },
                  { '@type': 'Place', name: 'Central Florida' },
                ],
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Social media services',
                  itemListElement: SERVICES.map((s) => ({
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: s.name, description: s.text },
                  })),
                },
                offers: {
                  '@type': 'Offer',
                  priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    minPrice: 4000,
                    priceCurrency: 'USD',
                    unitText: 'MONTH',
                  },
                },
              },
            ],
          }),
        }}
      />
      <BreadcrumbSchema trail={[{ name: 'Orlando Social Media Agency', path: '/orlando-social-media-agency' }]} />
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

      {/* HERO. A plain server-rendered H1: the animated headline component
          ships each word at opacity 0 until JavaScript runs. */}
      <section className="container-edge pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          Based in Orlando, FL &middot; Serving Central Florida
        </div>
        <h1 className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-4xl">
          Social Media Marketing Agency in Orlando
        </h1>
        <p className="mt-6 text-body-lg text-text-secondary max-w-3xl leading-[1.7]">
          Fifty &amp; Five is a boutique, senior-led agency at 1001 N Orange Ave. Businesses in
          Orlando and across Central Florida hire us for social media strategy, day to day
          management, content creation, community management, and paid social, run by the same
          team that has handled social for {FACTS.brandsManaged} brands across{' '}
          {FACTS.continents} continents since {FACTS.founded}.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton href="/contact" variant="primary" size="large" trackName="Orlando CTA, Let's Talk">
            Book a working session &rarr;
          </MagneticButton>
          <MagneticButton href="#case-studies" variant="secondary" size="large" trackName="Orlando CTA, See the Work">
            See case studies
          </MagneticButton>
        </div>
        <p className="mt-8 text-body text-text-secondary max-w-3xl leading-[1.65]">
          Nationally, the roster includes Microsoft, Kendall-Jackson, Enterprise Holdings, and a
          ten year program for Blaze Pizza. Here, clients have included BODYBar SoDo, Solar Bears
          Orlando, and Andretti Indoor Karting.
        </p>
      </section>

      {/* SERVICES */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            What you can hire us for
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Social media management, content, and paid social under one senior team.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <GlassCard key={s.name} className="p-7 h-full">
              <h3 className="font-serif text-[22px] leading-[1.2] text-text-primary">{s.name}</h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.6]">{s.text}</p>
            </GlassCard>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-body text-text-secondary leading-[1.65]">
          Full scope, tiers, and the operating model are on the{' '}
          <Link href="/services" className={link}>services page</Link>. If the gap is marketing
          leadership rather than execution, see the{' '}
          <Link href="/fractional-cmo-orlando" className={link}>fractional CMO seat in Orlando</Link>.
        </p>
      </section>

      {/* SENIOR LEADERSHIP */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              Who does the work
            </div>
            <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
              A boutique agency, run by the people you meet.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 max-w-2xl">
            <p className="text-body-lg text-text-secondary leading-[1.75]">
              Every engagement is led by senior leadership. The team that pitches you is the team
              on the Tuesday call in month seven, and there is no junior account manager in
              between. Founder {FACTS.founder} is involved in every account.
            </p>
            <p className="text-body-lg text-text-secondary leading-[1.75]">
              Being a boutique means a short line to the person making decisions. Orlando clients
              can sit down with that person, and {FACTS.founder.split(' ')[0]} serves on the SoDo
              Main Street Board here. It also sets the price: a senior team cannot be staffed on a
              small retainer, which is why retainers start at $4,000 a month.
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL WORK */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Orlando and Central Florida
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">Local clients and local results.</h2>
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.75]">
            Orlando and Central Florida clients have included:
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
          {LOCAL_CLIENTS.map((c) => (
            <li key={c} className="glass rounded-glass px-5 py-4 font-serif text-[19px] leading-[1.2] text-text-primary">
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-10 max-w-3xl space-y-6">
          <p className="text-body-lg text-text-secondary leading-[1.75]">
            The two local engagements with documented outcomes were website and search work, not
            social retainers. Landmark Contracting, a Central Florida general contractor, had a
            site that produced one request for quote in ten years; after we took the fractional CMO
            seat and rebuilt it, four arrived in the first two weeks. For{' '}
            <Link href="/work/central-florida-talent" className={link}>Central Florida Talent</Link>,
            we built a site designed to be found and cited by search engines and AI assistants.
          </p>
          <p className="text-body-lg text-text-secondary leading-[1.75]">
            Everything else on this page labelled national or international is exactly that. We
            would rather you know which experience is local before you hire us.
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Industry depth
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            The categories Orlando businesses ask us about most.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {INDUSTRIES.map((i) => (
            <GlassCard key={i.name} className="p-8 h-full">
              <h3 className="font-serif text-[24px] leading-[1.2] text-text-primary">{i.name}</h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.65]">{i.text}</p>
              <p className="mt-5 text-meta text-text-secondary">
                More on <Link href={i.href} className={link}>{i.anchor}</Link> &middot;{' '}
                <Link href={i.caseHref} className={link}>{i.caseAnchor}</Link>
              </p>
            </GlassCard>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-body text-text-secondary leading-[1.65]">
          Working statewide? The{' '}
          <Link href="/social-media-marketing-agency-florida" className={link}>Florida social media agency</Link>{' '}
          page covers service beyond Central Florida.
        </p>
      </section>

      {/* PROCESS + REPORTING */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            How it works
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">From first call to monthly reporting.</h2>
        </div>
        <ol className="mt-10 max-w-3xl space-y-4 list-decimal pl-6 marker:text-accent">
          {PROCESS.map((p) => (
            <li key={p} className="text-body-lg text-text-secondary leading-[1.7] pl-2">
              {p}
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-body-lg text-text-secondary leading-[1.75]">
          Reporting covers the numbers that matter to the business, including acquisition cost,
          customer value, and attribution, alongside the brand health the program is building.
          Both get reported, and neither gets traded away to flatter the other.
        </p>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="container-edge py-16 md:py-24 scroll-mt-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Case studies
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">Work you can read in full.</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr">
          {cases.map((cs) => (
            <Link key={cs.slug} href={`/work/${cs.slug}`} className="block h-full group">
              <GlassCard padded={false} className="h-full flex overflow-hidden">
                <div
                  className="w-1.5 shrink-0 self-stretch"
                  style={{ background: VERTICAL_COLOR_HEX[cs.verticalColor] ?? '#C41E3A' }}
                  aria-hidden
                />
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <VerticalPill label={cs.verticalLabel} colorKey={cs.verticalColor} />
                    <span className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
                      {cs.slug === 'central-florida-talent' ? 'Central Florida' : 'National work'}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-[26px] leading-[1.1] tracking-[-0.02em]">{cs.client}</h3>
                  <p className="mt-3 text-body text-text-secondary flex-1">{cs.tagline}</p>
                  <div className="mt-5 text-meta text-accent group-hover:text-accent-light transition-colors">
                    Read the case study &rarr;
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Pricing
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">Published, not quoted on request.</h2>
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.75]">
            Retainers run in four tiers, and scope decides the tier. Engagements are month to
            month with 30 days notice.
          </p>
        </div>
        <div className="mt-10 max-w-3xl overflow-x-auto">
          <table className="w-full text-left text-body text-text-secondary">
            <thead>
              <tr className="border-b border-glass-border">
                <th className="py-3 pr-4 font-mono text-caption uppercase tracking-[0.12em] text-text-tertiary">Tier</th>
                <th className="py-3 pr-4 font-mono text-caption uppercase tracking-[0.12em] text-text-tertiary">Monthly</th>
                <th className="hidden sm:table-cell py-3 font-mono text-caption uppercase tracking-[0.12em] text-text-tertiary">Shape of the work</th>
              </tr>
            </thead>
            <tbody>
              {TIERS.map(([tier, range, shape]) => (
                <tr key={tier} className="border-b border-glass-border align-top">
                  <td className="py-4 pr-4 text-text-primary">
                    {tier}
                    {/* On narrow screens the third column folds under the tier name. */}
                    <span className="mt-1 block sm:hidden text-meta text-text-secondary">{shape}</span>
                  </td>
                  <td className="py-4 pr-4 whitespace-nowrap">{range}</td>
                  <td className="hidden sm:table-cell py-4">{shape}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Frequently asked
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Questions Orlando businesses ask before hiring us.
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
        <SimpleReveal>
          <p className="mt-10 max-w-3xl text-body text-text-secondary leading-[1.65]">
            Prefer the phone? Call{' '}
            <a href={`tel:${SITE.phone.e164}`} className={link}>{SITE.phone.display}</a>.
          </p>
        </SimpleReveal>
      </section>

      <CTASection
        headline="Talk to the team that would run it."
        body="A 30 minute working session about your business. No deck, and no proposal until we know it is a fit."
        ctaLabel="Book a working session →"
      />
    </>
  );
}
