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

/**
 * WICHTIG:
 * Muss exakt zum Navbar-Container passen, sonst fluchtet links/rechts nie sauber.
 * Dein Navbar nutzt: max-w-[1600px] + px-6 md:px-10
 */
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
          <section className="pt-36 md:pt-48 mb-16 md:mb-24">
            <motion.div initial="hidden" animate="visible" variants={fade}>
              <h1 className="text-[46px] md:text-[58px] lg:text-[50px] font-medium text-foreground leading-[1.08] max-w-full md:max-w-[50%]">
                Documentary & street photographer capturing culture, travel & editorial stories — based in St. Gallen /
                Switzerland.
              </h1>
            </motion.div>
          </section>

          {/* Projects — 2-col masonry-light + caption separator */}
          <section id="projects" className="pb-16 md:pb-24">
            <div className="space-y-14 md:space-y-16">
              {uniqueByCategory.map((series) => {
                const categorySlug = series.category.toLowerCase();

                // FIX: Vorschau enthält genau 4 Bilder
                const categoryImages = seriesData
                  .filter((s) => s.category === series.category)
                  .flatMap((s) => s.images)
                  .slice(0, 4);

                /**
                 * Aspect-Pattern (Balboa-ish):
                 * Wir steuern das NICHT über <img>-aspect, sondern über Wrapper,
                 * damit Zuschnitt/Skalierung stabil ist.
                 */
                const wrappers = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[3/4]", "aspect-[4/3]"];

                const leftImages = categoryImages.filter((_, i) => i % 2 === 0);
                const rightImages = categoryImages.filter((_, i) => i % 2 === 1);

                return (
                  <motion.div
                    key={series.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fade}
                  >
                    <Link to={`/work/${categorySlug}`} className="block">
                      {/* Outer grid must be full width to align left/right with SHELL */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-x-6">
                        {/* LEFT COLUMN (stack) */}
                        <div className="flex flex-col gap-5 md:gap-6">
                          {leftImages.map((img, idx) => {
                            const i = idx * 2; // original index approx for wrapper pattern
                            return (
                              <div key={img.src} className={`relative overflow-hidden ${wrappers[i]}`}>
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="absolute inset-0 h-full w-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                            );
                          })}
                        </div>

                        {/* RIGHT COLUMN (stack) */}
                        <div className="flex flex-col gap-5 md:gap-6">
                          {rightImages.map((img, idx) => {
                            const i = idx * 2 + 1;
                            return (
                              <div key={img.src} className={`relative overflow-hidden ${wrappers[i]}`}>
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="absolute inset-0 h-full w-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Link>

                    {/* Caption separator — left column only (rechte bleibt leer) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-x-6 mt-4 md:mt-5">
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
