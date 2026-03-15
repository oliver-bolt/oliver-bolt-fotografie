import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FullBleedHero from "@/components/FullBleedHero";
import { seriesData, seriesCategories } from "@/data/series";
import travelHero from "@/assets/travel-hero.jpg";

const fade = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const SHELL = "max-w-[1600px] mx-auto px-10 md:px-14";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Alle");
  const [pastHero, setPastHero] = useState(false);

  const handlePastHero = useCallback((past: boolean) => {
    setPastHero(past);
  }, []);

  const filters = ["Alle", ...seriesCategories];

  const filteredSeries =
    activeFilter === "Alle"
      ? seriesData
      : seriesData.filter((s) => s.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar invertColors={!pastHero} />

      <main className="w-full">
        <FullBleedHero
          image={travelHero}
          categoryLabel="Work"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          onPastHero={handlePastHero}
        />

        <div className={SHELL}>
          {/* Filter buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            className="flex items-center gap-6 pt-12 pb-10"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`text-[16px] tracking-wide bg-transparent border-none cursor-pointer text-foreground transition-colors duration-200 ${
                  activeFilter === filter
                    ? "underline underline-offset-4"
                    : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Series grid */}
          <section className="pb-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[18px]"
              >
                {filteredSeries.map((series) => (
                  <motion.div
                    key={series.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fade}
                  >
                    <Link to={`/work/${series.id}`} className="block group">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={series.cover}
                          alt={series.title}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-3">
                        <h3 className="text-[18px] font-medium text-foreground leading-snug">
                          {series.title}
                        </h3>
                        <p className="text-[14px] text-foreground/60 mt-1">
                          {series.year}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
