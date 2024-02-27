/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      alpha: "lower-alpha",
    },

    extend: {
      colors: {
        lecture: "#1b3663",
        lab: "#9c3464",
        tutorial: "#00757e",
        assessment: "#cc3333",
        other: "#4e4c4c",
      },
    },
  },
  plugins: [],
};
