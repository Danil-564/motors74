import mongoose from 'mongoose';
import { IBrand } from './Brand';
import { ICategory } from './Category';
import { IModel } from './Model';

export interface IPart {
  _id?: string;
  title: string;
  code: string;
  category: mongoose.Types.ObjectId | ICategory;
  brand: mongoose.Types.ObjectId | IBrand;
  models: (mongoose.Types.ObjectId | IModel)[];
  price: number;
  discount?: number;
  inStock: boolean;
  images: string[];
  description?: string;
  specifications?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const partSchema = new mongoose.Schema<IPart>(
  {
    title: {
      type: String,
      required: [true, 'Пожалуйста, укажите название запчасти'],
      trim: true,
    },
    code: {
      type: String,
      required: [true, 'Пожалуйста, укажите код запчасти'],
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Пожалуйста, укажите категорию'],
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: [true, 'Пожалуйста, укажите бренд'],
    },
    models: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Model',
      },
    ],
    price: {
      type: Number,
      required: [true, 'Пожалуйста, укажите цену'],
      min: [0, 'Цена должна быть положительным числом'],
    },
    discount: {
      type: Number,
      min: [0, 'Скидка должна быть положительным числом'],
      max: [100, 'Скидка не может быть больше 100%'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    images: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      trim: true,
    },
    specifications: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

// Индексы для ускорения поиска
partSchema.index({ category: 1 });
partSchema.index({ brand: 1 });
partSchema.index({ models: 1 });
partSchema.index({ code: 'text', title: 'text', description: 'text' });
partSchema.index({ price: 1 });

export default mongoose.models.Part || mongoose.model<IPart>('Part', partSchema); 