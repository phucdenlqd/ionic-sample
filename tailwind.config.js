/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      vulcan: {
        50: "#f4f6fb",
        100: "#e9ecf5",
        200: "#ced8e9",
        300: "#a2b6d7",
        400: "#708fc0",
        500: "#4e71a9",
        600: "#3c598d",
        700: "#314873",
        800: "#2c3e60",
        900: "#293651",
        950: "#111622",
      },
      gray: {
        50: "#f8f8f8",
        100: "#f0f0f0",
        200: "#e4e4e4",
        300: "#d1d1d1",
        400: "#b4b4b4",
        500: "#9a9a9a",
        600: "#878787",
        700: "#6a6a6a",
        800: "#5a5a5a",
        900: "#4e4e4e",
        950: "#282828",
      },

      white: "#fff",
    },
  },
  plugins: [],
};
