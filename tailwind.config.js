module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        gray_400: "#c4c4c4",
        gray_500: "#999999",
        blue_700: "#366ed8",
        gray_901: "#1c1c1e",
        gray_902: "#1d2120",
        blue_A700: "#0049fc",
        gray_900: "#1c2120",
        gray_900_7a: "#1c1c1e7a",
        bluegray_100: "#d9d9d9",
        gray_200: "#eaeaea",
        black_900_3f: "#0000003f",
        gray_50: "#fafafa",
        gray_100: "#f2f2f2",
        bluegray_900: "#2d3748",
        indigo_200: "#9fb6e3",
        gray_900_b7: "#1c1c1eb7",
        black_900: "#000000",
        purple_900: "#60127d",
        light_blue_A700: "#007aff",
        deep_purple_A201: "#685bff",
        deep_purple_A200: "#7b61ff",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius8: "8px",
        radius12: "12px",
        radius14: "14px",
        radius20: "20px",
        radius24: "24px",
        radius30: "30px",
        radius50: "50%",
        radius141: "1.41px",
        radius333: "33.3px",
        radius353: "3.53px",
      },
      boxShadow: {
        bs1: "0px 4px  4px 0px #0000003f",
        bs: "0px 4px  12px 0px #0000003f",
      },
      borderWidth: { bw071: "0.71px" },
      fontFamily: {
        dmserifdisplay: "DM Serif Display",
        dmsans: "DM Sans",
        poppins: "Poppins",
        roboto: "Roboto",
        outfit: "Outfit",
      },
      letterSpacing: {
        ls1: "1px",
        ls11: "-1px",
        ls03: "-0.3px",
        ls08: "-0.8px",
        ls032: "0.32px",
        ls036: "0.36px",
        ls0361: "-0.36px",
        ls048: "-0.48px",
        ls064: "-0.64px",
        ls096: "-0.96px",
        ls05333333611488342: "0.5333333611488342px",
        ls019756750106811524: "-0.19756750106811524px",
        ls019756752014160156: "-0.19756752014160156px",
        ls030000001907348633: "-0.30000001907348633px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
