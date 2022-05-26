import Article from 'components/Article';
import Page from 'components/Page';
import { fetchArticleBySlug } from 'fetch';
import Custom404 from 'pages/404';

function ArticlePreviewPage({ article, errors }) {
  if (!article || errors) {
    return <Custom404 errors={errors} />;
  }

  return (
    <Page>
      <Article article={article} />
    </Page>
  );
}

export async function getServerSideProps({ params }) {
  const { article, errors } = await fetchArticleBySlug({
    slug: params.slug,
    preview: true
  });

  return {
    props: {
      article,
      errors
    }
  };
}

export default ArticlePreviewPage;
