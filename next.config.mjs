/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'wsrv.nl',
          pathname: '**'
      },
      {
          protocol: 'https',
          hostname: 'img.ophim.live',
          pathname: '**'
      }
      ]
      },
};

export default nextConfig;
