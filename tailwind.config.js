/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#65cb79",
        mainGray: "#e3e7ec",
        mainWhite: "#f9f9f9",
        mainBlue: "#2a48d2",
        secondaryGreen: "#d8eed4",
      },
    },
  },
  plugins: [],
};
