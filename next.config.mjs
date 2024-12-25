// Correct syntax for ES Module (next.config.mjs)
export default {
  // Your Next.js configuration goes here
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
};
