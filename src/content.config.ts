import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const posts = defineCollection({loader: glob({pattern: '**/*.md', base: './src/content/posts'}), schema: z.object({title:z.string(),description:z.string(),date:z.coerce.date(),category:z.string(),tags:z.array(z.string()),minutes:z.number(),featured:z.boolean().default(false),draft:z.boolean().default(false),art:z.string().default('terminal'),cover:z.string().optional(),demo:z.boolean().default(false)})});
const pages = defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/pages'}),schema:z.object({title:z.string(),eyebrow:z.string().default(''),description:z.string().default(''),buttonLabel:z.string().default(''),buttonHref:z.string().default('/yazilar/'),draft:z.boolean().default(false)})});
export const collections = {posts,pages};
