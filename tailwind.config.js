/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#0f172a",
      lite: "#ffffff",
      static: "#2457f5",
      mail: "#ffd700",
      site: "#021239",
      shop: "#0f172a",
      instagram: "#B900B4",
      telegram: "#3faee8",
      whatsapp: "#455a64",
    },
    extend: { 
      screens: {
        xs: "400px",
        xs2: "515px",
        sm: "568px",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1536px",
      },
    },
  },
  plugins: [],
};
