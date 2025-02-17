import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
  },
  output: 'export',
  basePath: '/KamruzzamanAsif.github.io',
};

export default nextConfig;
