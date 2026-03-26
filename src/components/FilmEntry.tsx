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
      <div className="w-full aspect-[4/3] bg-neutral-200 flex items-center justify-center">
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
      className="w-full aspect-[4/3] object-cover"
    />
  );
}

/**
 * Build the inline credits string.
 * Pattern: My role Production manager · Director Wendy Pillonel · …
 * NOTE: "My role" has NO colon after it.
 */
function buildCreditsLine(credits: FilmCredit[]): string {
  return credits
    .map((c) => {
      if (c.label.toLowerCase() === "my role") {
        return `My role ${c.value}`;
      }
      return `${c.label} ${c.value}`;
    })
    .join(" · ");
}

const FilmEntry = ({
  title,
  meta,
  text,
  stills,
  videoUrl,
  videoType,
  credits,
}: FilmEntryProps) => {
  const creditsLine = buildCreditsLine(credits);

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={fade}
      className="w-full"
    >
      {/* 1. Title */}
      <h1 className="text-[36px] md:text-[56px] font-medium text-foreground leading-[1.08] mb-3">
        {title}
      </h1>

      {/* 2. Meta line */}
      <p className="text-[14px] md:text-[16px] text-foreground/50 mb-2">
        {meta}
      </p>

      {/* 3. Credits block — inline with · separators, same style as meta */}
      {credits.length > 0 && (
        <p className="text-[14px] md:text-[16px] text-foreground/50 mb-8 md:mb-10">
          {creditsLine}
        </p>
      )}

      {/* 4. Body text — full content width, matching photography detail typography */}
      <div className="space-y-5 text-foreground text-[16px] md:text-[18px] leading-relaxed mb-10 md:mb-14">
        {text.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* 5. Stills grid — 2 columns desktop (2×3), 1 column mobile, stacked full-width */}
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
