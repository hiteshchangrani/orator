/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: {
          100: '#f0f4e3',
          200: '#dce3c4',
          300: '#c7d2a6',
          400: '#b2c187',
          500: '#9eb068', // Use this for a darker olive
          600: '#889e4d',
          700: '#6e7f3d',
          800: '#555f2e',
          900: '#3b4020',
        },
      },
    },
  },
  plugins: [],
};