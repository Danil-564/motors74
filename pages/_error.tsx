import { NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface ErrorProps {
  statusCode: number;
  message?: string;
}

function Error({ statusCode, message }: ErrorProps) {
  const errorMessage = message || 
    statusCode === 404 
      ? 'Страница не найдена'
      : 'Произошла ошибка на сервере';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>{statusCode ? `Ошибка ${statusCode}` : 'Ошибка'} | Motors74</title>
      </Head>
      <div className="text-center p-8 bg-white shadow-md rounded-lg max-w-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">{statusCode || 'Ошибка'}</h1>
        <p className="text-xl text-gray-700 mb-6">{errorMessage}</p>
        <Link href="/" className="btn-primary">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error; 