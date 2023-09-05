/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/src/images/home.jpg')",
        'about': "url('/src/images/about.jpg')",
        'bakery': "url('/src/images/bakery.jpg')",
        'prod1': "url('/src/images/prod1.jpg')",
        'prod2': "url('/src/images/prod2.jpg')",
        'prod3': "url('/src/images/prod3.jpg')",
        'beans': "url('/src/images/roastedBeans.jpg')",
        'brew1': "url('/src/images/brew1.jpg')",
        'brew2': "url('/src/images/brew2.jpg')",
        'brew3': "url('/src/images/brew3.jpg')",
        'brew4': "url('/src/images/brew4.jpg')",
        'coldBrew': "url('/src/images/coldBrew.jpg')",
        'contact': "url('/src/images/contact.jpg')",
        'waterHome': "url('/src/images/waterHome.jpg')",
        'pure': "url('/src/images/pureWater.jpg')",
      },
    },
  },
  plugins: [],
}