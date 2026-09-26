import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      toolName: z.string(),
      category: z.enum([
        'Writing',
        'Image Generation',
        'Coding',
        'Video',
        'Productivity',
        'Chatbots',
        'Audio',
        'Marketing',
      ]),
      pricing: z.string(),
      websiteUrl: z.string().url(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      pros: z.array(z.string()).default([]),
      cons: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      landingStyle: z.boolean().default(false),
      launchBanner: z.string().optional(),
      ctaLabel: z.string().optional(),
      pricingTiers: z
        .array(
          z.object({
            name: z.string(),
            price: z.string(),
          })
        )
        .default([]),
    }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum([
        'Writing',
        'Image Generation',
        'Coding',
        'Video',
        'Productivity',
        'Chatbots',
        'Audio',
        'Marketing',
      ]),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { reviews, guides };
