import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Syne'", "sans-serif"],
        body: ["'Outfit'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        paper:  "#F7F6F1",
        ink:    "#0C0C0C",
        lime:   "#C8F135",
        warm:   "#E8E4DC",
        muted:  "#7A7A7A",
        red:    "#FF4D4D",
      },
    },
  },
  plugins: [],
};
export default config;
