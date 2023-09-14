/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/images/home.jpg')",
        'about': "url('/images/about.jpg')",
        'bakery': "url('/images/bakery.jpg')",
        'prod1': "url('/images/prod1.jpg')",
        'prod2': "url('/images/prod2.jpg')",
        'prod3': "url('/images/prod3.jpg')",
        'gallon': "url('/images/gallon.png')",
        'beans': "url('/images/roastedBeans.jpg')",
        'brew1': "url('/images/brew1.jpg')",
        'brew2': "url('/images/brew2.jpg')",
        'brew3': "url('/images/brew3.jpg')",
        'brew4': "url('/images/brew4.jpg')",
        'coldBrew': "url('/images/coldBrew.jpg')",
        'contact': "url('/images/contact.jpg')",
        'waterHome': "url('/images/waterHome.jpg')",
        'pure': "url('/images/pureWater.jpg')",
      },
    },
  },
  plugins: [],
}