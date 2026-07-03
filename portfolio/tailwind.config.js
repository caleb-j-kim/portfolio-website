/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // rgb(var(--x) / <alpha-value>) lets Tailwind generate opacity
        // modifiers (e.g. text-foreground/80); a plain var(--x) hex string
        // can't be decomposed into an alpha channel and silently produces
        // no CSS rule for any /NN variant.
        deep: "rgb(var(--color-deep-rgb) / <alpha-value>)",
        bgBase: "rgb(var(--color-base-rgb) / <alpha-value>)",
        elevated: "rgb(var(--color-elevated-rgb) / <alpha-value>)",
        surface: "var(--color-surface)",
        "surface-hover": "var(--color-surface-hover)",
        foreground: "rgb(var(--color-foreground-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-foreground-muted-rgb) / <alpha-value>)",
        accent: "rgb(var(--color-accent-rgb) / <alpha-value>)",
        "accent-hover": "rgb(var(--color-accent-hover-rgb) / <alpha-value>)",
        accentRed: "rgb(var(--color-red-rgb) / <alpha-value>)",
        "accentRed-hover": "rgb(var(--color-red-hover-rgb) / <alpha-value>)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "Arial", "Helvetica", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Arial", "Helvetica", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, -30px)" },
        },
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        "float-slow": "float 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
