import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
    reports: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
    github: z.string().optional(),
    live: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
