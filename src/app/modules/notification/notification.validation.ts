import { z } from 'zod';

const createNotificationValidationSchema = z.object({
  body: z.object({
    recipient: z.string().min(1, 'Recipient ID is required'),
    message: z
      .string()
      .min(1, 'Notification message is required')
      .max(500, 'Message cannot exceed 500 characters'),
    type: z.enum(['Upvote', 'Comment', 'Follow', 'ContentUpdate'], {
      errorMap: () => ({
        message:
          'Type must be one of Upvote, Comment, Follow, or ContentUpdate',
      }),
    }),
    link: z.string().url('Link must be a valid URL').optional(),
    isRead: z.boolean().default(false),
  }),
});

const updateNotificationValidationSchema =
  createNotificationValidationSchema.partial();

/* const updateNotificationValidationSchema = z.object({
  body: z.object({}),
}); */

export const NotificationValidations = {
  createNotificationValidationSchema,
  updateNotificationValidationSchema,
};
