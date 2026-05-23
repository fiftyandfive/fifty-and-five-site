'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SITE } from '@/lib/constants';

const SETUP_LINES = [
  'What did your social media do last week?',
  'Not impressions. Not reach. Not "brand awareness."',
  'One thing your CFO would call a result.',
  '...',
];

const CHAR_DELAY = 65;
const LINE_PAUSE = 800;
const FADE_PAUSE = 1000;

const ease = [0.25, 0.46, 0.45, 0.94] as const;

type Phase = 'typing' | 'pausing' | 'punch' | 'done';

function ParallaxDiamonds({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  if (reducedMotion) {
    return (
      <div ref={ref} className="absolute right-[8%] md:right-[12%] top-1/2 -translate-y-1/2 pointer-events-none z-[1]" aria-hidden>
        <div className="w-3 h-3 md:w-4 md:h-4 bg-accent rotate-45 opacity-20" />
        <div className="w-2 h-2 md:w-3 md:h-3 bg-accent rotate-45 opacity-12 mt-3 ml-2" />
      </div>
    );
  }

  return (
    <div ref={ref} className="absolute right-[8%] md:right-[12%] top-1/2 -translate-y-1/2 pointer-events-none z-[1]" aria-hidden>
      <motion.div
        className="w-3 h-3 md:w-4 md:h-4 bg-accent rotate-45 opacity-20"
        style={{ y: y1 }}
      />
      <motion.div
        className="w-2 h-2 md:w-3 md:h-3 bg-accent rotate-45 opacity-12 mt-3 ml-2"
        style={{ y: y2 }}
      />
    </div>
  );
}

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
  const [showSkip, setShowSkip] = useState(false);
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

  useEffect(() => {
    if (prefersReduced || phase === 'done') return;
    const timer = setTimeout(() => setShowSkip(true), 1000);
    return () => clearTimeout(timer);
  }, [prefersReduced, phase]);

  const skipToEnd = useCallback(() => {
    setCompletedLines(SETUP_LINES);
    setCurrentText('');
    setPhase('punch');
    setShowSkip(false);
    setShowPunch(true);
    setTimeout(() => setShowSub(true), 300);
    setTimeout(() => setShowCta(true), 700);
    setTimeout(() => setShowTrust(true), 1000);
    setTimeout(() => setPhase('done'), 1100);
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
        setTimeout(() => setShowSub(true), 400);
        setTimeout(() => setShowCta(true), 800);
        setTimeout(() => setShowTrust(true), 1100);
        setTimeout(() => setPhase('done'), 1200);
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
    <section
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-bg-primary"
      aria-label="What did your social media do last week? Not impressions. Not reach. Not brand awareness. One thing your CFO would call a result. Exactly. We do the storytelling. You run the business."
    >
      <h1 className="sr-only">Fifty &amp; Five — Senior-Led Boutique Social Media Agency</h1>

      <ParallaxDiamonds reducedMotion={prefersReduced} />

      <div className="relative z-10 container-edge pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Setup lines — 1980s CRT typewriter */}
        <motion.div
          className="min-h-[8rem] md:min-h-[7rem] relative"
          aria-hidden="true"
          animate={{ opacity: setupDimmed ? 0.15 : 1 }}
          transition={{ duration: 0.5, ease }}
        >
          {/* CRT scanline overlay */}
          {!setupDimmed && (
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
                mixBlendMode: 'multiply',
              }}
            />
          )}

          {completedLines.map((line, i) => (
            <div
              key={i}
              className="font-mono text-[clamp(11px,2.8vw,17px)] leading-[1.8] tracking-[0.04em] uppercase"
              style={{
                color: '#4ade80',
                textShadow: '0 0 8px rgba(74,222,128,0.4), 0 0 2px rgba(74,222,128,0.2)',
              }}
            >
              <span className="opacity-50 mr-2">&gt;</span>{line}
            </div>
          ))}

          {phase === 'typing' && (
            <div
              className="font-mono text-[clamp(11px,2.8vw,17px)] leading-[1.8] tracking-[0.04em] uppercase"
              style={{
                color: '#4ade80',
                textShadow: '0 0 8px rgba(74,222,128,0.4), 0 0 2px rgba(74,222,128,0.2)',
              }}
            >
              <span className="opacity-50 mr-2">&gt;</span>{currentText}
              <span
                className="inline-block w-[0.6em] h-[1.1em] ml-[1px] align-middle"
                style={{
                  background: '#4ade80',
                  boxShadow: '0 0 6px rgba(74,222,128,0.5)',
                  animation: 'crt-blink 1s step-end infinite',
                }}
              />
            </div>
          )}

          {phase === 'pausing' && lineIndex < SETUP_LINES.length - 1 && (
            <div
              className="font-mono text-[clamp(11px,2.8vw,17px)] leading-[1.8] tracking-[0.04em] uppercase"
              style={{
                color: '#4ade80',
                textShadow: '0 0 8px rgba(74,222,128,0.4), 0 0 2px rgba(74,222,128,0.2)',
              }}
            >
              <span className="opacity-50 mr-2">&gt;</span>
              <span
                className="inline-block w-[0.6em] h-[1.1em] ml-[1px] align-middle"
                style={{
                  background: '#4ade80',
                  boxShadow: '0 0 6px rgba(74,222,128,0.5)',
                  animation: 'crt-blink 1s step-end infinite',
                }}
              />
            </div>
          )}
        </motion.div>

        {/* Punch headline */}
        <AnimatePresence>
          {showPunch && (
            <motion.div
              className="mt-8 md:mt-10 font-serif text-[clamp(56px,10vw,140px)] leading-[1.0] tracking-[-0.04em] text-text-primary max-w-5xl"
              initial={{ opacity: 0, scale: 1.04, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
            >
              Exactly.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tagline */}
        <AnimatePresence>
          {showSub && (
            <motion.p
              className="mt-6 md:mt-8 text-[clamp(20px,3vw,32px)] leading-[1.35] text-text-secondary max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease }}
            >
              We do the storytelling.<br />You run the business.
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
                Run the numbers &rarr;
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
              ★★★★★ 5.0 on Clutch &middot; 18 receipts publicly verified
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skip button */}
        <AnimatePresence>
          {showSkip && phase !== 'done' && (
            <motion.button
              onClick={skipToEnd}
              className="fixed bottom-6 left-6 z-50 font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary hover:text-text-secondary transition-colors px-3 py-2 rounded border border-glass-border bg-bg-primary/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              aria-label="Skip animation"
            >
              Skip &rarr;
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
