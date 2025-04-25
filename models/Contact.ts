import mongoose from 'mongoose';

export interface IContact {
  _id?: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  status: 'new' | 'processing' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new mongoose.Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, 'Пожалуйста, укажите ваше имя'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Пожалуйста, укажите ваш телефон'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Пожалуйста, укажите ваш email'],
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Пожалуйста, укажите корректный email'],
    },
    message: {
      type: String,
      required: [true, 'Пожалуйста, укажите сообщение'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['new', 'processing', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

// Индекс для сортировки по дате создания (новые первыми)
contactSchema.index({ createdAt: -1 });
// Индекс для фильтрации по статусу
contactSchema.index({ status: 1 });

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', contactSchema); 