module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "3xl": "2000px",
      }
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
