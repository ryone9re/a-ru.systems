/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
};

module.exports = nextConfig;
