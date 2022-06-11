import { useCallback, useEffect, useState } from 'react';

/**
 * A custom hook to track scroll events.
 *
 * @param  {Function} callback: called when the user scrolls
 */
const useScroll = (callback) => {
  const [prevScrollTop, setPrevScrollTop] = useState(0);

  const onScroll = useCallback(() => {
    const { scrollTop } = document.documentElement;

    callback({
      scrollTop,
      isScrollingUp: prevScrollTop > scrollTop
    });
    setPrevScrollTop(scrollTop);
  }, [callback]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
};

export default useScroll;
