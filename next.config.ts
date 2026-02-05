import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No output: "export" — use Vercel server/Node so dynamic routes are built on-demand and avoid OOM.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
