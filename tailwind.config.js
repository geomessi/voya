/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1A1A2E',
        crimson: '#A51C30',
        gold: '#F5A623',
        cream: '#F0EAD6',
        forest: '#234438',
        terracotta: '#C96A4A',
        sand: '#E4D2AE',
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Calibri', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 24px 60px rgba(26, 26, 46, 0.18)',
      },
      keyframes: {
        bubbleIn: {
          '0%': { opacity: '0', transform: 'translateY(12px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        bubbleIn: 'bubbleIn 500ms ease forwards',
      },
    },
  },
  plugins: [],
}
