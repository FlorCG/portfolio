/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#0D0D0D"
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"]
      }
    },
  },
  plugins: [],
}
