'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const AGENCY_ITEMS = [
  { label: 'Account manager', cost: '$4,200', explain: 'A person whose job is to translate between you and the person doing your work.' },
  { label: 'Coordination tax', cost: '$1,680', explain: 'Meetings about meetings. Status updates about status updates. Calendar Tetris.' },
  { label: 'Junior staff time', cost: '$6,750', explain: 'The 24-year-old who actually writes your captions. Learning on your dime.' },
  { label: '"Strategy" template', cost: '$2,400', explain: 'A deck recycled from the last client with your logo swapped in.' },
  { label: 'Status meeting overhead', cost: '$1,400', explain: 'Sixty minutes every week to hear what you could have read in Slack.' },
  { label: 'Tools markup', cost: '$850', explain: 'Software you could buy yourself, billed back at 3x.' },
];

const FF_ITEMS = [
  { label: 'Direct principal access', cost: 'included' },
  { label: 'Strategy that adjusts in real time', cost: 'included' },
  { label: 'AI-augmented production', cost: 'included' },
  { label: 'Specialist bench when called', cost: 'per-engagement' },
];

export function ReceiptTeardown() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="paper-bg">
      <div className="container-content py-24 md:py-32">
        <div className="max-w-2xl mx-auto font-receipt text-[13px] md:text-[14px] tracking-[0.02em] text-ff-ink">
          <hr className="receipt-divider receipt-divider--paper" />
          <div className="py-4 text-center uppercase tracking-[0.12em]">
            ITEMIZED: WHAT YOU&rsquo;RE ACTUALLY PAYING FOR
          </div>
          <div className="pb-2 text-center text-ff-ink/50 uppercase tracking-[0.12em]">
            TRADITIONAL AGENCY &middot; MONTHLY INVOICE
          </div>
          <hr className="receipt-divider receipt-divider--paper" />

          <div className="py-4 space-y-1">
            {AGENCY_ITEMS.map((item, i) => (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex justify-between gap-2 text-left hover:text-ff-stamp transition-colors cursor-pointer"
                >
                  <span className="strike-red">{item.label}</span>
                  <span className="flex-1 border-b border-dotted border-ff-ink/15 mx-1 mb-1" />
                  <span className="strike-red">{item.cost}</span>
                </button>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="py-2 pl-4 text-[12px] text-ff-ink/50 italic font-body">
                        {item.explain}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-right py-2 border-t border-ff-ink/15">
            <span className="text-ff-ink/50">AGENCY THEATER:</span>{' '}
            <span className="text-ff-stamp font-bold">$17,280</span>
          </div>

          <hr className="receipt-divider receipt-divider--paper my-4" />

          <div className="py-2 uppercase tracking-[0.12em] text-ff-ink/70">
            WHAT YOU GET WITH F&amp;F
          </div>
          <div className="py-4 space-y-1">
            {FF_ITEMS.map((item, i) => (
              <div key={i} className="flex justify-between gap-2">
                <span>{item.label}</span>
                <span className="flex-1 border-b border-dotted border-ff-ink/15 mx-1 mb-1" />
                <span className="text-ff-data">{item.cost}</span>
              </div>
            ))}
          </div>

          <div className="text-right py-2 border-t border-ff-ink/15">
            <span className="text-ff-ink/50">60-DAY RECEIPT:</span>{' '}
            <span className="text-ff-data font-bold">$8,500/mo</span>
          </div>

          <hr className="receipt-divider receipt-divider--paper my-4" />

          <div className="text-center py-4 space-y-2">
            <div className="text-[16px] font-bold tracking-[0.08em]">
              YOU SAVE 50.8% AND GET BETTER WORK.
            </div>
            <div className="font-editorial text-[24px] italic text-ff-ink/70 tracking-normal">
              That&rsquo;s the receipt.
            </div>
          </div>

          <hr className="receipt-divider receipt-divider--paper" />

          <div className="mt-4 text-center text-[11px] text-ff-ink/30 font-body">
            *Illustrative breakdown based on industry-typical $17K/mo mid-tier retainer (4As, 2024).
          </div>
        </div>
      </div>
    </section>
  );
}
