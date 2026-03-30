import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { seriesData } from "@/data/series";
import { filmsData } from "@/data/films";
import { resolveFilmAsset } from "@/data/filmAssets";

const fade = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const SHELL = "max-w-[1600px] mx-auto px-10 md:px-14";

function Slot({ src, alt, aspect, eager = false, objectPosition }: { src: string; alt: string; aspect: string; eager?: boolean; objectPosition?: string }) {
  return (
    <div className={`${aspect} overflow-hidden relative`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding={eager ? "sync" : "async"}
        {...(eager ? { fetchPriority: "high" as const } : {})}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: objectPosition ?? "center 30%" }}
      />
    </div>
  );
}

type Block =
  | { type: "photo"; seriesId: string }
  | { type: "film"; filmId: string; caption: string };

const LANDING_SEQUENCE: Block[] = [
  { type: "photo", seriesId: "riethuesli-2025" },
  { type: "film", filmId: "tsunami-2004", caption: "Der Tsunami von 2004 — SRF docudrama series\nES GESCHAH AM…" },
  { type: "photo", seriesId: "sternwarte-2025" },
  { type: "film", filmId: "postraub", caption: "Der Postraub des Jahrhunderts — SRF docudrama series ES GESCHAH AM…" },
  { type: "photo", seriesId: "new-zealand" },
  { type: "film", filmId: "sr111-halifax", caption: "SR111 – Absturz über Halifax — SRF docudrama series ES GESCHAH AM…" },
  { type: "photo", seriesId: "frauenstreik-2025" },
  { type: "photo", seriesId: "amplid" },
];

const PHOTO_IMAGE_PICKS: Record<string, number[]> = {
  "riethuesli-2025": [17, 3, 0, 1],
  "sternwarte-2025": [2, 0, 4, 1],
};

const FILM_STILL_PICKS: Record<string, number[]> = {
  "tsunami-2004": [1, 2, 0, 4],
  "postraub": [1, 3, 2, 5],
  "sr111-halifax": [3, 0, 4, 5],
};

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
                Creative Producer &amp; Media Engineer from St.&nbsp;Gallen, Switzerland&nbsp;— shaped by over nine years in moving-image production.
              </h1>
            </motion.div>
          </section>

          {/* PROJECT BLOCKS */}
          <section className="space-y-20 md:space-y-24 pb-28">
            {LANDING_SEQUENCE.map((block, index) => {
              const altLayout = index % 2 === 1;
              const leftTop = altLayout ? "aspect-[3/4]" : "aspect-[4/3]";
              const leftBottom = altLayout ? "aspect-[4/3]" : "aspect-[3/4]";
              const rightTop = altLayout ? "aspect-[4/3]" : "aspect-[3/4]";
              const rightBottom = altLayout ? "aspect-[3/4]" : "aspect-[4/3]";

              if (block.type === "photo") {
                const series = seriesData.find((s) => s.id === block.seriesId);
                if (!series) return null;
                const picks = PHOTO_IMAGE_PICKS[block.seriesId];
                const imgs = picks
                  ? picks.map((i) => series.images[i])
                  : series.images?.slice(0, 4);
                if (!imgs || imgs.length < 4) return null;

                return (
                  <motion.div
                    key={series.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fade}
                  >
                    <div className="grid grid-cols-2 gap-[18px]">
                      <div className="grid gap-[18px]">
                        <Slot src={imgs[0].src} alt={imgs[0].alt} aspect={leftTop} eager={index === 0} />
                        <Slot src={imgs[1].src} alt={imgs[1].alt} aspect={leftBottom} />
                      </div>
                      <div className="grid gap-[18px]">
                        <Slot src={imgs[2].src} alt={imgs[2].alt} aspect={rightTop} eager={index === 0} />
                        <Slot src={imgs[3].src} alt={imgs[3].alt} aspect={rightBottom} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
                      <div>
                        <div className="text-[22px] md:text-[32px] font-medium leading-snug">
                          {series.excerpt}{" "}
                          <a href={`/photography/${series.id}`} className="underline underline-offset-4 whitespace-nowrap">
                            View Work →
                          </a>
                        </div>
                      </div>
                      <div className="hidden md:block" />
                    </div>
                  </motion.div>
                );
              }

              // Film block
              const film = filmsData.find((f) => f.id === block.filmId);
              if (!film) return null;
              const picks = FILM_STILL_PICKS[block.filmId] ?? [0, 1, 2, 3];
              const stills = picks.map((i) => ({
                src: resolveFilmAsset(film.stills[i].src) ?? "",
                alt: film.stills[i].alt,
              }));
              if (stills.length < 4) return null;

              const captionLines = block.caption.split("\n");

              return (
                <motion.div
                  key={`film-${block.filmId}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fade}
                >
                  <div className="grid grid-cols-2 gap-[18px]">
                    <div className="grid gap-[18px]">
                      <Slot src={stills[0].src} alt={stills[0].alt} aspect={leftTop} />
                      <Slot src={stills[2].src} alt={stills[2].alt} aspect={leftBottom} />
                    </div>
                    <div className="grid gap-[18px]">
                      <Slot src={stills[3].src} alt={stills[3].alt} aspect={rightTop} />
                      <Slot src={stills[1].src} alt={stills[1].alt} aspect={rightBottom} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
                    <div>
                      <div className="text-[22px] md:text-[32px] font-medium leading-snug">
                        {captionLines.length > 1 ? (
                          <>
                            {captionLines[0]}
                            <br />
                            {captionLines[1]}{" "}
                          </>
                        ) : (
                          <>{captionLines[0]}{" "}</>
                        )}
                        <a href={`/film/${film.id}`} className="underline underline-offset-4 whitespace-nowrap">
                          View Work →
                        </a>
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
