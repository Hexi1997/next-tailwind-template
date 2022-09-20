module.exports = {
    plugins: ['stylelint-prettier'],
    extends: ['stylelint-prettier/recommended'],
    rules: {
      'prettier/prettier': true
    },
    overrides: [
      {
        files: ['**/*.scss'],
        customSyntax: 'postcss-scss',
        rules: {
          'prettier/prettier': true
        }
      },
      {
        files: ['**/*.sass'],
        customSyntax: 'postcss-sass',
        rules: {
          'prettier/prettier': true
        }
      }
    ]
};
