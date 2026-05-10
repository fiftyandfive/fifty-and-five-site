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
        ff: {
          bg: 'var(--ff-bg)',
          paper: 'var(--ff-paper)',
          ink: 'var(--ff-ink)',
          stamp: 'var(--ff-stamp)',
          data: 'var(--ff-data)',
          'fade-50': 'var(--ff-fade-50)',
          'fade-30': 'var(--ff-fade-30)',
        },
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
        },
        glass: {
          border: 'var(--glass-border)',
          bg: 'var(--glass-bg)',
        },
      },
      fontFamily: {
        editorial: ['var(--font-editorial)', 'Georgia', 'serif'],
        receipt: ['var(--font-receipt)', '"Courier New"', 'monospace'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-editorial)', 'Georgia', 'serif'],
        mono: ['var(--font-receipt)', '"Courier New"', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(56px, 10vw, 140px)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display': ['clamp(56px, 8vw, 96px)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'h1': ['clamp(40px, 6vw, 72px)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2': ['clamp(32px, 4vw, 56px)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h3': ['clamp(24px, 3vw, 40px)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'body-lg': ['20px', { lineHeight: '1.55' }],
        'body': ['18px', { lineHeight: '1.55' }],
        'meta': ['14px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.04em' }],
        'receipt-sm': ['14px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        'receipt-xs': ['11px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      maxWidth: {
        container: '1280px',
        content: '1080px',
        prose: '720px',
      },
      spacing: {
        'section': '96px',
        'section-mobile': '56px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee 30s linear infinite reverse',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
