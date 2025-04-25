import mongoose from 'mongoose';

export interface IBrand {
  _id?: string;
  name: string;
  slug: string;
  description?: string;
  logo?: string;
  origin?: string;
  createdAt: Date;
  updatedAt: Date;
}

const brandSchema = new mongoose.Schema<IBrand>(
  {
    name: {
      type: String,
      required: [true, 'Пожалуйста, укажите название бренда'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug обязателен'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      trim: true,
    },
    logo: {
      type: String,
    },
    origin: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Создание slug из названия перед сохранением
brandSchema.pre('validate', function(next) {
  if (this.name && !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

export default mongoose.models.Brand || mongoose.model<IBrand>('Brand', brandSchema); 