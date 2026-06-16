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
        background: "#FBFBFC", // Apple warm off-white
        bgSecondary: "#F5F5F7", // Apple secondary light gray
        cardBg: "#FFFFFF",
        textMain: "#1D1D1F", // Apple charcoal black
        textMuted: "#6E6E73", // Apple slate gray
        accentCyan: "#007799", // Deep cyan for contrast
        accentEmerald: "#1D8F4F", // Forest emerald for contrast
        borderMuted: "#E5E5E7", // Apple border light gray
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

