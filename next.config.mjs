/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fix for some libraries using HashRouter in Next.js
  output: 'standalone',
};

export default nextConfig;