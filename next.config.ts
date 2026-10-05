import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optional: prevents minor type errors from killing the build on Cloudflare
    ignoreBuildErrors: false,
  },
};

export default nextConfig;