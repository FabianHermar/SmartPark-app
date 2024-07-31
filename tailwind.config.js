/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./App.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#367BFF",
        secondary: "#666666",
      },
      backgroundImage: {
        'buttonGradient': "linear-gradient(90deg, #0F1B27 0%, #0B1521 35%, #050713 85%)",
        'spaceGradient': "linear-gradient(90deg, #FFFFFF 0%, #D0F4FF 100%)",
      },
      fontFamily: {
        GilroyRegular: [ "GilroyRegular", "sans-serif" ],
        GilroyMedium: [ "GilroyMedium", "sans-serif" ],
        GilroySemibold: [ "GilroySemibold", "sans-serif" ],
        GilroyBold: [ "GilroyBold", "sans-serif" ],
      }
    },
  },
  plugins: [],
};
