import { useRef, useEffect } from "react";
import Hls from "hls.js";

export const useVideoAutoPlayback = (videoSrc: string, options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (videoRef.current) {
        if (entry.isIntersecting) videoRef.current.play();
        else videoRef.current.pause();
      }
    }, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, [options]);

  useEffect(() => {
    if (videoRef.current && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current?.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = videoSrc;
    }
  }, [videoSrc]);

  return [containerRef, videoRef] as const;
};
