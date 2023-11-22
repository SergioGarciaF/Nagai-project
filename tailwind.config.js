/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e5e7eb",

          "secondary": "#b0b3b8",

          "accent": "#fcd34d",

          "neutral": "#111827",

          "base-100": "#ffffff",

          "info": "#dc2626"

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}