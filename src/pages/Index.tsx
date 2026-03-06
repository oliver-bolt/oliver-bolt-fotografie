import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { seriesData } from "@/data/series";
import ProgressiveImage from "@/components/ProgressiveImage";

const fade = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const SHELL = "max-w-[1600px] mx-auto px-10 md:px-14";

const Index = () => {
  return (
    <>
      <Navbar />

      <main className="w-full">
        <div className={SHELL}>
          {/* HERO TEXT */}
          <section className="pt-36 md:pt-48 mb-24">
            <motion.div initial="hidden" animate="visible" variants={fade}>
              <h1 className="text-[36px] md:text-[56px] font-medium leading-[1.08] max-w-full md:max-w-[50%]">
                Documentary & street photographer capturing culture, travel & editorial stories — based in St. Gallen /
                Switzerland.
              </h1>
            </motion.div>
          </section>

          {/* PROJECT BLOCKS */}
          <section className="space-y-20 md:space-y-24 pb-28">
            {seriesData.map((series, index) => {
              const imgs = series.images?.slice(0, 4);
              if (!imgs || imgs.length < 4) return null;

              const altLayout = index % 2 === 1;

              const leftTop = altLayout ? "aspect-[3/4]" : "aspect-[4/3]";
              const leftBottom = altLayout ? "aspect-[4/3]" : "aspect-[3/4]";
              const rightTop = altLayout ? "aspect-[4/3]" : "aspect-[3/4]";
              const rightBottom = altLayout ? "aspect-[3/4]" : "aspect-[4/3]";

              return (
                <motion.div
                  key={series.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fade}
                >
                  {/* IMAGE GRID */}
                  <div className="grid grid-cols-2 gap-[18px]">
                    <div className="grid gap-[18px]">
                      <ProgressiveImage
                        src={imgs[0].src}
                        alt={imgs[0].alt}
                        className={leftTop}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <ProgressiveImage
                        src={imgs[1].src}
                        alt={imgs[1].alt}
                        className={leftBottom}
                      />
                    </div>

                    <div className="grid gap-[18px]">
                      <ProgressiveImage
                        src={imgs[2].src}
                        alt={imgs[2].alt}
                        className={rightTop}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <ProgressiveImage
                        src={imgs[3].src}
                        alt={imgs[3].alt}
                        className={rightBottom}
                      />
                    </div>
                  </div>

                  {/* CAPTION BLOCK */}
                  <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
                    <div>
                      <div className="text-[22px] md:text-[32px] font-medium leading-snug">
                        <span className="hidden md:inline">
                          {series.excerpt}{" "}
                          <a href={`/work/${series.category.toLowerCase()}`} className="underline underline-offset-4">
                            View Work →
                          </a>
                        </span>

                        <span className="md:hidden">
                          {series.excerpt}
                          <br />
                          <a href={`/work/${series.category.toLowerCase()}`} className="underline underline-offset-4">
                            View Work →
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:block" />
                  </div>
                </motion.div>
              );
            })}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Index;
