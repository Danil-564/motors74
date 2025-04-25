import mongoose from 'mongoose';

// Глобальная переменная для хранения подключения
let cached: any = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// URI для подключения к MongoDB
const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local or in your deployment environment'
  );
}

/**
 * Функция для подключения к MongoDB с использованием кэширования соединения
 */
async function dbConnect() {
  // Если соединение уже установлено, возвращаем его
  if (cached.conn) {
    return cached.conn;
  }

  // Если соединение в процессе установки, ждем
  if (!cached.promise) {
    // Настройки для MongoDB
    const opts = {
      bufferCommands: false,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    };

    // Устанавливаем соединение
    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log('Connected to MongoDB');
        return mongooseInstance;
      })
      .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        throw err;
      });
  }

  try {
    // Ожидаем установку соединения
    cached.conn = await cached.promise;
  } catch (e) {
    // В случае ошибки сбрасываем обещание
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect; 