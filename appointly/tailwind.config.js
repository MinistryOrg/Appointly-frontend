const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "430px",
      },
      backgroundImage: {
        "landing-page": "url('../../src/styles/images/lp.png')",
        "service1-lp": "url('../../src/styles/images/service1.webp')",
      },
      colors: {
        "primary-purple": "#342AA1",
        "dark-primary": "#272078",
        "light-purple": "#CCD5FF",
        book: "#5f5ef6",
        "white-text": "#FFFFFF",
        "btn-purple": "#6769ED",
        "h-btn-purple": "#4648D4",
        "div-lp": "#FFFFFF",
        "hover-dp": "#efeeff",
        primary: "#342AA1",
        secondary: "#686868",
        "main-clr": "#3E3D3D",
        "lp-bg": "#F3F5FF",
        footerClr: "#34307F",
        divider: "#A7B5FA",
        "btn-sign": "#6769ED",
        "border-clr": "#D1D1D1",
        "grid-clr": "#fafafa",
        error: "#F64582",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
