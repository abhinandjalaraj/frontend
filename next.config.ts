import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firstecommercebackend.onrender.com",
      },
    ],
  },
};

export default nextConfig;