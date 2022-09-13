/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-primary": "var(--primary)",
        "brand-primary-focus": "var(--primary-focus)",
        "brand-primary-content": "var(--primary-content)",
        "brand-secondary": "var(--secondary)",
        "brand-secondary-focus": "var(--secondary-focus)",
        "brand-secondary-content": "var(--secondary-content)",
        "brand-accent": "var(--accent)",
        "brand-accent-content": "var(--accent-content)",
        "brand-neutral": "var(--neutral)",
        "brand-base-content": "var(--base-content)",
        "brand-base-100": "var(--base-100)",
        "brand-base-200": "var(--base-200)",
        "brand-base-300": "var(--base-300)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#d1c1d7",
          secondary: "#f6cbd1",
          accent: "#b4e9d6",
          neutral: "#70acc7",
          "base-100": "#708090",
          "--rounded-btn": "1.9rem",
          "--rounded-btn": "1.9rem",
        },
        dark: {
          primary: "#d1c1d7",
          secondary: "#f6cbd1",
          accent: "#b4e9d6",
          neutral: "#70acc7",
          "base-100": "#1c2126",
          "--rounded-btn": "1.9rem",
          "--rounded-btn": "1.9rem",
        },
      },
    ],
  },
}
