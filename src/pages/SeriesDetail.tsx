import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { seriesData } from "@/data/series";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const SeriesDetail = () => {
  const { id } = useParams<{ id: string }>();
  const series = seriesData.find((s) => s.id === id);

  if (!series) return <NotFound />;

  return (
    <>
      <Navbar />
      <main className="pt-32 md:pt-40 pb-28 md:pb-36">
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-20 mb-10 md:mb-14 max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans mb-4">
              {series.year} · {series.location} · {series.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              {series.title}
            </h1>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {series.description}
            </p>
          </motion.div>
        </section>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 md:mb-20"
        >
          <img
            src={series.cover}
            alt={`${series.title} — Hero`}
            className="w-full aspect-[21/9] object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Gallery — mixed layouts */}
        <section className="px-6 md:px-12 lg:px-20 mb-20 md:mb-28">
          <div className="space-y-6 md:space-y-8">
            {series.images.map((img, i) => {
              // Create rhythm: full, 2-col, 2-col, full, 3-col...
              const pattern = i % 5;
              
              if (pattern === 0 || pattern === 3) {
                // Full width
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-[16/9] object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                );
              }
              
              // 2-column pair
              if (pattern === 1) {
                const next = series.images[i + 1];
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-[4/5] object-cover"
                      loading="lazy"
                    />
                    {next && (
                      <img
                        src={next.src}
                        alt={next.alt}
                        className="w-full aspect-[4/5] object-cover"
                        loading="lazy"
                      />
                    )}
                  </motion.div>
                );
              }
              
              // Skip index already rendered in pair
              if (pattern === 2) return null;
              
              // 3-column
              if (pattern === 4) {
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-[3/2] object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                );
              }
              
              return null;
            })}
          </div>
        </section>

        {/* Background — essay style */}
        <section className="px-6 md:px-12 lg:px-20 mb-20 md:mb-28 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-xl md:text-2xl font-light text-foreground mb-6">Hintergrund</h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10">
              {series.background}
            </p>

            <h3 className="font-serif text-lg font-light text-foreground mb-4">Technischer Ansatz</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {series.technical}
            </p>
          </motion.div>
        </section>

        {/* Quote — subtle */}
        {series.quote && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="px-6 md:px-12 lg:px-20 py-16 md:py-20 border-t border-border mb-20 md:mb-28"
          >
            <blockquote className="max-w-xl">
              <p className="font-serif text-lg md:text-xl font-light italic text-muted-foreground leading-relaxed">
                „{series.quote}"
              </p>
            </blockquote>
          </motion.section>
        )}

        {/* Back link */}
        <section className="px-6 md:px-12 lg:px-20">
          <Link
            to="/portfolio"
            className="text-xs tracking-widest uppercase font-sans text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Zurück zu allen Serien
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SeriesDetail;
