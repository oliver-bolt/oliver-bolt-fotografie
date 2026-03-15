import { motion } from "framer-motion";
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

function FilmCard({ film }: { film: Film }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fade}
    >
      {/* Video embed */}
      <div className="relative w-full aspect-video bg-black/5 overflow-hidden">
        <iframe
          src={film.embedUrl}
          title={film.title}
          className="absolute inset-0 w-full h-full border-none"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="mt-4">
        <h2 className="text-[18px] md:text-[22px] font-medium text-foreground leading-snug">
          {film.title}
        </h2>

        <p className="text-[14px] text-foreground/60 mt-1 leading-relaxed">
          {film.format} · {film.broadcaster} · {film.year} · {film.duration}
        </p>

        {/* Credits */}
        <dl className="mt-3 space-y-[2px]">
          {film.credits.map((credit) => (
            <div key={credit.label} className="flex gap-2 text-[13px] leading-relaxed">
              <dt className="text-foreground/50 shrink-0">{credit.label}</dt>
              <dd className="text-foreground/80">{credit.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
}

const FilmPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="w-full">
        <div className={SHELL}>
          {/* Film grid — 2-col desktop, 1-col mobile */}
          <section className="pt-36 md:pt-48 pb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[18px] gap-y-16 md:gap-y-20">
              {filmsData.map((film) => (
                <FilmCard key={film.id} film={film} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FilmPage;
