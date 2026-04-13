'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef, type ReactNode } from 'react';
import { springSmooth } from '@/lib/animations';

type Props = {
  children: ReactNode;
  className?: string;
  tiltStrength?: number;
};

export function TiltCard({ children, className = '', tiltStrength = 8 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [tiltStrength, -tiltStrength]), springSmooth);
  const ry = useSpring(useTransform(px, [0, 1], [-tiltStrength, tiltStrength]), springSmooth);

  const onMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
    el.style.setProperty('--tilt-mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--tilt-my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
        rotateX: rx,
        rotateY: ry,
      }}
      className={`tilt-card relative ${className}`}
    >
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background:
            'radial-gradient(circle at var(--tilt-mx,50%) var(--tilt-my,50%), rgba(255,255,255,0.08) 0%, transparent 50%)',
          mixBlendMode: 'overlay',
        }}
      />
    </motion.div>
  );
}
