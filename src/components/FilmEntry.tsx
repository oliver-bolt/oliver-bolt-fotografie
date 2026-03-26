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
      <div className="w-full aspect-video bg-neutral-200 flex items-center justify-center">
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
      className="w-full aspect-video object-cover"
    />
  );
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
  // Find the "My role" credit
  const roleCredit = credits.find(
    (c) => c.label.toLowerCase() === "my role"
  );
  const otherCredits = credits.filter(
    (c) => c.label.toLowerCase() !== "my role"
  );

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={fade}
      className="w-full"
    >
      {/* Title */}
      <h1 className="text-[36px] md:text-[56px] font-medium text-foreground leading-[1.08] mb-3">
        {title}
      </h1>

      {/* Meta line */}
      <p className="text-[14px] md:text-[16px] text-foreground/50 mb-8 md:mb-10">
        {meta}
      </p>

      {/* Description text */}
      <div className="space-y-5 text-foreground leading-relaxed mb-10 md:mb-14 max-w-prose">
        {text.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Stills grid — 2 columns desktop, 1 column mobile */}
      {stills.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-10 md:mb-14">
          {stills.map((still, i) => (
            <StillImage key={i} src={still.src} alt={still.alt} />
          ))}
        </div>
      )}

      {/* Video player — 16:9 iframe */}
      <div className="relative w-full aspect-video bg-black/5 overflow-hidden mb-10 md:mb-14">
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

      {/* Credits block */}
      <div className="space-y-1">
        {roleCredit && (
          <p className="text-[14px] text-foreground leading-relaxed">
            <span className="text-foreground/50">My role:</span>{" "}
            <span className="text-foreground/80">{roleCredit.value}</span>
          </p>
        )}
        <dl className="space-y-[2px]">
          {otherCredits.map((credit) => (
            <div
              key={credit.label}
              className="flex gap-2 text-[13px] leading-relaxed"
            >
              <dt className="text-foreground/50 shrink-0">{credit.label}</dt>
              <dd className="text-foreground/80">{credit.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
};

export default FilmEntry;
