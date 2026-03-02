import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero.jpg";
import { seriesData } from "@/data/series";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: ease as unknown as [number, number, number, number] },
  }),
};

const featured = seriesData.slice(0, 3);

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-screen w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Dramatic landscape photography — lone figure on expansive beach"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-foreground/30" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-tight tracking-wide"
            >
              Curated Visual Series
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-sans text-sm md:text-base text-primary-foreground/80 mt-6 tracking-widest uppercase font-light"
            >
              Fine Art & Documentary Photography
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex gap-6 mt-12"
            >
              <Link
                to="/portfolio"
                className="px-8 py-3 border border-primary-foreground/60 text-primary-foreground text-xs tracking-widest uppercase font-sans hover:bg-primary-foreground hover:text-foreground transition-all duration-500"
              >
                Serien entdecken
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 text-primary-foreground/70 text-xs tracking-widest uppercase font-sans hover:text-primary-foreground transition-colors duration-300"
              >
                Über den Fotografen
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-3xl mx-auto text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="font-serif text-2xl md:text-3xl font-light leading-relaxed text-foreground"
          >
            Fotografie als bewusste Kuratierung. Jede Serie erzählt eine eigene
            Geschichte – mit Kontext, Haltung und einer klaren visuellen Sprache.
          </motion.p>
        </section>

        {/* Featured Series */}
        <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
          {featured.map((series, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <motion.div
                key={series.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={0}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 mb-24 md:mb-32 last:mb-0 items-center`}
              >
                <Link to={`/series/${series.id}`} className="w-full md:w-3/5 overflow-hidden group">
                  <img
                    src={series.cover}
                    alt={series.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </Link>
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans mb-4">
                    {series.year} — {series.location}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl font-light mb-4 text-foreground">
                    <Link to={`/series/${series.id}`} className="hover:opacity-70 transition-opacity">
                      {series.title}
                    </Link>
                  </h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                    {series.excerpt}
                  </p>
                  <Link
                    to={`/series/${series.id}`}
                    className="text-xs tracking-widest uppercase font-sans text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Serie ansehen →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-border text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 text-foreground">Alle Serien</h2>
            <Link
              to="/portfolio"
              className="inline-block px-10 py-4 border border-foreground text-foreground text-xs tracking-widest uppercase font-sans hover:bg-foreground hover:text-background transition-all duration-500"
            >
              Portfolio ansehen
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
