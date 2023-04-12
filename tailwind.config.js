/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#151515",
      secondary: "#BD71E0",
      neutral: [
        {
          100: "#212121",
          200: "#3C3C3C",
          300: "#777777",
          400: "#F9F9F9",
        },
      ],
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  darkMode: ["class"],
  plugins: [],
}
