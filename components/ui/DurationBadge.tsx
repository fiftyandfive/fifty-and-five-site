import { VERTICAL_COLOR_HEX } from '@/lib/data/caseStudies';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function DurationBadge({ children, className = '' }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-accent/10 border border-accent/30 text-accent px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] ${className}`}
    >
      {children}
    </span>
  );
}

export function VerticalPill({
  label,
  colorKey,
}: {
  label: string;
  colorKey: string;
}) {
  const hex = VERTICAL_COLOR_HEX[colorKey] ?? '#6366F1';
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] border"
      style={{
        background: `${hex}1A`,
        borderColor: `${hex}66`,
        color: hex,
      }}
    >
      {label}
    </span>
  );
}
