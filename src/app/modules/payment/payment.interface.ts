import { Types } from 'mongoose';

export interface IPayment {
  userId: Types.ObjectId;
  amount: number;
  currency: string;
  paymentMethod: 'Stripe' | 'Aamarpay';
  status: 'pending' | 'completed' | 'failed';
  transactionId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
