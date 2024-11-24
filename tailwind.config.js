/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        main_color: "#fea928",
        second_color: "#ed8900"
      },
      container: {
        center: "center",
        padding: {
          default: "1rem",
          sm:"3rem",
          // lg:"4rem",
          // xl:"5rem",
          // "2xl": "6rem"
        }
      }
    },
  },
  plugins: [],
}

