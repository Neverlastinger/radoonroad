import Head from 'next/head';
import styles from './index.module.scss';
import { formatDate } from 'app';
import ContentfulRichText from 'components/ContentfulRichText';

export default function Article({ article }) {
  const canonicalUrl = `https://radoonroad.com/${article.slug}`;

  return (
    <div className={styles.article}>
      <Head>
        <title>{article.title} | radoonroad</title>
        {/* <meta name="description" content={article.seo.description} /> */}
        <meta name="keywords" content={article.tags && article.tags.map((tag) => tag.name).join(', ')} />

        <meta property="og:title" key="og:title" content={article.title} />
        <meta property="og:type" key="og:type" content="article" />
        <meta property="og:url" key="og:url" content={canonicalUrl} />
        {/* {openGraphImageUrl && (
          <meta property="og:image" key="og:image" content={openGraphImageUrl} />
        )} */}
        {/* <meta property="og:description" key="og:description" content={article.seo.description || article.content.subtitle} /> */}
        <meta property="article:published_time" key="article:published_time" content={article.sys.firstPublishedAt} />
        <meta property="article:modified_time" key="article:modified_time" content={article.sys.publishedAt} />
      </Head>

      <div className={styles.title}>
        <div className={styles.top}>
          {/* <Tags tags={article.tags} tagClassName={styles.tag} /> */}

          <div className={styles.date}>
            {article.content.publishDate
              ? formatDate(new Date(article.content.publishDate))
              : formatDate(new Date())}
          </div>
        </div>
        <h1 className={styles.text}>{article.title || 'preview.noTitle'}</h1>
      </div>

      <div className={styles.subtitle}>
        {article.content.subtitle}
      </div>

      {/* <div className={styles.image}>
        <ContentfulImage image={article.content.image} />
      </div> */}

      {article.content && (
        <ContentfulRichText
          text={article.content}
          className={styles.richText}
        />
      )}

      <div className={styles.bottomLine}>
        {/* <Tags tags={article.tags} className={styles.endArticleTags} tagClassName={styles.tag} /> */}

        {/* <SocialShareButtons
          canonicalUrl={canonicalUrl}
          title={article.title}
          summary={article.content.subtitle}
        /> */}
      </div>
    </div>
  );
}