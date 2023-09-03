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
      keyframes: {
        slideFromLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100px)' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100px)' },
        }
      },
      animation: {
        slideFromLeft: 'slideFromLeft 3s ease-in-out',
        slideFromRight: 'slideFromRight 3s ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}