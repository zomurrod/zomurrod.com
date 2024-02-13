/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'primary': '#8FD694',
        'primary-light': '#E8F6EE',
      },
      boxShadow: {
        '1sm': '0 1px 4px  0 rgba(0, 0, 0, 0.05)',
        '2sm': '0 2px 4px  0 rgba(143, 214, 148, 0.05)',
        '3sm': '0px 1px 2px rgba(39, 174, 96, 0.4), 0px 0px 0px 1px rgba(33, 150, 83, 0.7)',
        '4sm': '0 1px 2px  0 rgba(0, 0, 0, 0.05)',
      }, 

    },
  },
  plugins: [],
}

