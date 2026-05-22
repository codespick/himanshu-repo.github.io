/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/himanshu-repo',
  assetPrefix: '/himanshu-repo/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig