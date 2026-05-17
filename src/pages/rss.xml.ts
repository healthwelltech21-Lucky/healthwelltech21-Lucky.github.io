import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  return rss({
    title: 'healthwelltech21',
    description: 'Slow living, clean choices, gentle wellness.',
    site: context.site!,
    items: posts
      .filter(post => !post.data.draft)
      .sort((a, b) => new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime())
      .map(post => ({
        title: post.data.title,
        pubDate: new Date(post.data.publishedDate),
        description: post.data.description,
        link: `/blog/${post.id}/`,
      })),
  });
}
