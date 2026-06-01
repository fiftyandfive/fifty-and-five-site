'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SimpleReveal } from '@/components/ui/AnimatedHeadline';

const WORK_ITEMS = [
  { src: '/images/work/kendall-jackson-breckenridge-01.jpg', alt: 'Kendall-Jackson Breckenridge winter shoot', caption: 'Kendall-Jackson · Breckenridge', slug: 'kendall-jackson' },
  { src: '/images/work/barsha.png', alt: 'Barsha plated prawns and wine', caption: 'Barsha · LA Times 101 Best Restaurants', slug: 'barsha' },
  { src: '/images/work/kendall-jackson-breckenridge-02.jpg', alt: 'Kendall-Jackson Breckenridge winter shoot', caption: 'Kendall-Jackson · Wine & Spirits', slug: 'kendall-jackson' },
  { src: '/images/work/resorts-world-lil-jon.jpg', alt: 'Resorts World Bimini Lil Jon concert sweepstakes', caption: 'Resorts World · Lil Jon Sweepstakes', slug: 'resorts-world' },
  { src: '/images/work/enterprise-road.jpg', alt: 'Enterprise Rent-A-Car open road', caption: 'Enterprise · Automotive', slug: 'enterprise-holdings' },
  { src: '/images/work/enterprise-coastal.jpg', alt: 'Enterprise Rent-A-Car coastal overlook', caption: 'Enterprise · Travel', slug: 'enterprise-holdings' },
];

export function SelectedWork() {
  return (
    <section
      className="py-[90px]"
      style={{ borderTop: '1px solid var(--glass-border)' }}
    >
      <div className="container-edge">
        <div className="flex justify-between items-end flex-wrap gap-4 mb-[34px]">
          <div>
            <span
              className="block font-mono uppercase mb-[14px]"
              style={{
                fontSize: 11,
                letterSpacing: '0.24em',
                color: 'var(--color-accent)',
              }}
            >
              Selected Work
            </span>
            <h2
              className="font-serif"
              style={{
                fontWeight: 500,
                fontSize: 'clamp(28px, 3.6vw, 40px)',
                lineHeight: 1.05,
                maxWidth: 640,
              }}
            >
              Campaigns for brands you know, built by the team that ran them.
            </h2>
          </div>
          <Link
            href="/work"
            className="font-mono uppercase transition-colors hover:text-accent"
            style={{
              fontSize: 12,
              letterSpacing: '0.1em',
              color: 'var(--color-accent-light)',
            }}
          >
            View all work →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORK_ITEMS.map((item, i) => (
            <SimpleReveal key={i} delay={Math.min(i * 0.06, 0.3)}>
              <Link href={`/work/${item.slug}`} className="group block">
                <div
                  className="relative rounded-[14px] overflow-hidden"
                  style={{
                    border: '1px solid var(--glass-border)',
                    background: 'var(--color-bg-secondary)',
                  }}
                >
                  <div style={{ paddingTop: '118%' }} />
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover z-[3] transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    unoptimized
                  />
                  {/* Gradient caption overlay */}
                  <div
                    className="absolute left-0 right-0 bottom-0 z-[4] p-[14px] font-mono uppercase"
                    style={{
                      background: 'linear-gradient(transparent, rgba(10,10,12,0.85))',
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      color: 'var(--color-paper)',
                    }}
                  >
                    {item.caption}
                  </div>
                  {/* Fallback placeholder */}
                  <div
                    className="absolute inset-0 z-[1] flex flex-col justify-end p-4"
                    style={{
                      background: 'repeating-linear-gradient(135deg, rgba(196,30,58,0.05) 0 12px, transparent 12px 24px), linear-gradient(160deg, var(--color-bg-tertiary), var(--color-bg-secondary))',
                    }}
                  >
                    <div className="absolute inset-3 border border-dashed rounded-lg" style={{ borderColor: 'rgba(245,242,236,0.18)' }} />
                    <span className="relative font-mono text-[10.5px]" style={{ color: 'var(--color-accent-light)' }}>
                      Photo slot
                    </span>
                    <span className="relative text-[12px] mt-1" style={{ color: 'var(--color-paper-dim)' }}>
                      {item.caption}
                    </span>
                  </div>
                </div>
              </Link>
            </SimpleReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
