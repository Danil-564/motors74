# Архитектура приложения Motors74

## Общая архитектура

Motors74 использует современную архитектуру на основе Next.js, который обеспечивает возможности как серверного (SSR), так и клиентского (CSR) рендеринга.

```
+-------------------+     +-------------------+    +-------------------+
|                   |     |                   |    |                   |
|  Client Browser   | <-> |  Next.js Server   | <->|  MongoDB Atlas    |
|                   |     |                   |    |                   |
+-------------------+     +-------------------+    +-------------------+
                               |
                               | 
                          +----v----+
                          |         |
                          | AWS S3  |
                          |         |
                          +---------+
```

## Архитектура базы данных MongoDB

### Коллекции

1. **users** - пользователи системы
2. **engines** - двигатели
3. **parts** - запчасти
4. **orders** - заказы
5. **categories** - категории товаров
6. **brands** - марки автомобилей
7. **models** - модели автомобилей
8. **contacts** - запросы от клиентов

### Схемы коллекций

#### User Schema
```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  name: String,
  phone: String,
  role: String, // 'admin', 'customer'
  createdAt: Date,
  updatedAt: Date
}
```

#### Engine Schema
```javascript
{
  _id: ObjectId,
  title: String,
  code: String, // Код двигателя
  brand: { type: ObjectId, ref: 'Brand' },
  model: { type: ObjectId, ref: 'Model' },
  yearFrom: Number,
  yearTo: Number,
  volume: Number, // Объем двигателя
  power: Number, // Мощность двигателя в л.с.
  fuelType: String, // Тип топлива: 'бензин', 'дизель', и т.д.
  condition: String, // Состояние: 'контрактный', 'б/у', и т.д.
  price: Number,
  discount: Number, // Скидка в процентах
  inStock: Boolean, 
  images: [String], // Массив URL изображений в AWS S3
  description: String,
  features: [String], // Особенности двигателя
  compatibility: [String], // Совместимость с другими моделями
  createdAt: Date,
  updatedAt: Date
}
```

#### Part Schema
```javascript
{
  _id: ObjectId,
  title: String,
  code: String, // Код запчасти
  category: { type: ObjectId, ref: 'Category' },
  brand: { type: ObjectId, ref: 'Brand' },
  models: [{ type: ObjectId, ref: 'Model' }], // Совместимые модели
  price: Number,
  discount: Number, // Скидка в процентах
  inStock: Boolean,
  images: [String], // Массив URL изображений в AWS S3
  description: String,
  specifications: Object, // Технические характеристики
  createdAt: Date,
  updatedAt: Date
}
```

#### Order Schema
```javascript
{
  _id: ObjectId,
  orderNumber: String,
  customer: {
    name: String,
    phone: String,
    email: String,
    userId: { type: ObjectId, ref: 'User', required: false }
  },
  items: [{
    productId: ObjectId,
    productType: String, // 'engine' или 'part'
    title: String,
    price: Number,
    quantity: Number
  }],
  totalPrice: Number,
  status: String, // 'pending', 'processing', 'shipped', 'delivered', 'cancelled'
  paymentMethod: String,
  shippingAddress: {
    address: String,
    city: String,
    region: String,
    postalCode: String
  },
  deliveryMethod: String,
  trackingNumber: String,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### Category Schema
```javascript
{
  _id: ObjectId,
  name: String,
  slug: String,
  parent: { type: ObjectId, ref: 'Category', required: false },
  description: String,
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### Brand Schema
```javascript
{
  _id: ObjectId,
  name: String,
  slug: String,
  description: String,
  logo: String,
  origin: String, // Страна происхождения
  createdAt: Date,
  updatedAt: Date
}
```

#### Model Schema
```javascript
{
  _id: ObjectId,
  name: String,
  slug: String,
  brand: { type: ObjectId, ref: 'Brand' },
  yearStart: Number, // Год начала производства
  yearEnd: Number, // Год окончания производства (null, если модель еще выпускается)
  bodyTypes: [String], // Типы кузова: 'седан', 'хэтчбек', и т.д.
  createdAt: Date,
  updatedAt: Date
}
```

#### Contact Schema
```javascript
{
  _id: ObjectId,
  name: String,
  phone: String,
  email: String,
  message: String,
  status: String, // 'new', 'processing', 'closed'
  createdAt: Date,
  updatedAt: Date
}
```

## API-интерфейс

API-интерфейс приложения организован следующим образом:

```
/api
├── auth           # Аутентификация и авторизация
│   ├── login
│   ├── logout
│   ├── register
│   └── profile
│
├── engines        # Двигатели
│   ├── [id]       # Получение/обновление/удаление конкретного двигателя
│   └── index      # Получение списка двигателей с фильтрацией
│
├── parts          # Запчасти
│   ├── [id]       # Получение/обновление/удаление конкретной запчасти
│   └── index      # Получение списка запчастей с фильтрацией
│
├── orders         # Заказы
│   ├── [id]       # Получение/обновление/удаление конкретного заказа
│   └── index      # Получение списка заказов
│
├── categories     # Категории
│   ├── [id]       # Получение/обновление/удаление конкретной категории
│   └── index      # Получение списка категорий
│
├── brands         # Бренды
│   ├── [id]       # Получение/обновление/удаление конкретного бренда
│   └── index      # Получение списка брендов
│
├── models         # Модели
│   ├── [id]       # Получение/обновление/удаление конкретной модели
│   └── index      # Получение списка моделей
│
└── contacts       # Запросы от клиентов
    ├── [id]       # Получение/обновление/удаление конкретного запроса
    └── index      # Получение списка запросов/создание нового запроса
```

## Структура административной панели

Административная панель разделена на следующие разделы:

1. **Дашборд** - общая статистика (заказы, продажи, популярные товары)
2. **Товары**
   - Двигатели - управление двигателями
   - Запчасти - управление запчастями
3. **Заказы** - управление заказами
4. **Каталог**
   - Категории - управление категориями
   - Бренды - управление брендами
   - Модели - управление моделями
5. **Клиенты** - управление пользователями
6. **Запросы** - управление запросами от клиентов
7. **Настройки** - настройки сайта и административной панели

## Интеграция с AWS S3

Для хранения изображений используется AWS S3:

1. Изображения загружаются через API на S3
2. URL сохраняются в базе данных
3. Изображения доставляются клиенту напрямую из S3

## Интеграция с Render

Деплой приложения осуществляется на Render:

1. Web Service для основного приложения
2. Database для MongoDB (или внешнее подключение к MongoDB Atlas)
3. Автоматический CI/CD из репозитория GitHub 