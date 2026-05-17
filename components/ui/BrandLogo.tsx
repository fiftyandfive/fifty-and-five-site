type Props = {
  className?: string;
  height?: number;
};

function DiamondAmpersand({ size = 24 }: { size?: number }) {
  const s = size;
  const outer = s * 0.44;
  const inner = s * 0.2;
  const r = s * 0.04;
  const ri = s * 0.03;
  const yTop = s * 0.32;
  const yBot = s * 0.68;
  const cx = s * 0.5;

  return (
    <svg
      viewBox={`0 0 ${s} ${s}`}
      width={s}
      height={s}
      className="inline-block"
      aria-hidden="true"
    >
      <g transform={`translate(${cx}, ${yTop}) rotate(45)`}>
        <rect x={-outer / 2} y={-outer / 2} width={outer} height={outer} rx={r} fill="#C41E3A" />
        <rect x={-inner / 2} y={-inner / 2} width={inner} height={inner} rx={ri} fill="currentColor" />
      </g>
      <g transform={`translate(${cx}, ${yBot}) rotate(45)`}>
        <rect x={-outer / 2} y={-outer / 2} width={outer} height={outer} rx={r} fill="#C41E3A" />
        <rect x={-inner / 2} y={-inner / 2} width={inner} height={inner} rx={ri} fill="currentColor" />
      </g>
    </svg>
  );
}

export function BrandLogo({ className = '', height = 26 }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-[0.15em] ${className}`}
      style={{ fontSize: height, lineHeight: 1 }}
    >
      <span className="font-sans font-semibold tracking-[-0.02em] text-text-primary">
        Fifty
      </span>
      <DiamondAmpersand size={height * 0.9} />
      <span className="font-sans font-semibold tracking-[-0.02em] text-text-primary">
        Five
      </span>
    </span>
  );
}
