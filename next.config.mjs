/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
};

// Temporarily remove Sentry integration
export default nextConfig;
