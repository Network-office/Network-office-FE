/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/dev/:path*",
        destination: "https://network-office.duckdns.org/dev/:path*"
      }
    ]
  }
}

export default nextConfig
