'use client';

import { MagneticButton } from '@/components/ui/MagneticButton';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center gap-16 py-20">
      <div className="text-center space-y-2">
        <h1 className="font-serif text-h2 text-text-primary">MagneticButton Demo</h1>
        <p className="text-body text-text-secondary">
          Hover, click, and release to see all interaction states.
        </p>
      </div>

      <div className="space-y-12 flex flex-col items-center">
        <div className="space-y-3 text-center">
          <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">Primary — Large</p>
          <MagneticButton href="/contact" variant="primary" size="large">
            Book a Call
          </MagneticButton>
        </div>

        <div className="space-y-3 text-center">
          <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">Primary — Default</p>
          <MagneticButton href="/contact" variant="primary">
            Start a Conversation
          </MagneticButton>
        </div>

        <div className="space-y-3 text-center">
          <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">Primary — Small</p>
          <MagneticButton href="/contact" variant="primary" size="small">
            Let&rsquo;s Talk
          </MagneticButton>
        </div>

        <div className="space-y-3 text-center">
          <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">Primary — Button (no link)</p>
          <MagneticButton
            variant="primary"
            size="large"
            onClick={() => alert('Clicked!')}
          >
            Submit Form
          </MagneticButton>
        </div>

        <div className="space-y-3 text-center">
          <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">Secondary</p>
          <MagneticButton href="/work" variant="secondary" size="large">
            View Our Work
          </MagneticButton>
        </div>

        <div className="space-y-3 text-center">
          <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">Ghost</p>
          <MagneticButton href="/about" variant="ghost">
            Learn More
          </MagneticButton>
        </div>
      </div>

      <div className="mt-8 max-w-md text-center space-y-4 text-meta text-text-tertiary">
        <p><strong className="text-text-secondary">Magnetic hover:</strong> Move cursor near any button — it tracks within ~80px radius (pointer:fine only).</p>
        <p><strong className="text-text-secondary">Diamond rotation:</strong> Primary buttons have two crimson diamonds that rotate 45&deg; on hover.</p>
        <p><strong className="text-text-secondary">Press state:</strong> Mouse down scales to 0.96 + deepens to #A01830. Release overshoots to 1.02 then settles.</p>
        <p><strong className="text-text-secondary">Reduced motion:</strong> All motion disabled, only color state changes remain.</p>
      </div>
    </div>
  );
}
