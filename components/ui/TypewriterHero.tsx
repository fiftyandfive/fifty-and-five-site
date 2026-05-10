'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SITE } from '@/lib/constants';

const SETUP_LINES = [
  "You're paying for social this quarter.",
  'What did it do last week?',
  "If you can't answer in one sentence, that's the problem.",
];

const CHAR_DELAY = 50;
const LINE_PAUSE = 400;
const FADE_PAUSE = 800;

const ease = [0.25, 0.46, 0.45, 0.94] as const;

type Phase = 'typing' | 'pausing' | 'punch' | 'done';

export function TypewriterHero() {
  const [phase, setPhase] = useState<Phase>('typing');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [showPunch, setShowPunch] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [showTrust, setShowTrust] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setPrefersReduced(true);
      setCompletedLines(SETUP_LINES);
      setPhase('done');
      setShowPunch(true);
      setShowSub(true);
      setShowCta(true);
      setShowTrust(true);
    }
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
      setTimeout(() => {
        setPhase('punch');
        setTimeout(() => setShowPunch(true), 100);
        setTimeout(() => setShowSub(true), 600);
        setTimeout(() => setShowCta(true), 1000);
        setTimeout(() => setShowTrust(true), 1300);
        setTimeout(() => setPhase('done'), 1400);
      }, FADE_PAUSE);
    }
  }, [lineIndex]);

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

  const setupDimmed = phase === 'punch' || phase === 'done';

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-bg-primary">
      <div className="relative z-10 container-edge pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Setup lines — typewriter */}
        <motion.div
          className="min-h-[8rem] md:min-h-[7rem]"
          animate={{ opacity: setupDimmed ? 0.4 : 1 }}
          transition={{ duration: 0.5, ease }}
        >
          {completedLines.map((line, i) => (
            <div
              key={i}
              className="font-mono text-[15px] md:text-[17px] text-text-secondary leading-[1.7] tracking-[0.01em]"
            >
              {line}
            </div>
          ))}

          {phase === 'typing' && (
            <div className="font-mono text-[15px] md:text-[17px] text-text-secondary leading-[1.7] tracking-[0.01em]">
              {currentText}
              <span className="inline-block w-[2px] h-[1.1em] bg-accent ml-[1px] align-middle animate-pulse" />
            </div>
          )}

          {phase === 'pausing' && lineIndex < SETUP_LINES.length - 1 && (
            <div className="font-mono text-[15px] md:text-[17px] text-text-secondary leading-[1.7] tracking-[0.01em]">
              <span className="inline-block w-[2px] h-[1.1em] bg-accent ml-[1px] align-middle animate-pulse" />
            </div>
          )}
        </motion.div>

        {/* Punch headline */}
        <AnimatePresence>
          {showPunch && (
            <motion.h1
              className="mt-8 md:mt-10 font-serif text-[clamp(64px,10vw,140px)] leading-[1.0] tracking-[-0.04em] text-text-primary max-w-5xl"
              initial={{ opacity: 0, scale: 1.04, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              Activity isn&rsquo;t an outcome.
            </motion.h1>
          )}
        </AnimatePresence>

        {/* Sub-headline */}
        <AnimatePresence>
          {showSub && (
            <motion.p
              className="mt-6 md:mt-8 text-[clamp(18px,2.5vw,28px)] leading-[1.45] text-text-secondary max-w-2xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              We report what moved revenue, retention, and reach&nbsp;&mdash;
              in language a CFO can defend without flinching.
            </motion.p>
          )}
        </AnimatePresence>

        {/* CTAs */}
        <AnimatePresence>
          {showCta && (
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <MagneticButton
                href={SITE.calendly}
                variant="primary"
                size="large"
                trackName="Hero CTA — Book Intro Call"
              >
                Book a 30-min intro call &rarr;
              </MagneticButton>
              <MagneticButton
                href="/work"
                variant="secondary"
                size="large"
                trackName="Hero CTA — See the Work"
              >
                See the work &rarr;
              </MagneticButton>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust line */}
        <AnimatePresence>
          {showTrust && (
            <motion.div
              className="mt-10 font-mono text-[11px] md:text-caption uppercase tracking-[0.2em] text-text-tertiary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease }}
            >
              215 brands &middot; 5 continents &middot; Most clients 3+ years &middot; Since 2008
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
