import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-accent)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      backdropBlur: {
        glass: "24px",
        overlay: "40px",
        modal: "64px",
      },
      boxShadow: {
        glass:
          "inset 0 1px 0 rgba(255,255,255,0.28), inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 -24px 44px -28px rgba(0,0,0,0.65), 0 1px 2px rgba(0,0,0,0.40), 0 8px 24px -8px rgba(0,0,0,0.60), 0 32px 64px -24px rgba(0,0,0,0.75), 0 0 80px -20px rgba(16,185,129,0.18)",
        "glass-hover":
          "inset 0 1px 0 rgba(255,255,255,0.38), inset 0 0 0 1px rgba(16,185,129,0.22), inset 0 -24px 44px -28px rgba(0,0,0,0.65), 0 2px 4px rgba(0,0,0,0.45), 0 12px 32px -8px rgba(0,0,0,0.65), 0 40px 80px -24px rgba(0,0,0,0.80), 0 0 100px -16px rgba(16,185,129,0.38)",
      },
      backgroundImage: {
        "glass-tint":
          "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 42%, rgba(255,255,255,0.06) 100%)",
        "glass-edge":
          "linear-gradient(160deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.10) 28%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0.16) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
