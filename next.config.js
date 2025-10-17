/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",  
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
