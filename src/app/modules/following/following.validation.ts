import { z } from 'zod';

const createFollowingValidationSchema = z.object({
  body: z.object({
    userId: z.string().nonempty('User ID is required'),
  }),
});

const updateFollowingValidationSchema = z.object({
  body: z.object({}),
});

export const BidValidations = {
  createDemoValidationSchema,
  updateDemoValidationSchema,
};
