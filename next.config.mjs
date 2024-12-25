// next.config.js (or next.config.mjs if using ES modules)
/** @type {import('next').NextConfig} */
const nextConfig = {
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
  // Add this target configuration to disable SSR
  target: 'serverless', // or 'experimental-serverless-trace' for newer Next.js versions
};

module.exports = nextConfig;
