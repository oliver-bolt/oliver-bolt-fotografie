import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface FullBleedHeroProps {
  image: string;
  categoryLabel: string;
  onPastHero?: (past: boolean) => void;
}

const FullBleedHero = ({ image, categoryLabel, onPastHero }: FullBleedHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!onPastHero) return;

    const onScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      onPastHero(rect.bottom <= 64);
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
      className="relative"
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        height: "clamp(560px, 78vh, 920px)", // höher wie Balboa, auch Mobile
      }}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={`${categoryLabel} — Hero`}
          loading="eager"
          className="
            absolute inset-0 h-full w-full object-cover
            object-[50%_42%] md:object-[50%_45%]
          "
        />
        {/* dunkle Layer für Lesbarkeit */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Textlayer */}
      <div className="absolute inset-0">
        {/* Padding sorgt für Abstand zur fixed Navbar und zum unteren Bildrand */}
        <div className="h-full w-full flex items-center">
          <div className="w-full px-[7vw] md:px-[10vw] pt-[96px] pb-[52px] md:pt-[120px] md:pb-[70px]">
            <div className="h-full flex items-center">
              <p
                className="font-medium text-white leading-[1.22]"
                style={{
                  // responsive: Mobile kleiner, Desktop wie Oliver Bolt (28/32)
                  fontSize: "clamp(18px, 2.2vw, 32px)",
                  maxWidth: "980px", // breiter, weniger Zeilen
                  textShadow: "0 1px 10px rgba(0,0,0,0.45)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
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
