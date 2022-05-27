import Page from 'components/Page';
import ArticleList from 'components/ArticleList';
import { fetchHomePageArticles } from 'fetch';
import Custom404 from './404';

export default function Home({ articles, errors }) {
  if (!articles || errors) {
    return <Custom404 errors={errors} />;
  }

  return (
    <Page>
      {/* <CoverPhoto
        url="https://images.ctfassets.net/cs8r2zcz4sk2/4NaNW4NhwSBFoy4hJnweXF/4f72dc4bb43ed8e6cf1bd6eba34310ef/Indonesia-cover.jpg"
        title="radoonroad cover"
      /> */}

      <ArticleList articles={articles} />
    </Page>
  );
}

export async function getServerSideProps() {
  const { articles, errors } = await fetchHomePageArticles();

  return {
    props: {
      articles,
      errors
    }
  };
}
