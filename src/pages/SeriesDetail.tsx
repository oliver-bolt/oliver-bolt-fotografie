import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { seriesData } from "@/data/series";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import { useEffect, useState } from "react";

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const SeriesDetail = () => {
  const { id } = useParams<{ id: string }>();
  const series = seriesData.find((s) => s.id === id);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!series) return <NotFound />;

  return (
    <>
      <Navbar invertColors={!pastHero} />
      <main>
        {/* Full-width hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="relative w-full h-screen"
        >
          <img
            src={series.cover}
            alt={`${series.title} — Hero`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 lg:p-16">
            <p className="text-sm text-white/80 max-w-lg leading-relaxed">
              {series.excerpt}
            </p>
          </div>
        </motion.div>

        {/* Title + meta */}
        <section className="px-5 md:px-10 lg:px-16 pt-20 md:pt-28 mb-16 md:mb-20 max-w-[1240px]">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              {series.year} · {series.location} · {series.category}
            </p>
            <h1 className="text-[36px] md:text-[48px] font-semibold text-foreground leading-[1.1] mb-6">
              {series.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {series.description}
            </p>
          </motion.div>
        </section>

        {/* Asymmetric gallery */}
        <section className="px-5 md:px-10 lg:px-16 mb-20 md:mb-28 max-w-[1240px]">
          <div className="space-y-6 md:space-y-8">
            {series.images.map((img, i) => {
              const pattern = i % 4;

              if (pattern === 0 && series.images[i + 1]) {
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fade}
                    className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-8"
                  >
                    <img src={img.src} alt={img.alt} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                    <img src={series.images[i + 1].src} alt={series.images[i + 1].alt} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </motion.div>
                );
              }

              if (pattern === 1) return null;

              if (pattern === 2) {
                return (
                  <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fade}>
                    <img src={img.src} alt={img.alt} className="w-full aspect-[16/9] object-cover" loading="lazy" />
                  </motion.div>
                );
              }

              if (pattern === 3 && series.images[i + 1]) {
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fade}
                    className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 md:gap-8"
                  >
                    <img src={img.src} alt={img.alt} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    <img src={series.images[i + 1]?.src || img.src} alt={series.images[i + 1]?.alt || img.alt} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                  </motion.div>
                );
              }

              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fade}>
                  <img src={img.src} alt={img.alt} className="w-full aspect-[3/2] object-cover" loading="lazy" />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Background */}
        <section className="px-5 md:px-10 lg:px-16 mb-16 md:mb-20 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <h2 className="text-lg font-semibold text-foreground mb-4">Background</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              {series.background}
            </p>
            <h3 className="text-base font-medium text-foreground mb-3">Technical Approach</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {series.technical}
            </p>
          </motion.div>
        </section>

        {/* Quote */}
        {series.quote && (
          <section className="px-5 md:px-10 lg:px-16 py-10 border-t border-border mb-16 md:mb-20">
            <blockquote className="max-w-lg">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "{series.quote}"
              </p>
            </blockquote>
          </section>
        )}

        {/* Back link */}
        <section className="px-5 md:px-10 lg:px-16 pb-16">
          <Link
            to="/portfolio"
            className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            ← Back to Work
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SeriesDetail;
