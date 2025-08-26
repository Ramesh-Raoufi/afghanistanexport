module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fdf2f2",
          100: "#fde3e3",
          200: "#f9bdbd",
          300: "#f58f8f",
          400: "#ef5d5d",
          500: "#e53030",
          600: "#c61616",
          700: "#8b0000",
          800: "#5c0000",
          900: "#350202",
        },
      },
      boxShadow: {
        card: "0 4px 10px -2px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};
