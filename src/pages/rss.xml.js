import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const reviews = await getCollection('reviews', ({ data }) => !data.draft);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: reviews
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.pubDate,
        link: `/reviews/${entry.id}/`,
        categories: [entry.data.category],
      })),
    customData: `<language>en-us</language>`,
  });
}
