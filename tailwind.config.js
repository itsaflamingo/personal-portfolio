/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeAccent: "#f69333",
        mainBlue: "#0991b1",
        mbLite: "#e6f4f1",
        darkBlue: "#002c47",
        white: "#ffffff",
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
