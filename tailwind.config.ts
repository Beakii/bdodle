import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist: [
    "delay-1000",
    "delay-1500",
    "delay-2000",
    "delay-2500",
    "delay-3000",
    "delay-3500",
    "delay-4000",
    "delay-4500",
    "delay-5000",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionDelay: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
        '3500': '3500ms',
        '4000': '4000ms',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        flip: {
          "0%": { transform: "perspective(400px) rotateY(-90deg)", opacity: "0" },
          "100%": { transform: "perspective(400px) rotateY(0deg)", opacity: "1" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "flip": "flip 2s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config