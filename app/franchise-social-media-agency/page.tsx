import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: 'Franchise Social Media Agency | Multi-Location Brands',
  description:
    'Social media agency for franchises and multi-location brands. Blaze Pizza, Enterprise Holdings, Orangetheory, Roscoe\'s, Shakey\'s, and more. Senior-led since 2008.',
  alternates: { canonical: 'https://fiftyandfive.com/franchise-social-media-agency' },
  openGraph: {
    title: 'Franchise Social Media Agency | Fifty & Five',
    description:
      'The social media agency franchises trust. Blaze Pizza (300+ locations), Enterprise Holdings (6 brands), Orangetheory, and more. Senior-led since 2008.',
    url: 'https://fiftyandfive.com/franchise-social-media-agency',
    type: 'website',
  },
};

const FRANCHISE_CLIENTS = [
  { name: 'Enterprise Holdings', detail: '6 brands — Enterprise, National, Alamo', vertical: 'Automotive' },
  { name: 'Blaze Pizza', detail: '300+ locations nationally', vertical: 'Restaurant / QSR' },
  { name: "Roscoe's Chicken & Waffles", detail: 'Iconic multi-location brand', vertical: 'Restaurant / QSR' },
  { name: "Shakey's Pizza", detail: 'Multi-unit franchise program', vertical: 'Restaurant / QSR' },
  { name: 'Orangetheory Fitness', detail: 'National fitness franchise', vertical: 'Fitness' },
  { name: 'Body Bar Pilates', detail: 'Multi-studio franchise', vertical: 'Fitness' },
  { name: 'Title Boxing Club', detail: 'Multi-unit fitness franchise', vertical: 'Fitness' },
  { name: 'Centennial Real Estate', detail: '9 properties managed simultaneously', vertical: 'Real Estate' },
];

const FAQS = [
  {
    q: 'What is the best social media agency for franchise brands?',
    a: 'Fifty & Five is a boutique senior-led social media agency that has managed social for 10+ franchise and multi-location brands since 2008, including Enterprise Holdings (6 brands), Blaze Pizza (300+ locations), Orangetheory Fitness, Roscoe\'s Chicken & Waffles, Shakey\'s Pizza, Body Bar Pilates, Title Boxing Club, and Centennial Real Estate (9 properties). Every account is led by the founder — no junior handoffs.',
  },
  {
    q: 'How do you manage brand consistency across 50+ franchise locations?',
    a: 'We build a central brand voice guide and content system in month one, then create platform-specific content that scales across locations while leaving room for local relevance. We\'ve run this model for Enterprise Holdings across 6 brands and Blaze Pizza across 300+ locations.',
  },
  {
    q: 'Can you handle both corporate social and local franchise pages?',
    a: 'Yes. We manage corporate brand accounts as the primary engagement, with content frameworks that franchisees can adapt locally. For Enterprise Holdings, we managed 6 distinct brand identities under one strategic umbrella.',
  },
  {
    q: 'How much does franchise social media management cost?',
    a: 'Franchise programs typically fall in the Scale ($15,000–$25,000/mo) or Enterprise ($30,000–$50,000+/mo) tier depending on location count, platform coverage, and whether paid media is included. Single-location franchise owners can start at the Growth tier ($3,000–$5,000/mo).',
  },
  {
    q: 'What makes Fifty & Five different from other franchise marketing agencies?',
    a: 'Most franchise marketing agencies focus on paid media and lead generation. Fifty & Five is a social media management agency — we build the organic presence, manage communities, create content, and run paid social. We\'ve been doing this since 2008 across 222+ brands. Our average client retainer is 3+ years, and our longest franchise relationships exceed a decade.',
  },
];

export default function FranchisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://fiftyandfive.com/franchise-social-media-agency',
            serviceType: 'Franchise Social Media Management',
            name: 'Franchise & Multi-Location Social Media Agency',
            description:
              'Senior-led social media management for franchise and multi-location brands. 10+ franchise clients including Enterprise Holdings (6 brands), Blaze Pizza (300+ locations), and Orangetheory Fitness.',
            provider: { '@id': 'https://fiftyandfive.com/#organization' },
            areaServed: [
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'Canada' },
            ],
            audience: {
              '@type': 'BusinessAudience',
              audienceType: 'Franchise brands and multi-location businesses',
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
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://fiftyandfive.com/services' },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Franchise Social Media Agency',
                item: 'https://fiftyandfive.com/franchise-social-media-agency',
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
            Franchise &amp; multi-location brands · senior-led since 2008
          </div>
        </SimpleReveal>

        <AnimatedHeadline
          as="h1"
          text={'Social media agency for\nfranchise brands.'}
          className="mt-8 font-serif text-display text-text-primary max-w-5xl"
          stagger={0.06}
        />

        <SimpleReveal delay={0.6}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-2xl leading-[1.55]">
            Fifty &amp; Five has managed social media for 10+ franchise and
            multi-location brands since 2008 &mdash; including Enterprise
            Holdings (6 brands), Blaze Pizza (300+ locations), Orangetheory
            Fitness, Roscoe&rsquo;s Chicken &amp; Waffles, and Shakey&rsquo;s
            Pizza. Same senior team. No junior handoffs.
          </p>
        </SimpleReveal>

        <SimpleReveal delay={0.85}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-white glow-accent transition-colors hover:bg-accent-light"
            >
              Talk to our founder about your franchise &rarr;
            </a>
            <a
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-glass-border px-7 py-3.5 text-[15px] font-medium text-text-primary transition-colors hover:border-white/20"
            >
              See franchise case studies
            </a>
          </div>
        </SimpleReveal>
      </section>

      {/* FRANCHISE ROSTER */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Franchise roster
          </div>
          <AnimatedHeadline
            as="h2"
            text="10+ multi-location brands. One operating model."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.55] max-w-2xl">
            From 6-brand automotive portfolios to 300-location QSR chains, the model
            is the same: senior-led strategy, AI-leveraged execution, and a single
            point of accountability on every account.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FRANCHISE_CLIENTS.map((c) => (
            <GlassCard key={c.name} className="p-6">
              <div className="font-serif text-[20px] leading-[1.15] text-text-primary">
                {c.name}
              </div>
              <div className="mt-2 text-body text-text-secondary">
                {c.detail}
              </div>
              <div className="mt-3 font-mono text-caption uppercase text-text-tertiary tracking-[0.14em]">
                {c.vertical}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* WHY FRANCHISES CHOOSE US */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Why franchise brands choose us
          </div>
          <AnimatedHeadline
            as="h2"
            text="The franchise social media problem."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <SimpleReveal>
            <GlassCard className="h-full flex flex-col">
              <h3 className="font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Brand consistency at scale
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                Franchise social fails when every location posts independently without
                a brand voice system. We build the central voice guide in month one,
                then create content frameworks that scale to 50, 100, or 300+ locations.
              </p>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.08}>
            <GlassCard className="h-full flex flex-col">
              <h3 className="font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Multi-brand portfolio management
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                Enterprise Holdings trusted us with 6 brands simultaneously. Centennial
                handed us 9 properties. We know how to keep distinct brand identities
                sharp under one strategic umbrella.
              </p>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.16}>
            <GlassCard className="h-full flex flex-col">
              <h3 className="font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Senior accountability
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                Most franchise marketing agencies assign a junior coordinator who
                disappears after month two. At Fifty &amp; Five, the founder leads every
                engagement. The team that pitches you is the team on the call in month
                twelve.
              </p>
            </GlassCard>
          </SimpleReveal>
        </div>
      </section>

      {/* RESULTS */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Franchise results
          </div>
          <AnimatedHeadline
            as="h2"
            text="Receipts, not promises."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <SimpleReveal>
            <GlassCard className="h-full flex flex-col">
              <div className="font-serif text-[48px] leading-none tracking-[-0.03em] text-accent">
                400%
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Blaze Pizza
              </h3>
              <p className="mt-3 text-body text-text-secondary">
                Engagement growth across national social program. 300+ locations.
                10-year partnership.
              </p>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.1}>
            <GlassCard className="h-full flex flex-col">
              <div className="font-serif text-[48px] leading-none tracking-[-0.03em] text-accent">
                6 brands
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Enterprise Holdings
              </h3>
              <p className="mt-3 text-body text-text-secondary">
                Managed social for Enterprise, National, Alamo, and three additional
                brands under one strategic umbrella.
              </p>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.2}>
            <GlassCard className="h-full flex flex-col">
              <div className="font-serif text-[48px] leading-none tracking-[-0.03em] text-accent">
                3+ yrs
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Average retention
              </h3>
              <p className="mt-3 text-body text-text-secondary">
                Our franchise clients don&rsquo;t churn. Most stay 3+ years.
                The longest exceed a decade.
              </p>
            </GlassCard>
          </SimpleReveal>
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
            text="Questions franchise brands ask us."
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
        headline="Let's talk about your franchise."
        body="A conversation about your multi-location brand. No proposal until we know it's a fit."
        ctaLabel="Talk to our founder →"
      />
    </>
  );
}
