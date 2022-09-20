const { i18n } = require('./next-i18next.config.js');
const path = require('path');
const yenv = require('yenv');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

function getEnvVars(rawEnv, dev) {
  const NEXT_PUBLIC = /^NEXT_PUBLIC_/i;
  const raw = Object.keys(rawEnv)
    .filter((key) => NEXT_PUBLIC.test(key))
    .reduce((env, key) => {
      env[key] = rawEnv[key];
      return env;
    }, {});
  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {})
  };
  return { raw, stringified };
}

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const NEXT_ENV = isDev ? 'alpha' : process.env.APP_ENV;
  const rawEnv = yenv(path.resolve('.env.yml'), { raw: true, env: NEXT_ENV });

  return {
    target: 'experimental-serverless-trace',
    reactStrictMode: true,
    images: {
      domains: []
    },
    i18n,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true
        }
      ];
    },
    env: getEnvVars(rawEnv, isDev).raw
  };
};
