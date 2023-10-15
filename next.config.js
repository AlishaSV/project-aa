require('dotenv').config({ path: `${__dirname}/.env` });

if (!process.env.GRAPHQL_URL) {
  throw Error('Please specify GRAPHQL_URL in your env');
}

if (!process.env.ENCRYPTED_SECRET) {
  throw Error('Please specify ENCRYPTED_SECRET in your env');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    ENCRYPTED_SECRET: process.env.ENCRYPTED_SECRET,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql)/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
};

module.exports = nextConfig;
