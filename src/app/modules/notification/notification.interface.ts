import { Types } from 'mongoose';

export interface INotification {
  recipient: Types.ObjectId;
  message: string;
  type: 'Upvote' | 'Comment' | 'Follow' | 'ContentUpdate';
  link?: string;
  isRead: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
