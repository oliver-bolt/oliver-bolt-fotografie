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

// IMPORTANT: must match Navbar container (max-w + padding)
const SHELL = "w-full max-w-[1600px] mx-auto px-6 md:px-10";

function ImgTile({ src, alt, aspect }: { src: string; alt: string; aspect: string }) {
  return (
    <div className={`relative overflow-hidden ${aspect}`}>
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
    </div>
  );
}

const Index = () => {
  // unique categories = project previews
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

          {/* Projects — Balboa-like 2-col stable 4-image blocks + caption separator */}
          <section id="projects" className="pb-16 md:pb-24">
            <div className="space-y-12 md:space-y-14">
              {uniqueByCategory.map((series, blockIndex) => {
                const categorySlug = series.category.toLowerCase();

                // EXACTLY 4 images per preview block
                const imgs = seriesData
                  .filter((s) => s.category === series.category)
                  .flatMap((s) => s.images)
                  .slice(0, 4);

                // Guard: if a category has <4 images, repeat last
                const safe = [...imgs];
                while (safe.length < 4 && safe.length > 0) {
                  safe.push(safe[safe.length - 1]);
                }

                // BALBOA-style stability:
                // Two columns, each column has 2 tiles.
                // Choose aspect ratios so LEFT total height == RIGHT total height.
                // Example:
                // left: 4/3 + 3/4  -> 0.75w + 1.333w = 2.083w
                // right: 3/4 + 4/3 -> 1.333w + 0.75w = 2.083w
                // Alternate pattern per block for organic feel.
                const leftTop = blockIndex % 2 === 0 ? "aspect-[4/3]" : "aspect-[3/4]";
                const leftBottom = blockIndex % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/3]";
                const rightTop = blockIndex % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/3]";
                const rightBottom = blockIndex % 2 === 0 ? "aspect-[4/3]" : "aspect-[3/4]";

                // Gutter: keep identical horizontally and vertically (small + consistent)
                const GUTTER = "gap-[14px] md:gap-[18px]";

                return (
                  <motion.div
                    key={series.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fade}
                  >
                    {/* 4-image preview block (NOT clickable) */}
                    <div className={`grid grid-cols-2 ${GUTTER}`}>
                      {/* LEFT COLUMN (2 tiles) */}
                      <div className={`grid grid-rows-2 ${GUTTER}`}>
                        {safe[0] && <ImgTile src={safe[0].src} alt={safe[0].alt} aspect={leftTop} />}
                        {safe[1] && <ImgTile src={safe[1].src} alt={safe[1].alt} aspect={leftBottom} />}
                      </div>

                      {/* RIGHT COLUMN (2 tiles) */}
                      <div className={`grid grid-rows-2 ${GUTTER}`}>
                        {safe[2] && <ImgTile src={safe[2].src} alt={safe[2].alt} aspect={rightTop} />}
                        {safe[3] && <ImgTile src={safe[3].src} alt={safe[3].alt} aspect={rightBottom} />}
                      </div>
                    </div>

                    {/* Caption separator — left column only */}
                    <div className="grid grid-cols-2 gap-[14px] md:gap-[18px] mt-4 md:mt-5">
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
                      <div />
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
