import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

export const adminCreateSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const postSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  content: z.string().optional(),
  published: z.boolean(),
  pinned: z.boolean()
});

export const homeContentSchema = z.object({
  homeIntro: z.string().min(20).max(5000)
});
