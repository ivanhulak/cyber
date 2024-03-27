import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './assets/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "black": "#000",
        "white": "#fff",
        "purple": "#781DBC",
        "purple-dark": "#211C24",
        "red": "#E10000",
        "gold": "#E1B000",
        "rate": "#FFB547",
        "silver": "#E8E8E8",
        "disabled-gray": "#D5D5D5",
        "placeholder-gray": "#979797",
        "text-grey": {
          50: "#CFCFCF",
          100: "#C4C4C4",
          150: "#A7A7A7",
          200: "#A4A4A4",
          250: "#A0A0A0",
          300: "#9D9D9D",
          350: "#A2A3B1",
          400: "#6F6F6F",
          500: "#6C6C6C",
          600: "#717171",
          700: "#656565",
          800: "#8B8B8B",
          DEFAULT: "#909090",
          900: "#7E7E7E",
          A100: "#787878",
          A400: "#545454",
          A700: "#4E4E4E",
        },
        "bg-gray": {
          50: "#F5F5F5",
          100: "#F4F4F4",
          150: "#FAFAFA",
          200: "#F6F6F6",
          250: "#F9F9F9",
          300: "#EAEAEA",
          350: "#EDEDED",
          400: "#CECECE",
          500: "#D9D9D9",
          600: "#737373",
          700: "#414141",
          800: "#353535",
          900: "#2C2C2C"
        }
      },
      fontFamily: {
        SFProDisplay: ["San Francisco Pro", "sans-serif"],
        SFProText: ["San Francisco Pro Text", "sans-serif"],
        Figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;