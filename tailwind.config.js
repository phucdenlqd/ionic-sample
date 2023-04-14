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
      white: "#fff",
    },
  },
  plugins: [],
};
