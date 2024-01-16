module.exports = {
  theme: {
    extend: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1200px',
      },
      fontFamily: {
        sans: ['Mulish', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: [
          'Work Sans',
          'Mulish',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      listStyleImage: {
        checkmark: 'url("../images/icons/checkmark.svg")',
      },
      boxShadow: {
        inner: 'inset 0 0 3px 0 rgb(32 34 52 / 20%)',
        glow: 'inset 0 0 3px rgba(32,34,52, 0.2), 0 0 5px #34b9fe',
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
    },
  },
}
