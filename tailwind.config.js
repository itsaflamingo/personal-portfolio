/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      "main-background": "#1D010E",
      highlight: "#FF63C1",
      light: "#F5CBDF",
      medium: "#AF889B",
      "secondary-background": "#401128",
    },
  },
  plugins: [],
};
