/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ["placekitten.com", "picsum.photos", "source.unsplash.com"]
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.NEXT_PUBLIC_APL_URL}/dev/api/v1/:path*`
      }
    ]
  }
}

module.exports = nextConfig
