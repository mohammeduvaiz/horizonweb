/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          teal: '#006666',
          blue: '#004B8D'
        }
      }
    },
  },
  plugins: [],
};