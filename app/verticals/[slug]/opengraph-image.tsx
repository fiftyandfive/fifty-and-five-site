import { ImageResponse } from 'next/og';
import { VERTICALS, getVertical } from '@/lib/data/verticals';
import { VERTICAL_COLOR_DEEP_HEX } from '@/lib/data/caseStudies';

export const runtime = 'edge';
export const alt = 'Fifty & Five industry practice';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const v = getVertical(params.slug);
  const bg = (v && VERTICAL_COLOR_DEEP_HEX[v.colorKey]) || '#1F2937';
  const fg = '#F5EFE6';
  const name = v?.name ?? 'Industry practice';
  // Three named clients read as proof faster than a claim does.
  const clients = (v?.clients ?? []).slice(0, 3).join('  ·  ');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: bg,
          color: fg,
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            fontFamily: 'ui-monospace, SFMono-Regular, monospace',
            fontSize: 22,
            letterSpacing: '0.22em',
            opacity: 0.8,
          }}
        >
          <div style={{ display: 'flex' }}>fifty &amp; five</div>
          <div style={{ display: 'flex' }}>{(v?.shortLabel ?? '').toLowerCase()}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 0.98,
              letterSpacing: '-0.025em',
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontWeight: 500,
            }}
          >
            {name}
          </div>
          {clients && (
            <div
              style={{
                marginTop: 28,
                fontSize: 26,
                opacity: 0.72,
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              }}
            >
              {clients}
            </div>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 20,
            opacity: 0.7,
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          }}
        >
          <div style={{ display: 'flex' }}>
            The boutique agency Fortune 500s call, since 2008
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: 16,
              background: fg,
              color: bg,
              fontSize: 32,
            }}
          >
            55
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
