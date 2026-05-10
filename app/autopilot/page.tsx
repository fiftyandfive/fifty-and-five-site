import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Autopilot Social | 20 Posts/Mo from $500 | Fifty & Five',
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
          <span className="block w-6 h-px bg-[#D9583E]" />
          <span className="ap-mono text-[#D9583E]">
            A productized service. From the team behind 215+ brands.
          </span>
        </div>

        <h1 className="ap-display text-[clamp(36px,7vw,56px)] leading-[0.97] tracking-[-0.035em] font-bold max-w-3xl">
          Your social on{' '}
          <span className="text-[#D9583E]">autopilot.</span>
          <br />
          Without losing what makes it yours
          <span className="text-[#D9583E]">.</span>
        </h1>

        <p className="mt-5 ap-body text-[17px] leading-[1.5] text-[#F4F1EB] max-w-xl">
          20 image posts a month. Up to 4 platforms. The same senior team
          Fortune 500s use, productized for boutique brands.
        </p>

        <div className="mt-4 flex flex-wrap gap-x-0 ap-mono text-[#C7C2B8]">
          <span>Senior-led since 2008</span>
          <span className="mx-2 text-[#D9583E]">&middot;</span>
          <span>215+ brands</span>
          <span className="mx-2 text-[#D9583E]">&middot;</span>
          <span>5 continents</span>
          <span className="mx-2 text-[#D9583E]">&middot;</span>
          <span>Now in a SKU</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="container-edge pb-8">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="ap-mono text-[#7A746B]">Pick a tier · pricing</span>
          <span className="flex-1 h-px bg-[rgba(244,241,235,0.12)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2.5">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-lg p-5 md:p-4 flex flex-col border ${
                tier.popular
                  ? 'border-[#D9583E] md:-translate-y-1.5 shadow-[0_20px_40px_-20px_rgba(217,88,62,0.35)]'
                  : 'border-[rgba(244,241,235,0.12)]'
              }`}
              style={{
                background: tier.popular
                  ? 'linear-gradient(180deg, rgba(217,88,62,0.08), rgba(217,88,62,0.02) 40%, transparent 100%), #171513'
                  : '#171513',
              }}
            >
              {tier.popular && (
                <span className="absolute -top-2.5 left-3 bg-[#D9583E] text-[#1A0A06] ap-mono text-[9px] font-semibold tracking-[0.16em] uppercase px-2 py-1 rounded-[3px] whitespace-nowrap leading-none">
                  ★ Most popular
                </span>
              )}

              <h3
                className={`ap-mono text-[11px] tracking-[0.16em] uppercase font-medium ${
                  tier.popular ? 'text-[#D9583E]' : 'text-[#C7C2B8]'
                }`}
              >
                {tier.name}
              </h3>

              <div className="mt-2 text-[32px] md:text-[28px] font-bold tracking-[-0.03em] leading-none ap-display">
                {tier.introPrice}
                <span className="text-[13px] text-[#C7C2B8] font-normal tracking-normal ml-0.5">
                  /mo
                </span>
              </div>
              <div className="ap-mono text-[9px] tracking-[0.14em] uppercase text-[#7A746B] mt-1.5">
                Intro · months 1–3
              </div>

              <div className="mt-3 pt-2.5 border-t border-dashed border-[rgba(244,241,235,0.12)] flex justify-between items-baseline gap-2 text-[11px] text-[#C7C2B8]">
                <span>Mo. 4+</span>
                <b className="text-[#F4F1EB] font-semibold text-[14px] tracking-[-0.01em]">
                  {tier.standardPrice}
                </b>
              </div>

              <div className="mt-3 text-[12px] p-2.5 bg-white/[0.03] rounded">
                <div className="ap-mono text-[9px] tracking-[0.16em] uppercase text-[#7A746B] font-medium mb-1">
                  Channels
                </div>
                <span className="text-[#F4F1EB]">{tier.channels}</span>
              </div>

              <ul className="mt-3 space-y-1.5 text-[13px] text-[#F4F1EB]">
                {tier.features.map((f) => (
                  <li key={f.text} className="flex gap-2 items-start">
                    <span className="text-[#D9583E] font-semibold shrink-0 mt-px">✓</span>
                    <span>
                      {f.highlight ? (
                        <>
                          Captions{' '}
                          <span className="text-[#D9583E] whitespace-nowrap">
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
                className={`mt-4 block text-center ap-mono text-[10px] tracking-[0.14em] uppercase font-semibold py-2.5 rounded border transition-colors ${
                  tier.popular
                    ? 'bg-[#D9583E] text-[#1A0A06] border-[#D9583E] hover:brightness-105'
                    : 'border-[#D9583E] text-[#D9583E] bg-transparent hover:bg-[#D9583E] hover:text-[#1A0A06]'
                }`}
              >
                Subscribe →
              </a>
            </div>
          ))}
        </div>

        <p className="mt-4 ap-mono text-[9px] tracking-[0.05em] leading-[1.6] text-[#7A746B]">
          First 3 months paid upfront. Standard pricing begins month 4. Every
          tier includes captions in your voice, strategic hashtags, scheduling,
          monthly snapshot &amp; a 30-min onboarding call.
        </p>
      </section>

      {/* Social Proof */}
      <section className="container-edge py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-5">
          <h2 className="ap-display text-[22px] md:text-[20px] font-semibold tracking-[-0.025em]">
            5.0 on Clutch.{' '}
            <em className="ap-serif-italic text-[#D9583E] font-normal">
              Same hands since 2008.
            </em>
          </h2>
          <div className="ap-mono text-[#C7C2B8] flex items-center gap-2">
            <span className="text-[#D9583E] tracking-[1px]">★★★★★</span>
            <span>verified · clutch.co</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {QUOTES.map((q) => (
            <article
              key={q.company}
              className="border border-[rgba(244,241,235,0.12)] bg-[#171513] rounded-md p-4 flex flex-col gap-2"
            >
              <div className="ap-serif-italic text-[36px] leading-[0.4] text-[#D9583E] -mb-1">
                &ldquo;
              </div>
              <p className="text-[14px] leading-[1.5] text-[#F4F1EB] flex-1 ap-body">
                {q.text}
              </p>
              <footer className="ap-mono text-[#C7C2B8] border-t border-[rgba(244,241,235,0.12)] pt-2.5 mt-1">
                <b className="text-[#F4F1EB] font-semibold block">{q.role}</b>
                {q.company}
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* Logo Wall */}
      <div className="container-edge">
        <div className="py-3 border-t border-b border-[rgba(244,241,235,0.12)] flex flex-wrap justify-center md:justify-between items-center gap-x-2 gap-y-1.5">
          {LOGOS.map((logo, i) => (
            <span key={logo} className="flex items-center gap-2">
              <span className="ap-display text-[11px] font-medium text-[#C7C2B8] uppercase tracking-[0.04em] whitespace-nowrap">
                {logo}
              </span>
              {i < LOGOS.length - 1 && (
                <span className="text-[#D9583E] opacity-50 text-[10px]">▲</span>
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
          className="block relative overflow-hidden bg-[#D9583E] text-[#1A0A06] rounded-lg p-5 md:p-6 md:flex md:items-center md:justify-between gap-4 transition-transform hover:-translate-y-px"
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
            <p className="mt-1.5 text-[12px] leading-[1.35] text-[#1A0A06]/[0.78]">
              <b className="font-bold text-[#1A0A06]">
                5 intro spots open this month.
              </b>{' '}
              First-come, then we close the cohort.
            </p>
          </div>
          <div className="relative z-[1] mt-4 md:mt-0 md:text-right ap-mono text-[10px] text-[#1A0A06] shrink-0">
            <span className="inline-block bg-[#1A0A06] text-[#F4F1EB] font-semibold tracking-[0.02em] px-3 py-1.5 rounded text-[11px] mb-1.5">
              calendly.com/lucasv/30-minute-intro-call
            </span>
            <span className="block text-right">{SITE.email}</span>
          </div>
        </a>
      </section>

      {/* Footer Note */}
      <section className="container-edge pb-20 md:pb-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="ap-mono text-[#C7C2B8] leading-[1.6]">
            <b className="text-[#F4F1EB] font-semibold">fiftyandfive.com</b>
            <br />
            Senior-led since 2008 · Orlando, FL
          </div>
          <div className="ap-serif-italic text-[12px] text-[#7A746B] max-w-[280px] md:text-right leading-[1.35]">
            &ldquo;Built on too many glasses of wine and 18 years of strong
            opinions.&rdquo;
          </div>
        </div>
      </section>

      <style>{`
        .autopilot-page {
          font-family: 'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        .ap-display {
          font-family: 'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif;
        }
        .ap-body {
          font-family: 'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif;
        }
        .ap-serif-italic {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: italic;
        }
        .ap-mono {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
