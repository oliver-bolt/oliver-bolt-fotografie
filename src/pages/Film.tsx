import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { filmsData } from "@/data/films";
import { resolveFilmAsset } from "@/data/filmAssets";
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

function filterFilms(films: Film[], filter: string): Film[] {
  if (!filter || filter === "All") return films;
  if (filter === "In Production") return films.filter((f) => f.status === "in-production");
  if (filter === "Television") return films.filter((f) => f.tags.includes("TV"));
  if (filter === "Cinema") return films.filter((f) => f.tags.includes("CINEMA") && f.status !== "in-production");
  return films;
}

function FilmCard({ film }: { film: Film }) {
  const stillIndex = film.coverStillIndex ?? 0;
  const coverStill = film.stills.length > 0 ? resolveFilmAsset(film.stills[stillIndex]?.src ?? film.stills[0].src) : undefined;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fade}
    >
      <Link to={`/film/${film.id}`} className="block group">
        {/* Thumbnail — selected still, 16:9 */}
        <div className="relative w-full aspect-[16/9] bg-neutral-200 overflow-hidden">
          {coverStill ? (
            <img
              src={coverStill}
              alt={film.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-neutral-400 text-xs select-none">{film.title}</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-3">
          <h2 className="text-[16px] md:text-[18px] font-medium text-foreground leading-snug group-hover:underline underline-offset-4">
            {film.title}
          </h2>

          <p className="text-[14px] text-foreground/60 mt-1">
            {film.metaLine}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

const FilmPage = () => {
  const [searchParams] = useSearchParams();
  const activeFilter = searchParams.get("filter") || "Alle";
  const filtered = filterFilms(filmsData, activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="w-full">
        <div className={SHELL}>
          <section className="pt-36 md:pt-48 pb-28">
            <motion.p
              key={activeFilter}
              initial="hidden"
              animate="visible"
              variants={fade}
              className="text-[22px] md:text-[32px] font-light text-foreground leading-snug mb-16 md:mb-20 max-w-full md:max-w-[50%]"
            >
              {activeFilter === "In Production"
                ? "Current and upcoming projects in development or production."
                : activeFilter === "Television"
                ? "Selected work for television, mainly across documentary and docudrama formats."
                : activeFilter === "Cinema"
                ? "Selected work in feature and short film production."
                : "Selected work across production, television and cinema."}
            </motion.p>

            {/* Film grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]"
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
