import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "border-[#bbcbdc]",
    "border-[#aa580d]",
    "text-[#bbcbdc]",
    "text-[#aa580d]",
    "placeholder:text-[#bbcbdc]",
    "placeholder:text-[#aa580d]",
    "focus:ring-[#bbcbdc]",
    "focus:ring-[#aa580d]",
  ],
  theme: {
    fontFamily: {
      noto: ["'Noto Serif Display Variable'", "serif"],
      oswald: ["'Oswald Variable'", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
