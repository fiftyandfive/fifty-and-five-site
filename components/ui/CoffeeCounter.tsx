'use client';

import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

/**
 * Animated counter starting at a base number, then incrementing +1 every
 * tickMs while visible on the page. Used for the "cups of coffee"
 * stat on the homepage — a live, playful counter that reinforces the
 * "Built with too much coffee" voice from the footer.
 */
export function CoffeeCounter({
  base = 47293,
  tickMs = 60_000,
  className = '',
}: {
  base?: number;
  tickMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const mv = useMotionValue(0);
  const sv = useSpring(mv, { stiffness: 50, damping: 20 });
  const [extra, setExtra] = useState(0);
  const [display, setDisplay] = useState(0);

  // First-paint count-up
  useEffect(() => {
    if (inView) mv.set(base);
  }, [inView, mv, base]);

  // Spring → rounded display value
  useEffect(() => {
    return sv.on('change', (v) => setDisplay(Math.round(v)));
  }, [sv]);

  // Live tick: +1 every tickMs while tab is visible
  useEffect(() => {
    if (!inView) return;
    let t: number | undefined;
    const schedule = () => {
      t = window.setTimeout(() => {
        if (!document.hidden) setExtra((x) => x + 1);
        schedule();
      }, tickMs);
    };
    schedule();
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [inView, tickMs]);

  const total = display + extra;
  return (
    <motion.span ref={ref} className={className}>
      {total.toLocaleString()}
    </motion.span>
  );
}
