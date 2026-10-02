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
        primary: {
          DEFAULT: "#0EA5A4",
          50: "#F0FDFB",
          100: "#E6F6F6",
          200: "#B8EDE9",
          300: "#7EDCD6",
          400: "#36C2BC",
          500: "#0EA5A4",
          600: "#0C8A89",
          700: "#0E6E6E",
          800: "#105858",
          900: "#124949",
        },
        aqua: {
          DEFAULT: "#E6F6F6",
          50: "#F7FDFD",
          100: "#E6F6F6",
          200: "#D0F0F0",
          300: "#A9E3E3",
        },
        navy: {
          DEFAULT: "#0F2A3D",
          50: "#F4F7F9",
          100: "#E5ECF0",
          200: "#C4D6E0",
          300: "#9CBBCC",
          400: "#5D8CA8",
          500: "#2B5F80",
          600: "#1F4863",
          700: "#17374D",
          800: "#0F2A3D",
          900: "#091B28",
          950: "#051019",
        },
        amber: {
          DEFAULT: "#F59E0B",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15, 42, 61, 0.06), 0 2px 6px -1px rgba(15, 42, 61, 0.04)",
        "soft-md": "0 8px 24px -3px rgba(15, 42, 61, 0.08), 0 4px 10px -2px rgba(15, 42, 61, 0.04)",
        "soft-lg": "0 14px 34px -4px rgba(15, 42, 61, 0.1), 0 6px 14px -2px rgba(15, 42, 61, 0.05)",
        "soft-xl": "0 22px 48px -6px rgba(15, 42, 61, 0.12), 0 10px 20px -4px rgba(15, 42, 61, 0.07)",
        amber: "0 8px 20px -3px rgba(245, 158, 11, 0.35)",
        teal: "0 8px 20px -3px rgba(14, 165, 164, 0.35)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
