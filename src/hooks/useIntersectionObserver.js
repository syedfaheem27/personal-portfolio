import { useEffect, useState } from "react";

export function useIntersectionObserver(imgRef) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -60px 0px ",
      threshold: 0.25,
    };
    function obsCallback(entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setIsIntersecting(true);

        observer.unobserve(entry.target);
      });
    }
    const observer = new IntersectionObserver(obsCallback, options);

    if (imgRef) observer.observe(imgRef.current);

    return () => {
      if (imgRef) observer.unobserve(imgRef.current);
    };
  }, []);

  return isIntersecting;
}
