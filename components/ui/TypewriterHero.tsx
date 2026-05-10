'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { trackEvent } from '@/components/layout/Analytics';

const SETUP_LINES = [
  "You're paying for social this quarter.",
  'What did it do last week?',
  "If you can't answer in one sentence, that's the problem.",
];

const CHAR_DELAY = 50;
const LINE_PAUSE = 800;
const FADE_PAUSE = 1000;

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
  const [showSkip, setShowSkip] = useState(false);

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

  useEffect(() => {
    if (prefersReduced) return;
    const timer = setTimeout(() => setShowSkip(true), 1000);
    return () => clearTimeout(timer);
  }, [prefersReduced]);

  const skipToEnd = useCallback(() => {
    setCompletedLines(SETUP_LINES);
    setCurrentText('');
    setPhase('done');
    setShowPunch(true);
    setShowSub(true);
    setShowCta(true);
    setShowTrust(true);
    setShowSkip(false);
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
        setShowSkip(false);
        setTimeout(() => setShowPunch(true), 100);
        setTimeout(() => setShowSub(true), 500);
        setTimeout(() => setShowCta(true), 900);
        setTimeout(() => setShowTrust(true), 1200);
        setTimeout(() => setPhase('done'), 1300);
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
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-ff-bg">
      <div className="relative z-10 container-content pt-32 pb-24 md:pt-40 md:pb-32 max-w-[1080px]">
        {/* Setup lines */}
        <motion.div
          className="min-h-[7rem] md:min-h-[6rem]"
          animate={{ opacity: setupDimmed ? 0.3 : 1 }}
          transition={{ duration: 0.5, ease }}
        >
          {completedLines.map((line, i) => (
            <div
              key={i}
              className="font-receipt text-[14px] md:text-[16px] text-ff-fade-50 leading-[1.7] tracking-[0.01em]"
            >
              {line}
            </div>
          ))}

          {phase === 'typing' && (
            <div className="font-receipt text-[14px] md:text-[16px] text-ff-fade-50 leading-[1.7] tracking-[0.01em]">
              {currentText}
              <span className="inline-block w-[2px] h-[1.1em] bg-ff-stamp ml-[1px] align-middle animate-pulse" />
            </div>
          )}

          {phase === 'pausing' && lineIndex < SETUP_LINES.length - 1 && (
            <div className="font-receipt text-[14px] md:text-[16px] text-ff-fade-50 leading-[1.7] tracking-[0.01em]">
              <span className="inline-block w-[2px] h-[1.1em] bg-ff-stamp ml-[1px] align-middle animate-pulse" />
            </div>
          )}
        </motion.div>

        {/* Punch headline */}
        <AnimatePresence>
          {showPunch && (
            <motion.h1
              className="mt-8 md:mt-10 font-editorial font-bold text-hero text-ff-paper max-w-5xl"
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
              className="mt-6 md:mt-8 text-[clamp(18px,2.5vw,24px)] leading-[1.5] text-ff-fade-50 max-w-2xl font-body"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              We report what moved revenue, retention, and reach&nbsp;&mdash;
              in language a CFO can defend without flinching.
            </motion.p>
          )}
        </AnimatePresence>

        {/* CTA cluster */}
        <AnimatePresence>
          {showCta && (
            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <Link
                href="/contact"
                onClick={() => trackEvent('cta_click_run_numbers')}
                className="inline-block bg-ff-stamp text-ff-paper font-receipt text-[14px] uppercase tracking-[0.05em] px-8 py-4 rounded hover:opacity-90 transition-opacity"
              >
                {SITE.cta}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust line */}
        <AnimatePresence>
          {showTrust && (
            <motion.div
              className="mt-8 font-receipt text-[11px] md:text-[12px] uppercase tracking-[0.15em] text-ff-fade-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease }}
            >
              ★★★★★ 5.0 on Clutch &middot; 18 receipts publicly verified
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skip button */}
        <AnimatePresence>
          {showSkip && phase !== 'done' && (
            <motion.button
              type="button"
              onClick={skipToEnd}
              className="fixed bottom-6 left-6 font-receipt text-[11px] uppercase tracking-[0.1em] text-ff-fade-50 hover:text-ff-paper transition-colors z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Skip animation"
            >
              Skip →
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
