/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#262729',
        paragraph: '#54575D',
        customGray: '#F6F6F630',
      },
      backgroundImage: {
        'grain-texture': "url('../assets/grain.jpg')",
      },
      fontFamily: {
        'clashdisplay': ['ClashDisplay-Variable', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}