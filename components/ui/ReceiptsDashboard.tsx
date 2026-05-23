'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

type Tile = {
  headline: string;
  subhead: string;
  client: string;
  title: string;
  vertical: string;
  href: string;
  avatarSrc: string;
};

const TILES: Tile[] = [
  {
    headline: 'LA Times Top 101 — 2 years running',
    subhead: 'Plus BuzzFeed, Thrillist, NBC LA — all organic.',
    client: 'Lenora Marouani',
    title: 'Co-Owner, Barsha',
    vertical: 'Hospitality / Wine',
    href: '/work/barsha',
    avatarSrc: '/images/testimonials/lenora-marouani.jpg',
  },
  {
    headline: 'Influencer engine from zero',
    subhead: 'Natalie Jill, Olympic medalists, 100+ creator deals.',
    client: 'Matt Kemper',
    title: 'CMO, StreetStrider',
    vertical: 'Fitness / Wellness',
    href: '/work/streetstrider',
    avatarSrc: '/images/testimonials/matt-kemper.jpg',
  },
  {
    headline: 'Day-zero to 300+ locations',
    subhead: '10 years. 600+ daily messages. LeBron & Schwarzenegger integrations.',
    client: 'Jerry Shen',
    title: 'Director of Digital Growth, Blaze Pizza',
    vertical: 'Food / Restaurant',
    href: '/work/blaze-pizza',
    avatarSrc: '/images/testimonials/jerry-shen.jpg',
  },
];

function MetricTile({ tile, index }: { tile: Tile; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="h-full"
    >
      <Link href={tile.href} className="group block h-full">
        <div className="relative h-full flex flex-col rounded-[12px] border border-[#1F1F23] bg-[#0A0A0C] p-6 md:p-8 transition-[box-shadow] duration-200 ease-in-out group-hover:shadow-[inset_0_0_20px_rgba(196,30,58,0.08)] cursor-pointer">
          <div aria-hidden className="flex gap-1 mb-6">
            <span className="block w-[5px] h-[5px] bg-accent rotate-45 opacity-40" />
            <span className="block w-[5px] h-[5px] bg-accent rotate-45 opacity-25" />
          </div>

          <h3 className="font-serif text-[clamp(28px,4vw,56px)] leading-[1.05] tracking-[-0.03em] text-text-primary transition-colors duration-200 ease-in-out group-hover:text-accent">
            {tile.headline}
          </h3>

          <p className="mt-4 text-[15px] leading-[1.5] text-[#A0A0A8] flex-1">
            {tile.subhead}
          </p>

          <div className="mt-8 pt-6 border-t border-[#1F1F23] flex items-center gap-3">
            <Image
              src={tile.avatarSrc}
              alt={tile.client}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="text-[13px] text-text-secondary">{tile.client}</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-tertiary">
                {tile.vertical}
              </div>
            </div>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 text-[13px] text-accent group-hover:text-accent-light transition-colors duration-200">
            Read the work
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ReceiptsDashboard() {
  return (
    <section className="bg-[#0A0A0C] py-16 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="mb-10 md:mb-14">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            The receipts.
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em] text-text-primary">
            Numbers, not narratives.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((tile, i) => (
            <MetricTile key={i} tile={tile} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
