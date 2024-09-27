/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      bgDark: "#22223b",
      bgDark2: "#4a4e69",
    },
    textShadow: {
      '3d': '1px 1px 0 rgba(0, 0, 0, 0.5), 2px 2px 0 rgba(0, 0, 0, 0.5), 3px 3px 0 rgba(0, 0, 0, 0.5)',
    },
  },
  plugins: [],
}

