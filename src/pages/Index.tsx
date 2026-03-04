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

const SHELL = "w-full max-w-[1400px] mx-auto px-6 md:px-10";

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
      <main className="max-w-[1600px] w-full mx-auto px-6 md:px-10">
        {/* Hero — headline only */}
        <section className="pt-36 md:pt-48 mb-14 md:mb-20">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <h1 className="text-[46px] md:text-[58px] lg:text-[50px] font-medium text-foreground leading-[1.08] max-w-full md:max-w-[50%]">
              Documentary & street photographer capturing culture, travel & editorial stories — based in St. Gallen /
              Switzerland.
            </h1>
          </motion.div>
        </section>

        {/* Projects — Balboa 2-col image blocks + caption separator */}
        <section id="projects" className="pb-16 md:pb-24">
          <div className="space-y-12 md:space-y-14">
            {uniqueByCategory.map((series) => {
              const categorySlug = series.category.toLowerCase();
              const categoryImages = seriesData
                .filter((s) => s.category === series.category)
                .flatMap((s) => s.images)
                .slice(0, 6);

              // Organic aspect ratios cycling pattern for Balboa feel
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
                  {/* 2-column grid — Balboa style with organic aspect ratios */}
                  <Link to={`/work/${categorySlug}`} className="block">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-x-5 md:gap-y-5">
                      {categoryImages.map((img, i) => (
                        <div key={i} className="overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className={`w-full object-cover ${aspects[i % aspects.length]}`}
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </Link>

                  {/* Caption separator — left column only */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-5 mt-4 md:mt-5">
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
