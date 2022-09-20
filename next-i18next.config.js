const path = require('path');
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localePath: path.join(
      __dirname,
      './public/flowmarket-frontend-copywriter/locales'
    )
  }
};
