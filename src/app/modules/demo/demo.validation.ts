import { z } from 'zod';

export const createDemoValidationSchema = z.object({
  body: z.object({}),
});

export const updateDemoValidationSchema = z.object({
  body: z.object({}),
});

export const BidValidations = {};
