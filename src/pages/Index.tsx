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

// IMPORTANT: must match Navbar inner container (max width + padding) so everything aligns
const SHELL = "w-full max-w-[1600px] mx-auto px-6 md:px-10";

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
      <main className="w-full">
        <div className={SHELL}>
          {/* Hero */}
          <section className="pt-36 md:pt-48 mb-14 md:mb-20">
            <motion.div initial="hidden" animate="visible" variants={fade}>
              <h1 className="text-[46px] md:text-[58px] lg:text-[50px] font-medium text-foreground leading-[1.08] max-w-full md:max-w-[52%]">
                Documentary & street photographer capturing culture, travel & editorial stories — based in St. Gallen /
                Switzerland.
              </h1>
            </motion.div>
          </section>

          {/* Projects — TRUE Masonry (Balboa-feel), 2 columns, fixed 4 images, small gutters */}
          <section id="projects" className="pb-16 md:pb-24">
            <div className="space-y-12 md:space-y-14">
              {uniqueByCategory.map((series) => {
                const categorySlug = series.category.toLowerCase();

                // FIX: preview contains EXACTLY 4 images
                const categoryImages = seriesData
                  .filter((s) => s.category === series.category)
                  .flatMap((s) => s.images)
                  .slice(0, 4);

                return (
                  <motion.div
                    key={series.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fade}
                  >
                    {/* Masonry container (columns) */}
                    <Link to={`/work/${categorySlug}`} className="block">
                      <div
                        className="
                          columns-1 md:columns-2
                          gap-x-5 md:gap-x-6
                        "
                      >
                        {categoryImages.map((img, i) => (
                          <div
                            key={i}
                            className="
                              mb-5 md:mb-6
                              break-inside-avoid
                              overflow-hidden
                            "
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="w-full h-auto object-cover block"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </Link>

                    {/* Caption separator — left column only (like Balboa) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-2 md:mt-3">
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
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
