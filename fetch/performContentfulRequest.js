import performRequest from './performRequest';

const performContentfulRequest = ({ query, preview }) => (
  performRequest({
    baseUrl: 'https://graphql.contentful.com',
    endpoint: `content/v1/spaces/${process.env.CONTENTFUL_SPACE}`,
    method: 'POST',
    bearer: preview
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN,
    body: {
      query
    }
  })
);

export default performContentfulRequest;
