/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn2.thecatapi.com',    
          },

          {
            protocol: 'https',
            hostname: 'asianwiki.com',
          },
          {
            protocol: 'https',
            hostname: 'i.pinimg.com',
          },
          {
            protocol: 'https',
            hostname: 'id.pinterest.com',
          }
        ],
      },
};

export default nextConfig;
