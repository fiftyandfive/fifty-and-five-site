'use client';

import Link from 'next/link';
import { SITE } from '@/lib/constants';

const ITEMS = [
  { label: 'Profile audit', detail: 'Bio, link-in-bio, highlights, pinned posts — does every element earn its spot?' },
  { label: 'Content-market fit', detail: 'Pull your last 20 posts. How many would make a stranger follow you? Be honest.' },
  { label: 'Engagement ratio', detail: 'Divide comments + saves by impressions. Under 1%? Your content is being seen, not felt.' },
  { label: 'Competitor gap', detail: 'Find 3 competitors with higher engagement. What are they doing that you\'re not?' },
  { label: 'Conversion path', detail: 'Follow the journey from post → profile → link → landing page. Count the friction points.' },
  { label: 'Community pulse', detail: 'Check your last 50 DMs and comments. Are you responding within 2 hours?' },
  { label: 'Platform-content match', detail: 'Are you posting the same content everywhere? Each platform rewards different formats.' },
  { label: 'Content velocity', detail: 'How many posts per week vs. your top competitor? Volume isn\'t everything, but zero is zero.' },
  { label: 'Visual consistency', detail: 'Screenshot your grid. Does it look like one brand or a mood board from 5 different companies?' },
  { label: 'One-sentence strategy test', detail: 'Can you finish this sentence: "We post because ___." If not, that\'s the first thing to fix.' },
];

export function AuditChecklistContent() {
  return (
    <>
      <style>{`
        @media print {
          nav, footer, .sticky-cta, .exit-intent, .stock-ticker,
          .no-print, [data-noprint] {
            display: none !important;
          }
          body {
            background: #fff !important;
            color: #111 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          main {
            padding: 0 !important;
          }
          .print-page {
            max-width: 100% !important;
            padding: 40px !important;
          }
          .checklist-item {
            break-inside: avoid;
          }
        }
      `}</style>

      <div className="print-page container-edge pt-32 md:pt-40 pb-20 max-w-3xl mx-auto">
        {/* Print header */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              Fifty & Five
            </div>
            <h1 className="mt-3 font-serif text-h2 tracking-[-0.02em] text-text-primary">
              5-Minute Social Media Audit
            </h1>
            <p className="mt-4 text-body-lg text-text-secondary max-w-xl leading-[1.65]">
              Set a timer. Run through these 10 checks. By the end you&rsquo;ll know
              exactly where your social presence is strong — and where it&rsquo;s leaking value.
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="no-print shrink-0 rounded-full bg-accent text-white px-5 py-2.5 text-[14px] font-medium hover:bg-accent-light transition-colors"
          >
            Save as PDF
          </button>
        </div>

        {/* Checklist */}
        <div className="mt-10 space-y-0">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="checklist-item flex gap-4 py-5"
              style={{ borderBottom: '1px solid var(--glass-border)' }}
            >
              <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-serif text-[18px] text-accent"
                   style={{ border: '1.5px solid var(--color-accent)' }}>
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-[20px] leading-[1.2] tracking-[-0.01em] text-text-primary">
                  {item.label}
                </h3>
                <p className="mt-2 text-body text-text-secondary leading-[1.65]">
                  {item.detail}
                </p>
              </div>
              <div className="no-print shrink-0 self-center w-6 h-6 rounded border-2 border-glass-border" />
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-10 p-6 rounded-[12px]"
             style={{ background: 'var(--color-accent-subtle)', borderLeft: '3px solid var(--color-accent)' }}>
          <p className="font-serif text-[18px] leading-[1.4] tracking-[-0.01em] text-text-primary">
            &ldquo;Most brands know something is off. This checklist tells you where.&rdquo;
          </p>
          <p className="mt-3 font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
            — Lucas Vandenberg, Founding Principal
          </p>
        </div>

        {/* Scoring guidance */}
        <div className="mt-14 space-y-6">
          <h2 className="font-serif text-h3 tracking-[-0.02em] text-text-primary">
            What your answers actually mean.
          </h2>
          <p className="text-body-lg text-text-secondary leading-[1.75]">
            Count the checks you could answer cleanly, without hedging. The number matters less
            than the pattern, because the ten checks split into three groups and whichever group
            you failed tells you what to fix first.
          </p>
          <p className="text-body-lg text-text-secondary leading-[1.75]">
            <strong className="text-text-primary">Eight or more.</strong> Your fundamentals are
            sound and your problem is almost certainly distribution or budget, not content. Brands
            in this band usually do not need an agency, they need paid media discipline and someone
            willing to kill the channels that are not converting.
          </p>
          <p className="text-body-lg text-text-secondary leading-[1.75]">
            <strong className="text-text-primary">Five to seven.</strong> The most common result,
            and the most fixable. Something is working, and it is working in spite of the system
            rather than because of it. This is what a strategy engagement is for.
          </p>
          <p className="text-body-lg text-text-secondary leading-[1.75]">
            <strong className="text-text-primary">Four or fewer.</strong> Do not buy more content.
            Adding volume to an unclear strategy makes the problem more expensive, not smaller.
            Start at the last check on the list, the one sentence strategy test, and do not
            commission anything else until you can finish that sentence.
          </p>

          <h2 className="pt-4 font-serif text-h3 tracking-[-0.02em] text-text-primary">
            Where the three groups sit.
          </h2>
          <p className="text-body-lg text-text-secondary leading-[1.75]">
            <strong className="text-text-primary">Checks 1, 9 and 10 are strategy.</strong> Profile,
            visual consistency, and the one sentence test. Failing here means the brand has not
            decided what it is, and every downstream fix inherits that. Nothing else on the list is
            worth doing until these are settled.
          </p>
          <p className="text-body-lg text-text-secondary leading-[1.75]">
            <strong className="text-text-primary">Checks 2, 3, 7 and 8 are content.</strong> Fit,
            engagement ratio, platform match, and velocity. Failing here with strategy intact is the
            good version of this problem, because it is a staffing and process fix rather than a
            positioning one.
          </p>
          <p className="text-body-lg text-text-secondary leading-[1.75]">
            <strong className="text-text-primary">Checks 4, 5 and 6 are conversion.</strong>
            {' '}Competitor gap, conversion path, and community response time. Failing only here
            usually means you are making good work and losing people between the post and the
            purchase, which is the cheapest of the three to fix and the one most often ignored.
          </p>

          <h2 className="pt-4 font-serif text-h3 tracking-[-0.02em] text-text-primary">
            The honest caveat.
          </h2>
          <p className="text-body-lg text-text-secondary leading-[1.75]">
            Five minutes buys you a diagnosis, not a plan. This checklist will reliably tell you
            which of the three groups is broken. It will not tell you what your competitors are
            spending, whether your category rewards volume or restraint, or whether AI answer
            engines are citing you when someone asks for a recommendation in your vertical. Those
            take a real audit.
          </p>
          <p className="no-print text-body-lg text-text-secondary leading-[1.75]">
            If you want the longer version, the{' '}
            <Link href="/audit" className="text-accent hover:text-accent-light underline underline-offset-2">
              free brand audit
            </Link>{' '}
            covers search presence, social presence, and AI answer engine visibility, with written
            findings back inside two business days. If you would rather read first, start with{' '}
            <Link href="/blog/measure-social-media-roi" className="text-accent hover:text-accent-light underline underline-offset-2">
              how to measure social media ROI
            </Link>{' '}
            or{' '}
            <Link href="/blog/do-you-need-a-social-media-agency" className="text-accent hover:text-accent-light underline underline-offset-2">
              whether you need an agency at all
            </Link>
            .
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-body-lg text-text-secondary">
            Want me to run this audit for your brand? 30 minutes, on the house.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <Link
              href="https://calendly.com/lucasv/30-minute-intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="no-print inline-block rounded-full bg-accent text-white px-8 py-3 text-[15px] font-medium hover:bg-accent-light transition-colors glow-accent"
            >
              Book a free 30-min audit call →
            </Link>
            <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
              fiftyandfive.com · {SITE.phone.display}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
