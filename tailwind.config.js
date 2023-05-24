/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      theme: "#ec4c8b",
      "theme-deem": "#d04379",
      "theme-light": "#fe5395",
    },
  },
  plugins: [],
};
