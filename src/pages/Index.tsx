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

const teasers = seriesData.slice(0, 5);

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — headline only */}
        <section className="px-5 md:px-10 lg:px-16 pt-36 md:pt-48 pb-28 md:pb-40">
          <motion.div initial="hidden" animate="visible" variants={fade} className="max-w-[1240px]">
            <h1 className="text-[40px] md:text-[56px] lg:text-[68px] font-semibold text-foreground leading-[1.08] max-w-[900px]">
              Documentary & street photographer capturing culture, travel & editorial stories.
            </h1>
          </motion.div>
        </section>

        {/* Project Teasers */}
        <section className="px-5 md:px-10 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1240px] space-y-28 md:space-y-40">
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

const TeaserBlock = ({
  series,
  variant,
}: {
  series: (typeof seriesData)[0];
  variant: number;
}) => {
  if (variant === 0) {
    // Two stacked images, text below
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fade}
      >
        <div className="space-y-6">
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
        <div className="mt-8 max-w-xl">
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
        <img
          src={series.cover}
          alt={series.title}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
        <div className="mt-8 max-w-xl">
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
    );
  }

  // Two-column images, text below
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
      <div className="mt-8 max-w-xl">
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
  );
};

export default Index;
