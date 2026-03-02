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
      className="relative w-screen"
      style={{ height: "clamp(320px, 45vh, 480px)" }}
    >
      {/* Desktop height override */}
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
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
        {/* Overlay text — vertically centered, left-aligned block */}
        <div className="absolute inset-0 flex items-center">
          <div className="pl-[6vw] md:pl-[12vw] pr-5">
            <p className="text-[16px] md:text-[20px] font-medium text-white leading-relaxed max-w-[320px] md:max-w-[560px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FullBleedHero;
