'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useRef, type ReactNode } from 'react';
import { springSnappy } from '@/lib/animations';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'default' | 'small' | 'large';

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
};

const base =
  'relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 whitespace-nowrap select-none';

const sizes: Record<Size, string> = {
  default: 'px-7 py-3.5 text-[15px]',
  small: 'px-5 py-2 text-[13px]',
  large: 'px-9 py-4 text-[16px]',
};

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white glow-accent hover:bg-accent-light',
  secondary:
    'bg-transparent text-text-primary border border-glass-border backdrop-blur-md hover:bg-white/[0.04]',
  ghost:
    'bg-transparent text-accent hover:text-accent-light underline-offset-4 hover:underline',
};

export function MagneticButton({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'default',
  className = '',
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, springSnappy);
  const sy = useSpring(y, springSnappy);

  const onMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.2);
    y.set(dy * 0.2);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.span
      className="inline-flex items-center gap-2"
      style={{ x: sx, y: sy }}
    >
      {children}
    </motion.span>
  );

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        aria-label={ariaLabel}
        className={cls}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      aria-label={ariaLabel}
      className={cls}
    >
      {content}
    </button>
  );
}
