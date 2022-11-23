/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'ebgaramond': ['EB Garamond', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        widestx3: '0.3em',
      },
      backgroundImage: {
        'cover-novios': "url('https://d3167i30r8muxf.cloudfront.net/foto-codo-pozuzo.jpg')",
        'cover-novios-2': "url('https://d3167i30r8muxf.cloudfront.net/kevin-sofia-arequipa.jpg')",
      },
      screens: {
        'xxs': '390px',
        'xs': '475px',
        ...defaultTheme.screens,
      }
    }
  },
  // darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
}