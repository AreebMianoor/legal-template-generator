import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string(),
    category: z.string()
  })
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    content: z.string(),
    image: z.string().optional()
  })
});

export const collections = {
  'case-studies': caseStudies,
  testimonials: testimonials
};