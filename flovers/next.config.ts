import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  imagess: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
