import { useState } from "react";
import { motion } from "framer-motion";
import { resolveFilmAsset } from "@/data/filmAssets";
import type { FilmCredit, FilmStill } from "@/data/films";

interface FilmEntryProps {
  title: string;
  meta: string;
  text: string;
  stills: FilmStill[];
  videoUrl: string;
  videoType: "srf" | "vimeo";
  credits: FilmCredit[];
}

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/** A single still image with graceful fallback to gray placeholder */
function StillImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const resolvedSrc = resolveFilmAsset(src);

  if (!resolvedSrc || failed) {
    return (
      <div className="w-full aspect-[16/9] bg-neutral-200 flex items-center justify-center">
        <span className="text-neutral-400 text-xs select-none">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="w-full aspect-[16/9] object-cover"
    />
  );
}

/**
 * Split description into lead (first paragraph) and body (remaining paragraphs).
 */
function splitDescription(text: string): { lead: string; body: string[] } {
  const idx = text.indexOf("\n\n");
  if (idx === -1) {
    return { lead: text, body: [] };
  }
  const lead = text.slice(0, idx);
  const rest = text.slice(idx + 2);
  const body = rest.split("\n\n").filter((p) => p.trim().length > 0);
  return { lead, body };
}

const FilmEntry = ({
  title,
  text,
  stills,
  videoUrl,
  videoType,
  credits,
}: FilmEntryProps) => {
  const { lead, body } = splitDescription(text);

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={fade}
      className="w-full"
    >
      {/* 1. Title */}
      <h1 className="text-[36px] md:text-[56px] font-medium text-foreground leading-[1.08] mb-6">
        {title}
      </h1>

      {/* 2. Credits block — each credit on its own line, no colons */}
      {credits.length > 0 && (
        <div className="mb-8 md:mb-10 space-y-1">
          {credits.map((credit, i) => (
            <p key={i} className="text-[14px] md:text-[16px] text-foreground/50 leading-normal">
              <span className="font-medium text-foreground/70">{credit.label}</span>{" "}
              {credit.value}
            </p>
          ))}
        </div>
      )}

      {/* 3. Lead text — larger, matching photography excerpt style */}
      <p className="text-[22px] md:text-[32px] font-light text-foreground leading-snug mb-10 md:mb-14">
        {lead}
      </p>

      {/* 4. Body text — ~10% larger than previous 16/18px, so ~18/20px */}
      {body.length > 0 && (
        <div className="space-y-5 text-foreground text-[18px] md:text-[20px] leading-relaxed mb-10 md:mb-14">
          {body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}

      {/* 5. Stills grid — 2 columns desktop (2×3), 1 column mobile, 16:9 */}
      {stills.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-10 md:mb-14">
          {stills.map((still, i) => (
            <StillImage key={i} src={still.src} alt={still.alt} />
          ))}
        </div>
      )}

      {/* 6. Video player — 16:9, same width as stills grid */}
      <div className="relative w-full aspect-video bg-black/5 overflow-hidden">
        <iframe
          src={videoUrl}
          title={title}
          className="absolute inset-0 w-full h-full border-none"
          allow={
            videoType === "srf"
              ? "autoplay; fullscreen; encrypted-media"
              : "autoplay; fullscreen; picture-in-picture"
          }
          allowFullScreen
          loading="lazy"
        />
      </div>
    </motion.article>
  );
};

export default FilmEntry;
