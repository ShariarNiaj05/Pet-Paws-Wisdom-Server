import { z } from 'zod';

const createDemoValidationSchema = z.object({
  body: z.object({
    user: z.string().min(1, 'User ID is required'),
    post: z.string().min(1, 'Post ID is required'),
    content: z
      .string()
      .min(1, 'Comment content cannot be empty')
      .max(1000, 'Comment content cannot exceed 1000 characters'),
  }),
});

const updateDemoValidationSchema = z.object({
  body: z.object({}),
});

export const BidValidations = {
  createDemoValidationSchema,
  updateDemoValidationSchema,
};
