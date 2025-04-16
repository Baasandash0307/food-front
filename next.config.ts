import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
        protocol: "https"
      }
    ],
  },
}

export default nextConfig;
