import { z } from 'zod';

const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Category name is required')
      .max(100, 'Category name must not exceed 100 characters'),

    description: z.string().optional(),
  }),
});

const updateCategoryValidationSchema = z.object({
  body: z.object({}),
});

export const CategoryValidations = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
