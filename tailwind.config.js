/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F0F7FF",
          300: "#D7E4F7",
          500: "#226BDC",
          600: "#1B5BB5",
        },
        secondary: {
          100: "#D8D9DB",
          600: "#888C93",
          700: "#6C7079",
        },
        success: {
          100: "#DCFCE7",
          500: "#16B7A8",
        },
        warning: {
          100: "#FEF9C3",
          500: "#FFA40A",
        },
        purple: {
          100: "#F3E8FF",
          500: "#892CF5",
        }
      }
    },
  },
  plugins: [],
};
