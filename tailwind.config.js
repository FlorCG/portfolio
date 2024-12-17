/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#0D0D0D"
      },
      maxWidth: {
        custom: "1228px",
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Esto asegura que las palabras sigan desplazándose sin reiniciarse
        },
      },
     
    },
  },
  plugins: [],
}

