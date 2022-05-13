import styles from './index.module.scss';

export default function Page({ children }) {
  return (
    <div className={styles.page}>
      {children}
    </div>
  );
}
