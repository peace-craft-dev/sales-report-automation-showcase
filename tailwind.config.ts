import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#faf7f2",
          soft: "#f4f0e8",
          card: "#ffffff",
          warm: "#f7f2e8",
        },
        border: {
          DEFAULT: "#e5e0d6",
          strong: "#d6cfc0",
        },
        ink: {
          DEFAULT: "#2c3530",
          soft: "#6b7370",
          muted: "#9aa19e",
        },
        sage: {
          50: "#f0f4f1",
          100: "#dde7e0",
          200: "#b8cdc1",
          300: "#92b29f",
          400: "#6e9682",
          500: "#5a7d6b",
          600: "#46624f",
          700: "#374f3f",
          800: "#2a3c30",
          900: "#1d2a22",
        },
        wood: {
          50: "#faf5ec",
          100: "#f2e7d2",
          200: "#e6d2ad",
          300: "#d8bb87",
          400: "#cba66d",
          500: "#b8946a",
          600: "#9c7c56",
          700: "#7e6244",
          800: "#5f4a33",
          900: "#3f3122",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "Menlo", "monospace"],
      },
      backgroundImage: {
        "grid-warm":
          "linear-gradient(to right, rgba(90,125,107,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(90,125,107,0.06) 1px, transparent 1px)",
        "radial-warm":
          "radial-gradient(ellipse at top, rgba(90,125,107,0.10), transparent 60%)",
        "sage-gradient":
          "linear-gradient(135deg, #5a7d6b 0%, #b8946a 100%)",
        "hero-bg":
          "linear-gradient(180deg, #faf7f2 0%, #f4f0e8 100%)",
      },
      backgroundSize: {
        "grid-40": "40px 40px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(44,53,48,0.04), 0 8px 24px rgba(44,53,48,0.04)",
        card: "0 2px 4px rgba(44,53,48,0.05), 0 12px 40px rgba(44,53,48,0.06)",
        glow: "0 0 40px -8px rgba(90,125,107,0.30)",
      },
    },
  },
  plugins: [],
};
export default config;
