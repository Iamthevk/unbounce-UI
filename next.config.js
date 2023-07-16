/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'unbounce.com',
            port: '',
            pathname: '/wp-content/**',
          },
        ],
      },
}

module.exports = nextConfig
