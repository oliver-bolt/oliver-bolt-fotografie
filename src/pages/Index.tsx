import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { seriesData } from "@/data/series";

const fade = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const SHELL = "max-w-[1600px] mx-auto px-10 md:px-14";

/* SLOT */

function Slot({ src, alt, aspect, eager = false }: { src: string; alt: string; aspect: string; eager?: boolean }) {
  return (
    <div className={`${aspect} relative overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

/* IMAGE ORIENTATION */

function splitOrientation(images: any[]) {
  const portrait: any[] = [];
  const landscape: any[] = [];

  images.forEach((img) => {
    const image = new Image();
    image.src = img.src;

    if (image.height > image.width) portrait.push(img);
    else landscape.push(img);
  });

  return { portrait, landscape };
}

const Index = () => {
  return (
    <>
      <Navbar />

      <main className="w-full">
        <div className={SHELL}>
          {/* HERO */}

          <section className="pt-36 md:pt-48 mb-24">
            <motion.div initial="hidden" animate="visible" variants={fade}>
              <h1 className="text-[46px] md:text-[56px] font-medium leading-[1.08] max-w-[50%]">
                Documentary & street photographer capturing culture, travel & editorial stories — based in St. Gallen /
                Switzerland.
              </h1>
            </motion.div>
          </section>

          {/* PROJECT BLOCKS */}

          <section className="space-y-24 pb-28">
            {seriesData.map((series, index) => {
              const imgs = series.images?.slice(0, 6);
              if (!imgs || imgs.length === 0) return null;

              const { portrait, landscape } = splitOrientation(imgs);

              const p1 = portrait[0] || imgs[0];
              const p2 = portrait[1] || imgs[1];

              const l1 = landscape[0] || imgs[2];
              const l2 = landscape[1] || imgs[3];

              const alt = index % 2 === 1;

              return (
                <motion.div
                  key={series.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fade}
                >
                  {/* GRID */}

                  <div className="grid grid-cols-2 gap-[18px]">
                    {/* LEFT */}

                    <div className="grid gap-[18px]">
                      {alt ? (
                        <>
                          <Slot src={p1.src} alt={p1.alt} aspect="aspect-[3/4]" eager={index === 0} />
                          <Slot src={l1.src} alt={l1.alt} aspect="aspect-[4/3]" />
                        </>
                      ) : (
                        <>
                          <Slot src={l1.src} alt={l1.alt} aspect="aspect-[4/3]" eager={index === 0} />
                          <Slot src={p1.src} alt={p1.alt} aspect="aspect-[3/4]" />
                        </>
                      )}
                    </div>

                    {/* RIGHT */}

                    <div className="grid gap-[18px]">
                      {alt ? (
                        <>
                          <Slot src={l2.src} alt={l2.alt} aspect="aspect-[4/3]" eager={index === 0} />
                          <Slot src={p2.src} alt={p2.alt} aspect="aspect-[3/4]" />
                        </>
                      ) : (
                        <>
                          <Slot src={p2.src} alt={p2.alt} aspect="aspect-[3/4]" eager={index === 0} />
                          <Slot src={l2.src} alt={l2.alt} aspect="aspect-[4/3]" />
                        </>
                      )}
                    </div>
                  </div>

                  {/* TEXT */}

                  <div className="grid grid-cols-2 mt-6">
                    <div>
                      <p className="text-[28px] md:text-[32px] font-medium leading-snug mb-3">{series.excerpt}</p>

                      <a
                        href={`/work/${series.category.toLowerCase()}`}
                        className="text-[28px] md:text-[32px] font-medium underline"
                      >
                        View Work
                      </a>
                    </div>

                    <div />
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
