import { useState, useEffect, RefObject } from 'react';

export function useOnScreen(ref: RefObject<HTMLElement>, rootMargin: string = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on intersection to allow reset on scroll out
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
        threshold: 0.1,
      }
    );

    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}