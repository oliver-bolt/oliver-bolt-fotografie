import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { seriesData, seriesCategories } from "@/data/series";
import type { Series } from "@/data/series";

const fade = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const SHELL = "max-w-[1600px] mx-auto px-10 md:px-14";

const FILTER_OPTIONS = ["ALL", ...seriesCategories] as const;
type FilterOption = (typeof FILTER_OPTIONS)[number];

function filterSeries(series: Series[], filter: FilterOption): Series[] {
  if (filter === "ALL") return series;
  return series.filter((s) => s.category === filter);
}

const Work = () => {
  const [searchParams] = useSearchParams();
  const paramFilter = searchParams.get("filter");

  const activeFilter: FilterOption =
    paramFilter && seriesCategories.includes(paramFilter as any)
      ? (paramFilter as FilterOption)
      : "ALL";

  const filteredSeries = filterSeries(seriesData, activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="w-full">
        <div className={SHELL}>
          <section className="pt-36 md:pt-48 pb-28">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fade}
              className="text-[22px] md:text-[32px] font-light text-foreground leading-snug mb-16 md:mb-20 max-w-full md:max-w-[50%]"
            >
              A parallel photographic practice across documentary, editorial and commissioned work.
            </motion.p>

            {/* Series grid — uniform 3-col */}
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
                    <Link to={`/photography/${series.id}`} className="block group">
                      <div className="overflow-hidden relative aspect-[4/3]">
                        <img
                          src={series.cover}
                          alt={series.title}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
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
                {filteredSeries.length === 0 && (
                  <p className="text-foreground/50 text-[14px] col-span-full">
                    No series in this category yet.
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

export default Work;
