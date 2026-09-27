import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        asphalt: "#0B0D10",
        panel: "#111417",
        line: "#232A31",
        paper: "#E8E6DF",
        muted: "#9AA3AD",
        amber: "#F5A524",
      },
      fontFamily: {
        mono: ["var(--font-jbmono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
