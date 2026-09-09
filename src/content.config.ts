import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	tags: z.array(z.string()).min(1).default(["Salesforce"]),
	dateFormatted: z.string(),
	pubDate: z.date(),
});

const blogCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: blogSchema,
});

export const collections = {
	blog: blogCollection,
};
