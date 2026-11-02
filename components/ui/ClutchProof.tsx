import { FACTS } from '@/lib/site-facts';

const CLUTCH_PROFILE = 'https://clutch.co/profile/fifty-five';

/**
 * Visible Clutch rating, read from site-facts so the number lives in one place.
 * Deliberately not marked up as AggregateRating: Google ignores self-serving
 * review markup on a business's own site, and the visible line is what buyers use.
 */
export function ClutchProof({ className = '' }: { className?: string }) {
  return (
    <p className={`font-mono text-caption uppercase tracking-[0.1em] text-text-tertiary ${className}`}>
      <a
        href={CLUTCH_PROFILE}
        target="_blank"
        rel="noopener"
        className="hover:text-accent transition-colors"
      >
        <span className="text-accent" aria-hidden="true">
          ★
        </span>{' '}
        {FACTS.clutchRating} on Clutch · {FACTS.clutchReviewCount} verified client reviews
      </a>
    </p>
  );
}
