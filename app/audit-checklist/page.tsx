'use client';

import Link from 'next/link';

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

export default function AuditChecklistPage() {
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
              fiftyandfive.com · (310) 902-3246
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
