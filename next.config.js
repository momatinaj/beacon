/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/beacon',  // Replace with your repo name
    assetPrefix: '/beacon/',  // Replace with your repo name (with trailing slash)
    trailingSlash: true,      // Add this line
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig