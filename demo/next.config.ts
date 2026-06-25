import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  outputFileTracingRoot: __dirname,
  // 只在生产环境（GitHub Pages）使用 basePath
  basePath: process.env.NODE_ENV === 'production' ? '/ai-first-administration' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
