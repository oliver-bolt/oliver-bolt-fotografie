import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { seriesData, seriesCategories } from "@/data/series";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const categoryMap: Record<string, string> = {
  action: "Action",
  travel: "Travel",
  projects: "Projects",
};

const WorkCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [pastHero, setPastHero] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categoryLabel = category ? categoryMap[category.toLowerCase()] : null;

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Aggregate all images from projects in this category
  const matchingProjects = seriesData.filter(
    (s) => s.category === categoryLabel
  );
  const allImages = matchingProjects.flatMap((s) =>
    s.images.map((img) => ({ ...img, projectTitle: s.title }))
  );

  // Hero image: first project's cover
  const heroImage = matchingProjects[0]?.cover;

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
        {/* Hero with overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="relative w-full h-screen"
        >
          <img
            src={heroImage}
            alt={`${categoryLabel} — Hero`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-[1240px] px-5 md:px-10 lg:px-16">
              <h1 className="text-[26px] md:text-[30px] text-white font-medium">
                {categoryLabel}
              </h1>
              <p className="text-white text-sm mt-2 max-w-md opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image grid — no text, no titles */}
        <section className="px-5 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="max-w-[1240px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {allImages.map((img, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fade}
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="block w-full bg-transparent border-none p-0 cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-[4/3] object-cover"
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
