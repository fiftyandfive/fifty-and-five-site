import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          glass: 'var(--color-bg-glass)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          glow: 'var(--color-accent-glow)',
          subtle: 'var(--color-accent-subtle)',
        },
        // Creative Giants chromatic palette — rationed accents
        'bone-white': 'var(--color-bone-white)',
        'ink-black': 'var(--color-ink-black)',
        graphite: 'var(--color-graphite)',
        ash: 'var(--color-ash)',
        'charcoal-scale': 'var(--color-charcoal-scale)',
        'magenta-bloom': 'var(--color-magenta-bloom)',
        'forest-teal': 'var(--color-forest-teal)',
        'powder-blue': 'var(--color-powder-blue)',
        'candy-pink': 'var(--color-candy-pink)',
        'mint-wash': 'var(--color-mint-wash)',
        'navy-ink': 'var(--color-navy-ink)',
        'signal-yellow': 'var(--color-signal-yellow)',
        vertical: {
          wine: 'var(--color-wine)',
          hospitality: 'var(--color-hospitality)',
          restaurant: 'var(--color-restaurant)',
          fitness: 'var(--color-fitness)',
          tech: 'var(--color-tech)',
          retail: 'var(--color-retail)',
          entertainment: 'var(--color-entertainment)',
        },
        glass: {
          border: 'var(--glass-border)',
          bg: 'var(--glass-bg)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Oversized poster headlines — hairline weight 300, carved tracking
        display: ['clamp(48px, 8vw, 84px)', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
        h1: ['clamp(40px, 6vw, 64px)', { lineHeight: '1.0', letterSpacing: '-0.032em' }],
        h2: ['clamp(30px, 4.2vw, 54px)', { lineHeight: '1.04', letterSpacing: '-0.023em' }],
        h3: ['clamp(24px, 3vw, 34px)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'body-lg': ['20px', { lineHeight: '1.45', letterSpacing: '-0.018em' }],
        body: ['16px', { lineHeight: '1.4', letterSpacing: '-0.018em' }],
        subheading: ['20px', { lineHeight: '1.4', letterSpacing: '-0.018em' }],
        meta: ['14px', { lineHeight: '1.43', letterSpacing: '-0.018em' }],
        caption: ['12px', { lineHeight: '1.43', letterSpacing: '0.04em' }],
      },
      maxWidth: {
        container: '1600px',
      },
      borderRadius: {
        glass: '0px',
        pill: '1440px',
      },
      backdropBlur: {
        glass: '0px',
      },
      animation: {
        'ticker': 'ticker 40s linear infinite',
        'chevron-pulse': 'chevron-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'chevron-pulse': {
          '0%,100%': { transform: 'translateY(0)', opacity: '0.5' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
