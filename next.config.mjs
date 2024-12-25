module.exports = {
  // Set the output mode to 'standalone' for SSR
  output: 'standalone',

  // Enable React Strict Mode for better error handling (optional)
  reactStrictMode: true,

  // Modify Webpack configuration to handle dynamic imports more effectively
  webpack(config, { isServer }) {
    if (!isServer) {
      // If it's client-side code, you can safely import certain libraries here
      // Example: Ensure browser-specific code is only imported client-side
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }

    return config;
  },

  // Optionally add rewrites or redirects if needed for dynamic routing
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },

  // Enable the experimental features
  experimental: {
    appDir: true,
    outputStandalone: true, // Ensure the app is bundled as standalone (for SSR)
  },

  // Set the react-syntax highlighting options
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable the generation of static pages for dynamic routes or APIs
  async redirects() {
    return [
      {
        source: '/api/*',
        destination: '/api/*',
        permanent: false,
      },
    ];
  },
};
