/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./content/**/*.md",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}"
  ],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans Lao', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          "primary": "#0903FF",

          "secondary": "#D926A9",

          "accent": "#1FB2A6",

          "neutral": "#0652dd",

          "base-100": "#f5f5f4",

          "info": "#3ABFF8",

          "success": "#16a34a",

          "warning": "#FBBD23",

          "error": "#dc2626",
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "false",
  },
}
