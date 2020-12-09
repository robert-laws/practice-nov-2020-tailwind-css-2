const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./src/**/*.js'],
    options: {
      whitelist: ['main-header'],
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FD23AA',
        indigo: colors.indigo,
        teal: colors.teal,
        emerald: colors.emerald,
      },
      scale: {
        500: '5',
      },
    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
    },
  },
};
