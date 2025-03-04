/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/beacon',  // Should match your repo name
    assetPrefix: '/beacon/',  // Add trailing slash
    trailingSlash: true,      // Add this line
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig