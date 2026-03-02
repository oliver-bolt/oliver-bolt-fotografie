import { Link } from "react-router-dom";
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

const Portfolio = () => (
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

      {/* Vertical editorial list */}
      <section className="px-5 md:px-10 lg:px-16 max-w-[1240px]">
        <div className="space-y-24 md:space-y-32">
          {seriesData.map((series, i) => {
            const showPair = i % 3 === 2;

            return (
              <motion.div
                key={series.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fade}
              >
                {showPair ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <Link to={`/series/${series.id}`} className="group">
                      <img
                        src={series.cover}
                        alt={series.title}
                        className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </Link>
                    <img
                      src={series.images[0]?.src || series.cover}
                      alt={series.images[0]?.alt || series.title}
                      className="w-full aspect-[3/4] object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <Link to={`/series/${series.id}`} className="block group">
                    <img
                      src={series.cover}
                      alt={series.title}
                      className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </Link>
                )}

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
                    className="text-sm text-foreground hover:opacity-60 transition-opacity"
                  >
                    View Project →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Portfolio;
