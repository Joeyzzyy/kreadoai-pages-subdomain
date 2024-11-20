/** @type {import('next').NextConfig} */

const DOMAIN = process.env.DOMAIN;

const isLocal = process.env.NODE_ENV === 'development';

const nextConfig = {
  images: {
    domains: isLocal ? [] : [DOMAIN],
    unoptimized: true,
  },
  async redirects() {
    return [];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;