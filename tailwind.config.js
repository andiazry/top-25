module.exports = {
  content: [
    "./index.html",
    "./list-template.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        editorial: ["editorial", "serif"],
        pangramBlack: ["pangramBlack", "sans-serif"],
        pangram: ["pangram", "sans-serif"],
      },
      colors: {
        customYellow: "#FAECAA",
        offWhite: "#F8F6F2",
      },
    },
  },
  plugins: [],
}
