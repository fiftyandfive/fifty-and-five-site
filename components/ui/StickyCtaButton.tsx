'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { trackEvent } from '@/components/layout/Analytics';

export function StickyCtaButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const atBottom = window.innerHeight + y >= docHeight - 200;
      setVisible(y > 400 && !atBottom);
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
            onClick={() => trackEvent('cta_click_run_numbers')}
            className="inline-block bg-ff-stamp text-ff-paper font-receipt text-[13px] uppercase tracking-[0.05em] px-5 py-3 rounded shadow-[0_2px_8px_rgba(227,59,15,0.25)] hover:opacity-90 transition-opacity"
          >
            Run the numbers →
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
