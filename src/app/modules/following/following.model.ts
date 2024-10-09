import mongoose, { Schema } from 'mongoose';
import { IFollowing } from './following.interface';

const followingSchema = new Schema<IFollowing>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps automatically
  },
);

export const FollowingModel = mongoose.model<IFollowing>(
  'Following',
  followingSchema,
);
