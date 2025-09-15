/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/ipen-rln",  
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
