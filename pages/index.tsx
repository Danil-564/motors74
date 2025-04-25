import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Motors74 - Автозапчасти и двигатели</title>
        <meta name="description" content="Продажа автозапчастей и контрактных двигателей" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`min-h-screen ${inter.className}`}>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Добро пожаловать в Motors74
          </h1>
          <p className="text-xl text-center mb-12">
            Мы предлагаем широкий выбор автозапчастей и контрактных двигателей
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Здесь будут компоненты с товарами */}
          </div>
        </div>
      </main>
    </>
  );
} 