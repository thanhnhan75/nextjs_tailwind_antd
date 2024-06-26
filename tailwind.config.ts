import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
      boxShadow: {
        soft2XSmall: "0px 1.5px 4px -1px rgba(10, 9, 11, 0.18)",
        softExtraSmall: "0px 5px 13px -5px rgba(10, 9, 11, 0.05), 0px 2px 4px -1px rgba(10, 9, 11, 0.02)",
        softSmall: "0px 10px 18px -2px rgba(10, 9, 11, 0.07)",
        softMedium: "0px 11px 24px -9px rgba(10, 9, 11, 0.14), 0px 0px 3px -1px rgba(10, 9, 11, 0.04)",
        softLarge: "0px 32px 33px -15px rgba(10, 9, 11, 0.17), 0px 0px 3px -1px rgba(10, 9, 11, 0.04)",
        hard2XSmall:
          "0px 2px 5px -2px rgba(10, 9, 11, 0.06), 0px 2px 7px 0px rgba(10, 9, 11, 0.05), 0px 0px 0px 1px rgba(10, 9, 11, 0.05)",
        hardExtraSmall:
          "0px 2px 12px -1px rgba(10, 9, 11, 0.1), 0px 2px 2px -1px rgba(10, 9, 11, 0.04), 0px 0px 0px 1px rgba(10, 9, 11, 0.05)",
        hardSmall: "0px 6px 16px 0px rgba(10, 9, 11, 0.08), 0px 0px 0px 1px rgba(10, 9, 11, 0.05)",
        hardMedium:
          "0px 16px 24px -6px rgba(10, 9, 11, 0.08), 0px 0px 3px -1px rgba(10, 9, 11, 0.08), 0px 0px 0px 1px rgba(10, 9, 11, 0.05)",
        hardLarge:
          "0px 27px 30px -15px rgba(10, 9, 11, 0.13), 0px 0px 3px -1px rgba(10, 9, 11, 0.04), 0px 0px 0px 1px rgba(10, 9, 11, 0.05)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      coolGray: {
        100: "#FAFBFC",
        200: "#EFF0F2",
        300: "#DCDEE3",
        400: "#C7CAD1",
        500: "#AEB2BC",
        600: "#9499A5",
        700: "#7F8493",
        800: "#6B7180",
        900: "#595E6A",
        1000: "#474B55",
        1100: "#363840",
        1200: "#090A0B",
      },
      coolGrayAlpha: {
        100: "#05386B05",
        200: "#1A294612",
        300: "#020F3614",
        400: "#0410302B",
        500: "#07133147",
        600: "#06112D63",
        700: "#010A2878",
        800: "#030D268F",
        900: "#01081AA1",
        1000: "#020815B5",
        1100: "#02040EC7",
        1200: "#000208D9",
        1300: "#010204ED",
      },
      primary: {
        100: "#FFFFFF",
        200: "#F5F8FD",
        300: "#EBF0FB",
        400: "#D6E0F7",
        500: "#B8CAF2",
        600: "#B8CAF2",
        700: "#6C92E4",
        800: "#4272DD",
        900: "#1751D0",
        1000: "#113B98",
        1100: "#0C296A",
        1200: "#001825",
      },
      green: {
        100: "#EAFBF0",
        200: "#E1FAEA",
        300: "#C1F4D4",
        400: "#91DDAD",
        500: "#63C888",
        600: "#3BBA6A",
        700: "#14AD4D",
        800: "#019939",
        900: "#018030",
        1000: "#016626",
        1100: "#004D1D",
        1200: "#102A19",
      },
      red: {
        100: "#FEEBEB",
        200: "#FFE3E3",
        300: "#FFC9C9",
        400: "#FAA4A4",
        500: "#FF7F7F",
        600: "#F75656",
        700: "#F53535",
        800: "#E12121",
        900: "#BC1C1C",
        1000: "#961616",
        1100: "#711111",
        1200: "#4B0B0B",
      },
      yellow: {
        100: "#FFF6E7",
        200: "#FFF1DA",
        300: "#FFE9BA",
        400: "#FFD58F",
        500: "#FFC76A",
        600: "#FFB945",
        700: "#FFAB1F",
        800: "#EC980C",
        900: "#C47E0A",
        1000: "#9D6508",
        1100: "#764C06",
        1200: "#4F3304",
      },
      shades: {
        0: "#FFFFFF",
        100: "#000000",
      },
    },
    screens: {
      "3xl": { max: "2560px" },
      // => @media (max-width: 2560px) { ... }

      "2xl": { max: "1536px" },
      // => @media (max-width: 1536px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }

      lg: { max: "1184px" },
      // => @media (max-width: 1184px) { ... }

      md: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      sm: { max: "600px" },
      // => @media (max-width: 600px) { ... }
    },
    fontSize: {
      regular10: ["10px", { lineHeight: "12px", fontWeight: "400" }],
      medium10: ["10px", { lineHeight: "12px", fontWeight: "500" }],
      bold10: ["10px", { lineHeight: "12px", fontWeight: "700" }],
      regular12: ["12px", { lineHeight: "18px", fontWeight: "400" }],
      medium12: ["12px", { lineHeight: "18px", fontWeight: "500" }],
      bold12: ["12px", { lineHeight: "18px", fontWeight: "700" }],
      regular13: ["13px", { lineHeight: "20px", fontWeight: "400" }],
      medium13: ["13px", { lineHeight: "20px", fontWeight: "500" }],
      bold13: ["13px", { lineHeight: "20px", fontWeight: "700" }],
      regular14: ["14px", { lineHeight: "20px", fontWeight: "400" }],
      medium14: ["14px", { lineHeight: "20px", fontWeight: "500" }],
      bold14: ["14px", { lineHeight: "20px", fontWeight: "700" }],
      regular16: ["16px", { lineHeight: "26px", fontWeight: "400" }],
      medium16: ["16px", { lineHeight: "26px", fontWeight: "500" }],
      bold16: ["16px", { lineHeight: "26px", fontWeight: "700" }],
      regular18: ["18px", { lineHeight: "28px", fontWeight: "400" }],
      medium18: ["18px", { lineHeight: "28px", fontWeight: "500" }],
      bold18: ["18px", { lineHeight: "28px", fontWeight: "700" }],
      regular20: ["20px", { lineHeight: "28px", fontWeight: "400" }],
      medium20: ["20px", { lineHeight: "28px", fontWeight: "500" }],
      bold20: ["20px", { lineHeight: "28px", fontWeight: "700" }],
      regular24: ["24px", { lineHeight: "32px", fontWeight: "400" }],
      medium24: ["24px", { lineHeight: "32px", fontWeight: "500" }],
      bold24: ["24px", { lineHeight: "32px", fontWeight: "700" }],
      regular32: ["32px", { lineHeight: "40px", fontWeight: "400" }],
      medium32: ["32px", { lineHeight: "40px", fontWeight: "500" }],
      bold32: ["32px", { lineHeight: "40px", fontWeight: "700" }],
      regular36: ["36px", { lineHeight: "44px", fontWeight: "400" }],
      medium36: ["36px", { lineHeight: "44px", fontWeight: "500" }],
      bold36: ["36px", { lineHeight: "44px", fontWeight: "700" }],
      regular48: ["48px", { lineHeight: "72px", fontWeight: "400" }],
      medium48: ["48px", { lineHeight: "72px", fontWeight: "500" }],
      bold48: ["48px", { lineHeight: "72px", fontWeight: "700" }],
      regular60: ["60px", { lineHeight: "90px", fontWeight: "400" }],
      medium60: ["60px", { lineHeight: "90px", fontWeight: "500" }],
      bold60: ["60px", { lineHeight: "90px", fontWeight: "700" }],
      regular70: ["70px", { lineHeight: "108px", fontWeight: "400" }],
      medium70: ["70px", { lineHeight: "108px", fontWeight: "500" }],
      bold70: ["70px", { lineHeight: "108px", fontWeight: "700" }],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};
export default config;
