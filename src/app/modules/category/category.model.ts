import mongoose, { Schema } from 'mongoose';

const categorySchema: Schema<IDemo> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const CategoryModel = mongoose.model<IDemo>('category', categorySchema);
