import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { CTASection } from '@/components/layout/CTASection';
import { VERTICALS } from '@/lib/data/verticals';
import { VERTICAL_COLOR_HEX } from '@/lib/data/caseStudies';

export const metadata: Metadata = {
  title: 'Services | Social, Paid, Content, Brand',
  description:
    'Four senior-led practices. AI-leveraged operating model. Retainers from $1.5K to $50K+/mo. Same model at every tier.',
  alternates: {
    canonical: 'https://fiftyandfive.com/services',
  },
  openGraph: {
    title: 'Services | Social, Paid, Content, Brand | Fifty & Five',
    description: 'Four senior-led practices. AI-leveraged operating model. Retainers from $1.5K to $50K+/mo. Same model at every tier.',
    url: 'https://fiftyandfive.com/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Social, Paid, Content, Brand | Fifty & Five',
    description: 'Four senior-led practices. AI-leveraged operating model. Retainers from $1.5K to $50K+/mo. Same model at every tier.',
  },
};

const PILLARS = [
  {
    kicker: 'Strategy first',
    head: 'Month one is discovery. No exceptions.',
    body:
      'Before a logo moves or a campaign launches, we map the category, audit the field, and write the strategic spine the next year hangs from. If month one doesn’t land, we don’t continue, and you keep the work.',
  },
  {
    kicker: 'AI, in the open',
    head: 'We use Claude. We tell you where.',
    body:
      'Frontier models sit on the table, not under it. We use them for synthesis, drafting, and stress-testing, and ship a “how this was made” appendix on every major deliverable.',
  },
  {
    kicker: 'Multicultural by default',
    head: 'Hispanic market mapped on day one.',
    body:
      'Every strategy deck includes cultural positioning analysis for U.S. growth markets. Miami, Houston, LA, Phoenix, San Antonio. Not a translation line item.',
  },
  {
    kicker: 'Principal-led practices',
    head: 'You work directly with us. That’s the deal.',
    body:
      'Every engagement is led by senior leadership. The team that pitches you is the team on the Tuesday call in month seven.',
  },
  {
    kicker: 'Performance + authenticity',
    head: 'ROI without selling the story.',
    body:
      'We measure CAC, LTV, attribution, and the rest, and we refuse to gut the brand to chase a quarter. Both numbers matter. Both get reported.',
  },
];

const CORE_SERVICES = [
  {
    title: 'Social Media Management',
    tag: 'Retainer',
    body:
      'Full-service social media management across Instagram, Facebook, TikTok, LinkedIn, and X. Content strategy, creation, scheduling, community management, and monthly reporting. Everything your social presence needs, managed by the same senior team every month.',
    meta: 'Typical engagement: 8–20 posts/mo per platform, community management, monthly strategy + reporting.',
  },
  {
    title: 'Content Strategy & Creation',
    tag: 'Retainer or Project',
    body:
      'Platform-specific content that actually performs, not recycled blog posts reformatted for Instagram. Original content strategy built on 18 years of pattern recognition across 222+ brands. Photography and video direction included.',
    meta: 'Typical engagement: Monthly content calendars, original creative direction, platform-native content.',
  },
  {
    title: 'Paid Social & Ad Management',
    tag: 'Retainer',
    body:
      'Meta, TikTok, and LinkedIn ad management for brands spending $1K–$25K/mo on paid social. Campaign strategy, creative direction, audience targeting, optimization, and transparent reporting. No hidden fees on ad spend.',
    meta: 'Typical engagement: Campaign strategy, creative, targeting, optimization, weekly reporting.',
  },
];

const RETAINER_TIERS = [
  {
    tier: 'Studio',
    range: '$1.5K – $2.5K',
    proof: 'Boutique pilates · indie restaurants · neighborhood retail',
  },
  {
    tier: 'Growth',
    range: '$3K – $5K',
    proof: 'Wine & spirits · mid-tier hospitality · lifestyle apparel',
  },
  {
    tier: 'Premium',
    range: '$6K – $10K',
    proof: 'Premium wine · regional CPG · resort & destination',
  },
  {
    tier: 'Scale',
    range: '$15K – $25K',
    proof: 'Multi-unit franchise programs · category-leading CPG',
  },
  {
    tier: 'Enterprise',
    range: '$30K – $50K+',
    proof: 'Fortune 500 always-on · multi-brand, multi-market',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="container-edge pt-36 md:pt-44 pb-16">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          Services
        </div>
        <AnimatedHeadline
          as="h1"
          text="What We Do."
          className="mt-4 font-serif text-display tracking-[-0.03em]"
          stagger={0.05}
        />
        <SimpleReveal delay={0.3}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-2xl">
            Senior-led social media management, content strategy, and paid media, without the
            holding-company markup.
          </p>
        </SimpleReveal>
      </section>

      <section className="container-edge pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-fr">
          {CORE_SERVICES.map((s, i) => (
            <SimpleReveal key={s.title} delay={i * 0.08} className="h-full">
              <TiltCard tiltStrength={4} className="h-full">
                <GlassCard className="h-full flex flex-col">
                  <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
                    {s.tag}
                  </div>
                  <h3 className="mt-4 font-serif text-[28px] leading-[1.15] tracking-[-0.02em]">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-body text-text-secondary flex-1">{s.body}</p>
                  <p className="mt-6 pt-6 border-t border-glass-border font-mono text-caption text-text-tertiary leading-[1.6]">
                    {s.meta}
                  </p>
                </GlassCard>
              </TiltCard>
            </SimpleReveal>
          ))}
        </div>
      </section>

      <section className="container-edge py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            What we stand on
          </div>
          <AnimatedHeadline
            as="h2"
            text="Five pillars. Non-negotiable."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <SimpleReveal key={p.kicker} delay={i * 0.08} className="h-full">
              <GlassCard className="h-full flex flex-col">
                <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
                  {String(i + 1).padStart(2, '0')} · {p.kicker}
                </div>
                <h3 className="mt-4 font-serif text-[26px] leading-[1.1] tracking-[-0.02em]">
                  {p.head}
                </h3>
                <p className="mt-4 text-body text-text-secondary">
                  {p.body}
                </p>
              </GlassCard>
            </SimpleReveal>
          ))}
        </div>
      </section>

      {/* RETAINER LADDER — Change #9 */}
      <section className="container-edge py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            How we price
          </div>
          <AnimatedHeadline
            as="h2"
            text="The Retainer Ladder. Five tiers. Same model."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>

        {/* Desktop table */}
        <div className="mt-14 hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-glass-border">
                <th className="text-left py-4 pr-6 font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">Tier</th>
                <th className="text-left py-4 pr-6 font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">Monthly</th>
                <th className="text-left py-4 font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">Anchor Proof</th>
              </tr>
            </thead>
            <tbody>
              {RETAINER_TIERS.map((t) => (
                <tr key={t.tier} className="border-b border-glass-border/50">
                  <td className="py-5 pr-6 font-serif text-[22px] tracking-[-0.02em] text-text-primary">{t.tier}</td>
                  <td className="py-5 pr-6 font-mono text-[15px] text-accent tracking-[0.02em]">{t.range}</td>
                  <td className="py-5 text-body text-text-secondary">{t.proof}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-14 md:hidden space-y-4">
          {RETAINER_TIERS.map((t, i) => (
            <SimpleReveal key={t.tier} delay={i * 0.06}>
              <GlassCard>
                <div className="font-serif text-[22px] tracking-[-0.02em] text-text-primary">{t.tier}</div>
                <div className="mt-2 font-mono text-[15px] text-accent tracking-[0.02em]">{t.range}</div>
                <div className="mt-3 text-body text-text-secondary">{t.proof}</div>
              </GlassCard>
            </SimpleReveal>
          ))}
        </div>

        <SimpleReveal delay={0.3}>
          <p className="mt-10 text-body text-text-secondary max-w-3xl leading-[1.7]">
            A studio retainer at $2K/mo and an enterprise retainer at $50K+/mo do not run on
            different operating principles inside Fifty &amp; Five. They run on the same Senior + AI
            stack&nbsp;&mdash; the difference is volume, scope, and channel surface area.
          </p>
        </SimpleReveal>
      </section>

      {/* HOW WE WORK — updated to remove banned phrases */}
      <section className="container-edge py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              How we work
            </div>
            <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
              Conversation first. Proposal second.
            </h2>
          </div>
          <div className="md:col-span-8 prose-style space-y-6 text-body-lg text-text-secondary leading-[1.75]">
            <p>
              Every engagement starts with a conversation, not a proposal. We&rsquo;ll talk about
              what you&rsquo;re trying to accomplish, where your current social presence stands, and
              whether Fifty &amp; Five is actually the right fit. If it is, you&rsquo;ll get a clear
              scope, a fixed monthly fee, and direct access to the senior team doing the work.
            </p>
          </div>
        </div>
      </section>

      <section className="container-edge py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr">
          <SimpleReveal className="h-full">
            <GlassCard className="h-full flex flex-col">
              <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
                What you won&rsquo;t find here
              </div>
              <ul className="mt-5 space-y-4 text-body text-text-secondary">
                <li className="flex gap-3 items-start">
                  <span className="text-text-tertiary mt-1 shrink-0">✕</span>
                  A 40-slide pitch deck.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-text-tertiary mt-1 shrink-0">✕</span>
                  A team of six people where five are coordinators.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-text-tertiary mt-1 shrink-0">✕</span>
                  A Slack channel that goes quiet after month two.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-text-tertiary mt-1 shrink-0">✕</span>
                  A monthly report that takes longer to read than it took to write.
                </li>
              </ul>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.1} className="h-full">
            <GlassCard className="h-full flex flex-col">
              <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
                What you will find
              </div>
              <ul className="mt-5 space-y-4 text-body text-text-primary">
                <li className="flex gap-3 items-start">
                  <span className="text-accent mt-1 shrink-0">✓</span>
                  One phone number.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent mt-1 shrink-0">✓</span>
                  A dedicated team, start to finish.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent mt-1 shrink-0">✓</span>
                  Senior leadership on every account.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent mt-1 shrink-0">✓</span>
                  Direct answers.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent mt-1 shrink-0">✓</span>
                  The kind of experience that usually requires a large-agency retainer, at a fraction of the cost.
                </li>
              </ul>
            </GlassCard>
          </SimpleReveal>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="container-edge py-20 md:py-28">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          Industries we serve
        </div>
        <AnimatedHeadline
          as="h2"
          text="Deep expertise where it matters."
          className="mt-4 font-serif text-h2 tracking-[-0.02em] max-w-3xl"
        />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {VERTICALS.map((v) => {
            const hex = VERTICAL_COLOR_HEX[v.colorKey];
            return (
              <Link key={v.slug} href={`/verticals/${v.slug}`}>
                <div
                  className="glass rounded-glass px-4 py-5 transition-colors hover:border-white/20"
                  style={{ borderLeft: `3px solid ${hex}` }}
                >
                  <div className="font-serif text-[18px] leading-[1.15] tracking-[-0.015em] text-text-primary">
                    {v.name}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Glossary — AEO-extractable definitions */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Glossary
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Terms we use. Defined.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <SimpleReveal className="h-full">
            <GlassCard className="h-full flex flex-col">
              <h3 className="font-serif text-[22px] leading-[1.2] tracking-[-0.015em]">
                Answer Engine Optimization (AEO)
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                AEO is the practice of optimizing a brand&rsquo;s content and digital presence so that AI search engines&mdash;ChatGPT, Claude, Perplexity, Gemini, and Grok&mdash;cite the brand in their generated answers. Unlike traditional SEO, AEO focuses on structured, self-contained statements that LLMs can extract and quote directly.
              </p>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.08} className="h-full">
            <GlassCard className="h-full flex flex-col">
              <h3 className="font-serif text-[22px] leading-[1.2] tracking-[-0.015em]">
                AIRO Score
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                The AIRO Score is a 100-point benchmark developed by Fifty &amp; Five that measures a brand&rsquo;s visibility across AI-generated search results. It evaluates citation frequency, answer accuracy, and competitive positioning across five major AI platforms: ChatGPT, Claude, Perplexity, Gemini, and Grok.
              </p>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.16} className="h-full">
            <GlassCard className="h-full flex flex-col">
              <h3 className="font-serif text-[22px] leading-[1.2] tracking-[-0.015em]">
                Recommendation Engineering
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                Recommendation Engineering is the ongoing optimization of a brand&rsquo;s digital footprint so that AI models recommend the brand when users ask for suggestions. It combines structured data, third-party citations, review management, and content strategy to increase the probability of being cited in AI-generated recommendations.
              </p>
            </GlassCard>
          </SimpleReveal>
        </div>
      </section>

      {/* FAQPage schema for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is Answer Engine Optimization (AEO)?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AEO is the practice of optimizing a brand’s content and digital presence so that AI search engines—ChatGPT, Claude, Perplexity, Gemini, and Grok—cite the brand in their generated answers. Unlike traditional SEO, AEO focuses on structured, self-contained statements that LLMs can extract and quote directly.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is an AIRO Score?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The AIRO Score is a 100-point benchmark developed by Fifty & Five that measures a brand’s visibility across AI-generated search results. It evaluates citation frequency, answer accuracy, and competitive positioning across five major AI platforms: ChatGPT, Claude, Perplexity, Gemini, and Grok.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is Recommendation Engineering?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Recommendation Engineering is the ongoing optimization of a brand’s digital footprint so that AI models recommend the brand when users ask for suggestions. It combines structured data, third-party citations, review management, and content strategy to increase the probability of being cited in AI-generated recommendations.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does Fifty & Five charge?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five offers five retainer tiers: Studio ($1,500–$2,500/mo), Growth ($3,000–$5,000/mo), Performance ($7,500–$12,000/mo), Scale ($15,000–$25,000/mo), and Enterprise ($30,000–$50,000+/mo). Every tier runs on the same Senior + AI operating model.',
                },
              },
            ],
          }),
        }}
      />

      <CTASection
        headline="Let&#8217;s see if it&#8217;s a fit."
        body="No proposals until we know it is. Just a conversation about what you're trying to build."
        ctaLabel="Start a Conversation →"
      />
    </>
  );
}
