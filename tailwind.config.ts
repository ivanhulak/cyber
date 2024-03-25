import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-black": "#090538",
        "portland-orange": "#FF5635",
        gainsboro: "D9D9D9",
      },
      fontFamily: {
        georgia: [
          "Georgia",
          "ui-serif",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      fontSize: {
        "10xl": ["11.25rem", "1"],
      },
    },
  },
  plugins: [],
};
export default config;
