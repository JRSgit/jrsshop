/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3BA6FF',
        'segundary': '#2C3235',
        'button-action': '#CF0A2C',
      },
      backgroundImage: {
        'bg-link': "url('./public/bg.jpg')",
        'bg-tenis': "url('./src/assets/tenis.jpg')",
        'times': "url('./src/assets/time.png')",
      },
      // animation: {
      //   wiggle: {
      //     '0%, 100%': { top: '-110px' },
      //     '50%': { top: '0px' },
      //   }
      // }
    },
  },
  plugins: [],
}

