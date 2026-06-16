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
        background: "#F2F6F8", // Aquatic warm off-white
        bgSecondary: "#EBF1F4", // Soft water blue-gray
        cardBg: "#FFFFFF",
        textMain: "#1D1D1F", // Apple charcoal black
        textMuted: "#6E6E73", // Apple slate gray
        accentCyan: "#008299", // Deep teal blue
        accentEmerald: "#1D8F4F", // Forest emerald
        borderMuted: "#DCE4E8",// Light watery gray border

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

