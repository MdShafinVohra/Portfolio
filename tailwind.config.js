/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-1": "#0F0F0F",
        "color-2": "#76ABAE",
        "color-3": "#EFF2C0",
        "color-4": "#731dd8",
        "color-5": "#696773",
      },
      keyframes: {
        wiggle: {
          "0%": {
            "box-shadow": "0px 5px 0px 2px #696773",
          },
          "25%": {
            "box-shadow": "5px 0px 0px 2px #76ABAE",
          },
          "50%": {
            "box-shadow": "0px -5px 0px 2px #696773",
          },
          "75%": {
            "box-shadow": "-5px 0px 0px 2px #76ABAE",
          },
          "100%": {
            "box-shadow": "0px 5px 0px 2px #696773",
          },
        },
        typeWriter: {
          "0%": { width: "0" },
          "60%": { width: "100%" },
          "85%": { width: "100%" },
          "100%": { width: "0%" },
        },
        blink: {
          "50%": { "border-color": "transparent" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        typeWriter: "typeWriter 4s steps(17) forwards alternate infinite",
      },
    },
  },
  plugins: [],
};
