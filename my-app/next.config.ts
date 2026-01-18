import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Portfolio', 
  assetPrefix: '/Portfolio/',
}

module.exports = nextConfig

export default nextConfig;
