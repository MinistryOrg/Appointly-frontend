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
      screens: {
        'xsm' : '430px'
      },
      backgroundImage: {
        "landing-page": "url('../../src/styles/images/lp.png')",
        "service1-lp": "url('../../src/styles/images/service1.webp')",
      },
      colors: {
        "primary-purple": "#342AA1",
        "white-text": "#FFFFFF",
        "btn-purple": "#6769ED",
        "div-lp": "#FAFAFA",
        "hover-dp": "#efeeff",
        "primary": "#342AA1",
        "secondary": "#686868",
        "main-clr": "#3E3D3D",
        "lp-bg": "#F3F5FF",
        "footerClr": "#34307F",
        "divider": "#A7B5FA",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
