/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F0F7FF',
          500: '#226BDC',
          600: '#1B5BB5',
        },
        secondary: {
          100: '#D8D9DB',
          600: '#888C93',
          700: '#6C7079',
        },
        success: {
          500: '#22c55e',
        },
        danger: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

