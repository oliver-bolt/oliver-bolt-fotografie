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

// IMPORTANT: must match Navbar inner padding to align perfectly
// Navbar uses: max-w-[1600px] ... px-6 md:px-10
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
          {/* Hero — headline only */}
          <section className="pt-36 md:pt-48 mb-14 md:mb-20">
            <motion.div initial="hidden" animate="visible" variants={fade}>
              <h1 className="text-[46px] md:text-[58px] lg:text-[50px] font-medium text-foreground leading-[1.08] max-w-full md:max-w-[50%]">
                Documentary & street photographer capturing culture, travel & editorial stories — based in St. Gallen /
                Switzerland.
              </h1>
            </motion.div>
          </section>

          {/* Projects — Balboa-like masonry preview (4 images) + caption separator */}
          <section id="projects" className="pb-16 md:pb-24">
            <div className="space-y-12 md:space-y-14">
              {uniqueByCategory.map((series) => {
                const categorySlug = series.category.toLowerCase();

                // FIX: preview must be exactly 4 images
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
                    {/* Masonry-like 2 columns (Balboa behavior) */}
                    <Link to={`/work/${categorySlug}`} className="block">
                      <div
                        className="
                          columns-1 md:columns-2
                          [column-gap:16px] md:[column-gap:20px]
                        "
                      >
                        {categoryImages.map((img, i) => (
                          <div key={i} className="mb-4 md:mb-5 break-inside-avoid overflow-hidden">
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

                    {/* Caption separator — left column only */}
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-5 [column-gap:16px] md:[column-gap:20px]">
                      <div>
                        {/* FIX: same size as "Oliver Bolt" */}
                        <p className="text-[28px] md:text-[32px] font-semibold tracking-tight text-foreground leading-[1.15] mb-2">
                          {series.excerpt}
                        </p>
                        <Link
                          to={`/work/${categorySlug}`}
                          className="text-[28px] md:text-[32px] font-semibold tracking-tight text-foreground hover:underline transition-colors"
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
