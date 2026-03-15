import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { seriesData, seriesCategories } from "@/data/series";

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filters = ["Alle", ...seriesCategories];

  const filteredSeries =
    activeFilter === "Alle"
      ? seriesData
      : seriesData.filter((s) => s.category === activeFilter);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdownOpen]);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="w-full">
        <div className={SHELL}>
          {/* Filter dropdown */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            className="flex justify-end pt-36 md:pt-48 pb-10"
          >
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-[16px] tracking-wide bg-transparent border-none cursor-pointer text-foreground"
              >
                {activeFilter}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 bg-black z-50 min-w-[140px]">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => {
                        setActiveFilter(filter);
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left text-white text-[14px] tracking-wide bg-transparent border-none cursor-pointer px-4 py-2 hover:bg-white/10 transition-colors duration-150"
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Series grid — masonry */}
          <section className="pb-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ columns: "1", columnGap: "18px" }}
                className="md:[column-count:2]"
              >
                {filteredSeries.map((series) => (
                  <motion.div
                    key={series.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fade}
                    style={{ breakInside: "avoid", marginBottom: "18px" }}
                  >
                    <Link to={`/work/${series.id}`} className="block group">
                      <div className="overflow-hidden relative">
                        <img
                          src={series.cover}
                          alt={series.title}
                          loading="lazy"
                          decoding="async"
                          className="block w-full h-auto"
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
