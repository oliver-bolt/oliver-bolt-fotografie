import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  focus?: string;
}

interface WorkGalleryProps {
  images: GalleryImage[];
}

const GUTTER = 18;

const WorkGallery = ({ images }: WorkGalleryProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % images.length);
  }, [lightboxIndex, images.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <>
      <section className="pt-10 md:pt-14 pb-6">
        <div className="max-w-[1600px] mx-auto px-10 md:px-14">
          <div
            className="grid grid-cols-2"
            style={{ gap: `${GUTTER}px` }}
          >
            {/* Split images into two columns for masonry-like layout */}
            {[0, 1].map((col) => (
              <div key={col} className="flex flex-col" style={{ gap: `${GUTTER}px` }}>
                {images
                  .filter((_, i) => i % 2 === col)
                  .map((img, idx) => {
                    const originalIndex = idx * 2 + col;
                    return (
                      <button
                        key={`${img.src}-${originalIndex}`}
                        onClick={() => openLightbox(originalIndex)}
                        className="block w-full bg-transparent border-none p-0 cursor-pointer"
                        aria-label={`Open image ${originalIndex + 1}`}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.alt}
                            loading={originalIndex < 6 ? "eager" : "lazy"}
                            decoding={originalIndex < 6 ? "sync" : "async"}
                            {...(originalIndex < 2 ? { fetchPriority: "high" as const } : {})}
                            className="block w-full h-auto"
                            style={{
                              objectFit: "cover",
                              objectPosition: img.focus ?? "50% 42%",
                            }}
                          />
                        </div>
                      </button>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && images[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-5 right-5 text-white bg-transparent border-none cursor-pointer z-10"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 text-white bg-transparent border-none cursor-pointer z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>

            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 text-white bg-transparent border-none cursor-pointer z-10"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkGallery;
