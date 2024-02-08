/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '1sm': '0 1px 4px  0 rgba(0, 0, 0, 0.05)',
        '2sm': '0 2px 4px  0 rgba(143, 214, 148, 0.05)',
      }
    },
  },
  plugins: [],
}

