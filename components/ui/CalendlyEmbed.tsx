import { SITE } from '@/lib/constants';

export function CalendlyEmbed() {
  return (
    <div className="glass rounded-glass p-8 md:p-10">
      <div className="font-mono text-caption uppercase text-accent tracking-[0.1em]">
        Or skip the form
      </div>
      <h3 className="mt-2 font-serif text-[32px] leading-[1.1] tracking-[-0.02em]">
        Book a 30-minute intro call.
      </h3>
      <p className="mt-3 text-body text-text-secondary">
        No pitch deck. No pressure. Just a conversation about what you&rsquo;re building and whether
        Fifty &amp; Five is a fit.
      </p>

      <div
        className="mt-6 rounded-lg border border-glass-border bg-bg-tertiary p-6 flex flex-col items-center justify-center text-center min-h-[260px] relative overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(circle at 30% 20%, rgba(99,102,241,0.15), transparent 50%)',
          }}
        />
        <div className="relative">
          <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
            Calendly embed
          </div>
          <p className="mt-3 font-serif text-[24px] leading-[1.2] text-text-primary">
            Pick a time that works.
          </p>
          <a
            href={SITE.calendly}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-[14px] font-medium glow-accent"
          >
            Open Calendly →
          </a>
          <p className="mt-3 font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
            Calendar will embed inline on launch
          </p>
        </div>
      </div>
    </div>
  );
}
