'use client';

import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

type Props = {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  className = '',
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const mv = useMotionValue(0);
  const sv = useSpring(mv, { stiffness: 50, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) mv.set(target);
  }, [inView, mv, target]);

  useEffect(() => {
    return sv.on('change', (v) => setDisplay(Math.round(v)));
  }, [sv]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
