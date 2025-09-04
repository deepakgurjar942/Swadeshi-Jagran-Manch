import { useEffect } from 'react';
import { useLenis } from '../context/LenisContext';

export const useSmoothScroll = () => {
  const lenis = useLenis();

  const scrollTo = (target, options = {}) => {
    if (lenis?.current) {
      lenis.current.scrollTo(target, options);
    }
  };

  const scrollToTop = () => {
    if (lenis?.current) {
      lenis.current.scrollTo(0, { duration: 1.5 });
    }
  };

  const scrollToBottom = () => {
    if (lenis?.current) {
      lenis.current.scrollTo('max', { duration: 1.5 });
    }
  };

  return { scrollTo, scrollToTop, scrollToBottom };
};