import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        foreground: "rgb(12, 8, 8)",
        background: "rgb(253, 249, 249)",
        primary: "rgb(183, 28, 28)",
      },
    },
  },
  plugins: [],
});
