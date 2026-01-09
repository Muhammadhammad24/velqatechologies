/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  assetPrefix: '',
  basePath: '',
  // Disable experimental features for better compatibility
  experimental: {},
}

module.exports = nextConfig