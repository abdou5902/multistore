/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'multistore.oneentry.cloud',
            port: '',
            pathname: '**',
          },
        ],
      },
  }

export default nextConfig;
