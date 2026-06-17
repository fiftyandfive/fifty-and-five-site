import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Autopilot Social | 20 Posts/Mo from $500',
  description:
    'Your social on autopilot. 20 image posts a month, up to 4 platforms. The same senior team Fortune 500s use, productized for boutique brands. From $500/mo.',
  alternates: {
    canonical: 'https://fiftyandfive.com/autopilot',
  },
  openGraph: {
    title: 'Autopilot Social | 20 Posts/Mo from $500 | Fifty & Five',
    description:
      'Your social on autopilot. 20 image posts a month, up to 4 platforms. The same senior team Fortune 500s use, productized for boutique brands.',
    url: 'https://fiftyandfive.com/autopilot',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autopilot Social | 20 Posts/Mo from $500 | Fifty & Five',
    description:
      'Your social on autopilot. 20 image posts a month, up to 4 platforms. Senior-led since 2008.',
  },
};

const TIERS = [
  {
    name: 'Starter',
    introPrice: '$500',
    standardPrice: '$999/mo',
    channels: 'Instagram',
    features: [
      { text: '20 on-brand image posts', highlight: false },
      { text: 'Captions in your voice', highlight: false },
      { text: 'Hashtag strategy', highlight: false },
      { text: 'Scheduling', highlight: false },
      { text: 'Monthly snapshot', highlight: false },
    ],
    stripeUrl: 'https://buy.stripe.com/00w3cv2Ule2U8rD82L7Vm0b',
    popular: false,
  },
  {
    name: 'Pro',
    introPrice: '$600',
    standardPrice: '$1,099/mo',
    channels: 'IG + 1 of FB / LinkedIn / X',
    features: [
      { text: '20 on-brand image posts', highlight: false },
      { text: 'Captions in your voice', highlight: false },
      { text: 'Hashtag strategy', highlight: false },
      { text: 'Scheduling', highlight: false },
      { text: 'Monthly snapshot', highlight: false },
    ],
    stripeUrl: 'https://buy.stripe.com/eVq28r1Qhgb2cHT5UD7Vm0c',
    popular: true,
  },
  {
    name: 'Max',
    introPrice: '$750',
    standardPrice: '$1,249/mo',
    channels: 'IG + FB + LinkedIn + X',
    features: [
      { text: '20 on-brand image posts', highlight: false },
      { text: 'Captions tailored per platform', highlight: true },
      { text: 'Hashtag strategy', highlight: false },
      { text: 'Scheduling', highlight: false },
      { text: 'Monthly snapshot', highlight: false },
    ],
    stripeUrl: 'https://buy.stripe.com/dRmbJ1fH73oggY96YH7Vm0a',
    popular: false,
  },
];

const QUOTES = [
  {
    text: 'They grew our engagement 400%. It doesn’t feel like I’m partnered with a large company — we have a real relationship.',
    role: 'Director of Digital Growth',
    company: 'Blaze Pizza',
  },
  {
    text: 'Professional, creative, and a real pleasure to work with. The photos and videos they capture are beautiful and captivating.',
    role: 'Co-Owner',
    company: 'Barsha Life',
  },
  {
    text: 'The team is exceptional. They overdeliver every time.',
    role: 'Owner',
    company: 'Luxury Cosmetics & Skincare Co.',
  },
];

const LOGOS = [
  'Microsoft',
  'Kendall-Jackson',
  'Hasbro',
  'Enterprise',
  'Blaze Pizza',
  'Resorts World',
  'Warner Bros',
  'Mezzacorona',
];

export default function AutopilotPage() {
  return (
    <div className="autopilot-page">
      {/* Hero */}
      <section className="container-edge pt-28 md:pt-40 pb-12 md:pb-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="block w-6 h-px bg-[#C41E3A]" />
          <span className="ap-mono text-[#C41E3A]">
            A productized service. From the team behind 222+ brands.
          </span>
        </div>

        <h1 className="ap-display text-[clamp(40px,7.5vw,84px)] leading-[1.0] tracking-[-0.04em] font-light max-w-4xl">
          Your social on{' '}
          <span className="text-[#C41E3A]">autopilot.</span>
          <br />
          Without losing what makes it yours
          <span className="text-[#C41E3A]">.</span>
        </h1>

        <p className="mt-5 ap-body text-[17px] leading-[1.5] text-ink-black max-w-xl">
          20 image posts a month. Up to 4 platforms. The same senior team
          Fortune 500s use, productized for boutique brands.
        </p>

        <div className="mt-4 flex flex-wrap gap-x-0 ap-mono text-graphite">
          <span>Senior-led since 2008</span>
          <span className="mx-2 text-[#C41E3A]">&middot;</span>
          <span>222+ brands</span>
          <span className="mx-2 text-[#C41E3A]">&middot;</span>
          <span>5 continents</span>
          <span className="mx-2 text-[#C41E3A]">&middot;</span>
          <span>Now in a SKU</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="container-edge pb-8">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="ap-mono text-text-tertiary">Pick a tier · pricing</span>
          <span className="flex-1 h-px bg-[rgba(0,0,0,0.14)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2.5">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-5 md:p-4 flex flex-col border ${
                tier.popular
                  ? 'border-[#C41E3A] md:-translate-y-1.5'
                  : 'border-[rgba(0,0,0,0.14)]'
              }`}
              style={{
                background: tier.popular
                  ? 'linear-gradient(180deg, rgba(196,30,58,0.06), rgba(196,30,58,0.02) 40%, transparent 100%), var(--color-bg-secondary)'
                  : 'var(--color-bg-secondary)',
              }}
            >
              {tier.popular && (
                <span className="absolute -top-2.5 left-3 bg-[#C41E3A] text-[#fffef7] ap-mono text-[9px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full whitespace-nowrap leading-none">
                  ★ Most popular
                </span>
              )}

              <h3
                className={`ap-mono text-[11px] tracking-[0.16em] uppercase font-medium ${
                  tier.popular ? 'text-[#C41E3A]' : 'text-graphite'
                }`}
              >
                {tier.name}
              </h3>

              <div className="mt-2 text-[32px] md:text-[28px] font-bold tracking-[-0.03em] leading-none ap-display">
                {tier.introPrice}
                <span className="text-[13px] text-graphite font-normal tracking-normal ml-0.5">
                  /mo
                </span>
              </div>
              <div className="ap-mono text-[9px] tracking-[0.14em] uppercase text-text-tertiary mt-1.5">
                Intro · months 1–3
              </div>

              <div className="mt-3 pt-2.5 border-t border-dashed border-[rgba(0,0,0,0.14)] flex justify-between items-baseline gap-2 text-[11px] text-graphite">
                <span>Mo. 4+</span>
                <b className="text-ink-black font-semibold text-[14px] tracking-[-0.01em]">
                  {tier.standardPrice}
                </b>
              </div>

              <div className="mt-3 text-[12px] p-2.5 bg-black/[0.04]">
                <div className="ap-mono text-[9px] tracking-[0.16em] uppercase text-text-tertiary font-medium mb-1">
                  Channels
                </div>
                <span className="text-ink-black">{tier.channels}</span>
              </div>

              <ul className="mt-3 space-y-1.5 text-[13px] text-ink-black">
                {tier.features.map((f) => (
                  <li key={f.text} className="flex gap-2 items-start">
                    <span className="text-[#C41E3A] font-semibold shrink-0 mt-px">✓</span>
                    <span>
                      {f.highlight ? (
                        <>
                          Captions{' '}
                          <span className="text-[#C41E3A] whitespace-nowrap">
                            tailored per platform
                          </span>
                        </>
                      ) : (
                        f.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 block text-center ap-mono text-[10px] tracking-[0.14em] uppercase font-semibold py-2.5 rounded-full border transition-colors ${
                  tier.popular
                    ? 'bg-[#C41E3A] text-[#fffef7] border-[#C41E3A] hover:brightness-105'
                    : 'border-[#C41E3A] text-[#C41E3A] bg-transparent hover:bg-[#C41E3A] hover:text-[#fffef7]'
                }`}
              >
                Subscribe →
              </a>
            </div>
          ))}
        </div>

        <p className="mt-4 ap-mono text-[9px] tracking-[0.05em] leading-[1.6] text-text-tertiary">
          First 3 months paid upfront. Standard pricing begins month 4. Every
          tier includes captions in your voice, strategic hashtags, scheduling,
          monthly snapshot &amp; a 30-min onboarding call.
        </p>
      </section>

      {/* Launch Audit */}
      <section className="container-edge py-10 md:py-14">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="ap-mono text-text-tertiary">Before you subscribe · optional</span>
          <span className="flex-1 h-px bg-[rgba(0,0,0,0.14)]" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <h2 className="ap-display text-[clamp(34px,5.5vw,64px)] font-light tracking-[-0.04em] leading-[1.0]">
            Launch Audit
          </h2>

          <p className="mt-3 ap-body text-[18px] md:text-[20px] text-graphite leading-[1.4]">
            Know exactly what to post before month one.
          </p>

          <p className="mt-6 ap-body text-[15px] leading-[1.6] text-ink-black/80 max-w-xl mx-auto">
            A one-time strategy sprint that defines your niche, finds the gap
            your competitors are missing, and maps your first 90 days of posts.
            Delivered as a tight PDF, not a deck.
          </p>
        </div>

        <div className="mt-8 max-w-lg mx-auto border border-[rgba(0,0,0,0.14)] bg-bg-secondary p-5 md:p-6">
          <p className="ap-mono text-[9px] tracking-[0.16em] uppercase text-text-tertiary font-medium mb-3">
            You get
          </p>
          <ul className="space-y-2.5 text-[14px] text-ink-black">
            <li className="flex gap-2.5 items-start">
              <span className="text-[#C41E3A] font-semibold shrink-0 mt-px">✓</span>
              <span>
                <strong className="font-semibold">Blue-ocean niche analysis</strong>{' '}
                <span className="text-graphite">— the angle your category isn't claiming yet</span>
              </span>
            </li>
            <li className="flex gap-2.5 items-start">
              <span className="text-[#C41E3A] font-semibold shrink-0 mt-px">✓</span>
              <span>
                <strong className="font-semibold">Competitor gap report</strong>{' '}
                <span className="text-graphite">— three rivals dissected, openings flagged</span>
              </span>
            </li>
            <li className="flex gap-2.5 items-start">
              <span className="text-[#C41E3A] font-semibold shrink-0 mt-px">✓</span>
              <span>
                <strong className="font-semibold">90-day posting roadmap</strong>{' '}
                <span className="text-graphite">— week-by-week cadence, pillars, and KPIs</span>
              </span>
            </li>
          </ul>

          <div className="mt-5 pt-4 border-t border-dashed border-[rgba(0,0,0,0.14)] text-center">
            <div className="text-[28px] md:text-[32px] font-bold tracking-[-0.03em] leading-none ap-display">
              $497
              <span className="text-[13px] text-graphite font-normal tracking-normal ml-1">
                one-time
              </span>
            </div>
            <p className="ap-mono text-[9px] tracking-[0.14em] uppercase text-text-tertiary mt-1.5">
              Delivered in 7 days
            </p>
          </div>

          <a
            href="https://buy.stripe.com/cNidRbb6E22w6uc0KV8ww07"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block text-center ap-mono text-[10px] tracking-[0.14em] uppercase font-semibold py-2.5 rounded border border-[#C41E3A] text-[#C41E3A] bg-transparent hover:bg-[#C41E3A] hover:text-[#fffef7] transition-colors"
          >
            Buy the Audit →
          </a>
        </div>

        <p className="mt-4 text-center ap-mono text-[9px] tracking-[0.05em] text-text-tertiary">
          Stacks on any Autopilot tier. Or buy it solo to take with you.
        </p>
        <p className="mt-2 text-center ap-serif-italic text-[12px] text-text-tertiary">
          Built by senior strategists. Sharpened by AI. Same hands since 2008.
        </p>
      </section>

      {/* Social Proof */}
      <section className="container-edge py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-5">
          <h2 className="ap-display text-[22px] md:text-[20px] font-semibold tracking-[-0.025em]">
            5.0 on Clutch.{' '}
            <em className="ap-serif-italic text-[#C41E3A] font-normal">
              Same hands since 2008.
            </em>
          </h2>
          <div className="ap-mono text-graphite flex items-center gap-2">
            <span className="text-[#C41E3A] tracking-[1px]">★★★★★</span>
            <span>verified · clutch.co</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {QUOTES.map((q) => (
            <article
              key={q.company}
              className="border border-[rgba(0,0,0,0.14)] bg-bg-secondary p-4 flex flex-col gap-2"
            >
              <div className="ap-serif-italic text-[36px] leading-[0.4] text-[#C41E3A] -mb-1">
                &ldquo;
              </div>
              <p className="text-[14px] leading-[1.5] text-ink-black flex-1 ap-body">
                {q.text}
              </p>
              <footer className="ap-mono text-graphite border-t border-[rgba(0,0,0,0.14)] pt-2.5 mt-1">
                <b className="text-ink-black font-semibold block">{q.role}</b>
                {q.company}
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* Logo Wall */}
      <div className="container-edge">
        <div className="py-3 border-t border-b border-[rgba(0,0,0,0.14)] flex flex-wrap justify-center md:justify-between items-center gap-x-2 gap-y-1.5">
          {LOGOS.map((logo, i) => (
            <span key={logo} className="flex items-center gap-2">
              <span className="ap-display text-[11px] font-medium text-graphite uppercase tracking-[0.04em] whitespace-nowrap">
                {logo}
              </span>
              {i < LOGOS.length - 1 && (
                <span className="text-[#C41E3A] opacity-50 text-[10px]">▲</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="container-edge py-8 md:py-12">
        <a
          href={SITE.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden bg-[#C41E3A] text-[#fffef7] p-5 md:p-6 md:flex md:items-center md:justify-between gap-4 transition-transform hover:-translate-y-px"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(400px 200px at 100% 0%, rgba(255,255,255,0.18), transparent 60%)',
            }}
          />
          <div className="relative z-[1]">
            <h3 className="ap-display text-[18px] md:text-[17px] font-bold tracking-[-0.015em] leading-[1.15]">
              Book your 30-min intro &amp; kickoff.{' '}
              <em className="ap-serif-italic font-normal">All in one call.</em>
            </h3>
            <p className="mt-1.5 text-[12px] leading-[1.35] text-[#fffef7]/[0.78]">
              <b className="font-bold text-[#fffef7]">
                5 intro spots open this month.
              </b>{' '}
              First-come, then we close the cohort.
            </p>
          </div>
          <div className="relative z-[1] mt-4 md:mt-0 md:text-right ap-mono text-[10px] text-[#fffef7] shrink-0">
            <span className="inline-block bg-[#fffef7] text-ink-black font-semibold tracking-[0.02em] px-3 py-1.5 rounded-full text-[11px] mb-1.5">
              calendly.com/lucasv/30-minute-intro-call
            </span>
            <span className="block text-right">{SITE.email}</span>
          </div>
        </a>
      </section>

      {/* Footer Note */}
      <section className="container-edge pb-20 md:pb-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="ap-mono text-graphite leading-[1.6]">
            <b className="text-ink-black font-semibold">fiftyandfive.com</b>
            <br />
            Senior-led since 2008 · Orlando, FL
          </div>
          <div className="ap-serif-italic text-[12px] text-text-tertiary max-w-[280px] md:text-right leading-[1.35]">
            &ldquo;Built on too many glasses of wine and 18 years of strong
            opinions.&rdquo;
          </div>
        </div>
      </section>

      <style>{`
        .autopilot-page {
          font-family: var(--font-sans);
          background: var(--color-bg-primary);
          color: var(--color-text-primary);
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        .ap-display {
          font-family: var(--font-sans);
          letter-spacing: -0.03em;
        }
        .ap-body {
          font-family: var(--font-sans);
        }
        .ap-serif-italic {
          font-family: var(--font-sans);
          font-style: italic;
        }
        .ap-mono {
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
