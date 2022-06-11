import Footer from 'components/Footer';
import TopBar from 'components/TopBar';
import styles from './index.module.scss';

export default function Page({ children, visibleOnPageTopBar }) {
  return (
    <>
      <TopBar visibleOnPage={visibleOnPageTopBar} />
      <div className={styles.page}>
        {children}
      </div>
      <Footer />
    </>
  );
}
