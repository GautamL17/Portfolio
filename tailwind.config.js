// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 10s linear infinite',
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(90deg) scale(1, 1.5)' },
          '50%': { transform: 'rotate(180deg) scale(1.5, 1)' },
          '75%': { transform: 'rotate(270deg) scale(1, 1.5)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
      boxShadow: {
        '3xl': '10px 35px 60px -15px rgba(127, 17, 224, 1)',
      },
    },
  },
  plugins: [],
};
