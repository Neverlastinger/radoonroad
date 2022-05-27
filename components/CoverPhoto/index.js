import styles from './index.module.scss';

export default function CoverPhoto({ url, title }) {
  return (
    <div className={styles.coverPhoto}>
      <img src={url} alt={title} />
    </div>
  );
}
