'use client';

import Link from 'next/link';
import { useRef, useState, useCallback, useEffect, type ReactNode } from 'react';
import { trackEvent } from '@/components/layout/Analytics';

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
  trackName?: string;
};

const base =
  'relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap select-none';

const sizes: Record<Size, string> = {
  default: 'px-7 py-3.5 text-[15px] min-h-[44px]',
  small: 'px-5 py-2.5 text-[13px] min-h-[44px]',
  large: 'px-9 py-4 text-[16px] min-h-[48px]',
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
  trackName,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [overshoot, setOvershoot] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const isFinePointer = useCallback(() => {
    return typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
  }, []);

  const handleClick = useCallback(() => {
    if (trackName) trackEvent(trackName, href ? { to: href } : undefined);
    onClick?.();
  }, [trackName, href, onClick]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (reducedMotion || !isFinePointer()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = 80;
    if (dist > radius) return;
    const factor = (1 - dist / radius) * 6;
    const angle = Math.atan2(dy, dx);
    setTx(Math.cos(angle) * factor);
    setTy(Math.sin(angle) * factor);
  }, [reducedMotion, isFinePointer]);

  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => {
    setHovered(false);
    setPressed(false);
    setTx(0);
    setTy(0);
  }, []);

  const onMouseDown = useCallback(() => {
    if (!reducedMotion) setPressed(true);
  }, [reducedMotion]);

  const onMouseUp = useCallback(() => {
    if (reducedMotion) return;
    setPressed(false);
    setOvershoot(true);
    setTimeout(() => setOvershoot(false), 200);
  }, [reducedMotion]);

  const isPrimary = variant === 'primary';

  const scale = pressed ? 0.96 : overshoot ? 1.02 : 1;
  const buttonStyle: React.CSSProperties = reducedMotion
    ? { backgroundColor: pressed && isPrimary ? '#A01830' : undefined }
    : {
        transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
        transition: pressed
          ? 'transform 100ms ease-out, background-color 100ms ease-out'
          : overshoot
            ? 'transform 150ms ease-out, background-color 200ms ease-out'
            : 'transform 200ms ease-out, background-color 200ms ease-out',
        backgroundColor: pressed && isPrimary ? '#A01830' : undefined,
      };

  const diamondStyle: React.CSSProperties = reducedMotion
    ? { transform: 'rotate(45deg)' }
    : {
        transform: hovered ? 'rotate(90deg)' : 'rotate(45deg)',
        transition: 'transform 250ms ease-in-out',
      };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const diamond = (
    <span
      aria-hidden
      className="inline-block w-[7px] h-[7px] bg-current"
      style={diamondStyle}
    />
  );

  const content = (
    <>
      {isPrimary && diamond}
      {children}
      {isPrimary && (
        <span
          aria-hidden
          className="inline-block w-[7px] h-[7px] bg-current"
          style={diamondStyle}
        />
      )}
    </>
  );

  const eventHandlers = {
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
  };

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        onClick={handleClick}
        aria-label={ariaLabel}
        className={cls}
        style={buttonStyle}
        {...eventHandlers}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={cls}
      style={buttonStyle}
      {...eventHandlers}
    >
      {content}
    </button>
  );
}
