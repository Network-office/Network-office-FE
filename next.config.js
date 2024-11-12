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
    const useMock = process.env.NEXT_PUBLIC_MOCKING === "enabled"
    console.log(process.env.NEXT_PUBLIC_MOCKING)
    if (useMock) {
      console.log("Using MSW mock server")
      return [
        {
          source: "/api/v1/:path*",
          destination: "http://localhost:8080/api/v1/:path*"
        }
      ]
    } else {
      console.log("Using real API server")
      return [
        {
          source: "/api/v1/:path*",
          destination: `${process.env.NEXT_PUBLIC_API_URL}/dev/api/v1/:path*`
        }
      ]
    }
  }
}

module.exports = nextConfig
