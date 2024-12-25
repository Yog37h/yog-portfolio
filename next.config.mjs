// Corrected next.config.mjs
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
  // Disable SSR for all pages
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: '/404',
        permanent: false,
      },
    ];
  },
};
