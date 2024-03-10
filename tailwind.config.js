/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        brandGreen: "#DCE5E2"
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
