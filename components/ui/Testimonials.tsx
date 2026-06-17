'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  TESTIMONIALS,
  CLUTCH_PROFILE_URL,
  type Testimonial,
} from '@/lib/data/testimonials';

function QuoteViewport({ t }: { t: Testimonial }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="min-h-[100svh] flex items-center bg-bone-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="container-edge py-24 md:py-32 w-full">
        <div className="max-w-prose mx-auto text-center">
          <hr className="border-t border-dashed border-[#000000]/20 my-0" />

          <blockquote className="mt-10 font-serif text-[clamp(28px,5vw,64px)] leading-[1.15] tracking-[-0.02em] text-[#000000]">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <hr className="border-t border-dashed border-[#000000]/20 my-10" />

          <div className="flex flex-col items-center gap-4">
            <Image
              src={t.avatarSrc}
              alt={t.author}
              width={160}
              height={160}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <a
                href={t.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[14px] uppercase tracking-[0.12em] text-[#000000] hover:text-accent transition-colors"
              >
                {t.author} ↗
              </a>
              <div className="mt-1 text-[14px] text-[#000000]/60">
                {t.title}
              </div>
            </div>
            <a
              href={t.clutchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent hover:opacity-70 transition-opacity"
            >
              VERIFIED ON CLUTCH ↗
            </a>
          </div>

          <hr className="border-t border-dashed border-[#000000]/20 mt-10" />
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section>
      {TESTIMONIALS.map((t) => (
        <QuoteViewport key={t.company} t={t} />
      ))}
      <div className="bg-bone-white py-8 text-center">
        <Link
          href={CLUTCH_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[12px] uppercase tracking-[0.12em] text-[#000000]/50 hover:text-accent transition-colors"
        >
          Read all reviews on Clutch ↗
        </Link>
      </div>
    </section>
  );
}
