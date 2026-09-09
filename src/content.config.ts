import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).min(1).default(['Salesforce']),
  dateFormatted: z.string(),
  pubDate: z.date(),
});

const czechBlogCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog/cs' }),
  schema: blogSchema,
});

const englishBlogCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog/en' }),
  schema: blogSchema,
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: blogSchema,
});

export const collections = {
  blog: blogCollection,
  'czech-posts': czechBlogCollection,
  'english-posts': englishBlogCollection,
};
