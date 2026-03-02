import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { seriesData, seriesCategories, categoryHeroes } from "@/data/series";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categoryMap: Record<string, string> = {
  action: "Action",
  travel: "Travel",
  projects: "Projects",
};

const WorkCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [pastHero, setPastHero] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const categoryLabel = category ? categoryMap[category.toLowerCase()] : null;

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setPastHero(rect.bottom <= 64);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const matchingProjects = seriesData.filter(
    (s) => s.category === categoryLabel
  );
  const allImages = matchingProjects.flatMap((s) =>
    s.images.map((img) => ({ ...img, projectTitle: s.title }))
  );

  const heroImage = categoryHeroes[categoryLabel as keyof typeof categoryHeroes] || matchingProjects[0]?.cover;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % allImages.length);
    }
  }, [lightboxIndex, allImages.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length);
    }
  }, [lightboxIndex, allImages.length]);

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

  if (!categoryLabel || !seriesCategories.includes(categoryLabel as any)) {
    return <Navigate to="/" replace />;
  }

  if (matchingProjects.length === 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar invertColors={!pastHero} />
      <main>
        {/* Hero — full-bleed, fixed height, cover crop */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="relative w-full"
          style={{ height: "clamp(360px, 65vh, 760px)" }}
        >
          <img
            src={heroImage}
            alt={`${categoryLabel} — Hero`}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Subtle gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          {/* Overlay — vertically centered, offset from left */}
          <div
            className="absolute left-0 right-0"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <div className="px-5 md:px-[12vw]">
              <p className="text-[20px] md:text-[26px] font-medium text-white leading-relaxed max-w-[440px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Masonry 2-column image grid — no text, no titles */}
        <section className="px-3 md:px-[5vw] py-6 md:py-10">
          <style>{`
            @media (min-width: 768px) {
              .masonry-grid {
                columns: 2 !important;
              }
            }
          `}</style>
          <div
            className="masonry-grid"
            style={{
              columns: "1",
              columnGap: "12px",
            }}
          >
            {allImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ breakInside: "avoid", marginBottom: "12px" }}
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="block w-full bg-transparent border-none p-0 cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && allImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-5 right-5 text-white bg-transparent border-none cursor-pointer z-10"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 text-white bg-transparent border-none cursor-pointer z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>

            <img
              src={allImages[lightboxIndex].src}
              alt={allImages[lightboxIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
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

export default WorkCategory;
