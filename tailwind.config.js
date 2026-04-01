/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-cyan': '#00e5ff',
        'accent-purple': '#b084f7',
      }
    },
  },
  plugins: [],
}
