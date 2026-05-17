import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Clean Beauty', 'Gentle Wellness', 'Organic Pantry', 'Endo-Friendly Living', 'Slow Living', 'Smart Home']),
    publishedDate: z.string(),
    updatedDate: z.string().optional(),
    heroImage: z.string(),
    heroAlt: z.string(),
    rating: z.number().min(1).max(5).optional(),
    readingTime: z.number(),
    pillar: z.boolean().default(false),
    draft: z.boolean().default(false),
    keywords: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
