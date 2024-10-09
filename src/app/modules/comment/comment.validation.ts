import { z } from 'zod';

const createCommentValidationSchema = z.object({
  body: z.object({
    user: z.string().min(1, 'User ID is required'),
    content: z.string().min(1, 'Content ID is required'),
    comment: z
      .string()
      .min(1, 'Comment cannot be empty')
      .max(1000, 'Comment cannot exceed 1000 characters'),
  }),
});

const updateCommentValidationSchema = createCommentValidationSchema.partial();

/* const updateCommentValidationSchema = z.object({
  body: z.object({}),
}); */

export const CommentValidations = {
  createCommentValidationSchema,
  updateCommentValidationSchema,
};
