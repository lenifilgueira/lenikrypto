import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const bitcoin101 = defineCollection({
	loader: glob({ base: './src/content/bitcoin-101', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		idnumber: z.number(), //
	}),
});

const news = defineCollection({
	loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
	  title: z.string(),
	  description: z.string(),
	  pubDate: z.coerce.date(),
	  updatedDate: z.coerce.date().optional(),
	  heroImage: z.string().optional(),
	}),
  });
  
  export const collections = {
	'bitcoin-101': bitcoin101,
	'news': news,
  };
  
