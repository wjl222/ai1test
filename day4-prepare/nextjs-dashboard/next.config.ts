import type { NextConfig } from 'next';
import createMDX from '@next/mdx'


const nextConfig: NextConfig = {
  webpack(config) {
    config.devtool = 'source-map'; // 开启source map
    return config;
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
   extension: /\.(md|mdx)$/,
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)

