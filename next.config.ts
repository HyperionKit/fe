import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent server-side evaluation of Three.js related modules
  serverComponentsExternalPackages: [
    '@react-three/fiber',
    '@react-three/postprocessing',
    'three',
    'postprocessing'
  ],
  // Experimental options for React 19 compatibility
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Redirects for maintenance page
  async redirects() {
    return [
      {
        source: '/launch-app',
        destination: '/maintenance',
        permanent: false,
      },
      {
        source: '/ai',
        destination: '/maintenance',
        permanent: false,
      },
      {
        source: '/app',
        destination: '/maintenance',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
