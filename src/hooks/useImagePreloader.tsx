import { useEffect, useState, useRef } from "react";

function preloadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = img.onabort = () => reject(new Error(`Failed to load: ${src}`));
    img.src = src;
  });
}

export default function useImagePreloader(imagelist: string[]) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const isMounted = useRef(true); // Track component mount state

  useEffect(() => {
    isMounted.current = true;

    async function preloadImages() {
      try {
        await Promise.allSettled(imagelist.map(preloadImage)); // Ensures all images attempt loading
        if (isMounted.current) {
          setImagesPreloaded(true);
        }
      } catch (error) {
        console.error("Error preloading images", error);
      }
    }

    preloadImages();

    return () => {
      isMounted.current = false; // Prevent state updates if unmounted
    };
  }, [imagelist]);

  return { imagesPreloaded };
}
