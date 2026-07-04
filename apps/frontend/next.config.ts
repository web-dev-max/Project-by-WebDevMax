import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Konva использует canvas API, нужно чтобы работал на сервере при сборке
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }]
    return config
  },

  // Прокси на бэкенд (Nest.js), чтобы не мучиться с CORS при разработке
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*',
      },
    ]
  },
}

export default nextConfig