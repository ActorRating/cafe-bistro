/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#141210',
          soft: '#1c1917',
          muted: '#2a2622',
        },
        cream: {
          DEFAULT: '#f5f0e8',
          dim: '#e8e0d4',
        },
        gold: {
          DEFAULT: '#c9a96e',
          light: '#dfc99a',
          dark: '#a88b4a',
        },
        ember: {
          DEFAULT: '#e85d04',
          glow: '#f48c06',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
