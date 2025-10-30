import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@tabler/icons-react', 'three', 'ogl'],
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // Bundle optimization
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      // Tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;

      // Code splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20,
          },
          // Common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
          // WebGL chunk
          webgl: {
            name: 'webgl',
            test: /[\\/]node_modules[\\/](three|ogl|postprocessing)[\\/]/,
            chunks: 'all',
            priority: 30,
          },
          // UI chunk
          ui: {
            name: 'ui',
            test: /[\\/]node_modules[\\/](@tabler|framer-motion)[\\/]/,
            chunks: 'all',
            priority: 25,
          },
        },
      };

      // Minification
      config.optimization.minimize = true;
    }

    // Module resolution optimizations
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, '.'),
    };

    // Performance optimizations
    config.performance = {
      hints: dev ? 'warning' : false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };

    return config;
  },

  // Headers for performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Output configuration
  output: 'standalone',

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },

  // PoweredByHeader
  poweredByHeader: false,

  // React strict mode
  reactStrictMode: true,

  // SWC minification
  swcMinify: true,

  // Trailing slash
  trailingSlash: false,

  // Base path (if needed)
  // basePath: '/hyperkit',

  // Asset prefix (if using CDN)
  // assetPrefix: 'https://cdn.example.com',

  // Experimental features
  experimental: {
    ...nextConfig.experimental,
    // Enable modern bundling
    esmExternals: true,
    // Enable SWC minification
    swcMinify: true,
    // Enable CSS optimization
    optimizeCss: true,
    // Enable package optimization
    optimizePackageImports: ['@tabler/icons-react', 'three', 'ogl', 'postprocessing'],
  },

  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Bundle analyzer (uncomment to analyze)
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // },

  // Custom webpack configuration for performance
  webpack: (config, { dev, isServer }) => {
    // Performance optimizations
    if (!dev) {
      // Tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;

      // Code splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 30,
        maxAsyncRequests: 30,
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20,
          },
          // Common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
          // WebGL chunk
          webgl: {
            name: 'webgl',
            test: /[\\/]node_modules[\\/](three|ogl|postprocessing)[\\/]/,
            chunks: 'all',
            priority: 30,
          },
          // UI chunk
          ui: {
            name: 'ui',
            test: /[\\/]node_modules[\\/](@tabler|framer-motion)[\\/]/,
            chunks: 'all',
            priority: 25,
          },
        },
      };

      // Minification
      config.optimization.minimize = true;
    }

    // Module resolution optimizations
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, '.'),
    };

    // Performance optimizations
    config.performance = {
      hints: dev ? 'warning' : false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };

    return config;
  },
};

export default nextConfig;

