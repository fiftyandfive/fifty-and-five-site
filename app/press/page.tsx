import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Press & Media',
  description:
    'Fifty & Five in the press. Featured in Moneywise, Clutch, Digital Agency Network, and Crunchbase. Expert commentary on AI, social media, and branded content.',
  alternates: { canonical: 'https://fiftyandfive.com/press' },
  openGraph: {
    title: 'Press & Media | Fifty & Five',
    description:
      'Fifty & Five in the press. Expert commentary on AI, social media, and branded content from a senior-led agency with 222+ brands since 2008.',
    url: 'https://fiftyandfive.com/press',
    type: 'website',
  },
};

const PRESS_MENTIONS = [
  {
    source: 'Moneywise',
    title: "Hollywood's $300K-to-$3K Problem Is Already Here for Branded Content",
    description:
      'Expert analysis of the Moneywise investigation into AI production cost collapse — and what it means for every brand still budgeting for traditional content shoots.',
    url: '/blog/hollywood-ai-production-costs-branded-content',
    type: 'Expert Commentary' as const,
    date: '2026',
  },
  {
    source: 'Clutch.co',
    title: '5.0/5.0 Rating — 18 Verified Client Reviews',
    description:
      'Verified reviews from Microsoft, Blaze Pizza, Barsha, StreetStrider, and other clients across 15+ verticals.',
    url: 'https://clutch.co/profile/fifty-five',
    type: 'Review Platform' as const,
    date: 'Ongoing',
  },
  {
    source: 'Digital Agency Network',
    title: 'Fifty & Five Agency Profile',
    description:
      'Listed among global social media agencies. Portfolio spanning Fortune 500 brands to boutique hospitality.',
    url: 'https://digitalagencynetwork.com/agency/fifty-five/',
    type: 'Directory' as const,
    date: 'Ongoing',
  },
  {
    source: 'Crunchbase',
    title: 'Fifty & Five Company Profile',
    description:
      'Company profile tracking 18 years of operation, Orlando HQ, and social media management focus.',
    url: 'https://www.crunchbase.com/organization/fifty-five-6144',
    type: 'Directory' as const,
    date: 'Ongoing',
  },
  {
    source: 'Agency Spotter',
    title: 'Fifty & Five Agency Profile',
    description:
      'Profiled as a boutique social media agency specializing in wine & spirits, hospitality, and franchise brands.',
    url: 'https://www.agencyspotter.com/fifty-five',
    type: 'Directory' as const,
    date: 'Ongoing',
  },
];

const THOUGHT_LEADERSHIP = [
  {
    title: "Hollywood's $300K-to-$3K Problem Is Already Here for Branded Content",
    description: 'Analysis of the Moneywise AI production cost investigation and its implications for brand content budgets.',
    href: '/blog/hollywood-ai-production-costs-branded-content',
    source: 'Citing Moneywise',
  },
  {
    title: 'Yelp Just Won the AI Local Discovery Race',
    description: 'Breakdown of 28M AI-generated responses showing Yelp earned 512,680 AI citations in Q4 2025.',
    href: '/blog/yelp-ai-local-discovery-citations',
    source: 'Citing Foundation Inc / AirOps',
  },
  {
    title: 'Best Social Media Agency for Hospitality & Resorts',
    description: 'What to look for in a hospitality social media partner — from an agency that has managed Resorts World, Polynesian Cultural Center, and 5 tourism boards.',
    href: '/blog/best-social-media-agency-hospitality-resorts',
    source: 'Original Research',
  },
];

export default function PressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fiftyandfive.com/' },
              { '@type': 'ListItem', position: 2, name: 'Press', item: 'https://fiftyandfive.com/press' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="container-edge pt-36 md:pt-44 pb-14">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          Press & Media
        </div>
        <AnimatedHeadline
          as="h1"
          text="In the press."
          className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-4xl"
        />
        <SimpleReveal delay={0.2}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-2xl">
            Media mentions, verified reviews, and expert commentary from
            18 years of managing social for 222+ brands.
          </p>
        </SimpleReveal>
      </section>

      {/* Press Mentions */}
      <section className="container-edge pb-20">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em] mb-8">
          Featured & Cited
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PRESS_MENTIONS.map((item) => {
            const isExternal = item.url.startsWith('http');
            const linkProps = isExternal
              ? { target: '_blank' as const, rel: 'noopener noreferrer' }
              : {};
            return (
              <SimpleReveal key={item.source}>
                <Link href={item.url} {...linkProps} className="block h-full group">
                  <GlassCard className="h-full flex flex-col p-7">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
                        {item.source}
                      </span>
                      <span className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-serif text-[22px] leading-[1.2] tracking-[-0.015em] text-text-primary group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-body text-text-secondary flex-1">
                      {item.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-meta text-accent group-hover:text-accent-light transition-colors">
                      {isExternal ? 'Visit' : 'Read'}
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        {isExternal ? '↗' : '→'}
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </SimpleReveal>
            );
          })}
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="container-edge pb-20 md:pb-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Thought Leadership
          </div>
          <AnimatedHeadline
            as="h2"
            text="Expert analysis, not press releases."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
          <p className="mt-6 text-body-lg text-text-secondary">
            Original research and expert commentary on the shifts
            shaping social media, AI, and brand marketing.
          </p>
        </div>
        <div className="mt-10 max-w-3xl space-y-5">
          {THOUGHT_LEADERSHIP.map((item) => (
            <SimpleReveal key={item.href}>
              <Link href={item.href} className="block group">
                <GlassCard className="p-7">
                  <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em] mb-3">
                    {item.source}
                  </div>
                  <h3 className="font-serif text-[22px] leading-[1.2] text-text-primary group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body text-text-secondary">
                    {item.description}
                  </p>
                </GlassCard>
              </Link>
            </SimpleReveal>
          ))}
        </div>
      </section>

      {/* Media Contact */}
      <section className="container-edge pb-20 md:pb-28">
        <div className="max-w-2xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Media Contact
          </div>
          <AnimatedHeadline
            as="h2"
            text="For press inquiries."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
          <p className="mt-6 text-body-lg text-text-secondary">
            Lucas Vandenberg is available for expert commentary on social media
            strategy, AI in marketing, answer engine optimization, and
            franchise/multi-location brand management.
          </p>
          <div className="mt-6 space-y-2 text-body text-text-secondary">
            <p>
              <span className="text-text-tertiary font-mono text-caption uppercase tracking-[0.1em]">Email</span>{' '}
              <a href="mailto:hello@fiftyandfive.com" className="text-accent hover:text-accent-light transition-colors">
                hello@fiftyandfive.com
              </a>
            </p>
            <p>
              <span className="text-text-tertiary font-mono text-caption uppercase tracking-[0.1em]">Phone</span>{' '}
              <a href={`tel:${SITE.phone.e164}`} className="text-accent hover:text-accent-light transition-colors">
                {SITE.phone.display}
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Want to work with us?"
        body="Senior-led social media management for brands that take it seriously."
        ctaLabel="Talk to our founder →"
      />
    </>
  );
}
