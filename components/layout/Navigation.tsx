'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { NAV_LINKS, SITE } from '@/lib/constants';

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
            ? 'bg-[rgba(14,13,11,0.80)] backdrop-blur-[12px] border-b border-ff-fade-30'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container-content flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="font-editorial text-[20px] md:text-[24px] text-ff-paper tracking-[0.02em]"
            aria-label="Fifty & Five home"
          >
            {SITE.wordmark}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-receipt text-[13px] uppercase tracking-[0.1em] transition-colors duration-200 ${
                  pathname.startsWith(l.href)
                    ? 'text-ff-paper'
                    : 'text-ff-fade-50 hover:text-ff-paper'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="font-receipt text-[13px] text-ff-fade-50 hover:text-ff-paper transition-colors tracking-[0.02em]"
            >
              {SITE.phone}
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen((o) => !o)}
          >
            <motion.span
              className="block w-6 h-[1.5px] bg-ff-paper origin-center"
              animate={open ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-ff-paper origin-center"
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
            className="fixed inset-0 z-30 bg-ff-bg md:hidden"
          >
            <div className="h-full container-content pt-24 pb-10 flex flex-col">
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
                      className="font-editorial text-[48px] leading-none text-ff-paper tracking-[-0.02em]"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="space-y-4">
                <a
                  href={SITE.phoneHref}
                  className="block font-receipt text-[14px] text-ff-fade-50"
                >
                  {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-ff-stamp text-ff-paper font-receipt text-[14px] uppercase tracking-[0.05em] py-4 rounded"
                >
                  Run the numbers →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
