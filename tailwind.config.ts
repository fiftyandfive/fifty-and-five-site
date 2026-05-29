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
        gold: {
          DEFAULT: 'var(--color-gold)',
          muted: 'var(--color-gold-muted)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Fraunces', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['clamp(60px, 9vw, 110px)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        h1: ['clamp(44px, 6vw, 72px)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        h2: ['clamp(34px, 4.5vw, 54px)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        h3: ['clamp(26px, 3vw, 36px)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'body-lg': ['20px', { lineHeight: '1.65' }],
        body: ['16px', { lineHeight: '1.75' }],
        meta: ['14px', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        caption: ['11px', { lineHeight: '1.4', letterSpacing: '0.06em' }],
      },
      maxWidth: {
        container: '1320px',
      },
      borderRadius: {
        glass: '10px',
      },
      backdropBlur: {
        glass: '12px',
      },
      animation: {
        'drift-1': 'drift-1 25s ease-in-out infinite',
        'drift-2': 'drift-2 30s ease-in-out infinite',
        'drift-3': 'drift-3 20s ease-in-out infinite',
        'ticker': 'ticker 40s linear infinite',
        'chevron-pulse': 'chevron-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'drift-1': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(100px,-50px) scale(1.1)' },
          '66%': { transform: 'translate(-50px,80px) scale(0.95)' },
        },
        'drift-2': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(-80px,60px) scale(0.95)' },
          '66%': { transform: 'translate(70px,-40px) scale(1.05)' },
        },
        'drift-3': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(60px,50px) scale(1.08)' },
        },
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
