/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/price',
        destination: 'https://hermes.pyth.network/v2/updates/price/latest', // API endpoint to proxy
      },
    ];
  },
  publicRuntimeConfig: {
    WC_PROJECT_ID: process.env.WC_PROJECT_ID,
  },
};

export default nextConfig;
