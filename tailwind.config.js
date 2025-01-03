/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        "on-secondary": "rgba(var(--on-secondary))",
        tertiary: "rgba(var(--tertiary))",
        "on-tertiary": "rgba(var(--on-tertiary))",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
