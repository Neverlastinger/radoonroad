import NextLink from 'components/NextLink';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.item}>
        <NextLink href="/">home</NextLink>
      </div>

      <div className={styles.item}>
        <a href="https://instagram.com/radoonroad" target="_blank" rel="noreferrer">https://instagram.com/radoonroad</a>
      </div>
    </div>
  );
}
