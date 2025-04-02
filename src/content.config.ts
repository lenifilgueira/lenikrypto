import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const bitcoin101 = defineCollection({
	// Load Markdown and MDX files in the `src/content/bitcoin-101/` directory.
	loader: glob({ base: './src/content/bitcoin-101', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
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
  
