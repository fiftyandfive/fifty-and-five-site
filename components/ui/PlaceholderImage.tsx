import Image from 'next/image';
import { VERTICAL_COLOR_HEX } from '@/lib/data/caseStudies';

type Props = {
  label?: string;
  colorKey?: string;
  aspect?: string;
  className?: string;
  /**
   * When provided, renders the image instead of the gradient placeholder.
   * Path should be relative to /public (e.g. '/images/case-studies/kendall-jackson.jpg').
   */
  src?: string;
  alt?: string;
};

export function PlaceholderImage({
  label,
  colorKey = 'tech',
  aspect = '16/9',
  className = '',
  src,
  alt,
}: Props) {
  const hex = VERTICAL_COLOR_HEX[colorKey] ?? '#6366F1';

  if (src) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-[inherit] ${className}`}
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt ?? label ?? ''}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[inherit] ${className}`}
      style={{
        aspectRatio: aspect,
        background: `linear-gradient(135deg, ${hex}22 0%, ${hex}0A 40%, #0A0A0C 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${hex}40 0%, transparent 55%)`,
          filter: 'blur(10px)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {label && (
        <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
          {label}
        </div>
      )}
    </div>
  );
}
