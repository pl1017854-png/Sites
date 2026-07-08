import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#E6B800",
          bright: "#FFD700",
        },
        night: {
          DEFAULT: "#000000",
          soft: "#1a1a1a",
          mid: "#333333",
        },
        mist: "#f0f0f0",
      },
      fontFamily: {
        heading: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-lora)", "serif"],
      },
      animation: {
        "pulse-gold": "pulse-gold 2.4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(230, 184, 0, 0.45)" },
          "50%": { boxShadow: "0 0 0 18px rgba(230, 184, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
