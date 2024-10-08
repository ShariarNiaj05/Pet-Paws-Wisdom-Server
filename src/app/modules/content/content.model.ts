// src/modules/content/content.model.ts

import mongoose, { Schema } from 'mongoose';
import { IContent } from './content.interface';

const contentSchema = new Schema<IContent>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Content title is required'],
      trim: true,
      maxlength: [200, 'Content title cannot exceed 200 characters'],
    },
    body: {
      type: String,
      required: [true, 'Content body is required'],
      trim: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const ContentModel = mongoose.model<IContent>('Content', contentSchema);
