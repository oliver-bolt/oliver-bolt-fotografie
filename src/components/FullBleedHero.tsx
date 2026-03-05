import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface FullBleedHeroProps {
  image: string;
  categoryLabel: string;
  onPastHero?: (past: boolean) => void;
}

const FullBleedHero = ({ image, categoryLabel, onPastHero }: FullBleedHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Nur für invertColors Umschalten – bleibt wie gehabt.
  useEffect(() => {
    if (!onPastHero) return;

    const onScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // Navbar ist fixed; wir nehmen eine harte Schwelle (ohne "smooth" Verhalten)
      onPastHero(rect.bottom <= 64);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onPastHero]);

  /**
   * Ziel:
   * - Full-bleed von ganz links bis ganz rechts
   * - deutlich höher (Balboa-like)
   * - Overlay-Text: Schriftgröße wie "Oliver Bolt" (28/32), breiter, weniger Zeilen
   * - Hero liegt "unter" der Navbar (Navbar ist fixed -> hero startet bei y=0)
   */
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
        // höher wie Balboa
        height: "clamp(520px, 72vh, 820px)",
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          .hero-full-bleed { height: clamp(620px, 78vh, 920px) !important; }
        }
      `}</style>

      <div className="hero-full-bleed absolute inset-0" style={{ height: "inherit" }}>
        <img
          src={image}
          alt={`${categoryLabel} — Hero`}
          loading="eager"
          className="
            absolute inset-0 h-full w-full object-cover
            object-[50%_40%] md:object-[50%_45%]
          "
        />

        {/* leichtes Overlay wie Balboa */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Textlayer */}
        <div className="absolute inset-0 flex items-center">
          {/* “linksbündig aber mittig im Overlay”: wir zentrieren den Block vertikal,
              und geben ihm links/rechts Padding + max-width */}
          <div className="w-full px-[8vw] md:px-[10vw]">
            <p
              className="
                text-[28px] md:text-[32px]
                font-medium text-white
                leading-[1.22]
                max-w-[920px]
              "
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.45)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      {/* Abstand zwischen Hero und erster Bildzeile (WorkGallery) kommt über WorkGallery pt-...,
          aber falls du es “härter” willst: hier kann man unten noch Spacer geben.
          Ich lasse es bewusst sauber im Gallery-Section Spacing. */}
    </motion.section>
  );
};

export default FullBleedHero;
