// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleUp:{
          '0%':{
            opacity:'0.2',
            transform: 'scale(1)'
          },
          '25%':{
            opacity:'1',
            transform: 'scale(1)'
          },
          '50%':{
            opacity:'1',
            transform:'scale(1)'
          },
          '75%':{
            opacity:'1',
            transform:'scale(1)'
          },
          '100%':{
            opacity:'0.2',
            transform:'scale(1)'
          },
        }
      },
      animation: {
        scaleUp:'scaleUp 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
