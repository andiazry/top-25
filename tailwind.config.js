module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        neue: ["neue", "sans-serif"],
        rounded: ["pangram-rounded", "neue"],
        accent: ["object-sans", "neue"],
        thunder: ["thunder-black", "neue"],
      },
      colors: {
        customYellow: "#FFEF93",
      },
    },
  },
  plugins: [],
};
