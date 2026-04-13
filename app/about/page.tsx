import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: 'About Lucas Vandenberg — 18 Years, 215+ Brands',
  description:
    'Founded in 2008. 215+ brands managed. 18 years of social media expertise. Meet the strategist behind Fifty & Five.',
};

const TIMELINE: { year: string; text: string }[] = [
  { year: '2008', text: 'Started managing social media for brands — pre-Instagram, pre-"social media manager" as a job title.' },
  { year: '2009', text: 'Fifty & Five LLC formed.' },
  { year: '2010', text: 'Axe / Unilever product launch — Twitter takeover + experiential activations.' },
  { year: '2011', text: 'Mezzacorona retainer begins — a decade-long run as the brand\u2019s social lead.' },
  { year: '2012', text: 'Blaze Pizza national social program launches.' },
  { year: '2013', text: 'Hong Kong Tourism Board — first travel-vertical engagement, opens the category.' },
  { year: '2016', text: 'Enterprise Holdings — 6 brands, 2 markets, simultaneously.' },
  { year: '2018', text: 'Peak agency: 5 offices, 22 employees.' },
  { year: '2020', text: 'Kendall-Jackson partnership begins.' },
  { year: '2023', text: 'Strategic shift: senior-led, AI-augmented model.' },
  { year: '2026', text: '215+ brands. 18 years. Still going.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-edge pt-36 md:pt-44 pb-20">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          About
        </div>
        <AnimatedHeadline
          as="h1"
          text="The person behind 215 brands."
          className="mt-4 font-serif text-display tracking-[-0.03em] max-w-4xl"
          stagger={0.05}
        />
        <SimpleReveal delay={0.4}>
          <p className="mt-5 font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
            Lucas Vandenberg — Founder &amp; Strategist
          </p>
        </SimpleReveal>
      </section>

      <section className="container-edge pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-5">
            <SimpleReveal>
              <div className="glass rounded-glass p-3">
                <PlaceholderImage
                  aspect="3/4"
                  colorKey="tech"
                  src="/images/people/lucas.jpg"
                  label="Portrait — Lucas Vandenberg"
                  className="rounded-[12px]"
                  alt="Lucas Vandenberg, Founder of Fifty & Five"
                />
              </div>
            </SimpleReveal>
          </div>
          <div className="md:col-span-7 text-body-lg text-text-secondary leading-[1.75] space-y-6">
            <p>
              I started managing social media for brands in 2008 — before Instagram existed, before
              &ldquo;social media manager&rdquo; was a job title, and before most agencies had
              figured out that Facebook wasn&rsquo;t just a place for college kids.
            </p>
            <p>
              Since then, I&rsquo;ve managed campaigns for 215+ brands across 15 verticals.
              Microsoft. Kendall-Jackson. Enterprise Holdings. Blaze Pizza. Axe. Discovery Channel.
              Tupperware. NETGEAR. Names you&rsquo;ve heard of, in industries you work in.
            </p>
            <p>
              At peak, Fifty &amp; Five had 5 offices and 22 employees. I&rsquo;ve run the full
              agency playbook — the hires, the overhead, the layers of account management between
              the strategist and the client. And I made a deliberate choice to go back to what
              actually works: one senior principal leading every engagement, backed by a small
              network of trusted specialist partners when the work calls for their depth, and
              augmented by AI and automation instead of junior staff.
            </p>
            <p>
              The result is something most agencies can&rsquo;t offer: direct access to the person
              who&rsquo;s actually done this 215 times before. No handoffs. No account managers
              translating your feedback. No &ldquo;let me check with the team.&rdquo; Just the
              strategist who built the plan, executing the plan, and adjusting the plan in real
              time.
            </p>
            <p>
              I&rsquo;m based in Orlando. I&rsquo;m the President of the SoDo Main Street Board.
              I&rsquo;ve got two kids (Penny and Koen, 11). And I still genuinely love this work
              after 18 years — which, in this industry, is the rarest credential of all.
            </p>
          </div>
        </div>
      </section>

      <section className="container-edge py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            The Network
          </div>
          <AnimatedHeadline
            as="h2"
            text="Senior-led. Specialist-backed."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.6] max-w-2xl">
            Lucas leads every engagement. When the work calls for depth outside social strategy,
            Fifty &amp; Five brings in a short list of vetted specialists — each a principal in
            their own right, each running their own practice. You get the right senior for the
            work, sourced per engagement. No bench. No markup.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr">
          <SimpleReveal delay={0.0} className="h-full">
            <GlassCard className="h-full flex flex-col">
              <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
                Web &amp; AI infrastructure
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.2] tracking-[-0.015em]">
                The technical partner when the stack is the bottleneck.
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                MIT-educated engineer-founder running a boutique digital-transformation studio —
                custom web builds, headless stacks, and AI-assisted automation. Brought in when
                the site, the CMS, or the data plumbing needs senior hands.
              </p>
            </GlassCard>
          </SimpleReveal>

          <SimpleReveal delay={0.08} className="h-full">
            <GlassCard className="h-full flex flex-col">
              <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
                Performance marketing
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.2] tracking-[-0.015em]">
                The call when every conversion matters.
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                A performance marketing principal with deep experience across paid search, technical
                SEO, CRO, and customer acquisition for Fortune 500 and emerging DTC brands. Brought
                in when the goal is measurable revenue, not reach.
              </p>
            </GlassCard>
          </SimpleReveal>

          <SimpleReveal delay={0.16} className="h-full">
            <GlassCard className="h-full flex flex-col">
              <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
                Connected TV &amp; programmatic
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.2] tracking-[-0.015em]">
                The call when social alone won&rsquo;t move the number.
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                Veteran ad-tech operators running a connected-TV advertising platform with
                distribution across major smart-TV, SSP, and DSP partners. Brought in when the
                brief calls for upper-funnel reach and measurable CTV pickup.
              </p>
            </GlassCard>
          </SimpleReveal>

          <SimpleReveal delay={0.24} className="h-full">
            <GlassCard className="h-full flex flex-col">
              <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
                Creative &amp; video
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.2] tracking-[-0.015em]">
                Premium production, senior accountability.
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                A long-standing creative partner for branding and media buying, paired with a
                video studio for event, short-form, and social-native content. Brought in when the
                work needs craft — not just more assets in the queue.
              </p>
            </GlassCard>
          </SimpleReveal>
        </div>

        <p className="mt-10 max-w-3xl text-body text-text-tertiary leading-[1.7]">
          These aren&rsquo;t employees. They aren&rsquo;t subcontractors billing hourly through
          Fifty &amp; Five. They are working principals we trust with our own client
          relationships, brought in only when the work genuinely calls for their depth.
        </p>
      </section>

      <section className="container-edge py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            The Timeline
          </div>
          <AnimatedHeadline
            as="h2"
            text="Eighteen years, compressed."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>

        <div className="mt-14 relative">
          <div
            aria-hidden
            className="absolute left-[9px] md:left-1/2 top-0 bottom-0 w-px bg-glass-border"
          />
          <ul className="space-y-8">
            {TIMELINE.map((t, i) => (
              <SimpleReveal key={`${t.year}-${i}`} delay={Math.min(i * 0.04, 0.25)}>
                <li className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                  <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                    <div className="font-serif text-[32px] tracking-[-0.02em] text-text-primary">
                      {t.year}
                    </div>
                    <p className="mt-2 text-body text-text-secondary">{t.text}</p>
                  </div>
                  <span
                    aria-hidden
                    className="absolute left-[4px] md:left-1/2 top-2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-accent glow-accent"
                  />
                </li>
              </SimpleReveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        headline="Work with the person who built it."
        body="No account managers. No handoffs. Just the strategist."
        ctaLabel="Work With Me →"
      />
    </>
  );
}
