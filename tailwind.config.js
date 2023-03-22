/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2lg": "1050px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
