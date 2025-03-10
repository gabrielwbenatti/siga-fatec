import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  async redirects() {
    return [{ source: "/", destination: "/login", permanent: true }];
  },
};

export default nextConfig;
