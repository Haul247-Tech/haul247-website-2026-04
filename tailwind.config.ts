import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "system-ui", "sans-serif"]
      },
      colors: {
        haul: {
          navy: "#21445B",
          peach: "#F4B078",
          menu: "#1a4358"
        }
      },
      keyframes: {
        "trusted-marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        "trusted-marquee": "trusted-marquee 50s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
