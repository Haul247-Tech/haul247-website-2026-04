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
          // Legacy tokens (kept for compatibility)
          navy: "#21445B",
          peach: "#F4B078",
          menu: "#1a4358",
          // Semantic surface tokens
          primary: "#1C4863",          // primary brand blue — buttons, links, accents
          "primary-heading": "#1B3B52", // slightly deeper — large headings on white
          "surface-dark": "#091822",   // standard dark section background
          "surface-deeper": "#0B1622", // philosophy / deepest dark sections
          "surface-deepest": "#070d18",// get-in-touch form panel
          "surface-partner": "#1d3e53",// partner assets section
          "surface-light": "#f5f7f9",  // light alternating sections
          "surface-card": "#F0F0F0",   // light card backgrounds
          "text-muted": "#738996",     // section sub-headings on dark bg
          "text-helper": "#607481",    // form helper / secondary text
        }
      },
      // Semantic type scale — use these instead of arbitrary [px] values
      fontSize: {
        "display-xl": ["clamp(2.5rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(1.75rem, 3.5vw, 2.8125rem)", { lineHeight: "1.15" }], // ~45px
        "display-md": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.2" }],
        "display-sm": ["clamp(1.125rem, 2vw, 1.5625rem)", { lineHeight: "1.3" }],   // ~25px
        "body-lg": ["0.9375rem", { lineHeight: "1.45" }],                            // 15px
        "body-sm": ["0.75rem", { lineHeight: "1.5" }],                               // 12px
      },
      maxWidth: {
        container: "1280px",   // canonical content container — use max-w-container
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
