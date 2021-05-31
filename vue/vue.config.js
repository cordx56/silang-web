module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'SILang - Simple Interpreter Language',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/global.scss";',
      },
    },
  },
};
