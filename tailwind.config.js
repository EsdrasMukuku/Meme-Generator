/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        black : '#374151',
        gray : '#6B7280',
        darkPurple: '#672280',
        lightPurple : '#A626D3',
      },
      fontFamily: {
        'karla' : ['Karla', 'sans-serif'],
        'inter' : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

