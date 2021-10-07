module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        movement: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        movement: "movement 1.5s infinite",
      },
      colors: {
        primary: "#0b6a38",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
      scale: ["hover"],
    },
  },
  plugins: [],
};
