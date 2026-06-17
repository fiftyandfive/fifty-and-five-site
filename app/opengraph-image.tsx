import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Fifty & Five, The boutique agency Fortune 500s use.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
          background: '#fffef7',
          color: '#000000',
          position: 'relative',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#C41E3A' }}>
          fifty &amp; five
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 100,
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              fontWeight: 300,
            }}
          >
            The boutique agency
            <br />
            Fortune 500s use.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 22,
            color: '#666666',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          }}
        >
          <div style={{ display: 'flex' }}>
            222+ brands · 5 continents · senior-led since 2008
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 72,
              height: 72,
              borderRadius: 999,
              background: '#C41E3A',
              color: 'white',
              fontSize: 40,
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
