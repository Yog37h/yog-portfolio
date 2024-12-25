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
  // Add this option for handling dynamic imports for components
  // Example: globally disable SSR by setting ssr: false for specific pages or components in dynamic imports
  pageExtensions: ['tsx', 'ts', 'js', 'jsx'],
};
