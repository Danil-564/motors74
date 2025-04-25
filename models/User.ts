import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser {
  _id?: string;
  email: string;
  password: string;
  name: string;
  phone?: string;
  role: 'admin' | 'customer';
  createdAt: Date;
  updatedAt: Date;
}

interface UserMethods {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

type UserModel = mongoose.Model<IUser, {}, UserMethods>;

const userSchema = new mongoose.Schema<IUser, UserModel, UserMethods>(
  {
    email: {
      type: String,
      required: [true, 'Пожалуйста, укажите email'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Пожалуйста, укажите корректный email'],
    },
    password: {
      type: String,
      required: [true, 'Пожалуйста, укажите пароль'],
      minlength: [6, 'Пароль должен содержать минимум 6 символов'],
      select: false,
    },
    name: {
      type: String,
      required: [true, 'Пожалуйста, укажите имя'],
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ['admin', 'customer'],
      default: 'customer',
    },
  },
  {
    timestamps: true,
  }
);

// Хеширование пароля перед сохранением
userSchema.pre('save', async function (next: mongoose.CallbackWithoutResultAndOptionalError) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Метод сравнения паролей
userSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.User || mongoose.model<IUser, UserModel>('User', userSchema); 