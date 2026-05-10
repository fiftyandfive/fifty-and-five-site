import type { Metadata } from 'next';
import { SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: 'About · Lucas Vandenberg · 18 Years · Fifty & Five',
  description:
    'Eighteen years. 215+ brands. Principal-led, AI-augmented. The team behind the work.',
  alternates: { canonical: 'https://fiftyandfive.com/about' },
  openGraph: {
    title: 'About · Lucas Vandenberg · 18 Years · Fifty & Five',
    description: 'Eighteen years. 215+ brands. Principal-led, AI-augmented. The team behind the work.',
    url: 'https://fiftyandfive.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About · Lucas Vandenberg · 18 Years · Fifty & Five',
    description: 'Eighteen years. 215+ brands. Principal-led, AI-augmented. The team behind the work.',
  },
};

const TIMELINE = [
  { year: '2005', text: 'Lucas at Southern Wine & Spirits Corporate Marketing. First brush with three-tier-system brand work.' },
  { year: '2008', text: 'Lucas starts managing social media for brands — pre-Instagram, pre-"social media manager" as a job title.' },
  { year: '2009', text: 'Fifty & Five LLC formed.' },
  { year: '2010', text: 'Axe / Unilever product launch — Twitter takeover + experiential activations.' },
  { year: '2011', text: 'Mezzacorona retainer begins. (10-year engagement.)' },
  { year: '2012', text: 'Blaze Pizza national social program launches. (10-year engagement.)' },
  { year: '2013', text: 'Hong Kong Tourism Board — first travel-vertical engagement, opens the category.' },
  { year: '2016', text: 'Enterprise Holdings — 6 brands, 2 markets, simultaneously.' },
  { year: '2020', text: 'Kendall-Jackson partnership begins.' },
  { year: '2023', text: 'Strategic shift: principal-led, AI-augmented model.' },
  { year: '2026', text: 'Leaner. Faster. Sharper than ever.' },
];

const SPECIALISTS = [
  {
    label: 'WEB & AI INFRASTRUCTURE',
    headline: 'The technical partner when the stack is the bottleneck.',
    body: 'MIT-educated engineer-founder running a boutique digital-transformation studio. Custom web builds, headless stacks, AI-assisted automation. Brought in when the site, the CMS, or the data plumbing needs senior hands.',
  },
  {
    label: 'PERFORMANCE MARKETING',
    headline: 'The call when every conversion matters.',
    body: 'A performance principal with deep experience across paid search, technical SEO, CRO, and customer acquisition for Fortune 500 and emerging DTC brands. Brought in when the goal is measurable revenue, not reach.',
  },
  {
    label: 'CREATIVE & VIDEO',
    headline: 'Premium production, senior accountability.',
    body: "A long-standing creative partner for branding and media buying, paired with a video studio for event, short-form, and social-native content. Brought in when the work needs craft, not just more assets in the queue.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-content pt-36 md:pt-44 pb-16">
        <div className="font-receipt text-[12px] uppercase tracking-[0.15em] text-ff-stamp">
          About
        </div>
        <h1 className="mt-6 font-editorial text-display text-ff-paper max-w-4xl">
          The team behind 215 brands.
        </h1>
        <SimpleReveal delay={0.2}>
          <p className="mt-6 text-body-lg text-ff-fade-50 max-w-2xl">
            Eighteen years. Five continents. One principle: the principal who pitches
            is the principal on every Tuesday call.
          </p>
        </SimpleReveal>
      </section>

      {/* FOUNDER SECTION */}
      <section className="container-content pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-4">
            <SimpleReveal>
              <PlaceholderImage
                aspect="3/4"
                colorKey="tech"
                src="/images/people/lucas.jpg"
                label="Portrait, Lucas Vandenberg"
                className="rounded"
                alt="Lucas Vandenberg, Founding Principal of Fifty & Five"
              />
            </SimpleReveal>
          </div>
          <div className="md:col-span-8">
            <div className="font-receipt text-[12px] uppercase tracking-[0.12em] text-ff-stamp mb-4">
              FOUNDER
            </div>
            <h2 className="font-editorial text-[36px] md:text-[48px] leading-[1.05] text-ff-paper">
              Lucas Vandenberg
            </h2>
            <div className="mt-6 space-y-5 text-body text-ff-fade-50 leading-[1.7]">
              <p>
                Lucas started managing social media for brands in 2008 — before Instagram
                existed, before &ldquo;social media manager&rdquo; was a job title, before most agencies had
                figured out that Facebook wasn&rsquo;t just for college kids.
              </p>
              <p>
                Since then, Fifty &amp; Five has run campaigns for 215+ brands across 15 verticals.
                Microsoft. Kendall-Jackson. Enterprise Holdings. Blaze Pizza. Tupperware. NETGEAR.
                Names you&rsquo;ve heard of, in industries you work in.
              </p>
              <p>
                The agency made a deliberate choice to build for what comes next: principal-led
                practices, an in-house bench of senior specialists when the work calls for their
                depth, and AI as a strategic layer — not a junior-staff replacement. The model is
                built for the next decade, not the last one.
              </p>
              <p>
                The result is something most agencies can&rsquo;t offer: direct access to the people
                who&rsquo;ve actually done this work 215 times before. No handoffs. No account managers
                translating your feedback. No &ldquo;let me check with the team.&rdquo;
              </p>
              <p className="text-ff-paper">
                Lucas is based in Orlando. Two kids, Penny and Koen.
              </p>
            </div>
            <div className="mt-6 font-receipt text-[12px] text-ff-fade-50 tracking-[0.02em]">
              Pre-agency: Southern Wine &amp; Spirits Corporate Marketing (2005).<br />
              The Institute and other agency credits are F&amp;F engagements.
            </div>
          </div>
        </div>
      </section>

      {/* THE PRACTICE */}
      <section className="container-content py-24 md:py-32">
        <h2 className="font-editorial text-h2 text-ff-paper">
          Principal-led. Specialist-backed.
        </h2>
        <p className="mt-4 text-body text-ff-fade-50 max-w-2xl leading-[1.7]">
          Lucas leads every engagement. When the work calls for depth outside social and brand
          strategy, F&amp;F brings in a short list of vetted specialists, each a principal in their
          own right. You get the right senior for the work, sourced per engagement. No bench. No markup.
        </p>

        <div className="mt-12 space-y-0">
          {SPECIALISTS.map((s, i) => (
            <SimpleReveal key={s.label} delay={i * 0.08}>
              <div className="border-t border-ff-fade-30 py-8">
                <div className="font-receipt text-[12px] uppercase tracking-[0.12em] text-ff-stamp">
                  {s.label}
                </div>
                <h3 className="mt-3 font-editorial text-[24px] md:text-[28px] text-ff-paper leading-[1.2]">
                  {s.headline}
                </h3>
                <p className="mt-3 text-body text-ff-fade-50 leading-[1.6] max-w-2xl">
                  {s.body}
                </p>
              </div>
            </SimpleReveal>
          ))}
          <hr className="receipt-divider" />
        </div>

        <SimpleReveal delay={0.3}>
          <p className="mt-8 font-editorial text-[18px] italic text-ff-fade-50 max-w-2xl">
            These aren&rsquo;t employees. They aren&rsquo;t subcontractors. They are working principals
            we trust with our own client relationships, brought in only when the work genuinely calls
            for their depth.
          </p>
        </SimpleReveal>
      </section>

      {/* TIMELINE */}
      <section className="container-content py-24 md:py-32">
        <hr className="receipt-divider mb-10" />
        <div className="font-receipt text-[14px] uppercase tracking-[0.12em] text-ff-paper text-center">
          EIGHTEEN YEARS, COMPRESSED.
        </div>
        <hr className="receipt-divider mt-10 mb-12" />

        <div className="max-w-2xl mx-auto font-receipt text-[14px] tracking-[0.02em] space-y-4">
          {TIMELINE.map((t, i) => (
            <SimpleReveal key={`${t.year}-${i}`} delay={Math.min(i * 0.04, 0.3)}>
              <div className="flex gap-4">
                <span className="text-ff-data shrink-0 w-12">{t.year}</span>
                <span className="flex-1 text-ff-fade-50">{t.text}</span>
              </div>
            </SimpleReveal>
          ))}
        </div>

        <hr className="receipt-divider mt-12" />
      </section>

      {/* CTA */}
      <CTASection
        headline={"Work with the team that built it."}
        body={"No account managers. No handoffs.\nThe principals on the pitch are the principals on the work."}
      />
    </>
  );
}
