import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero.jpg";
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

const teasers = seriesData.slice(0, 5);

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Intro — Balboa 45/55 split */}
        <section className="px-5 md:px-10 lg:px-16 pt-28 md:pt-36 pb-24 md:pb-32">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start max-w-[1240px]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fade}
              className="w-full md:w-[45%] max-w-[580px] pt-2 md:pt-8"
            >
              <h1 className="text-[40px] md:text-[52px] lg:text-[60px] font-medium text-foreground leading-[1.1] mb-8">
                Award-winning photographer, director & cinematographer based in Berlin
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Focused on curated visual series that explore architecture, landscape, and the traces of human presence. Each project develops its own visual language through extended observation and deliberate reduction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Fine art & documentary photography available for exhibitions, editorial commissions, and limited edition prints.
              </p>
              <div className="flex flex-col gap-3">
                <a href="mailto:mail@photographer.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  mail@photographer.com
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Instagram
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="w-full md:w-[55%]"
            >
              <img
                src={heroImage}
                alt="Dramatic landscape photography"
                className="w-full aspect-[3/4] object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        </section>

        {/* Project Teasers — Balboa varied layouts */}
        <section className="px-5 md:px-10 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1240px] space-y-24 md:space-y-32">
            {teasers.map((series, i) => (
              <TeaserBlock key={series.id} series={series} variant={i % 3} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

/* Teaser variant A: two stacked images right, text left */
/* Teaser variant B: one large image left, text below */
/* Teaser variant C: two-column images, text below */
const TeaserBlock = ({
  series,
  variant,
}: {
  series: (typeof seriesData)[0];
  variant: number;
}) => {
  if (variant === 0) {
    // Text left, two stacked images right
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fade}
        className="flex flex-col md:flex-row gap-8 md:gap-14 items-start"
      >
        <div className="w-full md:w-[40%] pt-2 md:pt-6">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
            {series.year} · {series.location}
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
            {series.title}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {series.excerpt}
          </p>
          <Link
            to={`/series/${series.id}`}
            className="text-sm text-foreground hover:opacity-60 transition-opacity"
          >
            View Project →
          </Link>
        </div>
        <div className="w-full md:w-[60%] space-y-6">
          <img
            src={series.cover}
            alt={series.title}
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
          <img
            src={series.images[1]?.src || series.cover}
            alt={series.images[1]?.alt || series.title}
            className="w-full aspect-[16/10] object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>
    );
  }

  if (variant === 1) {
    // One large image, text below
    return (
      <motion.div
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
            {series.year} · {series.location}
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
  }

  // Variant 2: two-column images, text below
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fade}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={series.cover}
          alt={series.title}
          className="w-full aspect-[3/4] object-cover"
          loading="lazy"
        />
        <img
          src={series.images[0]?.src || series.cover}
          alt={series.images[0]?.alt || series.title}
          className="w-full aspect-[3/4] object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-6 max-w-xl">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
          {series.year} · {series.location}
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
};

export default Index;
