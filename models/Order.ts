import mongoose from 'mongoose';
import { IUser } from './User';

export interface IOrderItem {
  productId: mongoose.Types.ObjectId;
  productType: 'engine' | 'part';
  title: string;
  price: number;
  quantity: number;
}

export interface IOrderAddress {
  address: string;
  city: string;
  region: string;
  postalCode: string;
}

export interface IOrderCustomer {
  name: string;
  phone: string;
  email: string;
  userId?: mongoose.Types.ObjectId | IUser;
}

export interface IOrder {
  _id?: string;
  orderNumber: string;
  customer: IOrderCustomer;
  items: IOrderItem[];
  totalPrice: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: string;
  shippingAddress: IOrderAddress;
  deliveryMethod: string;
  trackingNumber?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new mongoose.Schema<IOrder>(
  {
    orderNumber: {
      type: String,
      required: true,
      unique: true,
    },
    customer: {
      name: {
        type: String,
        required: [true, 'Пожалуйста, укажите имя клиента'],
        trim: true,
      },
      phone: {
        type: String,
        required: [true, 'Пожалуйста, укажите телефон клиента'],
        trim: true,
      },
      email: {
        type: String,
        required: [true, 'Пожалуйста, укажите email клиента'],
        trim: true,
        lowercase: true,
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        productType: {
          type: String,
          enum: ['engine', 'part'],
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
          min: [0, 'Цена должна быть положительным числом'],
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Количество должно быть не менее 1'],
          default: 1,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Сумма заказа должна быть положительным числом'],
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      required: [true, 'Пожалуйста, укажите метод оплаты'],
    },
    shippingAddress: {
      address: {
        type: String,
        required: [true, 'Пожалуйста, укажите адрес доставки'],
        trim: true,
      },
      city: {
        type: String,
        required: [true, 'Пожалуйста, укажите город'],
        trim: true,
      },
      region: {
        type: String,
        required: [true, 'Пожалуйста, укажите область/регион'],
        trim: true,
      },
      postalCode: {
        type: String,
        required: [true, 'Пожалуйста, укажите почтовый индекс'],
        trim: true,
      },
    },
    deliveryMethod: {
      type: String,
      required: [true, 'Пожалуйста, укажите метод доставки'],
    },
    trackingNumber: {
      type: String,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Генерация номера заказа
orderSchema.pre('save', async function(next) {
  if (!this.orderNumber) {
    // Создаем номер заказа в формате: OM-YYYYMMDD-XXXX, где XXXX - случайное 4-значное число
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const randomPart = Math.floor(1000 + Math.random() * 9000); // 4-значное число между 1000 и 9999
    this.orderNumber = `OM-${year}${month}${day}-${randomPart}`;
  }
  next();
});

// Индексы для ускорения поиска
orderSchema.index({ orderNumber: 1 });
orderSchema.index({ 'customer.userId': 1 });
orderSchema.index({ status: 1 });
orderSchema.index({ createdAt: -1 });

export default mongoose.models.Order || mongoose.model<IOrder>('Order', orderSchema); 