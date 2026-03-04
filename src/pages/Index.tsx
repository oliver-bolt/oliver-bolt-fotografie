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
  const seen = new Set<string>();
  const uniqueByCategory = seriesData.filter((s) => {
    if (seen.has(s.category)) return false;
    seen.add(s.category);
    return true;
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero — headline only */}
        <section className="max-w-[1600px] mx-auto px-4 md:px-10 pt-36 md:pt-48 pb-8 md:pb-12">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <h1 className="text-[46px] md:text-[58px] lg:text-[50px] font-medium text-foreground leading-[1.08] max-w-full md:max-w-[50%]">
              Documentary & street photographer capturing culture, travel & editorial stories — based in St. Gallen / Switzerland.
            </h1>
          </motion.div>
        </section>

        {/* Projects — Balboa 2-col image blocks + caption separator */}
        <section id="projects" className="max-w-[1600px] mx-auto px-4 md:px-10 pb-16 md:pb-24">
          <div className="space-y-10 md:space-y-12">
            {uniqueByCategory.map((series) => {
              const categorySlug = series.category.toLowerCase();
              const categoryImages = seriesData
                .filter((s) => s.category === series.category)
                .flatMap((s) => s.images)
                .slice(0, 6);

              // Assign organic aspect ratios for visual variety
              const aspects = [
                "aspect-[4/3]",
                "aspect-[3/4]",
                "aspect-[4/3]",
                "aspect-[1/1]",
                "aspect-[3/4]",
                "aspect-[4/3]",
              ];

              return (
                <motion.div
                  key={series.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fade}
                >
                  {/* 2-column fixed grid — Balboa style */}
                  <Link to={`/work/${categorySlug}`} className="block">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {categoryImages.map((img, i) => (
                        <div key={i} className="overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover aspect-[4/3]"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </Link>

                  {/* Caption separator — left column only */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-5">
                    <div>
                      <p className="text-[15px] md:text-[17px] font-medium text-foreground leading-snug mb-2">
                        {series.excerpt}
                      </p>
                      <Link
                        to={`/work/${categorySlug}`}
                        className="text-[14px] md:text-[15px] font-medium text-foreground hover:underline transition-colors"
                      >
                        View Work →
                      </Link>
                    </div>
                    <div className="hidden md:block" />
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
