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
        neueMontrealBold: ["montreal-bold", "sans-serif"],
        neueMontrealRegular: ["montreal-regular", "sans-serif"],
      },
      colors: {
        customYellow: "#FB1E01",
        offWhite: "#F6F6F4",
        customBlack: "#231f20`",
      },
    },
  },
  plugins: [],
};
