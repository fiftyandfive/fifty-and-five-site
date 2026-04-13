type Props = {
  variant?: 'default' | 'warm';
  className?: string;
};

export function AuroraBackground({ variant = 'default', className = '' }: Props) {
  const c1 = variant === 'warm' ? '#F59E0B' : 'var(--aurora-1)';
  const c2 = variant === 'warm' ? '#EC4899' : 'var(--aurora-2)';
  const c3 = variant === 'warm' ? '#8B5CF6' : 'var(--aurora-3)';

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
    >
      <div
        className="aurora-blob absolute animate-drift-1"
        style={{
          top: '-10%',
          left: '10%',
          width: 600,
          height: 600,
          background: `radial-gradient(ellipse at center, ${c1} 0%, transparent 70%)`,
          filter: 'blur(100px)',
          mixBlendMode: 'screen',
          opacity: 0.5,
        }}
      />
      <div
        className="aurora-blob absolute animate-drift-2"
        style={{
          top: '20%',
          right: '-5%',
          width: 500,
          height: 500,
          background: `radial-gradient(ellipse at center, ${c2} 0%, transparent 70%)`,
          filter: 'blur(120px)',
          mixBlendMode: 'screen',
          opacity: 0.45,
        }}
      />
      <div
        className="aurora-blob aurora-blob-3 absolute animate-drift-3"
        style={{
          bottom: '-10%',
          left: '30%',
          width: 400,
          height: 400,
          background: `radial-gradient(ellipse at center, ${c3} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          mixBlendMode: 'screen',
          opacity: 0.45,
        }}
      />
    </div>
  );
}
