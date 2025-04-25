import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Motors74 - Контрактные двигатели и автозапчасти</title>
        <meta name="description" content="Продажа контрактных двигателей и автозапчастей в Челябинске. Широкий выбор, гарантия качества, доставка по всей России." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">Motors74</h1>
            <p className="ml-2 text-sm text-gray-500 hidden md:block">Контрактные запчасти из Европы и Японии</p>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+79000000000" className="flex items-center text-lg font-medium">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              +7 (900) 000-00-00
            </a>
            <a href="https://wa.me/79000000000" className="text-green-500 hover:text-green-600">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 01-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885a9.865 9.865 0 017.021 2.91 9.788 9.788 0 012.909 6.99c-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"></path>
                </svg>
                WhatsApp
              </span>
            </a>
            <a href="mailto:info@motors74.ru" className="text-gray-700 hover:text-primary-600">
              info@motors74.ru
            </a>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <a href="tel:+79000000000" className="p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
            </a>
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center">
            <li><Link href="/catalog" className="block py-3 px-4 hover:bg-primary-700">Каталог</Link></li>
            <li><Link href="/about" className="block py-3 px-4 hover:bg-primary-700">О компании</Link></li>
            <li><Link href="/delivery" className="block py-3 px-4 hover:bg-primary-700">Доставка и оплата</Link></li>
            <li><Link href="/warranty" className="block py-3 px-4 hover:bg-primary-700">Гарантия и возврат</Link></li>
            <li><Link href="/contacts" className="block py-3 px-4 hover:bg-primary-700">Контакты</Link></li>
            <li><Link href="/reviews" className="block py-3 px-4 hover:bg-primary-700">Отзывы</Link></li>
          </ul>
        </div>
      </nav>

      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Контрактные двигатели и автозапчасти</h1>
                <p className="text-lg mb-6">
                  Компания Motors74 предлагает широкий выбор контрактных двигателей и автозапчастей из Европы и Японии. 
                  Мы гарантируем качество и надежность всех представленных товаров.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-bold mb-2">Гарантия качества</h3>
                    <p>На все контрактные двигатели предоставляется гарантия до 30 дней</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-bold mb-2">Доставка по России</h3>
                    <p>Отправляем транспортными компаниями в любой регион</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-bold mb-2">Большой выбор</h3>
                    <p>Более 1000 моделей двигателей и запчастей в наличии</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-bold mb-2">Профессиональная консультация</h3>
                    <p>Поможем подобрать запчасти для вашего автомобиля</p>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start">
                  <Link href="/catalog" className="btn-primary">
                    Перейти в каталог
                  </Link>
                  <a href="tel:+79000000000" className="btn-outline ml-4">
                    Позвонить нам
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/images/placeholder.svg" 
                  alt="Контрактный двигатель" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему стоит купить контрактный двигатель?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              <strong>Контрактный двигатель</strong> — это бывший в употреблении мотор, который был демонтирован с автомобиля в Европе или Японии. 
              Главное отличие от обычного б/у двигателя в том, что контрактные моторы имеют гораздо меньший износ и пробег.
            </p>
            
            <h3>Преимущества контрактных двигателей:</h3>
            
            <ul>
              <li><strong>Экономия средств</strong> — контрактный двигатель стоит значительно дешевле нового</li>
              <li><strong>Высокое качество</strong> — двигатели из Европы и Японии имеют небольшой пробег и хорошее техническое состояние</li>
              <li><strong>Быстрая замена</strong> — не нужно ждать поставки нового двигателя или проводить капитальный ремонт</li>
              <li><strong>Надежность</strong> — качественные контрактные двигатели прослужат вам еще долгие годы</li>
            </ul>
            
            <h3>Что нужно знать при покупке контрактного двигателя:</h3>
            
            <p>
              При выборе контрактного двигателя обратите внимание на:
            </p>
            
            <ul>
              <li><strong>Документы</strong> — все наши двигатели имеют необходимые документы и таможенное оформление</li>
              <li><strong>Соответствие модели</strong> — важно подобрать двигатель именно для вашей модели автомобиля</li>
              <li><strong>Гарантия</strong> — мы предоставляем гарантию на все контрактные двигатели</li>
              <li><strong>Техническое состояние</strong> — все двигатели проходят диагностику перед продажей</li>
            </ul>
            
            <h3>Где купить контрактный двигатель в Челябинске?</h3>
            
            <p>
              Компания <strong>Motors74</strong> специализируется на продаже контрактных двигателей и автозапчастей из Европы и Японии.
              Мы работаем напрямую с поставщиками, что позволяет нам предлагать лучшие цены и гарантировать качество товара.
            </p>
            
            <p>
              Наши специалисты помогут вам подобрать подходящий двигатель для вашего автомобиля, проконсультируют по всем вопросам и организуют доставку.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-4">Свяжитесь с нами для консультации:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span><a href="tel:+79000000000" className="hover:text-primary-600">+7 (900) 000-00-00</a></span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span><a href="mailto:info@motors74.ru" className="hover:text-primary-600">info@motors74.ru</a></span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>г. Челябинск, ул. Примерная, д. 74</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные категории</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/placeholder.svg" 
                alt="Двигатели" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Двигатели (ДВС)</h3>
                <p className="text-gray-700 mb-4">Большой выбор контрактных двигателей для иномарок из Европы и Японии</p>
                <Link href="/catalog/engines" className="btn-primary">Перейти в каталог</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/placeholder.svg" 
                alt="Коробки передач" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Коробки передач</h3>
                <p className="text-gray-700 mb-4">АКПП, МКПП, вариаторы и роботизированные КПП для различных марок авто</p>
                <Link href="/catalog/transmissions" className="btn-primary">Перейти в каталог</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/placeholder.svg" 
                alt="Запчасти для двигателя" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Запчасти для двигателя</h3>
                <p className="text-gray-700 mb-4">Головки блока, коленвалы, турбины, поршни и многие другие детали</p>
                <Link href="/catalog/engine-parts" className="btn-primary">Перейти в каталог</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">О компании</h4>
              <p className="mb-4">
                Motors74 — надежный поставщик контрактных двигателей и автозапчастей из Европы и Японии.
                Мы работаем с 2018 года и заслужили доверие сотен клиентов.
              </p>
              <div className="flex items-center">
                <a href="tel:+79000000000" className="flex items-center mr-4">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  +7 (900) 000-00-00
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Каталог</h4>
              <ul className="space-y-2">
                <li><Link href="/catalog/engines" className="hover:text-primary-400">Двигатели</Link></li>
                <li><Link href="/catalog/transmissions" className="hover:text-primary-400">Коробки передач</Link></li>
                <li><Link href="/catalog/engine-parts" className="hover:text-primary-400">Запчасти для двигателя</Link></li>
                <li><Link href="/catalog/body-parts" className="hover:text-primary-400">Кузовные запчасти</Link></li>
                <li><Link href="/catalog/electronics" className="hover:text-primary-400">Электрооборудование</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Информация</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-primary-400">О компании</Link></li>
                <li><Link href="/delivery" className="hover:text-primary-400">Доставка и оплата</Link></li>
                <li><Link href="/warranty" className="hover:text-primary-400">Гарантия и возврат</Link></li>
                <li><Link href="/contacts" className="hover:text-primary-400">Контакты</Link></li>
                <li><Link href="/reviews" className="hover:text-primary-400">Отзывы</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  г. Челябинск, ул. Примерная, д. 74
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  +7 (900) 000-00-00
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  info@motors74.ru
                </li>
                <li>
                  <p className="text-gray-400">Пн-Вс: с 9:00 до 20:00</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-center text-gray-400">
              © 2023 Motors74. Все права защищены. Информация на сайте не является публичной офертой.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
} 