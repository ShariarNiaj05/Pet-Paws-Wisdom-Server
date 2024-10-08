import { Types } from 'mongoose';

export interface IContent {
  author: Types.ObjectId;
  title: string;
  body: string;
  category: Types.ObjectId;
  tags?: string[];
  isPremium: boolean;
  upvotes: number;
  downvotes: number;
  createdAt?: Date;
  updatedAt?: Date;
}
