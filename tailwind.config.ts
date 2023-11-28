import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image-1": "url('/images/hero-img-1.png')",
        "gradient-2": "url('/images/gradient-2.png')",
        panels: "url('/images/panels.png')",
      },
      fontFamily: {
        body: ["var(--general-sans-font)", "sans-serif"],
      },
      colors: {
        "dim-black": "#0C0E12",
        primary: "#FF7A01",
        secondary: "#117865",
      },
      fontSize: {
        "heading-two": "5rem",
        "heading-three": "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
