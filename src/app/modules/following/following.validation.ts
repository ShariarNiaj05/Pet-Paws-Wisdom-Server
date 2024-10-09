import { z } from 'zod';

const createFollowingValidationSchema = z.object({
  body: z.object({
    userId: z.string().nonempty('User ID is required'),
    following: z
      .array(z.string().nonempty('Following user ID is required'))
      .optional(),
    followers: z
      .array(z.string().nonempty('Follower user ID is required'))
      .optional(),
  }),
});

const updateFollowingValidationSchema = z.object({
  body: z.object({}),
});

export const BidValidations = {
  createFollowingValidationSchema,
  updateFollowingValidationSchema,
};
