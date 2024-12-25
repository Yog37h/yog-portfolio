// next.config.mjs (assuming you're using ES modules)

import nextConfig from 'next/config'; // Assuming you're using `next/config`

const { publicRuntimeConfig } = nextConfig();

export default {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    outputStandalone: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
  // ... other configurations
};
