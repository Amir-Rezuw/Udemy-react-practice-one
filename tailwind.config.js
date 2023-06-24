/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ccc: "#cccccc",
      },
      boxShadow: {
        primaryPurpleShadow: "0px 0px 5px 1px #d8b4fe;",
      },
    },
  },
  plugins: [],
};
