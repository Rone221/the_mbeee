/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Activation via une classe
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Vert nature
        accent: "#FFB703", // Jaune blé
        dark: "#374151", // Fond sombre
        light: "#FAF3E0", // Fond clair
      },
    },
  },
  plugins: [],
};
