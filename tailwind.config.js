/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#108bea',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
}
