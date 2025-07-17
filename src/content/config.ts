import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dateFormatted: z.string(),
  })
});

export const collections = {
  'blog': blogCollection
};