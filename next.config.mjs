/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    if (process.env.NODE_ENV === "production") {
      return [
        {
          source: "/dev/:path*",
          destination: `${process.env.NEXT_PUBLIC_API_URL}/dev/:path*`
        }
      ]
    }
    return []
  }
}

export default nextConfig
