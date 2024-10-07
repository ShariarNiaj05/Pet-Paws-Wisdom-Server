import mongoose, { Schema } from 'mongoose';
import { IDemo } from './payment.interface';

const demoSchema: Schema<IDemo> = new mongoose.Schema({});

export const Bid = mongoose.model<IDemo>('Demo', demoSchema);
