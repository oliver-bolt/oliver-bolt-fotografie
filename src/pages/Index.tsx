import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { seriesData, SeriesCategory } from "@/data/series";
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCategoryChange = (cat: string | null) => {
    setActiveCategory(cat);
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const filtered = activeCategory
    ? seriesData.filter((s) => s.category === activeCategory)
    : seriesData;

  return (
    <>
      <Navbar onCategoryChange={handleCategoryChange} />
      <main>
        {/* Hero — headline only */}
        <section className="px-5 md:px-10 lg:px-16 pt-36 md:pt-48 pb-28 md:pb-40">
          <motion.div initial="hidden" animate="visible" variants={fade} className="max-w-[1240px]">
            <h1 className="text-[32px] md:text-[40px] lg:text-[34px] font-medium text-foreground leading-[1.08] max-w-[900px]">
              Documentary & street photographer capturing culture, travel & editorial stories.
            </h1>
          </motion.div>
        </section>

        {/* Projects — Balboa editorial list */}
        <section id="projects" className="px-5 md:px-10 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1240px] space-y-24 md:space-y-32">
            {filtered.map((series) => (
              <motion.div
                key={series.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fade}
              >
                {/* Image group */}
                <Link to={`/series/${series.id}`} className="block">
                  <img
                    src={series.cover}
                    alt={series.title}
                    className="w-full aspect-[16/9] object-cover"
                    loading="lazy"
                  />
                </Link>

                {/* Text below image */}
                <div className="mt-8">
                  <p className="text-[26px] md:text-[30px] font-medium text-foreground leading-relaxed mb-4 max-w-3xl">
                    {series.excerpt}
                  </p>
                  <Link
                    to={`/series/${series.id}`}
                    className="text-[26px] md:text-[30px] font-medium text-foreground hover:underline transition-colors"
                  >
                    View Project →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
