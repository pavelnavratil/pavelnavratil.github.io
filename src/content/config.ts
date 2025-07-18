import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'

const czechBlogCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog/cs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dateFormatted: z.string(),
    pubDate: z.date(),
  })
});

const englishBlogCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog/en' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dateFormatted: z.string(),
    pubDate: z.date(),
  })
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dateFormatted: z.string(),
    pubDate: z.date(),
  })
});

export const collections = {
  'blog': blogCollection,
  'czech-posts': czechBlogCollection,
  'english-posts': englishBlogCollection
};