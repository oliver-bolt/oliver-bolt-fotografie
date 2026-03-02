import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { seriesData } from "@/data/series";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Portfolio = () => (
  <>
    <Navbar />
    <main className="pt-28 pb-24">
      <section className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
        <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-4">Serien</h1>
        <p className="font-sans text-sm text-muted-foreground tracking-wide max-w-xl">
          Kuratierte Fotoserien — jedes Projekt erzählt eine eigene Geschichte mit Kontext und fotografischer Haltung.
        </p>
      </section>

      <section className="px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {seriesData.map((series, i) => (
          <motion.div
            key={series.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={i}
          >
            <Link to={`/series/${series.id}`} className="group block">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={series.cover}
                  alt={series.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs tracking-widest uppercase text-primary-foreground/70 font-sans mb-1">
                      {series.year} — {series.location}
                    </p>
                    <h2 className="font-serif text-2xl font-light text-primary-foreground">
                      {series.title}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-lg font-light text-foreground">{series.title}</h3>
                <p className="text-xs text-muted-foreground font-sans mt-1">
                  {series.category} · {series.year}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
    <Footer />
  </>
);

export default Portfolio;
