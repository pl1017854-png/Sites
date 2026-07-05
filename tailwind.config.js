/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#040407",
          900: "#08080f",
          800: "#0d0d1a",
          700: "#14142a",
        },
        moon: {
          50: "#fff9ec",
          100: "#ffefcd",
          200: "#ffdf9e",
          300: "#ffc95e",
          400: "#f5ac36",
          500: "#e8931a",
          glow: "#ffd9a0",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        marquee: "marquee 28s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "float-slow": "float 7s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.6s ease-in-out infinite",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.15", transform: "scale(0.8)" },
          "50%": { opacity: "0.9", transform: "scale(1.15)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 30px 2px rgba(255, 201, 94, 0.35)" },
          "50%": { boxShadow: "0 0 55px 10px rgba(255, 201, 94, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
