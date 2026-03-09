import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    config.devtool = 'source-map'; // 开启source map
    return config;
  },
};

export default nextConfig;
