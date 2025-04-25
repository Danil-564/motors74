import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Страница не найдена | Motors74</title>
        <meta name="description" content="Страница, которую вы ищете, не найдена." />
      </Head>
      <div className="text-center p-8 bg-white shadow-md rounded-lg max-w-md">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Страница не найдена</p>
        <p className="text-gray-600 mb-8">
          Извините, страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Link href="/" className="btn-primary">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
} 