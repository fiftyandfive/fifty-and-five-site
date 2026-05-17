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
          background: '#0A0A0C',
          color: '#F0F0EC',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* aurora glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(600px circle at 15% 10%, rgba(99,102,241,0.35), transparent 55%), radial-gradient(500px circle at 90% 90%, rgba(236,72,153,0.25), transparent 55%)',
          }}
        />
        <div style={{ display: 'flex', fontSize: 28, letterSpacing: '-0.03em', opacity: 0.9 }}>
          fifty &amp; five
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              fontWeight: 400,
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
            color: '#8A8A82',
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
              borderRadius: 18,
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
