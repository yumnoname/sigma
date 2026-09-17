import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Base "deep space" palette — sampled from the reference video.
        void: {
          DEFAULT: "#05060a", // page background
          900: "#0a0c14",
          800: "#0d1018",
          700: "#12151f",
        },
        panel: "#0b0d14", // hero card background (used with opacity)
        nebula: {
          // lavender/violet accent used for headings, glows, primary CTA
          300: "#c6bdfb",
          400: "#a996f8",
          500: "#8b7cf3",
          600: "#6f5ce0",
        },
        ember: {
          // warm orange used for the accretion disk / planets
          400: "#f3a35c",
          500: "#e2793a",
          600: "#c05a26",
        },
        mist: {
          // muted foreground text
          300: "#c7cad6",
          400: "#9498a8",
          500: "#6b6f81",
          600: "#4b4e5c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(139, 124, 243, 0.45)",
        "glow-ember": "0 0 60px -12px rgba(226, 121, 58, 0.55)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(139,124,243,0.16), transparent 60%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.15", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "dash-draw": {
          to: { strokeDashoffset: "0" },
        },
        "modal-in": {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        twinkle: "twinkle 3.2s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "spin-slower": "spin-slow 46s linear infinite",
        "modal-in": "modal-in 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
