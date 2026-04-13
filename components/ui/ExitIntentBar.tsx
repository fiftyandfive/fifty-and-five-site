'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { trackEvent } from '@/components/layout/Analytics';

const KEY = 'fifty-and-five-exit-intent-v1';

export function ExitIntentBar() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;
    if (sessionStorage.getItem(KEY)) return;

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem(KEY, '1');
        trackEvent('Exit Intent Shown');
      }
    };
    document.addEventListener('mouseleave', onLeave);
    return () => document.removeEventListener('mouseleave', onLeave);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:bottom-6 md:w-[460px] z-50"
        >
          <div className="glass rounded-glass p-5 md:p-6 shadow-2xl">
            {!submitted ? (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-caption uppercase text-accent tracking-[0.1em]">
                      Before you go
                    </div>
                    <p className="mt-2 text-body-lg font-serif tracking-[-0.01em]">
                      Want our 5-minute social media audit checklist for your brand?
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="text-text-tertiary hover:text-text-primary leading-none text-xl"
                  >
                    ×
                  </button>
                </div>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const fd = new FormData(e.currentTarget);
                    const email = String(fd.get('email') || '');
                    trackEvent('Exit Intent Submit');
                    // Fire-and-forget to the contact endpoint with a tag
                    fetch('/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        name: 'Exit-intent lead',
                        email,
                        message: 'Requested the 5-minute social media audit checklist.',
                      }),
                    }).catch(() => {});
                    setSubmitted(true);
                  }}
                  className="mt-4 flex flex-col sm:flex-row gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="flex-1 bg-transparent border border-glass-border rounded-full px-4 py-2.5 text-[14px] text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-accent text-white px-5 py-2.5 text-[14px] font-medium glow-accent"
                  >
                    Send it
                  </button>
                </form>
              </>
            ) : (
              <div className="py-2">
                <div className="font-mono text-caption uppercase text-accent tracking-[0.1em]">
                  Done
                </div>
                <p className="mt-2 text-body-lg font-serif tracking-[-0.01em]">
                  Check your inbox. Talk soon.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
