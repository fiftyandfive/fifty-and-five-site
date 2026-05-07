import { ImageResponse } from 'next/og';
import { CASE_STUDIES, getCaseStudy, VERTICAL_COLOR_DEEP_HEX } from '@/lib/data/caseStudies';

export const runtime = 'edge';
export const alt = 'Fifty & Five case study';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  const idx = CASE_STUDIES.findIndex((c) => c.slug === params.slug);
  const caseNumber = String((idx >= 0 ? idx : 0) + 1).padStart(2, '0');
  const bg = (cs && VERTICAL_COLOR_DEEP_HEX[cs.verticalColor]) || '#1F2937';
  const fg = '#F5EFE6';
  const client = cs?.client ?? 'Case study';
  const vertical = cs?.verticalLabel ?? 'Fifty & Five';

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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'right',
              lineHeight: 1.5,
            }}
          >
            <div>case {caseNumber}</div>
            <div>{vertical.toLowerCase()}</div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontSize: 110,
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontWeight: 500,
            }}
          >
            {client}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 24,
              opacity: 0.7,
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            }}
          >
            {cs?.industry ?? ''}
          </div>
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
            The boutique agency Fortune 500s use, since 2008
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
