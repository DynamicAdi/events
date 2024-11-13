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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ff5100",
        secondary: "#ff9447",
      },
      fontFamily: {
        dm: "var(--font-main)",
        pop: "var(--font-pop)",
        mon: "var(--font-mont)",
      }
    },
  },
  plugins: [],
};
