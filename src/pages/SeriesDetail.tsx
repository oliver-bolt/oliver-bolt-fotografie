import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { seriesData } from "@/data/series";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
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
      <main className="pt-28 pb-24">
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-20 mb-12 md:mb-16 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-4">
              {series.title}
            </h1>
            <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
              {series.year} · {series.location} · {series.category}
            </p>
          </motion.div>
        </section>

        {/* Intro text */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24 max-w-3xl"
        >
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
            {series.description}
          </p>
        </motion.section>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24"
        >
          <img
            src={series.cover}
            alt={`${series.title} — Hero`}
            className="w-full aspect-[21/9] object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Gallery */}
        <section className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {series.images.map((img, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className={img.layout === "full" ? "md:col-span-2" : ""}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover ${img.layout === "full" ? "aspect-[16/9]" : "aspect-[4/5]"}`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Background */}
        <section className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-6">Hintergrund</h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
              {series.background}
            </p>

            <h3 className="font-serif text-xl font-light text-foreground mb-4">Technischer Ansatz</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {series.technical}
            </p>
          </motion.div>
        </section>

        {/* Quote */}
        {series.quote && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="px-6 md:px-12 lg:px-20 py-16 md:py-24 border-y border-border mb-16 md:mb-24"
          >
            <blockquote className="max-w-2xl mx-auto text-center">
              <p className="font-serif text-2xl md:text-3xl font-light italic text-foreground leading-relaxed">
                „{series.quote}"
              </p>
            </blockquote>
          </motion.section>
        )}

        {/* Back link */}
        <section className="px-6 md:px-12 lg:px-20 text-center">
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
