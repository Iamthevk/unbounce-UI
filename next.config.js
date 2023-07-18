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
          {
            protocol: 'https',
            hostname: 'd9hhrg4mnvzow.cloudfront.net',
            port: '',
            pathname: '/templates.unbounce.com/multor/**',
          },
        ],
      },
}

module.exports = nextConfig
