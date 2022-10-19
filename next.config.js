/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    minimumCacheTTL: 0,
    disableStaticImages: true,
  },
  generateEtags: false,
  output: 'standalone'
}

module.exports = nextConfig
