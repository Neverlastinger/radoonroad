import styles from './index.module.scss';

export default function ArticleThumbnail({ slug, imgUrl, title }) {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={`/${slug}`} target="_blank" className={styles.thumbnail}>
      <img src={imgUrl} alt={title} />
      <div className={styles.text}>
        {title}
      </div>
    </a>
  );
}
