module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        "primary": "#74229b",
        "secondary": "#E2D7EB"
      }
    },
  },
  plugins: [require("daisyui")],
}
