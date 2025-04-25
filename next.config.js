/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'motors74-bucket.s3.amazonaws.com',
      'motors74-bucket.s3.eu-central-1.amazonaws.com'
    ],
    formats: ['image/avif', 'image/webp'],
  },
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