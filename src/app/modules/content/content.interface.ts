import { Types } from 'mongoose';

export interface IContent {
  author: Types.ObjectId;
  title: string;
  body: string;
  category: Types.ObjectId;
  tags?: string[];
  isPremium: boolean;
  // type: 'Tip' | 'Story';
  createdAt?: Date;
  updatedAt?: Date;
}
