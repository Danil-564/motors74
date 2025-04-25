import mongoose from 'mongoose';
import { IBrand } from './Brand';

export interface IModel {
  _id?: string;
  name: string;
  slug: string;
  brand: mongoose.Types.ObjectId | IBrand;
  yearStart?: number;
  yearEnd?: number;
  bodyTypes?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const modelSchema = new mongoose.Schema<IModel>(
  {
    name: {
      type: String,
      required: [true, 'Пожалуйста, укажите название модели'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug обязателен'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: [true, 'Пожалуйста, укажите бренд'],
    },
    yearStart: {
      type: Number,
    },
    yearEnd: {
      type: Number,
    },
    bodyTypes: [
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

// Создание slug из названия перед сохранением
modelSchema.pre('validate', function(next) {
  if (this.name && !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

export default mongoose.models.Model || mongoose.model<IModel>('Model', modelSchema); 