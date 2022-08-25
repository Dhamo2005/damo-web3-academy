/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['external-preview.redd.it'],
  },
}

module.exports = nextConfig
