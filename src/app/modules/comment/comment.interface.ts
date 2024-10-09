import { Types } from 'mongoose';

export interface IComment {
  user: Types.ObjectId;
  content: Types.ObjectId;
  comment: string;
  createdAt?: Date;
  updatedAt?: Date;
}
