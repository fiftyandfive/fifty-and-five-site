'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SITE } from '@/lib/constants';

const SETUP_LINES = [
  'WHAT DID YOUR SOCIAL MEDIA DO LAST WEEK?',
  'NOT IMPRESSIONS. NOT REACH. NOT "BRAND AWARENESS."',
  'ONE THING YOUR CFO WOULD CALL A RESULT.',
];

const CHAR_DELAY = 35;
const LINE_PAUSE = 400;

const ease = [0.25, 0.46, 0.45, 0.94] as const;

type Phase = 'typing' | 'pausing' | 'reveal' | 'done';

const HERO_IMAGES = [
  { src: '/images/work/kendall-jackson-breckenridge-lifestyle.jpg', alt: 'Kendall-Jackson winter shoot, Breckenridge', badge: 'KJ · Breckenridge' },
  { src: '/images/work/lebron-blaze.jpg', alt: 'LeBron James carrying Blaze Pizza boxes', badge: 'Blaze · LeBron James', position: 'center 22%' },
];

export function TypewriterHero() {
  const [phase, setPhase] = useState<Phase>('typing');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [showPayoff, setShowPayoff] = useState(false);
  const [showCollage, setShowCollage] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setPrefersReduced(true);
      setCompletedLines(SETUP_LINES);
      setPhase('done');
      setShowPayoff(true);
      setShowCollage(true);
    }
  }, []);

  const finishSequence = useCallback(() => {
    setPhase('reveal');
    setTimeout(() => setShowPayoff(true), 100);
    setTimeout(() => setShowCollage(true), 250);
    setTimeout(() => setPhase('done'), 800);
  }, []);

  const advanceLine = useCallback(() => {
    setCompletedLines((prev) => [...prev, SETUP_LINES[lineIndex]]);
    setCurrentText('');
    setCharIndex(0);

    if (lineIndex < SETUP_LINES.length - 1) {
      setPhase('pausing');
      setTimeout(() => {
        setLineIndex((i) => i + 1);
        setPhase('typing');
      }, LINE_PAUSE);
    } else {
      setPhase('pausing');
      setTimeout(finishSequence, 200);
    }
  }, [lineIndex, finishSequence]);

  useEffect(() => {
    if (phase !== 'typing' || prefersReduced) return;

    const line = SETUP_LINES[lineIndex];
    if (charIndex < line.length) {
      const timer = setTimeout(() => {
        setCurrentText(line.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, CHAR_DELAY);
      return () => clearTimeout(timer);
    } else {
      advanceLine();
    }
  }, [phase, charIndex, lineIndex, advanceLine, prefersReduced]);

  const setupDimmed = phase === 'reveal' || phase === 'done';

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-bg-primary"
      aria-label="Fifty and Five. We do the storytelling. You run the business. 222 brands, 18 years social-first, senior team since 2008."
    >
      <h1 className="sr-only">Fifty &amp; Five — Senior-Led Boutique Social Media Agency</h1>

      {/* Crimson radial glow */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: 680,
          height: 680,
          background: 'radial-gradient(circle, rgba(196,30,58,0.16), transparent 62%)',
          filter: 'blur(8px)',
        }}
      />

      <div className="relative z-10 container-edge w-full py-[120px] md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-[54px] items-center">
          {/* LEFT — terminal beat + payoff */}
          <div>
            {/* Terminal lines */}
            <motion.div
              className="min-h-[120px] mb-[30px]"
              aria-hidden="true"
              animate={{ opacity: setupDimmed ? 0.15 : 1 }}
              transition={{ duration: 0.4, ease }}
            >
              {completedLines.map((line, i) => (
                <div
                  key={i}
                  className="font-mono text-[15px] leading-[1.9] whitespace-pre-wrap"
                  style={{ color: 'var(--color-terminal)' }}
                >
                  <span style={{ color: 'var(--color-accent-light)' }}>&gt; </span>{line}
                </div>
              ))}

              {phase === 'typing' && (
                <div
                  className="font-mono text-[15px] leading-[1.9] whitespace-pre-wrap"
                  style={{ color: 'var(--color-terminal)' }}
                >
                  <span style={{ color: 'var(--color-accent-light)' }}>&gt; </span>{currentText}
                  <span
                    className="inline-block w-[9px] h-[17px] ml-[2px] align-[-3px]"
                    style={{
                      background: 'var(--color-terminal)',
                      animation: 'crt-blink 1s steps(1) infinite',
                    }}
                  />
                </div>
              )}

              {phase === 'pausing' && lineIndex < SETUP_LINES.length - 1 && (
                <div
                  className="font-mono text-[15px] leading-[1.9] whitespace-pre-wrap"
                  style={{ color: 'var(--color-terminal)' }}
                >
                  <span style={{ color: 'var(--color-accent-light)' }}>&gt; </span>
                  <span
                    className="inline-block w-[9px] h-[17px] ml-[2px] align-[-3px]"
                    style={{
                      background: 'var(--color-terminal)',
                      animation: 'crt-blink 1s steps(1) infinite',
                    }}
                  />
                </div>
              )}
            </motion.div>

            {/* Payoff — visible by default (no JS gate), animated in via class */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: showPayoff || !hasHydrated ? 1 : 0,
                transform: showPayoff || !hasHydrated ? 'none' : 'translateY(12px)',
              }}
            >
              <div
                className="font-serif"
                style={{
                  fontSize: 'clamp(64px, 9vw, 120px)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.02em',
                  fontWeight: 500,
                  color: 'var(--color-paper)',
                }}
              >
                Exactly<span style={{ color: 'var(--color-accent)' }}>.</span>
              </div>

              <p
                className="font-serif mt-[22px]"
                style={{
                  fontSize: 'clamp(20px, 2.4vw, 27px)',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: 'var(--color-paper)',
                }}
              >
                We do the storytelling.{' '}
                <span style={{ color: 'var(--color-paper-dim)' }}>You run the business.</span>
              </p>

              <div className="mt-[34px] flex flex-wrap gap-[14px]">
                <MagneticButton
                  href={SITE.calendly}
                  variant="primary"
                  size="large"
                  trackName="Hero CTA — Run the numbers"
                >
                  ◆ Run the numbers →
                </MagneticButton>
                <MagneticButton
                  href="/work"
                  variant="secondary"
                  size="large"
                  trackName="Hero CTA — See the work"
                >
                  See the work →
                </MagneticButton>
              </div>

              <div
                className="mt-[26px] font-mono uppercase"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  color: 'var(--color-muted)',
                }}
              >
                222+ brands · 18 years social-first · senior team since 2008
              </div>
            </div>
          </div>

          {/* RIGHT — creative proof collage */}
          <div
            className="grid grid-cols-2 gap-[14px] transition-all duration-[900ms]"
            style={{
              opacity: showCollage ? 1 : 0,
              transform: showCollage ? 'none' : 'translateY(20px)',
              transitionTimingFunction: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
              transitionDelay: '150ms',
            }}
          >
            {HERO_IMAGES.map((img, i) => (
              <div
                key={i}
                className="relative rounded-[14px] overflow-hidden"
                style={{
                  border: '1px solid var(--glass-border)',
                  background: 'var(--color-bg-secondary)',
                  boxShadow: '0 26px 60px -30px rgba(0,0,0,0.8)',
                }}
              >
                <div style={{ paddingTop: '100%' }} />
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover z-[3]"
                  style={{ objectPosition: img.position || 'center' }}
                  sizes="(max-width: 920px) 50vw, 280px"
                  priority={i === 0}
                  unoptimized
                />
                <div
                  className="absolute top-3 left-3 z-[4] font-mono uppercase px-2 py-1 rounded-[6px]"
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.14em',
                    color: 'var(--color-paper)',
                    background: 'rgba(10,10,12,0.6)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  {img.badge}
                </div>
                {/* Fallback placeholder if image doesn't load */}
                <div
                  className="absolute inset-0 z-[1] flex flex-col justify-end p-[18px]"
                  style={{
                    background: 'repeating-linear-gradient(135deg, rgba(196,30,58,0.05) 0 12px, transparent 12px 24px), linear-gradient(160deg, var(--color-bg-tertiary), var(--color-bg-secondary))',
                  }}
                >
                  <div className="absolute inset-[14px] border border-dashed rounded-lg" style={{ borderColor: 'rgba(245,242,236,0.18)' }} />
                  <span className="relative font-mono text-[11px] tracking-[0.04em]" style={{ color: 'var(--color-accent-light)' }}>
                    {img.badge}
                  </span>
                  <span className="relative text-[12.5px] mt-1" style={{ color: 'var(--color-paper-dim)' }}>
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
