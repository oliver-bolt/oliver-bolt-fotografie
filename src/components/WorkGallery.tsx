import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;

  /**
   * OPTIONAL (für bessere Crops später):
   * CSS object-position, z.B. "50% 35%" oder "40% 50%"
   */
  focus?: string;
}

interface WorkGalleryProps {
  images: GalleryImage[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/**
 * IMPORTANT
 * - Masonry via CSS columns => keine Grid-row Whitespaces
 * - 2 columns ALWAYS (mobile + desktop)
 * - Gutter überall identisch
 * - Keine forced aspect frames => weniger „falscher“ Crop
 */
const GUTTER = 18; // px – match Landing

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
      {/* Abstand Hero -> erste Bilder: pt-... */}
      <section className="pt-10 md:pt-14 pb-6">
        {/* Container wie Site-Width, damit links/rechts sauber sitzt */}
        <div className="max-w-[1600px] mx-auto px-4 md:px-10">
          <div
            style={{
              columns: 2, // ALWAYS 2 columns (mobile + desktop)
              columnGap: `${GUTTER}px`,
            }}
          >
            {images.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                style={{
                  breakInside: "avoid",
                  marginBottom: `${GUTTER}px`,
                }}
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="block w-full bg-transparent border-none p-0 cursor-pointer"
                  aria-label={`Open image ${i + 1}`}
                >
                  {/* 
                    Keine Frame-Aspect-Zwänge -> Bild darf natürlich wirken.
                    Trotzdem „Balboa clean“: overflow-hidden, object-fit cover.
                    Default focus leicht nach oben (50% 42%), damit Köpfe/Action eher drin bleiben.
                  */}
                  <div className="relative overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="block w-full h-auto"
                      style={{
                        // Wenn du später focus pro Bild gibst, wirkt’s sofort besser.
                        objectFit: "cover",
                        objectPosition: img.focus ?? "50% 42%",
                      }}
                    />
                  </div>
                </button>
              </motion.div>
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
