import mongoose, { Schema } from 'mongoose';

const demoSchema: Schema<> = new mongoose.Schema({});

export const Bid = mongoose.model<>('Bid', demoSchema);
