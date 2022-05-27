import styles from './index.module.scss';

export default function ArticleThumbnail({ slug, imgUrl, title, target = '_blank' }) {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={`/${slug}`} target={target} className={styles.thumbnail}>
      <img src={imgUrl} alt={title} />
      <div className={styles.text}>
        {title}
      </div>
    </a>
  );
}
