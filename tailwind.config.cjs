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
    themes: ["light", "dark"],
  },
}
