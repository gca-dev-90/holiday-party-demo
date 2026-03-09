import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable webpack's filesystem cache in development to avoid
      // intermittent Windows pack-file rename failures under .next/cache.
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;
