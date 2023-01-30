/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#0a0a0a',
      white: '#f3f3f3',
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
