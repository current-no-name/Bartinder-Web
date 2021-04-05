module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#d3b152',
        secondary: '#f8f5e0',
        background: '#153a2b'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
