const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#342AA1",
        "white-text": "#FFFFFF",
        "btn-purple": "#6769ED",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
