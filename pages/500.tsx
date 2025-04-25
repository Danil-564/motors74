import Head from 'next/head';
import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Ошибка сервера | Motors74</title>
        <meta name="description" content="Произошла внутренняя ошибка сервера." />
      </Head>
      <div className="text-center p-8 bg-white shadow-md rounded-lg max-w-md">
        <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
        <p className="text-xl text-gray-700 mb-6">Внутренняя ошибка сервера</p>
        <p className="text-gray-600 mb-8">
          Извините, на нашем сервере произошла ошибка. Мы уже работаем над её устранением.
        </p>
        <Link href="/" className="btn-primary">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
} 