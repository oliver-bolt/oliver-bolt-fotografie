import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero.jpg";
import { seriesData } from "@/data/series";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const featured = seriesData.slice(0, 3);

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Intro — asymmetric split */}
        <section className="px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-24 md:pb-36">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="w-full md:w-1/2 max-w-[650px] pt-4 md:pt-12"
            >
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
                Curated Visual Series
              </h1>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                Fotografie als bewusste Kuratierung. Jede Serie erzählt eine eigene
                Geschichte – mit Kontext, Haltung und einer klaren visuellen Sprache.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10">
                Fine Art & Documentary Photography
              </p>
              <div className="flex gap-8">
                <Link
                  to="/portfolio"
                  className="text-xs tracking-widest uppercase font-sans text-foreground hover:opacity-60 transition-opacity border-b border-foreground/30 hover:border-foreground pb-1"
                >
                  Serien entdecken
                </Link>
                <Link
                  to="/about"
                  className="text-xs tracking-widest uppercase font-sans text-muted-foreground hover:text-foreground transition-colors"
                >
                  Über den Fotografen
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full md:w-1/2"
            >
              <img
                src={heroImage}
                alt="Dramatic landscape photography — lone figure on expansive beach"
                className="w-full aspect-[3/4] object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        </section>

        {/* Featured Series */}
        <section className="px-6 md:px-12 lg:px-20 pb-28 md:pb-36">
          {featured.map((series, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <motion.div
                key={series.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-20 mb-28 md:mb-36 last:mb-0 items-start`}
              >
                <Link to={`/series/${series.id}`} className="w-full md:w-3/5 overflow-hidden group">
                  <img
                    src={series.cover}
                    alt={series.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </Link>
                <div className="w-full md:w-2/5 flex flex-col justify-center md:pt-8">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans mb-4">
                    {series.year} — {series.location}
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl font-light mb-4 text-foreground">
                    {series.title}
                  </h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                    {series.excerpt}
                  </p>
                  <Link
                    to={`/series/${series.id}`}
                    className="text-xs tracking-widest uppercase font-sans text-foreground hover:opacity-60 transition-opacity"
                  >
                    Serie ansehen →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
