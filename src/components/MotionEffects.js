import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MotionEffects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('motion-ready');
    return () => document.documentElement.classList.remove('motion-ready');
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default MotionEffects;
