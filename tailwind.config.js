/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        heading: '#141125',
        background: '#ffffff',
      },
      fontFamily: {
        display: ['Eudoxus Sans', 'Arial', 'sans-serif'],
        body: ['Inter', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        container: '1360px',
      },
      fontSize: {
        'display-1': ['54px', { lineHeight: '68px', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-2': ['48px', { lineHeight: '56px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-3': ['40px', { lineHeight: '48px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-4': ['32px', { lineHeight: '40px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-5': ['24px', { lineHeight: '32px', letterSpacing: '-0.03em', fontWeight: '700' }],
      },
      borderRadius: {
        card: '6px',
        btn: '12px',
        testimonial: '12px',
        pill: '40px',
      },
      boxShadow: {
        card: '0 1px 4px rgba(0, 0, 0, 0.06)',
        btn: '0 1px 2px rgba(0, 0, 0, 0.12), 0 0 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
