export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      dropShadow: {
        logo: "0 0 2em #646cffaa",
        "logo-tw": "0 0 2em #38bdf8aa",
      },
      height: {
        18: "4.5rem",
      },
      colors: {
        "transparent-white": "rgba(255, 255, 255, 0.87)",
      },

      keyframes: {
        stretchUp: {
          "0%, 20%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-122px)" },
          "70%": { transform: "translateY(-126px)" },
          "100%": { transform: "translateY(-122px)" },
        },
        stretchDown: {
          "0%, 20%": { transform: "translateY(3px)" },
          "100%": { transform: "translateY(0)" },
        },
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        expand: "stretchUp 0.3s ease-in",
        collapse: "stretchDown 0.3s ease-in",
        fade: "fade 0.5s ease",
      },
    },
  },
  plugins: [],
};
