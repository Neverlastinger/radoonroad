import { richText } from './query-constructs';

const articleBySlug = (slug, preview = false) => (
  `
  query {
    articleCollection (limit:1, preview:${preview}, where:{
      slug:"${slug}"
    }) {
      items {
        title
        slug
        sys {
          firstPublishedAt
          publishedAt
        }
        content {
          ${richText}
        }
        tagsCollection {
          items {
            name
            slug
          }
        }
      }
    }
  }
  `
);

export default articleBySlug;
