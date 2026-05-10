'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { NAV_LINKS, SITE } from '@/lib/constants';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-[background,backdrop-filter,border-color] duration-300 ${
          scrolled
            ? 'bg-[rgba(10,10,12,0.65)] backdrop-blur-[12px] backdrop-saturate-150 border-b border-glass-border'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container-edge flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="font-serif text-[22px] md:text-[26px] text-text-primary tracking-[-0.03em] lowercase"
            aria-label="fifty & five home"
          >
            {SITE.wordmark}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[14px] transition-colors duration-200 ${
                  pathname.startsWith(l.href)
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <MagneticButton href="/contact" variant="primary" size="small">
              Let&rsquo;s Talk
            </MagneticButton>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen((o) => !o)}
          >
            <motion.span
              className="block w-6 h-[1.5px] bg-text-primary origin-center"
              animate={open ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-text-primary origin-center"
              animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-bg-primary md:hidden"
          >
            <div className="h-full container-edge pt-24 pb-10 flex flex-col">
              <nav className="flex flex-col gap-6 flex-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={l.href}
                      className="font-serif text-[48px] leading-none text-text-primary tracking-[-0.02em]"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <MagneticButton href="/contact" variant="primary" size="large" className="w-full">
                  Let&rsquo;s Talk →
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
