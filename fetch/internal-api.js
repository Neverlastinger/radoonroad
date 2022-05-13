import performRequest from './performRequest';

const BASE_URL = `${process.env.NEXT_PUBLIC_ORIGIN}/research/api`;

export const fetchArticle = async ({ slug, preview }) => (
  performRequest({
    baseUrl: BASE_URL,
    endpoint: 'article',
    searchParams: {
      slug,
      preview
    }
  })
);

export const search = async ({ text }) => (
  performRequest({
    baseUrl: BASE_URL,
    endpoint: 'search',
    searchParams: {
      text
    }
  })
);
