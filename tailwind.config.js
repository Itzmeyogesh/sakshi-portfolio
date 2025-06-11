module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cool: ['"Inter"', '"Poppins"', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        hero: "linear-gradient(to right, #4e54c8, #8f94fb)",
      },
    },
  },
  plugins: [],
};
