import mongoose from 'mongoose';

export interface ICategory {
  _id?: string;
  name: string;
  slug: string;
  parent?: mongoose.Types.ObjectId | ICategory;
  description?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new mongoose.Schema<ICategory>(
  {
    name: {
      type: String,
      required: [true, 'Пожалуйста, укажите название категории'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug обязателен'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Создание slug из названия перед сохранением
categorySchema.pre('validate', function(next) {
  if (this.name && !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

// Индекс для поиска по родительской категории
categorySchema.index({ parent: 1 });

export default mongoose.models.Category || mongoose.model<ICategory>('Category', categorySchema); 