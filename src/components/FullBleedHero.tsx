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
        height: "clamp(560px, 78vh, 920px)",
      }}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={`${categoryLabel} — Hero`}
          loading="eager"
          className="
            absolute inset-0 h-full w-full object-cover
            object-[50%_40%] md:object-[50%_44%]
          "
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="absolute inset-0">
        <div className="h-full w-full flex items-center">
          {/* Desktop: block optisch mittig im Hero, Text linksbündig im Block
              Mobile: automatisch kleiner und mit Abstand oben/unten */}
          <div className="w-full px-[7vw] md:px-[10vw] pt-[92px] pb-[56px] md:pt-[120px] md:pb-[72px]">
            <div className="h-full flex items-center justify-center md:justify-start">
              <div className="w-full max-w-[980px] md:ml-[16vw]">
                <p
                  className="font-medium text-white leading-[1.2]"
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 32px)",
                    textShadow: "0 1px 10px rgba(0,0,0,0.45)",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FullBleedHero;
