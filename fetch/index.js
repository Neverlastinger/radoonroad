import performContentfulRequest from './performContentfulRequest';
import articleBySlugQuery from './graphql/articleBySlug';

const fetchContentfulArticleBySlug = async ({ slug, preview }) => (
  performContentfulRequest({
    query: articleBySlugQuery(slug, preview),
    preview
  })
);

/**
 * Fetches an article by the given slug.
 *
 * @param {String} slug
 * @param {Boolean} preview: true to fetch the preview version of the article
 */
export const fetchArticleBySlug = async ({ slug, preview }) => {
  const { result } = await fetchContentfulArticleBySlug({ slug, preview });

  const { data, errors } = result;

  const article = data
    ? data.articleCollection.items[0]
    : null;

  if (article && article.tagsCollection) {
    article.tags = article.tagsCollection.items;
  }

  return {
    article: article || null, // nextjs cannot accept undefined values for static generation serialization, don't play smart by removing this code
    errors: errors || null
  };
};
