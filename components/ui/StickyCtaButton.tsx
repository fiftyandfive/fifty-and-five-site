'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function StickyCtaButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const atBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 600;
      setVisible(y > 600 && !atBottom);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed z-50 bottom-6 right-6 md:right-8"
        >
          <Link
            href="/contact"
            className="group glass glow-accent inline-flex items-center gap-3 rounded-full pl-3 pr-5 py-2.5 text-[13px] font-medium text-text-primary"
          >
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-white font-serif text-[15px]">
              55
            </span>
            <span>Let&rsquo;s talk</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-0.5 text-accent-light"
              aria-hidden
            >
              →
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
