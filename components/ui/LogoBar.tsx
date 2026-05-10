'use client';

const ROW_1 = [
  'MICROSOFT', 'HASBRO', 'WARNER BROS', 'ENTERPRISE HOLDINGS', 'KENDALL-JACKSON',
];
const ROW_2 = [
  'NETGEAR/ARLO', 'TUPPERWARE', 'MEZZACORONA', 'BLAZE PIZZA', 'RESORTS WORLD',
];

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const text = items.join('  ·  ') + '  ·  ';
  return (
    <div className="overflow-hidden whitespace-nowrap h-[60px] flex items-center">
      <div className={`marquee-track ${reverse ? 'marquee-track-reverse' : ''}`}>
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-receipt text-[14px] md:text-[18px] uppercase tracking-[0.12em] text-ff-paper/80 px-2"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LogoBar() {
  return (
    <section className="bg-ff-bg py-6" aria-label="Clients">
      <MarqueeRow items={ROW_1} />
      <MarqueeRow items={ROW_2} reverse />
    </section>
  );
}
