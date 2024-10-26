/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ["placekitten.com", "picsum.photos", "source.unsplash.com"]
  }
}

module.exports = nextConfig
