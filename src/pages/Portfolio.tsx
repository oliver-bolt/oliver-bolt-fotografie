import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { seriesData } from "@/data/series";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const Portfolio = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activeCategory = params.get("category");

  const filtered = activeCategory
    ? seriesData.filter((s) => s.category === activeCategory)
    : seriesData;

  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24 md:pb-32">
        <section className="px-5 md:px-10 lg:px-16 mb-16 md:mb-20 max-w-[1240px]">
          <h1 className="text-[40px] md:text-[52px] font-medium text-foreground leading-[1.1] mb-4">
            Work
          </h1>
          <p className="text-muted-foreground max-w-lg">
            Selected projects and curated visual series.
          </p>
        </section>

        {/* Filter indicator */}
        {activeCategory && (
          <section className="px-5 md:px-10 lg:px-16 mb-10 max-w-[1240px]">
            <p className="text-sm text-muted-foreground">
              Filtered: <span className="text-foreground">{activeCategory}</span>
              {" · "}
              <Link
                to="/portfolio"
                className="hover:underline hover:text-foreground transition-colors"
              >
                Clear
              </Link>
            </p>
          </section>
        )}

        {/* Editorial vertical list */}
        <section className="px-5 md:px-10 lg:px-16 max-w-[1240px]">
          <div className="space-y-24 md:space-y-32">
            {filtered.map((series) => (
              <motion.div
                key={series.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fade}
              >
                <Link to={`/series/${series.id}`} className="block group">
                  <img
                    src={series.cover}
                    alt={series.title}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </Link>

                <div className="mt-6 max-w-xl">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    {series.category} · {series.year} · {series.location}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">
                    {series.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {series.excerpt}
                  </p>
                  <Link
                    to={`/series/${series.id}`}
                    className="text-sm text-foreground hover:underline transition-colors"
                  >
                    View Project →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
