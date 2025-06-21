import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Science Stanley'),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['research', 'community', 'impact', 'technical']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.enum(['health', 'climate', 'education', 'community', 'food']),
    status: z.enum(['active', 'completed', 'planning']),
    description: z.string(),
    impact: z.string(),
    featured: z.boolean().default(false),
    thumbnail: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    links: z.object({
      website: z.string().url().optional(),
      github: z.string().url().optional(),
      paper: z.string().url().optional(),
      demo: z.string().url().optional(),
    }).optional(),
    metrics: z.record(z.string(), z.number()).optional(),
  }),
});

export const collections = { blog, projects };