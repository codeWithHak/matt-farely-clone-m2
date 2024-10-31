import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundColor:'#ffffff',
        primaryHeading:'#141c3a',
        primaryPara:'rgba(10, 10, 10, 0.9)',
        secondary:'#6E07F3'
      },
      fontFamily:{
        "primary":["eurostile","sans-serif"],
        "secondary":["europa","sans-serif"],
        "secondary-bold":["europa-bold","sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;