import type { Config } from "tailwindcss";

/** Colours come from CSS variables so light/dark swap without per-class variants. */
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: token("bg"), // page background
        ink: token("fg"), // primary text + borders
        brand: token("brand"),
        surface: token("surface"), // cards
        panel: token("panel"), // always-dark areas (footer, lightbox)
        oncontrast: token("oncontrast"), // text on panel / brand
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
