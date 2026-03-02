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
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        onPastHero(rect.bottom <= 64);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onPastHero]);

  return (
    <motion.div
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="relative"
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        height: "clamp(320px, 45vh, 480px)",
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          .hero-full-bleed { height: clamp(420px, 55vh, 620px) !important; }
        }
      `}</style>
      <div className="hero-full-bleed absolute inset-0" style={{ height: "inherit" }}>
        <img
          src={image}
          alt={`${categoryLabel} — Hero`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div style={{ paddingLeft: "8vw", paddingRight: "5vw" }} className="md:!pl-[20vw]">
            <p className="text-[15px] md:text-[18px] font-medium text-white max-w-[300px] md:max-w-[480px]" style={{ lineHeight: "1.45", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FullBleedHero;
