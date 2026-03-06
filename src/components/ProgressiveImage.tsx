import { useState, useRef, useEffect } from "react";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
  onClick?: () => void;
}

/**
 * Zeigt ein Bild mit sanftem Fade-In wenn geladen.
 * Nutzt IntersectionObserver für echtes Lazy Loading.
 */
const ProgressiveImage = ({
  src,
  alt,
  className = "",
  style,
  loading = "lazy",
  onClick,
}: ProgressiveImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(loading === "eager");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading === "eager") return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={style} onClick={onClick}>
      {/* Blur placeholder background */}
      <div
        className="absolute inset-0 bg-muted"
        style={{
          opacity: loaded ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      />
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease-out",
            ...style,
          }}
        />
      )}
    </div>
  );
};

export default ProgressiveImage;
