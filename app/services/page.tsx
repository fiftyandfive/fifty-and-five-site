import type { Metadata } from 'next';
import Link from 'next/link';
import { SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { CTASection } from '@/components/layout/CTASection';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services · Four Practices · Fifty & Five',
  description:
    'Organic social, paid social, content production, brand strategy. AI as leverage. Senior judgment as the product. Retainers from $1.5K–$50K+/mo.',
  alternates: { canonical: 'https://fiftyandfive.com/services' },
  openGraph: {
    title: 'Services · Four Practices · Fifty & Five',
    description: 'Organic social, paid social, content production, brand strategy. AI as leverage. Senior judgment as the product. Retainers from $1.5K–$50K+/mo.',
    url: 'https://fiftyandfive.com/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services · Four Practices · Fifty & Five',
    description: 'Organic social, paid social, content production, brand strategy. AI as leverage. Senior judgment as the product. Retainers from $1.5K–$50K+/mo.',
  },
};

const PRACTICES = [
  {
    number: '01',
    name: 'Organic Social',
    body: 'Full-stack management across Instagram, TikTok, LinkedIn, X, YouTube. Strategy, content calendars, community management, monthly receipts. The same principal team every month — month seven looks like month one.',
  },
  {
    number: '02',
    name: 'Paid Social',
    body: 'Meta, TikTok, LinkedIn ad management for brands spending $1K–$25K/mo. Creative, targeting, optimization, transparent reporting. No hidden fees on ad spend. Every dollar accounted for.',
  },
  {
    number: '03',
    name: 'Content Production',
    body: 'Photo, video, design — AI-augmented where it speeds the work, principal-led where craft matters. Platform-native content, not blog posts reformatted for Instagram.',
  },
  {
    number: '04',
    name: 'Brand Strategy',
    body: 'Positioning, messaging, GTM. Strategic spine the next year hangs from. Cultural positioning analysis included by default — Hispanic, multicultural growth markets mapped on day one.',
  },
];

const RETAINER_TIERS = [
  { tier: 'STUDIO', range: '$1.5K–$2.5K', anchor: 'Boutique pilates · indie restaurants · neighborhood retail' },
  { tier: 'GROWTH', range: '$3K–$5K', anchor: 'Wine & spirits · mid-tier hospitality · lifestyle apparel' },
  { tier: 'PREMIUM', range: '$6K–$10K', anchor: 'Multi-year wine portfolios · regional CPG · resort & destination' },
  { tier: 'SCALE', range: '$15K–$25K', anchor: 'National restaurant programs · multi-unit franchise' },
  { tier: 'ENTERPRISE', range: '$30K–$50K+', anchor: 'Fortune 500 always-on · multi-brand portfolios' },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-content pt-36 md:pt-44 pb-16">
        <div className="font-receipt text-[12px] uppercase tracking-[0.15em] text-ff-stamp">
          Services
        </div>
        <h1 className="mt-6 font-editorial text-display text-ff-paper max-w-4xl">
          Four practices.<br />
          Senior judgment.<br />
          AI as leverage.
        </h1>
        <SimpleReveal delay={0.2}>
          <p className="mt-6 text-body-lg text-ff-fade-50 max-w-2xl">
            We compress 40-hour weeks into 4. The savings stay with the client — as margin
            or as velocity. AI eats the junior hour. Senior judgment keeps the work.
          </p>
        </SimpleReveal>
        <SimpleReveal delay={0.3}>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-ff-stamp text-ff-paper font-receipt text-[14px] uppercase tracking-[0.05em] px-8 py-4 rounded hover:opacity-90 transition-opacity"
          >
            {SITE.cta}
          </Link>
        </SimpleReveal>
      </section>

      {/* FOUR PRACTICES */}
      <section className="container-content pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PRACTICES.map((p, i) => (
            <SimpleReveal key={p.number} delay={i * 0.08} className="h-full">
              <div className="h-full border-t border-b border-ff-fade-30 py-8 px-6 md:px-8">
                <div className="font-receipt text-[12px] uppercase tracking-[0.12em] text-ff-stamp">
                  PRACTICE {p.number}
                </div>
                <h2 className="mt-4 font-editorial text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.02em] text-ff-paper">
                  {p.name}
                </h2>
                <p className="mt-4 text-body text-ff-fade-50 leading-[1.6]">
                  {p.body}
                </p>
              </div>
            </SimpleReveal>
          ))}
        </div>
      </section>

      {/* RETAINER LADDER */}
      <section className="container-content py-24 md:py-32">
        <hr className="receipt-divider mb-10" />
        <div className="font-receipt text-[12px] uppercase tracking-[0.15em] text-ff-stamp">
          THE RETAINER LADDER
        </div>
        <p className="mt-4 text-body text-ff-fade-50 max-w-2xl">
          The 60-Day Receipt is our default. For brands at different scales,
          here&rsquo;s where you&rsquo;d land:
        </p>
        <hr className="receipt-divider my-10" />

        {/* Desktop table */}
        <div className="hidden md:block">
          <div className="font-receipt text-[12px] uppercase tracking-[0.12em] text-ff-fade-50">
            <div className="grid grid-cols-[120px_140px_1fr] gap-4 pb-4 border-b border-ff-fade-30">
              <span>TIER</span>
              <span>MONTHLY</span>
              <span>ANCHOR</span>
            </div>
          </div>
          <div className="font-receipt text-[14px] tracking-[0.02em]">
            {RETAINER_TIERS.map((t) => (
              <div
                key={t.tier}
                className="grid grid-cols-[120px_140px_1fr] gap-4 py-4 border-b border-ff-fade-30/50 hover:text-ff-stamp transition-colors"
              >
                <span className="text-ff-paper">{t.tier}</span>
                <span className="text-ff-data">{t.range}</span>
                <span className="text-ff-fade-50">{t.anchor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {RETAINER_TIERS.map((t, i) => (
            <SimpleReveal key={t.tier} delay={i * 0.06}>
              <div className="border-t border-b border-ff-fade-30 py-5 px-4">
                <div className="font-receipt text-[14px] text-ff-paper">{t.tier}</div>
                <div className="mt-1 font-receipt text-[14px] text-ff-data">{t.range}</div>
                <div className="mt-2 text-body text-ff-fade-50 text-[14px]">{t.anchor}</div>
              </div>
            </SimpleReveal>
          ))}
        </div>

        <hr className="receipt-divider my-10" />
        <SimpleReveal delay={0.2}>
          <p className="font-editorial text-[20px] md:text-[24px] italic text-ff-fade-50 max-w-2xl">
            Most boutiques say &ldquo;we can help you launch.&rdquo;
            We say &ldquo;ask the company we already grew through ten years.&rdquo;
          </p>
        </SimpleReveal>
        <hr className="receipt-divider mt-10" />
      </section>

      {/* WHAT WE DON'T DO */}
      <section className="paper-bg">
        <div className="container-content py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="font-receipt text-[12px] uppercase tracking-[0.12em] text-ff-ink/50 mb-6">
                WHAT YOU WON&rsquo;T FIND HERE
              </div>
              <ul className="space-y-4 font-body text-[16px] text-ff-ink/70">
                <li className="flex gap-3"><span className="text-ff-ink/30 shrink-0">✕</span>A 40-slide pitch deck</li>
                <li className="flex gap-3"><span className="text-ff-ink/30 shrink-0">✕</span>An account team where five of six are coordinators</li>
                <li className="flex gap-3"><span className="text-ff-ink/30 shrink-0">✕</span>A Slack channel that goes quiet after month two</li>
                <li className="flex gap-3"><span className="text-ff-ink/30 shrink-0">✕</span>A monthly report that takes longer to read than it took to write</li>
                <li className="flex gap-3"><span className="text-ff-ink/30 shrink-0">✕</span>Junior staff translating your feedback two weeks later</li>
              </ul>
            </div>
            <div>
              <div className="font-receipt text-[12px] uppercase tracking-[0.12em] text-ff-stamp mb-6">
                WHAT YOU WILL FIND
              </div>
              <ul className="space-y-4 font-body text-[16px] text-ff-ink">
                <li className="flex gap-3"><span className="text-ff-stamp shrink-0">✓</span>One number to call</li>
                <li className="flex gap-3"><span className="text-ff-stamp shrink-0">✓</span>One principal team start to finish</li>
                <li className="flex gap-3"><span className="text-ff-stamp shrink-0">✓</span>Specialists on the bench when the work calls for them</li>
                <li className="flex gap-3"><span className="text-ff-stamp shrink-0">✓</span>Direct answers</li>
                <li className="flex gap-3"><span className="text-ff-stamp shrink-0">✓</span>The kind of work that usually requires a large-agency retainer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline={"Let's see if it's a fit."}
        body={"No proposals until we know it is.\nJust a conversation about what you're trying to build."}
      />
    </>
  );
}
