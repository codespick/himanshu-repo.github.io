/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // Outputs a 'out' folder with static HTML/CSS/JS
  basePath: '/himanshu-repo', // Replace with your exact GitHub repository name
  images: {
    unoptimized: true, // GitHub Pages does not support default Next.js image optimization
  },
}

export default nextConfig
