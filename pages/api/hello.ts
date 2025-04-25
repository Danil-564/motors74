import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: string;
  name: string;
  version: string;
  timestamp: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    status: 'ok',
    name: 'Motors74 API',
    version: '1.0.0',
    timestamp: Date.now()
  });
} 