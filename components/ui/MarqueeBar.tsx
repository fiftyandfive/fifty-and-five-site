'use client';

const ITEMS = [
  "THAT'S THE RECEIPT",
  '215 BRANDS',
  '5 CONTINENTS',
  '40+ COUNTRIES',
  '18 YEARS',
];

const segment = ITEMS.join('  ·  ') + '  ·  ';

export function MarqueeBar() {
  return (
    <div
      className="w-full bg-ff-stamp overflow-hidden select-none"
      style={{ height: 56 }}
      aria-hidden
    >
      <div className="marquee-track h-full items-center whitespace-nowrap">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-receipt text-[14px] md:text-[16px] uppercase tracking-[0.12em] text-ff-paper leading-[56px] px-2"
          >
            {segment}
          </span>
        ))}
      </div>
    </div>
  );
}
