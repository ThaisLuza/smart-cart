import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const LazyImage = ({
  src,
  alt,
  className,
  containerClassName,
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", containerClassName)}>
      {!isLoaded && (
        <div className="absolute inset-0 skeleton-shimmer bg-skeleton" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "lazy-image object-contain w-full h-full",
            isLoaded ? "loaded" : "loading",
            className
          )}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};