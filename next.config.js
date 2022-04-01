const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localePath: path.resolve(
      './assets/i18n/flowmarket-frontend-copywriter/locales'
    )
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      },
      {
        source: '/collections',
        destination: '/collections/all',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
