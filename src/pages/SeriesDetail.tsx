import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { seriesData } from "@/data/series";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkGallery from "@/components/WorkGallery";
import NotFound from "./NotFound";

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const SHELL = "max-w-[1600px] mx-auto px-10 md:px-14";

const SeriesDetail = () => {
  const { id } = useParams<{ id: string }>();
  const series = seriesData.find((s) => s.id === id);

  if (!series) return <NotFound />;

  const galleryImages = series.images.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <>
      <Navbar />
      <main>
        {/* Text header — same sizing as Landing headline, ~50% width */}
        <section className={SHELL}>
          <motion.div initial="hidden" animate="visible" variants={fade} className="pt-36 md:pt-48 max-w-full md:max-w-[50%]">
            <h1 className="text-[36px] md:text-[56px] font-medium text-foreground leading-[1.08] mb-6">
              {series.title}
            </h1>
            <p className="text-[22px] md:text-[32px] font-light text-foreground leading-snug mb-16 md:mb-20">
              {series.description}
            </p>
          </motion.div>
        </section>

        {/* Image gallery */}
        <WorkGallery images={galleryImages} />

        {/* Back link */}
        <section className={`${SHELL} pb-16 pt-10`}>
          <Link
            to="/photography"
            className="text-sm text-foreground hover:underline transition-colors"
          >
            ← Back to Photography
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SeriesDetail;
