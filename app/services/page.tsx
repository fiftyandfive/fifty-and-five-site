import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: 'Services | Social Media, Content Strategy, Paid Media',
  description:
    'Full-service social media management, content strategy, and paid media for brands that want senior-level execution without the agency markup. Retainers from $3,000/mo.',
};

const CORE_SERVICES = [
  {
    title: 'Social Media Management',
    tag: 'Retainer',
    body:
      'Full-service social media management across Instagram, Facebook, TikTok, LinkedIn, and X. Content strategy, creation, scheduling, community management, and monthly reporting. Everything your social presence needs, managed by the same senior strategist every month.',
    meta: 'Typical engagement: 8–20 posts/mo per platform, community management, monthly strategy + reporting.',
  },
  {
    title: 'Content Strategy & Creation',
    tag: 'Retainer or Project',
    body:
      'Platform-specific content that actually performs — not recycled blog posts reformatted for Instagram. Original content strategy built on 18 years of pattern recognition across 215+ brands. Photography and video direction included.',
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
            Senior-level social media management, content strategy, and paid media — without the
            agency markup.
          </p>
        </SimpleReveal>
      </section>

      <section className="container-edge pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CORE_SERVICES.map((s, i) => (
            <SimpleReveal key={s.title} delay={i * 0.08}>
              <TiltCard tiltStrength={4}>
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
              Every engagement starts with a conversation — not a proposal. We&rsquo;ll talk about
              what you&rsquo;re trying to accomplish, where your current social presence stands, and
              whether Fifty &amp; Five is actually the right fit. If it is, you&rsquo;ll get a clear
              scope, a fixed monthly fee, and direct access to the person doing the work. No account
              managers. No project coordinators. No surprise invoices.
            </p>
            <p>
              Retainers typically range from{' '}
              <span className="text-text-primary">$3,000 to $7,500 per month</span> depending on
              scope, platforms, and whether paid media management is included. Project work is
              available for brands that need a specific deliverable — audit, launch strategy, or
              content sprint — without an ongoing commitment.
            </p>
          </div>
        </div>
      </section>

      <section className="container-edge py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <GlassCard>
            <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
              What you won&rsquo;t find here
            </div>
            <ul className="mt-5 space-y-3 text-body text-text-secondary">
              <li>— A 40-slide pitch deck.</li>
              <li>— A team of six people where five are coordinators.</li>
              <li>— A Slack channel that goes quiet after month two.</li>
              <li>— A monthly report that takes longer to read than it took to write.</li>
            </ul>
          </GlassCard>
          <GlassCard>
            <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
              What you will find
            </div>
            <ul className="mt-5 space-y-3 text-body text-text-primary">
              <li>— One phone number.</li>
              <li>— One senior principal, start to finish.</li>
              <li>— Specialists on the bench when the work calls for it.</li>
              <li>— Direct answers.</li>
              <li>
                — The kind of experience that usually requires a $30K/mo retainer — at a fraction of
                the cost.
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <CTASection
        headline="Let's see if it's a fit."
        body="No proposals until we know it is. Just a conversation about what you're trying to build."
        ctaLabel="Start a Conversation →"
      />
    </>
  );
}
