/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/images/wallhaven-mpwjo9.jpg')"
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", "synthwave"],
  },
  plugins: [require("daisyui")],
}