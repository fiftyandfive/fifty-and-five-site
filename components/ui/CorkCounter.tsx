'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

/**
 * Absurd-scale cork counter. Starts in the trillions (a winking nod
 * to 18 years of wine-brand work) and never stops incrementing while
 * visible. Ticks fast enough that the last few digits blur, giving
 * the stat a playful "we lost count a long time ago" energy.
 *
 * Pauses when the tab is hidden so we're not spinning a timer in the
 * background, and respects prefers-reduced-motion by holding the
 * number still after the initial reveal.
 */
export function CorkCounter({
  base = 1_284_931_047_612,
  tickMs = 90,
  className = '',
}: {
  base?: number;
  tickMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const [value, setValue] = useState(base);

  useEffect(() => {
    if (!inView) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let t: number | undefined;
    const schedule = () => {
      t = window.setTimeout(() => {
        if (!document.hidden) {
          // Random bump between 1 and 4 so the last digits shimmer
          // instead of looking like a mechanical counter.
          setValue((v) => v + 1 + Math.floor(Math.random() * 4));
        }
        schedule();
      }, tickMs);
    };
    schedule();
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [inView, tickMs]);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {value.toLocaleString()}
    </motion.span>
  );
}
