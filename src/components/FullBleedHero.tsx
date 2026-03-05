import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface FullBleedHeroProps {
  image: string;
  categoryLabel: string;
  onPastHero?: (past: boolean) => void;
}

const NAV_H = 84;

const FullBleedHero = ({ image, categoryLabel, onPastHero }: FullBleedHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!onPastHero) return;

    const onScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      onPastHero(rect.bottom <= NAV_H);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [onPastHero]);

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="relative w-full"
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      {/* Hero sits under navbar (navbar overlays hero) */}
      <div
        className="
          relative w-full -mt-[84px] overflow-hidden
          h-[440px] md:h-[680px]
        "
      >
        {/* Image */}
        <img
          src={image}
          alt={`${categoryLabel} — Hero`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

        {/* Text overlay: left-aligned, but positioned more towards center.
            Padding-top ensures it doesn't sit under navbar. */}
        <div className="absolute inset-0 flex items-center pt-[84px]">
          <div className="w-full px-6 md:px-10">
            <div className="ml-[8vw] md:ml-[18vw] max-w-[980px]">
              <p
                className="text-white font-semibold tracking-tight"
                style={{
                  fontSize: "clamp(28px, 2.2vw, 34px)", // ~Oliver Bolt size
                  lineHeight: 1.18,
                  textShadow: "0 1px 10px rgba(0,0,0,0.45)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FullBleedHero;
