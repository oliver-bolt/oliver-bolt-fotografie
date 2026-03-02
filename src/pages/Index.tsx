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

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — headline only */}
        <section className="px-5 md:px-10 lg:px-16 pt-36 md:pt-48 pb-28 md:pb-40">
          <motion.div initial="hidden" animate="visible" variants={fade} className="max-w-[1240px]">
            <h1 className="text-[38px] md:text-[48px] lg:text-[41px] font-medium text-foreground leading-[1.08] max-w-full md:max-w-[50%]">
              Documentary & street photographer capturing culture, travel & editorial stories — based in St. Gallen / Switzerland.
            </h1>
          </motion.div>
        </section>

        {/* Projects — Balboa editorial list */}
        <section id="projects" className="px-5 md:px-10 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1240px] space-y-24 md:space-y-32">
            {seriesData.map((series) => {
              const categorySlug = series.category.toLowerCase();
              return (
                <motion.div
                  key={series.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fade}
                >
                  <Link to={`/work/${categorySlug}`} className="block">
                    <img
                      src={series.cover}
                      alt={series.title}
                      className="w-full aspect-[16/9] object-cover"
                      loading="lazy"
                    />
                  </Link>

                  <div className="mt-8">
                    <p className="text-[26px] md:text-[30px] font-medium text-foreground leading-relaxed mb-4 max-w-3xl">
                      {series.excerpt}
                    </p>
                    <Link
                      to={`/work/${categorySlug}`}
                      className="text-[26px] md:text-[30px] font-medium text-foreground hover:underline transition-colors"
                    >
                      View Work →
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
};

export default Index;
