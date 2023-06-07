/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/images/promise.png')"
      }
    },
    colors: {
      'txt-primary': '#ED315D',
      'txt-secondary': '#1E6091',
      'txt-info': '#C1FFF8',
      'txt-gray': '#838BA0',
      'txt-white': '#FFFFFF',
    },
    backgroundColor: {
      'bc-primary': '#ED315D',
      'bc-secondary': '#1E6091',
      'bc-info': '#DEFDFA',
      'bc-white': '#FFFFFF',
    }
  },
  daisyui: {
    themes: ["light", "dark", "synthwave", "cupcake"],
  },
  plugins: [require("daisyui")],
}