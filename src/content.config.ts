import { defineCollection, z } from 'astro:content';
import { readdir, readFile } from 'node:fs/promises';
import { basename, extname } from 'node:path';
import matter from 'gray-matter';

const blogDirectory = new URL('./data/blog/', import.meta.url);

const blog = defineCollection({
  loader: async () => {
    const files = (await readdir(blogDirectory)).filter((file) => ['.md', '.mdx'].includes(extname(file)));

    return Promise.all(files.map(async (file) => {
      const source = await readFile(new URL(file, blogDirectory), 'utf8');
      const { data, content } = matter(source);

      return {
        id: basename(file, extname(file)),
        ...data,
        content,
      };
    }));
  },
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    category: z.string(),
    readTime: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    type: z.enum(['post', 'page']).default('post'),
    content: z.string(),
  }),
});

export const collections = { blog };
