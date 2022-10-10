module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        "primary": "#950FFC",
        "secondary": "#E2D7EB"
      }
    },
  },
  plugins: [require("daisyui")],
}
