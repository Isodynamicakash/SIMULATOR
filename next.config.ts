import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Use current project dir as root for file tracing (fixes multiple-lockfile warning)
  outputFileTracingRoot: process.cwd(),
  experimental: {
    serverComponentsHmrCache: true,
  },
};

export default nextConfig;
