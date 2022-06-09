import ArticleThumbnail from 'components/ArticleThumbnail';
import styles from './index.module.scss';

export default function ArticleList({ articles }) {
  return (
    <div className={styles.articleList}>
      {articles.map((article) => (
        <ArticleThumbnail
          key={article.slug}
          title={article.title}
          slug={article.slug}
          imgUrl={article.coverPhoto.url}
          target="_self"
        />
      ))}
    </div>
  );
}
