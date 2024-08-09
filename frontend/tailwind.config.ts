import type { Config } from "tailwindcss";

const config: Config = {
  // darkMode: 'selector',
  darkMode: 'class', // atau 'media' tergantung preferensi
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gold": {
          100: "#FFF6DF",
          200: "#FFEAB5",
          300: "#FFDE8C",
          400: "#FFD263",
          500: "#FFAB00", // Base color
          600: "#CC8B00",
          700: "#996C00",
          800: "#664C00",
          900: "#332600",
        },
        "secondary-orange": {
          100: "#FFE6B3",
          200: "#FFD880",
          300: "#FFC54D",
          400: "#FFB21A",
          500: "#FFBC33", // Base color
          600: "#CC981A",
          700: "#996E00",
          800: "#664F00",
          900: "#332800",
        },
        "primary-dark": {
          100: "#494953",
          200: "#40404C",
          300: "#363641",
          400: "#2D2D38",
          500: "#232333", // Base color
          600: "#1A1A26",
          700: "#11111C",
          800: "#08080F",
          900: "#000000",
        },
        "secondary-dark": {
          100: "#53545A",
          200: "#4C4D53",
          300: "#43444B",
          400: "#3A3B42",
          500: "#2B2C40", // Base color
          600: "#22232B",
          700: "#191A22",
          800: "#101119",
          900: "#08080F",
        },
        "primary-light": {
          100: "#FFFFFF",
          200: "#FCFCFD",
          300: "#F9F9FB",
          400: "#F7F7F9",
          500: "#F5F5F9", // Base color
          600: "#D1D1D6",
          700: "#AFAFB3",
          800: "#8D8D91",
          900: "#6B6B6F",
        },
        "highlight-dark": {
          500: "#4B516E", // Base color
        },

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
