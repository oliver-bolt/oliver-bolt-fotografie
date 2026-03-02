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
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

// Varying aspect ratios for masonry feel
const aspects = [
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[2/3]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[2/3]",
  "aspect-[3/4]",
  "aspect-[4/5]",
];

const Portfolio = () => (
  <>
    <Navbar />
    <main className="pt-32 md:pt-40 pb-28 md:pb-36">
      <section className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
          Serien
        </h1>
        <p className="font-sans text-sm text-muted-foreground tracking-wide max-w-xl">
          Kuratierte Fotoserien — jedes Projekt erzählt eine eigene Geschichte.
        </p>
      </section>

      {/* Masonry-like grid */}
      <section className="px-6 md:px-12 lg:px-20 columns-1 md:columns-2 lg:columns-3 gap-8 md:gap-10">
        {seriesData.map((series, i) => (
          <motion.div
            key={series.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={i}
            className="mb-10 md:mb-12 break-inside-avoid"
          >
            <Link to={`/series/${series.id}`} className="group block">
              <div className="overflow-hidden">
                <img
                  src={series.cover}
                  alt={series.title}
                  className={`w-full ${aspects[i % aspects.length]} object-cover transition-transform duration-700 group-hover:scale-[1.03]`}
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-lg font-light text-foreground group-hover:opacity-70 transition-opacity">
                  {series.title}
                </h3>
                <p className="text-xs text-muted-foreground font-sans mt-1 tracking-wide">
                  {series.category} · {series.year} · {series.location}
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
