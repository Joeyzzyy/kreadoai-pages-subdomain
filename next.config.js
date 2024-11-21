/** @type {import('next').NextConfig} */

const nextConfig = {
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
      ],
    },
  ],
  transpilePackages: ['@ant-design/icons', 'antd'],
  experimental: {
    optimizeCss: true,
    scrollRestoration: false,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            antd: {
              name: 'antd',
              test: /[\\/]node_modules[\\/]antd[\\/]/,
              priority: 10,
            },
          },
        },
      };
    }
    return config;
  },
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
  },
};

module.exports = nextConfig;