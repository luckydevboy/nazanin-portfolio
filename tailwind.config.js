/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#695E7C",
        secondary: "#FAF7FF",
        tertiary: "#0C1C2C",
        quaternary: "#f0e7fc",
      },
    },
  },
  plugins: [],
};
