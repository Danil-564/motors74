import mongoose from 'mongoose';
import { IBrand } from './Brand';
import { IModel } from './Model';

export interface IEngine {
  _id?: string;
  title: string;
  code: string;
  brand: mongoose.Types.ObjectId | IBrand;
  model: mongoose.Types.ObjectId | IModel;
  yearFrom?: number;
  yearTo?: number;
  volume?: number;
  power?: number;
  fuelType?: string;
  condition: string;
  price: number;
  discount?: number;
  inStock: boolean;
  images: string[];
  description?: string;
  features?: string[];
  compatibility?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const engineSchema = new mongoose.Schema<IEngine>(
  {
    title: {
      type: String,
      required: [true, 'Пожалуйста, укажите название двигателя'],
      trim: true,
    },
    code: {
      type: String,
      required: [true, 'Пожалуйста, укажите код двигателя'],
      trim: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: [true, 'Пожалуйста, укажите бренд'],
    },
    model: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Model',
      required: [true, 'Пожалуйста, укажите модель'],
    },
    yearFrom: {
      type: Number,
    },
    yearTo: {
      type: Number,
    },
    volume: {
      type: Number,
    },
    power: {
      type: Number,
    },
    fuelType: {
      type: String,
      enum: ['бензин', 'дизель', 'гибрид', 'электро', 'газ'],
    },
    condition: {
      type: String,
      required: [true, 'Пожалуйста, укажите состояние двигателя'],
      enum: ['новый', 'контрактный', 'б/у'],
      default: 'контрактный',
    },
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
    features: [
      {
        type: String,
        trim: true,
      },
    ],
    compatibility: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Индексы для ускорения поиска
engineSchema.index({ brand: 1, model: 1 });
engineSchema.index({ code: 'text', title: 'text', description: 'text' });
engineSchema.index({ price: 1 });

export default mongoose.models.Engine || mongoose.model<IEngine>('Engine', engineSchema); 