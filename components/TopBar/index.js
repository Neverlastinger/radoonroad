import { useState } from 'react';
import cn from 'classnames';
import useScroll from 'hooks/useScroll';
import styles from './index.module.scss';
import NextLink from 'components/NextLink';

const STICKY_THRESHOLD = 120;

export default function TopBar({ visibleOnPage }) {
  const [isHidden, setIsHidden] = useState(undefined);

  useScroll(({ scrollTop, isScrollingUp }) => {
    setIsHidden(scrollTop > STICKY_THRESHOLD && !isScrollingUp);
  });

  return (
    <div className={cn(styles.topBar, { [styles.hidden]: isHidden, [styles.visibleOnPage]: visibleOnPage })}>
      <NextLink href="/" className={styles.logoLink}>
        <img src="./favicon.png" alt="Home" className={styles.logo} />
      </NextLink>
    </div>
  );
}
