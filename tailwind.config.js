/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter Regular', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero.jpg')",
      },
      width: {
        '215': '13.438rem',
      }
    },
  },
  plugins: [],
}