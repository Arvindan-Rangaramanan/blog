module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: "'Cinzel',serif",
        spectral: "'Spectral', serif",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
