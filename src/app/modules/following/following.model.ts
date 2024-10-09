import mongoose, { Schema } from 'mongoose';
import { IDemo } from './following.interface';

const demoSchema: Schema<IDemo> = new mongoose.Schema({});

export const Bid = mongoose.model<IDemo>('Demo', demoSchema);
