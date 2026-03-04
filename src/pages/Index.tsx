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

// IMPORTANT: keep shell identical to navbar inner padding so edges always flush
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
      {/* Landing: NOT inverted, no black bar, not fixed */}
      <Navbar invertColors={false} />

      <main className="w-full">
        <div className={SHELL}>
          {/* Hero — headline only */}
          <section className="pt-28 md:pt-36 mb-14 md:mb-20">
            <motion.div initial="hidden" animate="visible" variants={fade}>
              <h1 className="text-[46px] md:text-[58px] lg:text-[50px] font-medium text-foreground leading-[1.08] max-w-full md:max-w-[50%]">
                Documentary & street photographer capturing culture, travel & editorial stories — based in St. Gallen /
                Switzerland.
              </h1>
            </motion.div>
          </section>

          {/* Projects — Balboa-ish 2-col masonry per project (4 images) + caption separator */}
          <section id="projects" className="pb-16 md:pb-24">
            <div className="space-y-12 md:space-y-14">
              {uniqueByCategory.map((series) => {
                const categorySlug = series.category.toLowerCase();

                // FIX: Preview must be exactly 4 images
                const categoryImages = seriesData
                  .filter((s) => s.category === series.category)
                  .flatMap((s) => s.images)
                  .slice(0, 4);

                // Balboa feel: varied wrappers (wrapper defines box, image fills it)
                const aspects = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[3/4]", "aspect-[4/3]"];

                const left = categoryImages.filter((_, i) => i % 2 === 0);
                const right = categoryImages.filter((_, i) => i % 2 === 1);

                return (
                  <motion.div
                    key={series.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fade}
                  >
                    <Link to={`/work/${categorySlug}`} className="block">
                      {/* 2 columns, equal gutters (Balboa has small gutters) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                        {/* LEFT COLUMN */}
                        <div className="flex flex-col gap-5">
                          {left.map((img, i) => (
                            <div
                              key={img.src + i}
                              className={`relative w-full overflow-hidden ${aspects[(i * 2) % aspects.length]}`}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="absolute inset-0 h-full w-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="flex flex-col gap-5">
                          {right.map((img, i) => (
                            <div
                              key={img.src + i}
                              className={`relative w-full overflow-hidden ${aspects[(i * 2 + 1) % aspects.length]}`}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="absolute inset-0 h-full w-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </Link>

                    {/* Caption separator — left column only */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-4 md:mt-5">
                      <div>
                        <p className="text-[17px] md:text-[18px] font-medium text-foreground leading-snug mb-2">
                          {series.excerpt}
                        </p>
                        <Link
                          to={`/work/${categorySlug}`}
                          className="text-[17px] md:text-[18px] font-medium text-foreground hover:underline transition-colors"
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
