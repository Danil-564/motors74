/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    // ⚠️ Опасно! Игнорирование ошибок типов для сборки
    ignoreBuildErrors: true,
  },
  eslint: {
    // ⚠️ Опасно! Игнорирование ошибок линтера для сборки
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['motors74.s3.amazonaws.com', 'motors74-images.s3.amazonaws.com'],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  // Для работы с Render
  poweredByHeader: false,
  // Устанавливаем порт для Render
  serverRuntimeConfig: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  // Для поддержки экспорта статических файлов
  output: 'standalone',
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  }
}

module.exports = nextConfig 