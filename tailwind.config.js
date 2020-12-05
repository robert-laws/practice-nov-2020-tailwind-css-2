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
      },
    },
  },
  variants: {
    extend: {},
  },
};
