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
  // Deduplicate by category — show one block per category
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
        <section className="px-5 md:px-10 lg:px-16 pt-36 md:pt-48 pb-20 md:pb-28">
          <motion.div initial="hidden" animate="visible" variants={fade} className="max-w-[1240px]">
            <h1 className="text-[46px] md:text-[58px] lg:text-[50px] font-medium text-foreground leading-[1.08] max-w-full md:max-w-[50%]">
              Documentary & street photographer capturing culture, travel & editorial stories — based in St. Gallen / Switzerland.
            </h1>
          </motion.div>
        </section>

        {/* Projects — Balboa multi-image blocks */}
        <section id="projects" className="px-5 md:px-10 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[1240px] space-y-16 md:space-y-24">
            {uniqueByCategory.map((series) => {
              const categorySlug = series.category.toLowerCase();
              // Gather all images from projects in this category
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
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {/* Left: text block */}
                    <div className="md:w-[35%] flex flex-col justify-center shrink-0">
                      <p className="text-[24px] md:text-[28px] font-medium text-foreground leading-snug mb-4">
                        {series.excerpt}
                      </p>
                      <Link
                        to={`/work/${categorySlug}`}
                        className="text-[18px] md:text-[20px] font-medium text-foreground hover:underline transition-colors"
                      >
                        View Work →
                      </Link>
                    </div>

                    {/* Right: organic multi-image grid */}
                    <div className="md:w-[65%]">
                      <Link to={`/work/${categorySlug}`} className="block">
                        <div className="grid grid-cols-2 gap-2">
                          {categoryImages.map((img, i) => (
                            <div
                              key={i}
                              className={i === 0 ? "col-span-2" : ""}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className={`w-full object-cover ${
                                  i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                                }`}
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </Link>
                    </div>
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
