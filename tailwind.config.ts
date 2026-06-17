import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        linen: "#fffaf2",
        paper: "#fffdf8",
        morning: "#c9e2f6",
        "morning-strong": "#78a9cb",
        biscuit: "#f3dfb8",
        ink: "#27364a",
        muted: "#6f7d8c"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(74, 98, 121, 0.12)",
        button: "0 12px 24px rgba(120, 169, 203, 0.22)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
