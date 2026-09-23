import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'pulse-dot': 'pulse-dot 1.5s ease-in-out infinite',
        'rag-pulse': 'rag-pulse 2.8s ease-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.1)' },
        },
        'rag-pulse': {
          '0%': { boxShadow: '0 10px 28px rgba(139, 10, 31, 0.45), 0 0 0 0 rgba(200, 16, 46, 0.35)' },
          '70%': { boxShadow: '0 10px 28px rgba(139, 10, 31, 0.45), 0 0 0 10px rgba(200, 16, 46, 0)' },
          '100%': { boxShadow: '0 10px 28px rgba(139, 10, 31, 0.45), 0 0 0 0 rgba(200, 16, 46, 0)' },
        },
      },
    },
  },
  plugins: [typography],
}
