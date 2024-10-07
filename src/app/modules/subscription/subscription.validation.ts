import { z } from 'zod';

const createSubscriptionValidationSchema = z.object({
  body: z.object({
    userId: z.string().min(1, 'User ID is required'),
    plan: z.enum(['basic', 'premium'], {
      errorMap: () => ({ message: 'Plan must be either "basic" or "premium"' }),
    }),
    startDate: z.string().transform((val) => new Date(val)),
    endDate: z.string().transform((val) => new Date(val)),
    paymentId: z.string().min(1, 'Payment ID is required'),
    status: z
      .enum(['active', 'expired', 'cancelled'])
      .optional()
      .default('active'),
  }),
});

const updateSubscriptionValidationSchema =
  createSubscriptionValidationSchema.partial();

/* const updateSubscriptionValidationSchema = z.object({
  body: z.object({}),
}); */

export const SubscriptionValidations = {
  createSubscriptionValidationSchema,
  updateSubscriptionValidationSchema,
};
