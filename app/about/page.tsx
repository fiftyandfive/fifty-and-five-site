import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: 'About | 18 Years, 222 Brands',
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
  { year: '2007', text: "Southern Wine & Spirits · Corporate Marketing. Built the company's first marketing department. 15% avg. lift in case sales. Zero prior wine experience." },
  { year: '2008', text: 'First social-media engagements · pre-LLC · pre-Instagram.' },
  { year: '2009', text: 'Fifty & Five LLC formed (July).' },
  { year: '2010', text: 'Axe / Unilever product launch, Twitter takeover + experiential activations.' },
  { year: '2012', text: 'Blaze Pizza national social program launches.' },
  { year: '2013', text: 'Hong Kong Tourism Board, first travel-vertical engagement, opens the category.' },
  { year: '2016', text: 'Mezzacorona portfolio · 9-year retainer · ~1M followers added.' },
  { year: '2020', text: 'Kendall-Jackson · multi-year partnership begins.' },
  { year: '2024', text: 'AI operating-model retrofit · 10× output per operator hour.' },
  { year: '2026', text: '222+ brands · senior + AI model in market.' },
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
                name: 'Is Fifty & Five one of the first social media agencies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Founded in 2008, Fifty & Five is one of only two American agencies — alongside VaynerMedia (2009) — built entirely from scratch as a social-first entity. No pivot from PR, advertising, or another model. Social media management, community building, and platform-native content strategy from day one.',
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

        <SimpleReveal delay={0.5}>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <div className="font-serif text-[clamp(48px,7vw,72px)] leading-none tracking-[-0.02em] text-text-primary">
                222+
              </div>
              <div className="mt-3 font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
                Brands served since 2008
              </div>
            </div>
            <div>
              <div className="font-serif text-[clamp(48px,7vw,72px)] leading-none tracking-[-0.02em] text-text-primary">
                18
              </div>
              <div className="mt-3 font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
                Years of compounding pattern recognition
              </div>
            </div>
            <div>
              <div className="font-serif text-[clamp(48px,7vw,72px)] leading-none tracking-[-0.02em] text-text-primary">
                3+
              </div>
              <div className="mt-3 font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
                Average years per retained client
              </div>
            </div>
          </div>
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
              Lucas Vandenberg has always been the person who digs deeper than the
              brief&nbsp;&mdash; not because anyone asked, but because that&rsquo;s how he&rsquo;s
              wired.
            </p>
            <p>
              Before Fifty &amp; Five existed, he spent a decade building an instinct for finding
              value where others saw routine. At 23, as a procurement analyst at Northrop Grumman,
              he was processing a Boeing rebuy for B-2 Stealth Bomber parts. Instead of moving it
              along, he got curious&nbsp;&mdash; read the blueprints, spotted a cross-program
              overlap from the F-35, and ran a competitive bid on his own initiative. It saved the
              government $6.28 million per purchase.
            </p>
            <p>
              That curiosity&nbsp;&mdash; the pull toward &ldquo;what if I look one
              layer deeper?&rdquo;&nbsp;&mdash; became the foundation of everything
              Fifty &amp; Five does.
            </p>
            <p>
              In 2007, he joined Southern Wine &amp; Spirits and helped build their first
              marketing department from the ground up. Zero wine industry experience on day one.
              Within two years he was running trade marketing across Walgreens, Kroger, CVS, and
              Target&nbsp;&mdash; 15% average lift in case sales across 200+ new account
              distributions. New industry, same operating system: learn fast, earn trust, deliver
              results.
            </p>
            <p>
              In July 2009, Lucas founded Fifty &amp; Five. The wine &amp; spirits vertical came
              first&nbsp;&mdash; 34 brands, anchored by a 9-year run with Mezzacorona that added
              roughly one million followers across the portfolio. Then hospitality, fitness, tech,
              food &amp; beverage, tourism. Kendall-Jackson. Blaze Pizza across 300+
              locations. Enterprise Holdings. Resorts World. Hong Kong Tourism Board.
            </p>
            <p>
              222 clients across 18 years isn&rsquo;t a number we chase. It&rsquo;s what happens
              when you build an operating system that transfers across industries&nbsp;&mdash; and
              pair senior judgment with the leverage of AI.
            </p>

            <blockquote className="border-l-2 border-accent/50 pl-6 italic text-text-primary">
              &ldquo;I built this agency because I wanted to do the work myself&nbsp;&mdash; not
              manage people doing it. That&rsquo;s still true 18 years later. AI made it possible
              to scale that model without adding layers between me and the client.&rdquo;
              <footer className="mt-3 not-italic font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
                &mdash; Lucas Vandenberg, Founding Principal
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="container-edge py-20 md:py-28">
        <div className="max-w-4xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Social-First Since Day One
          </div>
          <AnimatedHeadline
            as="h2"
            text="Social-first from the start."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.75] max-w-3xl">
            In 2008, social media management wasn&rsquo;t a category yet. There were no playbooks,
            no established agency models, no &ldquo;social media manager&rdquo; job title. Lucas
            built Fifty &amp; Five from scratch for exactly this&nbsp;&mdash; platform-native
            content strategy, community building, and social media management. One year later,
            Gary Vaynerchuk would launch VaynerMedia with the same social-first DNA.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <SimpleReveal>
            <GlassCard className="h-full">
              <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
                Born social-first
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.2] tracking-[-0.015em]">
                Fifty &amp; Five (2008)
              </h3>
              <p className="mt-3 text-body text-text-secondary">
                Built from a blank slate. Lucas created 150+ Twitter and Facebook accounts
                in the first year to stress-test what the platforms could do&nbsp;&mdash;
                before ever pitching a client. Pre-Instagram, pre-&ldquo;social media
                manager&rdquo; as a job title. 222+ brands since.
              </p>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.08}>
            <GlassCard className="h-full">
              <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
                Also born social-first
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.2] tracking-[-0.015em]">
                VaynerMedia (2009)
              </h3>
              <p className="mt-3 text-body text-text-secondary">
                Gary Vaynerchuk built his brand on early YouTube before launching VaynerMedia
                from a conference room. Zero traditional-agency background. Today a 2,000+ person
                global operation. Started one year after Fifty &amp; Five.
              </p>
            </GlassCard>
          </SimpleReveal>
        </div>

        <p className="mt-8 max-w-3xl text-body text-text-tertiary leading-[1.7]">
          A handful of agencies were early to social&nbsp;&mdash; Ignite Social Media (2007),
          Likeable Media (2008), Attention (2007). What makes Fifty &amp; Five distinct is that
          social was the entire blueprint from day one. No pivot, no rebrand, no second act.
          Just 18 years of compounding in a single discipline.
        </p>
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
        ctaLabel="Join 222 brands that chose us →"
      />
    </>
  );
}
