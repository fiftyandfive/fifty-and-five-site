'use client';

const ROW_1 = ['WINE & SPIRITS', 'HOSPITALITY', 'RESTAURANT', 'FITNESS', 'TECH & SAAS'];
const ROW_2 = ['RETAIL & CPG', 'HEALTHCARE', 'REAL ESTATE', 'AUTOMOTIVE', 'ENTERTAINMENT'];

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const text = items.join('  ·  ') + '  ·  ';
  return (
    <div className="overflow-hidden whitespace-nowrap h-[48px] flex items-center">
      <div className={`marquee-track ${reverse ? 'marquee-track-reverse' : ''}`} style={{ animationDuration: '25s' }}>
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-receipt text-[14px] md:text-[16px] uppercase tracking-[0.12em] text-ff-paper/60 px-2"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export function VerticalsMarquee() {
  return (
    <section className="bg-ff-bg py-8" aria-label="Verticals">
      <Row items={ROW_1} />
      <Row items={ROW_2} reverse />
    </section>
  );
}
