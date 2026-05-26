import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: 'About | 18 Years, 222 Brands | Fifty & Five',
  description:
    '222 brands across 5 continents since 2008. Senior practices, AI-leveraged operating model, decade-long retainers.',
  alternates: {
    canonical: 'https://fiftyandfive.com/about',
  },
  openGraph: {
    title: 'About | 18 Years, 222 Brands | Fifty & Five',
    description: '222 brands across 5 continents since 2008. Senior practices, AI-leveraged operating model, decade-long retainers.',
    url: 'https://fiftyandfive.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | 18 Years, 222 Brands | Fifty & Five',
    description: '222 brands across 5 continents since 2008. Senior practices, AI-leveraged operating model, decade-long retainers.',
  },
};

const TIMELINE: { year: string; text: string }[] = [
  { year: '2008', text: 'Started managing social media for brands, pre-Instagram, pre-"social media manager" as a job title.' },
  { year: '2009', text: 'Fifty & Five LLC formed.' },
  { year: '2010', text: 'Axe / Unilever product launch, Twitter takeover + experiential activations.' },
  { year: '2011', text: 'Mezzacorona retainer begins, a decade-long run as the brand’s social lead.' },
  { year: '2012', text: 'Blaze Pizza national social program launches.' },
  { year: '2013', text: 'Hong Kong Tourism Board, first travel-vertical engagement, opens the category.' },
  { year: '2016', text: 'Enterprise Holdings, 6 brands, 2 markets, simultaneously.' },
  { year: '2020', text: 'Kendall-Jackson partnership begins.' },
  { year: '2023', text: 'Strategic shift: senior-led, AI-augmented model.' },
  { year: '2026', text: 'Leaner. Faster. Sharper than ever.' },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Who founded Fifty & Five?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five was founded in 2008 by Lucas Vandenberg. The agency is headquartered in Orlando, Florida, and has managed social media for 222+ brands across 5 continents.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many brands has Fifty & Five worked with?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five has managed social media for 222+ brands since 2008, including Microsoft, Kendall-Jackson, Enterprise Holdings, Blaze Pizza, Warner Bros., Tupperware, and Resorts World.',
                },
              },
              {
                '@type': 'Question',
                name: "What is Fifty & Five's operating model?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five uses a Senior + AI operating model. Every engagement is run by senior strategists with a vetted network of specialists. The agency uses AI tools like Claude as a strategic layer, not a junior-staff replacement.',
                },
              },
            ],
          }),
        }}
      />

      <section className="container-edge pt-36 md:pt-44 pb-20">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          About
        </div>
        <AnimatedHeadline
          as="h1"
          text="The team behind 222 brands."
          className="mt-4 font-serif text-display tracking-[-0.03em] max-w-4xl"
          stagger={0.05}
        />
        <SimpleReveal delay={0.4}>
          <p className="mt-5 font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
            Lucas Vandenberg, Founding Principal
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
                  label="Portrait, Lucas Vandenberg"
                  className="rounded-[12px]"
                  alt="Lucas Vandenberg, Founding Principal of Fifty & Five"
                />
              </div>
            </SimpleReveal>
          </div>
          <div className="md:col-span-7 text-body-lg text-text-secondary leading-[1.75] space-y-6">
            <p>
              Fifty &amp; Five started managing social media for brands in 2008, before Instagram
              existed, before &ldquo;social media manager&rdquo; was a job title, and before most
              agencies had figured out that Facebook wasn&rsquo;t just a place for college kids.
            </p>
            <p>
              Since then, the team has run campaigns for 222+ brands across{' '}
              <a href="/services#industries-we-serve" className="text-accent hover:text-accent-light">
                12 verticals
              </a>
              &nbsp;&mdash; from wine and hospitality to tech, fitness, and luxury.
              Microsoft. Kendall-Jackson. Enterprise Holdings. Blaze Pizza. Axe. Discovery Channel.
              Tupperware. NETGEAR. Names you&rsquo;ve heard of, in industries you work in.
            </p>
            <p>
              We&rsquo;ve run the full agency playbook&nbsp;&mdash; the hires, the overhead, the layers of
              account management between the strategist and the client. We made a deliberate
              choice to build for what comes next: a senior team running every engagement,
              a deep bench of specialists when the work calls for their expertise, and AI as
              a strategic layer, not a junior-staff replacement.
              The model is built for the next decade, not the last one.
            </p>
            <p>
              The result is something most agencies can&rsquo;t offer: direct access to the team
              that&rsquo;s actually done this 222+ times before. Senior practices, AI-leveraged.
              The team that built the plan executes the plan and adjusts the plan
              in real time.
            </p>

            {/* Attributed founder quote — "I" permitted here per brief */}
            <blockquote className="border-l-2 border-accent/50 pl-6 italic text-text-primary">
              &ldquo;I&rsquo;m based in Orlando. I&rsquo;m the President of the SoDo Main Street Board.
              I&rsquo;ve got two kids (Penny and Koen, 11). And I still genuinely love this work
              after 18 years&nbsp;&mdash; which, in this industry, is the rarest credential of all.&rdquo;
              <footer className="mt-3 not-italic font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
                &mdash; Lucas Vandenberg, Founding Principal
              </footer>
            </blockquote>
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
            text="Senior team. Deep bench."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.6] max-w-2xl">
            Every engagement is run by senior strategists who&rsquo;ve done this hundreds of times.
            When the work calls for depth beyond social strategy, the team expands with a vetted
            network of specialists&mdash;each a principal in their own practice, each brought in
            for the specific expertise the project demands.
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
                MIT-educated engineer-founder running a boutique digital-transformation studio,
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
                Creative &amp; video
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.2] tracking-[-0.015em]">
                Premium production, senior accountability.
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                A long-standing creative partner for branding and media buying, paired with a
                video studio for event, short-form, and social-native content. Brought in when the
                work needs craft, not just more assets in the queue.
              </p>
            </GlassCard>
          </SimpleReveal>
        </div>

        <p className="mt-10 max-w-3xl text-body text-text-tertiary leading-[1.7]">
          These are working principals we trust with our own client
          relationships&mdash;not subcontractors billing hourly, but senior operators
          brought in when the work genuinely calls for their depth.
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
        headline="Work with the team that built it."
        body="Senior-led practices, AI-leveraged. Just the senior team."
        ctaLabel="Start a Conversation →"
      />
    </>
  );
}
