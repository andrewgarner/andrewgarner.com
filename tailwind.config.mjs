/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          '"Sometype Mono Variable"',
          {
            fontFeatureSettings: '"kern" 1',
          },
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
