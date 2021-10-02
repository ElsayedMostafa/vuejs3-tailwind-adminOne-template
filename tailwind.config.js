module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.{vue,js}'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
   require('tailwind-scrollbar')
  ],
};
