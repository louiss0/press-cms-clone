const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    "hidden",
    "fixed",
    "translate-x-full",
    "translate-y-full",
    "opacity-0",
    "text-red-400",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-green": "rgb(var(--yellow-green-color) / <alpha-value>)",
        brown: "rgb(var(--brown-color) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
