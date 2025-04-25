import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Проверяем состояние сервера
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  };

  try {
    res.status(200).json(healthcheck);
  } catch (error) {
    res.status(503).json({
      message: 'Healthcheck failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 