/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#6a0d83",
        navbarColor: "#ce4993",
        labelColor: "#fb9062",
        white: "#fff"
      },
      fontFamily: {
        'syne' : ['"Syne"', 'sans-serif'],
      },
      fontSize: {
        label: [ '14px', {
          lineHeight: 'normal',
          fontWeight: '500',
        }],
      },
      boxShadow: {
        'login': '2px 5px 10px 0px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};

