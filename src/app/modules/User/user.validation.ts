import { z } from 'zod';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    role: z.enum(['user', 'admin']).optional(),
    profilePicture: z.string().url('Invalid URL').optional(),
    bio: z.string().optional(),
  }),
});

export const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(), // Updated to match schema
    email: z.string().email().optional(),
    password: z.string().optional(),
    role: z.enum(['admin', 'driver', 'customer']).optional(), // Updated to match schema
    img: z.string().optional(), // Updated to match schema
    rating: z.number().optional(), // Updated to match schema
    rents: z.array(z.string()).optional(), // Updated to match schema
  }),
});

export const UserValidations = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
