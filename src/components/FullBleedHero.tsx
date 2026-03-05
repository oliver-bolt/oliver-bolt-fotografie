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
      // past hero once bottom has crossed nav height
      onPastHero(rect.bottom <= 84);
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
      // Full-bleed: break out of any max-width parent
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      {/* Height locked like Balboa (no variable length by image) */}
      <div className="relative w-full h-[360px] md:h-[560px] overflow-hidden">
        <img
          src={image}
          alt={`${categoryLabel} — Hero`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        {/* subtle readability overlay (Balboa-like) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

        {/* Overlay text: left aligned block, but placed more towards center */}
        <div className="absolute inset-0 flex items-center">
          {/* 
            Left aligned text, but pushed to the right a bit (mid-ish).
            On desktop: start around 18–22vw.
          */}
          <div className="w-full px-6 md:px-10">
            <div className="ml-[8vw] md:ml-[18vw] max-w-[520px]">
              <p
                className="text-white font-semibold tracking-tight"
                // Same size as Oliver Bolt (approx)
                style={{
                  fontSize: "clamp(28px, 2.2vw, 34px)",
                  lineHeight: 1.18,
                  textShadow: "0 1px 10px rgba(0,0,0,0.45)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FullBleedHero;
