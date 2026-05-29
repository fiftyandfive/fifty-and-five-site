'use client';

const BRANDS = [
  'Warner Bros.', 'Microsoft', 'SAP', 'Hasbro', 'Bain & Company',
  'Discovery Channel', 'Enterprise', 'Toys R Us', 'Resorts World',
  'Penfolds', 'Kendall-Jackson', 'Unilever', 'AutoNation',
  'The Irvine Company', "Wolfgang's Steakhouse", 'Blaze Pizza', 'Barsha',
];

export function BrandMarquee() {
  return (
    <section
      className="py-8 overflow-hidden bg-bg-primary"
      style={{ borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}
    >
      <div
        className="text-center font-mono uppercase mb-[22px]"
        style={{
          fontSize: 10.5,
          letterSpacing: '0.24em',
          color: 'var(--color-muted)',
        }}
      >
        222+ brands · 18 years · five continents
      </div>
      <div
        className="overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)',
        }}
      >
        <div
          className="inline-flex items-center whitespace-nowrap will-change-transform ticker-track"
          style={{ animationDuration: '48s' }}
        >
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="contents">
              <span
                className="font-serif"
                style={{ fontSize: 23, color: 'var(--color-paper-dim)', opacity: 0.82 }}
              >
                {brand}
              </span>
              <span
                style={{
                  color: 'var(--color-accent)',
                  fontSize: 9,
                  padding: '0 26px',
                  opacity: 0.7,
                }}
              >
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
