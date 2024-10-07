import { Types } from 'mongoose';

export interface ISubscription {
  userId: Types.ObjectId;
  plan: 'basic' | 'premium';
  startDate: Date;
  endDate: Date;
  status: 'active' | 'expired' | 'cancelled';
  paymentId: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
