import { VERTICAL_COLOR_DEEP_HEX } from '@/lib/data/caseStudies';

type Props = {
  client: string;
  verticalLabel: string;
  verticalColor: string;
  caseNumber?: string;
  aspect?: string;
  variant?: 'full' | 'compact';
  className?: string;
};

const FG = '#F5EFE6';

export function BrandColorHero({
  client,
  verticalLabel,
  verticalColor,
  caseNumber,
  aspect = '16/9',
  variant = 'full',
  className = '',
}: Props) {
  const bg = VERTICAL_COLOR_DEEP_HEX[verticalColor] ?? '#1F2937';

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[inherit] ${className}`}
      style={{ aspectRatio: aspect, background: bg }}
      role="img"
      aria-label={`${client} — ${verticalLabel} case study`}
    >
      <div
        className="absolute right-5 top-4 md:right-9 md:top-7 text-right font-mono leading-[1.7]"
        style={{
          color: FG,
          opacity: 0.7,
          fontSize: '11px',
          letterSpacing: '0.24em',
        }}
      >
        {caseNumber && <div>case {caseNumber}</div>}
        <div>{verticalLabel.toLowerCase()}</div>
      </div>

      {variant === 'full' && (
        <div className="absolute left-5 right-5 bottom-5 md:left-9 md:right-9 md:bottom-8">
          <div
            className="font-sans font-medium leading-[0.9] tracking-[-0.025em]"
            style={{
              color: FG,
              fontSize: 'clamp(28px, 5.5vw, 60px)',
            }}
          >
            {client}
          </div>
        </div>
      )}
    </div>
  );
}
