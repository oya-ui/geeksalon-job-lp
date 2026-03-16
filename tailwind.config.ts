import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f8",
          100: "#dae1ef",
          200: "#bccae2",
          300: "#91aad0",
          400: "#6185b9",
          500: "#4068a1",
          600: "#315287",
          700: "#29436e",
          800: "#263a5c",
          900: "#24334e",
          950: "#0f1622",
        },
        accent: {
          gold: "#d4a853",
          coral: "#e07c5a",
          mint: "#2dd4bf",
        },
        light: {
          cream: "#faf8f5",
          sky: "#f0f7ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto)", "Hiragino Sans", "Meiryo", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
