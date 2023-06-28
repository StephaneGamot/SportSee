// next.config.js

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/user/:id/average-sessions',
          destination: '/user/:id',
          permanent: true,
        },
        {
          source: '/user/:id/activity',
          destination: '/user/:id',
          permanent: true,
        },
        {
          source: '/user/:id/performance',
          destination: '/user/:id',
          permanent: true,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  