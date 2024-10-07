import { z } from 'zod';

const createDemoValidationSchema = z.object({
  body: z.object({
    userId: z.string().min(1, 'User ID is required'),
    amount: z.number().min(0, 'Amount must be a positive number'),
    currency: z.string().min(1, 'Currency is required'),
    paymentMethod: z.enum(['Stripe', 'Aamarpay'], {
      errorMap: () => ({
        message: 'Payment method must be either "Stripe" or "Aamarpay"',
      }),
    }),
    status: z
      .enum(['pending', 'completed', 'failed'], {
        errorMap: () => ({
          message: 'Status must be either "pending", "completed", or "failed"',
        }),
      })
      .default('pending'),
    transactionId: z.string().optional(),
  }),
});

const updateDemoValidationSchema = z.object({
  body: z.object({}),
});

export const PaymentValidations = {
  createDemoValidationSchema,
  updateDemoValidationSchema,
};
