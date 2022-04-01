const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'experimental-serverless-trace',
  reactStrictMode: true,
  i18n,
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
