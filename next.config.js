/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
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
  output: 'standalone', // Fix experimental.outputStandalone
};

module.exports = {
  ...nextConfig,
  // Disable SSR by enabling static export
  output: 'export',
  trailingSlash: true,
};
