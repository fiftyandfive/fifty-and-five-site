'use client';

import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

/**
 * Quiet counter for "Algorithm Updates Survived." Unlike the
 * coffee/cork counters, this one doesn't blur or tick fast — the
 * whole point is that the number is small, real, and earned.
 * It animates up once on view, then bumps +1 every 25–60s as a
 * subtle nod to the fact that something is always changing under us.
 */
export function AlgorithmCounter({
  base = 427,
  className = '',
}: {
  base?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const mv = useMotionValue(0);
  const sv = useSpring(mv, { stiffness: 40, damping: 22 });
  const [extra, setExtra] = useState(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) mv.set(base);
  }, [inView, mv, base]);

  useEffect(() => {
    return sv.on('change', (v) => setDisplay(Math.round(v)));
  }, [sv]);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    let t: number | undefined;
    const schedule = () => {
      const jitter = 25_000 + Math.random() * 35_000; // 25–60s
      t = window.setTimeout(() => {
        if (!document.hidden) setExtra((x) => x + 1);
        schedule();
      }, jitter);
    };
    schedule();
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [inView]);

  return (
    <motion.span ref={ref} className={className}>
      {(display + extra).toLocaleString()}
    </motion.span>
  );
}
