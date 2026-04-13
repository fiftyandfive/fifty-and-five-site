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
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        display: ['clamp(56px, 8vw, 96px)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h1: ['clamp(40px, 5vw, 64px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(32px, 4vw, 48px)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h3: ['clamp(24px, 3vw, 32px)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body-lg': ['20px', { lineHeight: '1.6' }],
        body: ['16px', { lineHeight: '1.7' }],
        meta: ['14px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        caption: ['12px', { lineHeight: '1.4', letterSpacing: '0.04em' }],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        glass: '16px',
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
