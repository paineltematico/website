import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // sharp (pré-visualizações /api/og) precisa das bibliotecas nativas no deploy
  serverExternalPackages: ['sharp'],
  outputFileTracingIncludes: {
    '/api/og/imovel/[slug]': ['./node_modules/@img/**/*', './node_modules/sharp/**/*'],
  },
  images: {
    remotePatterns: [
      {
        // Supabase Storage — all projects (*.supabase.co)
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

export default nextConfig
