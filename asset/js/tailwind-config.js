tailwind.config = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      screens: {
        "m-lg": { max: "1024px" },
      },
      fontFamily: {
        creepster: ["Creepster", "sans-serif"],
        griffy: ["Griffy", "sans-serif"],
        nunito: ['"Nunito Sans"', "sans-serif"],
      },
      colors: {
        clifford: "#da373d",
        vividViolet: "#9747ff",
        jetBlack: "#181818",
      },
    },
  },
};
