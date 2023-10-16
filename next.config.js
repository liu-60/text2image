/** @type {import('next').NextConfig} */

const nextBuildId = require('next-build-id')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return () => nextBuildId({ dir: __dirname, describe: true })
  },
}


module.exports = nextConfig
