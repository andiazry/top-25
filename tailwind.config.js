module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        neue: ["neue", "sans-serif"],
        rounded: ["pangram-rounded", "neue"],
        accent: ["object-sans", "neue"],
        thunderBlack: ["thunderBlack", "neue"],
        thunderRegular: ["thunderRegular", "neue"],
        agrandirNarrow: ["agrandirNarrow", "neue"],
        agrandirNarrowBlack: ["agrandirNarrowBlack", "neue"],
      },
      colors: {
        customYellow: "#FFEF93",
        offWhite: "#F8F6F2",
      },
    },
  },
  plugins: [],
};
