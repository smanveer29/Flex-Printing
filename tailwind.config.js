/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#f8f9fa',
          dim: '#d9dadb',
          bright: '#f8f9fa',
          lowest: '#ffffff',
          low: '#f3f4f5',
          base: '#edeeef',
          high: '#e7e8e9',
          highest: '#e1e3e4',
          variant: '#e1e3e4',
        },
        ink: {
          DEFAULT: '#191c1d',
          variant: '#41484a',
          inverse: '#f0f1f2',
        },
        outline: {
          DEFAULT: '#71787a',
          variant: '#c1c8ca',
        },
        primary: {
          DEFAULT: '#315861',
          on: '#ffffff',
          container: '#4a707a',
          'on-container': '#caf2fe',
          inverse: '#a5cdd8',
          fixed: '#c1e9f5',
          'fixed-dim': '#a5cdd8',
        },
        secondary: {
          DEFAULT: '#4e635a',
          on: '#ffffff',
          container: '#cee5da',
          'on-container': '#52675e',
        },
        tertiary: {
          DEFAULT: '#6e4a2e',
          on: '#ffffff',
          container: '#896244',
          'on-container': '#ffe7d8',
          fixed: '#ffdcc4',
        },
        danger: {
          DEFAULT: '#ba1a1a',
          on: '#ffffff',
          container: '#ffdad6',
          'on-container': '#93000a',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        punjabi: ['"Noto Sans Gurmukhi"', 'Manrope', 'sans-serif'],
      },
      fontSize: {
        h1: ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        h2: ['32px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        h3: ['24px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.6' }],
        'label-sm': ['14px', { lineHeight: '1', letterSpacing: '0.02em', fontWeight: '500' }],
        caption: ['12px', { lineHeight: '1.4' }],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        ambient: '0 4px 20px rgba(49, 88, 97, 0.06)',
        'ambient-lg': '0 8px 32px rgba(49, 88, 97, 0.10)',
        focus: '0 0 0 4px rgba(49, 88, 97, 0.12)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'float-slow': 'floaty 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
