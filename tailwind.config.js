/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
