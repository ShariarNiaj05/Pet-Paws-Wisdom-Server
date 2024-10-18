import { z } from 'zod';

const createContentValidationSchema = z.object({
  body: z.object({
    author: z.string().min(1, 'Author ID is required'),
    title: z
      .string()
      .min(1, 'Title is required')
      .max(200, 'Title cannot exceed 200 characters'),
    body: z.string().min(1, 'Body content is required'),
    category: z.string().min(1, 'Category ID is required'),
    tags: z.array(z.string()).optional(),
    isPremium: z.boolean().default(false),
    upvotes: z.number().default(0),
    downvotes: z.number().default(0),
  }),
});

const updateContentValidationSchema = createContentValidationSchema.partial();
/* const updateContentValidationSchema = z.object({
  body: z.object({}),
}); */

export const ContentValidations = {
  createContentValidationSchema,
  updateContentValidationSchema,
};
