/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // For Footer
      smFoo: {max: "410px"},
      xsm: {max: "512px"},
      sm: {max: "640px"},
      nav: {max: "960px"},
      navxsm: {min: "250px", max: "400px"},
      navsm: {min: "250px", max: "420px"},
      navmd: {min: "420px", max: "960px"},
      foo: {max: "980px"},
      fooContact: {max: "600px"},

      // For email placeholder
      smd: {min: "640px", max: "960px"},
      md: {min: "640px", max: "1170px"},
      // For cardwithImg
      cardImg: {min: "640px", max: "1100px"},
      // For "subscribeUs"
      mdTypo: {min: "960px", max: "1170px"},
      mainImg: {min: "960px", max: "1350px"},

      // For specs
      xxsm: {max: "480px"},
      specssm: {max: "600px"},
      ximg: {min: "380px", max: "920px"},
      imgSpecs: {max: "920px"},

      // For grid
      gridmd: {min: "512px", max: "640px"},
    },
    extend: {
      fontFamily: {
        LexendDeca: ["Lexend Deca", "sans-serif"],
      }, //end of fontFamily
      colors: {
        bgPrimary: "#F3F3F3", //background color
        secondary: "#5AB0C2", //blue color
      },
      boxShadow: {
        themeBoxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);", //not used yet, planning to use this
        insideBorder: "inset 0px 0px 0px 9px #ffffff", // used in 3D ambler revolving section, for border of colors
      },
      borderRadius: {
        large: "65px",
        small: "25px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
}
