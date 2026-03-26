import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { filmsData } from "@/data/films";
import type { Film } from "@/data/films";

const fade = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const SHELL = "max-w-[1600px] mx-auto px-10 md:px-14";

const FILTER_OPTIONS = ["ALL", "IN PRODUCTION", "TV", "CINEMA"] as const;
type FilterOption = (typeof FILTER_OPTIONS)[number];

function filterFilms(films: Film[], filter: FilterOption): Film[] {
  if (filter === "ALL") return films;
  if (filter === "IN PRODUCTION") return films.filter((f) => f.status === "in-production");
  return films.filter((f) => f.tags.includes(filter));
}

function FilmCard({ film }: { film: Film }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fade}
    >
      <Link to={`/film/${film.id}`} className="block group">
        {/* Video embed */}
        <div className="relative w-full aspect-video bg-black/5 overflow-hidden">
          <iframe
            src={film.embedUrl}
            title={film.title}
            className="absolute inset-0 w-full h-full border-none pointer-events-none"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="mt-4">
          <h2 className="text-[18px] md:text-[22px] font-medium text-foreground leading-snug group-hover:underline underline-offset-4">
            {film.title}
          </h2>

          <p className="text-[14px] text-foreground/60 mt-1 leading-relaxed">
            {film.metaLine}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

const FilmPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("ALL");
  const filtered = filterFilms(filmsData, activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="w-full">
        <div className={SHELL}>
          <section className="pt-36 md:pt-48 pb-28">
            {/* Dropdown filter */}
            <div className="mb-10 md:mb-14 flex items-center gap-3">
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value as FilterOption)}
                className="bg-transparent border border-foreground/20 text-foreground text-[14px] px-3 py-2 pr-8 rounded-none appearance-none cursor-pointer focus:outline-none focus:border-foreground/50 transition-colors"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 8px center",
                }}
              >
                {FILTER_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Film grid — 2-col desktop, 1-col mobile */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-[18px] gap-y-16 md:gap-y-20"
              >
                {filtered.map((film) => (
                  <FilmCard key={film.id} film={film} />
                ))}
                {filtered.length === 0 && (
                  <p className="text-foreground/50 text-[14px] col-span-full">
                    No films in this category yet.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FilmPage;
