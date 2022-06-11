import { REVALIDATE_INTERVAL } from 'app';
import Article from 'components/Article';
import Page from 'components/Page';
import { fetchArticleBySlug, fetchHomePageArticles } from 'fetch';
import { useRouter } from 'next/router';
import Custom404 from 'pages/404';

function ArticlePage({ article, errors }) {
  const router = useRouter();

  if (router.isFallback) {
    return null;
  }

  if (!article || errors) {
    return <Custom404 errors={errors} />;
  }

  return (
    <Page>
      <Article article={article} />
    </Page>
  );
}

export async function getStaticProps({ params }) {
  const { article, errors } = await fetchArticleBySlug({
    slug: params.slug
  });

  return {
    props: {
      article,
      errors
    },
    revalidate: REVALIDATE_INTERVAL
  };
}

export async function getStaticPaths() {
  const { articles } = await fetchHomePageArticles();

  return {
    paths: articles ? articles.map((article) => ({
      params: { slug: article.slug }
    })) : [],
    fallback: true
  };
}

export default ArticlePage;
