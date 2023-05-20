/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      theme: "#ec4c8b",
    },
  },
  plugins: [],
};
