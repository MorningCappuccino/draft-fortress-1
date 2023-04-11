/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    fiber: false, // for working sass on NodeJS bellow 14
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = nextConfig
