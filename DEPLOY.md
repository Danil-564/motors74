# Инструкции по деплою Motors74 на Render

## Предварительные требования

1. Аккаунт [Render](https://render.com)
2. Аккаунт [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
3. Аккаунт [AWS](https://aws.amazon.com) для S3
4. Репозиторий проекта на GitHub

## Настройка MongoDB Atlas

1. Создайте новый кластер в MongoDB Atlas
2. Настройте пользователя с правами на чтение и запись
3. Добавьте IP-адрес 0.0.0.0/0 в список разрешенных (для Render)
4. Получите строку подключения в формате: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/motors74`

## Настройка AWS S3

1. Создайте новый бакет в S3
2. Настройте политику доступа, разрешающую публичное чтение:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-bucket-name/*"
       }
     ]
   }
   ```
3. Включите CORS для бакета:
   ```json
   [
     {
       "AllowedHeaders": ["*"],
       "AllowedMethods": ["GET", "PUT", "POST", "DELETE", "HEAD"],
       "AllowedOrigins": ["*"],
       "ExposeHeaders": []
     }
   ]
   ```
4. Создайте пользователя IAM с доступом только к этому бакету
5. Получите Access Key ID и Secret Access Key для пользователя

## Настройка переменных окружения

Подготовьте следующие переменные окружения для Render:

```
NODE_ENV=production
PORT=8080
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/motors74
JWT_SECRET=<ваш_секретный_ключ_jwt>
AWS_ACCESS_KEY_ID=<ваш_aws_access_key>
AWS_SECRET_ACCESS_KEY=<ваш_aws_secret_key>
AWS_REGION=<регион_s3>
AWS_BUCKET_NAME=<имя_вашего_бакета>
NEXT_PUBLIC_API_URL=https://motors74.onrender.com/api
```

## Деплой на Render

### 1. Настройка Web Service

1. Войдите в аккаунт Render
2. Нажмите "New" > "Web Service"
3. Выберите ваш репозиторий GitHub
4. Заполните следующие поля:
   - **Name**: `motors74`
   - **Environment**: `Node`
   - **Region**: Выберите ближайший к вашим пользователям регион
   - **Branch**: `main` (или ваша ветка для продакшена)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. В секции "Advanced" добавьте все переменные окружения из списка выше
6. Нажмите "Create Web Service"

### 2. Настройка базы данных (если не используете MongoDB Atlas)

Render также предоставляет MongoDB, но для продакшена рекомендуется использовать MongoDB Atlas.

1. Нажмите "New" > "PostgreSQL" (поскольку Render не предлагает напрямую MongoDB)
2. Вместо этого используйте внешнюю базу данных MongoDB Atlas

### 3. Настройка автоматического деплоя

Render автоматически отслеживает изменения в репозитории GitHub и делает деплой при новых коммитах в выбранную ветку.

## Проверка деплоя

1. После завершения деплоя перейдите по URL вашего сервиса на Render
2. Проверьте главную страницу и работоспособность приложения
3. Проверьте административную панель, перейдя по URL `/admin`

## Мониторинг и логи

Render предоставляет панель мониторинга и логи для вашего сервиса:

1. Перейдите в ваш сервис на Render
2. Во вкладке "Logs" вы увидите логи приложения
3. Во вкладке "Metrics" вы увидите использование ресурсов

## Настройка кастомного домена

1. Приобретите домен у регистратора (например, Namecheap, GoDaddy)
2. В Render перейдите в "Settings" > "Custom Domain"
3. Добавьте ваш домен и следуйте инструкциям для настройки DNS

## Масштабирование

Render позволяет масштабировать ваше приложение по мере роста:

1. В Render перейдите в "Settings" > "Scaling"
2. Увеличьте количество инстансов или размер инстанса в зависимости от потребностей

## Резервное копирование данных

Регулярно делайте резервные копии базы данных:

1. В MongoDB Atlas настройте автоматические резервные копии
2. Можно также настроить скрипт для периодического резервного копирования и хранения в S3 