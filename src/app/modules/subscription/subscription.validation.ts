import { z } from 'zod';

const createSubscriptionValidationSchema = z.object({
  body: z.object({
    userId: z.string().min(1, 'User ID is required'), // Must be a valid ObjectId (validated in service layer)
    plan: z.enum(['basic', 'premium'], {
      errorMap: () => ({ message: 'Plan must be either "basic" or "premium"' }),
    }),
    startDate: z.string().transform((val) => new Date(val)), // Start date must be a valid date string
    endDate: z.string().transform((val) => new Date(val)), // End date must be a valid date string
    paymentId: z.string().min(1, 'Payment ID is required'), // Must be a valid ObjectId (validated in service layer)
    status: z
      .enum(['active', 'expired', 'cancelled'])
      .optional()
      .default('active'), // Defaults to active status
  }),
});

const updateSubscriptionValidationSchema = z.object({
  body: z.object({}),
});

export const SubscriptionValidations = {
  createSubscriptionValidationSchema,
  updateSubscriptionValidationSchema,
};
