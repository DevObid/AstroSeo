import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const reviews = await getCollection('reviews', ({ data }) => !data.draft);
  const guides = await getCollection('guides', ({ data }) => !data.draft);

  const items = [
    ...reviews.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/reviews/${entry.id}/`,
      categories: [entry.data.category],
    })),
    ...guides.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/guides/${entry.id}/`,
      categories: [entry.data.category],
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}
