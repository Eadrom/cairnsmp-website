import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
});

const changelog = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!**/_template.md'],
    base: './src/content/changelog',
  }),
  schema: z.object({
    version: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const commands = defineCollection({
  loader: file('./src/data/commands.json'),
  schema: z.object({
    command: z.string(),
    description: z.string(),
    category: z.string(),
    aliases: z.array(z.string()).optional(),
    example: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const collections = { docs, changelog, commands };
