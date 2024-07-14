/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#70C843",
        "gradient-green-start": "#38b2ac",
        "gradient-green-end": "#3182ce",
      },
      // backgroundImage: (theme) => ({
      //   "gradient-green": "linear-gradient(90deg, #38b2ac 0%, #3182ce 100%)",
      // }),
    },
    // colors: {
    //   transparent: "transparent",
    //   primary: "#70C843",
    // },
  },
  plugins: [],
};
