import * as z from 'zod'

export const SignUpSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(50, 'Name cannot exceed 50 characters')
      .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters long')
      .max(30, 'Username cannot exceed 30 characters')
      .regex(
        /^[a-zA-Z0-9_]+$/,
        'Username can only container letters, numbers and underscores',
      ),
    email: z.email('Provide a valid email'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .max(100, 'Password cannot exceed 100 characters'),
    confirmPassword: z.string().min(1, 'Required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match",
    path: ['confirmPassword'],
  })

export const SignInSchema = z.object({
  email: z.email('Provide a valid email'),
  password: z.string().min(1, 'Password is required'),
})
