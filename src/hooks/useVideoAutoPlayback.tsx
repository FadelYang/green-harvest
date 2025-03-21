import { useRef, useEffect } from "react";
import Hls from "hls.js";

export const useVideoAutoPlayback = (videoSrc: string, options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);

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
    if (!videoRef.current) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        autoStartLoad: true, 
        capLevelToPlayerSize: false, 
      });

      hlsRef.current = hls;

      hls.loadSource(videoSrc);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        hls.startLevel = -1;
      });
      
      hls.on(Hls.Events.LEVEL_SWITCHED, (_, data) => {
        console.log("Current Quality:", hls.levels[data.level].height + "p");
      });
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = videoSrc;
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [videoSrc]);

  return [containerRef, videoRef] as const;
};
