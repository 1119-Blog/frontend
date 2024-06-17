/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        TextLight: '#8F8780',
        TextRegular: '#5C5C5C',
        TextBold: '#333333',
        Main: '#A67E77',
        Strike: '#F58282',
        Stroke: '#E2DCD9',
        Positive: '#49CA6D',
      },
    },
  },
  plugins: [],
};
