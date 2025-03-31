import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    localPatterns: [
      {
        pathname: "/assets/images/**",
        search: "",
      },
    ],
  },
  async redirects() {
    return [{ source: "/", destination: "/login", permanent: true }];
  },
};

export default nextConfig;
