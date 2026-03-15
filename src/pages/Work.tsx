import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { seriesData } from "@/data/series";

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
  const [searchParams] = useSearchParams();
  const activeFilter = searchParams.get("filter") || "Alle";

  const filteredSeries =
    activeFilter === "Alle"
      ? seriesData
      : seriesData.filter((s) => s.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="w-full">
        <div className={SHELL}>
          {/* Series grid — uniform 3-col */}
          <section className="pt-36 md:pt-48 pb-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]"
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
                      <div className="overflow-hidden relative aspect-[4/3]">
                        <img
                          src={series.cover}
                          alt={series.title}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-3">
                        <h3 className="text-[16px] md:text-[18px] font-medium text-foreground leading-snug">
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
