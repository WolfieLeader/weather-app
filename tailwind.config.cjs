/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
        xsm: "510px",
      },
    },
  },
  plugins: [],
};
