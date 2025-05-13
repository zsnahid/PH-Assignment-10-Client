import withMT from "@material-tailwind/react/utils/withMT";
import tailwindScrollbar from "tailwind-scrollbar";

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
        red: {
          50: "#FEF2F2", // Light background, WCAG AAA with dark text
          100: "#FEE2E2", // Light hover states
          200: "#FECACA", // Light borders
          300: "#FCA5A5", // Light accents
          400: "#F87171", // Medium accents
          500: "#EF4444", // Primary red
          600: "#DC2626", // Primary dark red (meeting AA with white text)
          700: "#B91C1C", // Dark red (meeting AAA with white text)
          800: "#991B1B", // Darker red for hover states
          900: "#7F1D1D", // Darkest red for borders/text
          950: "#450A0A", // Ultra dark red for dark mode
        },
        gray: {
          50: "#FAFAFA", // Light background
          100: "#F4F4F5", // Light hover states
          200: "#E4E4E7", // Light borders
          700: "#3F3F46", // Dark text (meeting AA on light backgrounds)
          800: "#27272A", // Darker text (meeting AAA on light backgrounds)
          900: "#18181B", // Darkest text and dark mode backgrounds
          950: "#09090B", // Ultra dark for dark mode
        },
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
});
