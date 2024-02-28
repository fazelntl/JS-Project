/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      // animation:{
      //   'fazil':'animatscrol 1s linear infinite',
      // },
      // keyframes:{
      //   animatscrol:{
      //     '0%': {
      //       transform:' translateX(0%)'
      //   },
      //   '100%': {
      //       transform:' translateX(-100%)'
      //   }
      //   }
      // },
      animation: {
        rotates: "rotates 10s linear infinite",
        rotimg: "rotimg 10s linear infinite",
      },
      keyframes: {
        rotates: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        rotimg: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
      colors: {
        elps38:'#fbfbfb',
        grn: "#DBFF0A",
        bgr1: "#F3ECE7",
        box1: "#1d1e16",
        rgbg1: "#F6F6F6",
        rgbg2: "#D6F60F",
        rgbg3: "#F0F50C",
        brd1: "#afbc5f",
        brd2: "#ecf50c",
        grncrd: "#1D1E16",
        brd3: "#3a3b33",
        bgr5: "#707070",
        brd3: "#d4d4d4",
      },

      fontFamily: {
        fnbx1: ["Urbanist, sans-serif"],
      },
    },
  },
  plugins: [],
};
