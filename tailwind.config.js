const catpuccin = require("@catppuccin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-seriff"],
        jetBrainsMono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [
    catpuccin({
      defaultFlavor: "mocha",
    }),
  ],
};
