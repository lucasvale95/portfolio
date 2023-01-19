module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  
  theme: {
    screens: {
      'xsm': '425px',
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '2400px',
    },
    extend: {      
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
        'close-menu': {
          '0%': {transform: 'scaleY(1)'},
          '100%': {transform: 'scaleY(0)'},
        }
      },
      animation: {
        'open-menu': "open-menu 0.5s ease-in-out forwards",
        'close-menu': "close-menu 0.5s ease-in-out forwards",
      }, 
    },
  },
  plugins: [],
}