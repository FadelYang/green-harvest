import { useRef, useEffect } from "react";

export const useVideoAutoPlayback = (options: any) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const cb = (entries: any) => {
    const [entry] = entries;

    // @ts-ignore: Object is possibly 'null'.
    if (entry.isIntersecting) videoRef.current.play();
    // @ts-ignore: Object is possibly 'null'.
    else videoRef.current.pause();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, videoRef]);

  return [containerRef, videoRef]
};
