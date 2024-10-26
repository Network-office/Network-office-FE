/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
