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
    // Scroll to projects section
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
            <h1 className="text-[40px] md:text-[56px] lg:text-[68px] font-semibold text-foreground leading-[1.08] max-w-[900px]">
              Documentary & street photographer capturing culture, travel & editorial stories.
            </h1>
          </motion.div>
        </section>

        {/* Filter indicator */}
        {activeCategory && (
          <section className="px-5 md:px-10 lg:px-16 mb-10 max-w-[1240px]">
            <p className="text-sm text-muted-foreground">
              Filtered: <span className="text-foreground">{activeCategory}</span>
              {" · "}
              <button
                onClick={() => setActiveCategory(null)}
                className="hover:underline hover:text-foreground transition-colors bg-transparent border-none cursor-pointer text-muted-foreground text-sm"
              >
                Clear
              </button>
            </p>
          </section>
        )}

        {/* Project grid */}
        <section id="projects" className="px-5 md:px-10 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1240px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((series) => (
              <motion.div
                key={series.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fade}
              >
                <Link to={`/series/${series.id}`} className="block group">
                  <img
                    src={series.cover}
                    alt={series.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </Link>
                <div className="mt-5">
                  <p className="text-[22px] md:text-[26px] text-muted-foreground leading-relaxed mb-4">
                    {series.excerpt}
                  </p>
                  <Link
                    to={`/series/${series.id}`}
                    className="text-[22px] md:text-[26px] text-foreground hover:underline transition-colors"
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
