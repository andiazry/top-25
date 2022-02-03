module.exports = {
  content: [
    "./index.html",
    "./list-template.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        editorial: ["editorial", "serif"],
        gtBlack: ["gt-black", "sans-serif"],
        gtRegular: ["gt-regular", "sans-serif"],
      },
      colors: {
        customYellow: "#FB1E01",
        offWhite: "#F8F6F2",
      },
    },
  },
  plugins: [],
};
