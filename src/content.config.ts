/* Content Collections（使う場合）
 * https://docs.astro.build/en/guides/content-collections/
 */

import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/data/news' }),
  schema: z.object({
    pubDate: z.coerce.date(),
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { news };
