/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          800: "#00274e",
          500: "#18395f",
          300: "#738aa2"
        },
        green: {
          500: "#47b5c1"
        }
      }
    },
  },
  plugins: [],
}

