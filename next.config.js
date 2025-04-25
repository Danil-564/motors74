/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    // ⚠️ Игнорирование ошибок типов для сборки
    ignoreBuildErrors: true,
  },
  eslint: {
    // ⚠️ Игнорирование ошибок линтера для сборки
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['motors74.s3.amazonaws.com', 'motors74-images.s3.amazonaws.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  // Для работы с Render
  poweredByHeader: false,
  // Отключение строгого режима маршрутизации
  trailingSlash: false,
  // Устанавливаем порт для Render
  serverRuntimeConfig: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  // Публичная конфигурация
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://motors74.onrender.com',
  },
  // Для поддержки экспорта статических файлов
  output: 'standalone',
  // Для работы с модульной системой
  transpilePackages: [],
  // Передаем переменные окружения на клиент
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://motors74.onrender.com'
  }
}

module.exports = nextConfig 