'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const PAIN_POINTS = [
  {
    number: '01',
    title: 'THE BAIT-AND-SWITCH',
    hook: '"The principal sold you. The junior delivers."',
    body: "You bought a senior strategist. You got a 26-year-old learning on your brand. The person who pitched you hasn't been on a call in six months.",
    receipt: "At F&F, the principal who pitches is the principal on the Tuesday call in month seven. We don't run a bait-and-switch — we run a duration.",
  },
  {
    number: '02',
    title: 'THE LAYER CAKE',
    hook: '"You ask a question. Three people forward the email."',
    body: "Account manager to traffic manager to coordinator to strategist. Your feedback gets translated four times before it reaches the person doing the work. 40% of a traditional agency's billable hours get eaten by coordination tax.",
    receipt: 'We compress 40-hour weeks into 4. The savings stay with the client — as margin or as velocity.',
  },
  {
    number: '03',
    title: 'THE BILLING GAME',
    hook: '"You\'re paying for hours. Not pattern recognition."',
    body: "Eighteen years across 215 brands compounds into something an hourly invoice can't capture. The pattern is the product. Most agencies sell projects. We sell durations.",
    receipt: "Most clients have been with us 3+ years. The longest is at 10. That's not luck — that's the receipt.",
  },
];

function PainPoint({ point }: { point: typeof PAIN_POINTS[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="font-receipt text-[14px] uppercase tracking-[0.12em] text-ff-stamp">
        {point.number}. {point.title}
      </div>
      <div className="mt-4 font-editorial text-[24px] md:text-[28px] italic text-ff-paper leading-[1.3]">
        {point.hook}
      </div>
      <p className="mt-4 font-body text-[18px] md:text-[20px] text-ff-fade-50 leading-[1.7]">
        {point.body}
      </p>
      <div className="mt-6 relative">
        <motion.div
          className="stamp-highlight font-body text-[18px] md:text-[20px] text-ff-paper leading-[1.6] inline"
          data-animate={isInView ? 'true' : 'false'}
        >
          {point.receipt}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function DRScroll() {
  return (
    <section className="bg-ff-bg">
      <div className="container-content py-24 md:py-32">
        <div className="max-w-prose mx-auto">
          <h2 className="font-editorial text-h2 text-ff-paper">
            You&rsquo;ve been here before.
          </h2>
          <p className="mt-4 font-body text-[20px] text-ff-fade-50">
            Agencies break the same three ways.<br />
            Ours doesn&rsquo;t.
          </p>

          <div className="mt-16 space-y-20">
            {PAIN_POINTS.map((p) => (
              <div key={p.number}>
                <hr className="receipt-divider mb-10" />
                <PainPoint point={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
