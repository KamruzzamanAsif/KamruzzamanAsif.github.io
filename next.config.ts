import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // This replaces next export
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
