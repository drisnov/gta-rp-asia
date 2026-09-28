import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        asphalt: "#0e0a12",
        panel: "#181222",
        line: "#2e2238",
        paper: "#f4eee3",
        muted: "#ac9fb6",
        blush: "#ff5d8f",
        candy: "#ffb3c9",
      },
      fontFamily: {
        mono: ["var(--font-jbmono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "var(--font-jbmono)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
