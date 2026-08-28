"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Shows the still bulb in light mode and the animated one in dark mode.
 *
 * The video is only mounted when the dark class is present, so light-mode
 * visitors never download it. A MutationObserver watches <html> so the swap
 * happens the moment the header toggle fires, without needing shared state.
 */
export default function HeroMedia({
  image,
  video,
  poster,
  alt,
}: {
  image: string;
  video: string;
  poster: string;
  alt: string;
}) {
  const [isDark, setIsDark] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const read = () => setIsDark(root.classList.contains("dark"));
    read();

    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const readMotion = () => setReduceMotion(motion.matches);
    readMotion();
    motion.addEventListener("change", readMotion);

    return () => {
      observer.disconnect();
      motion.removeEventListener("change", readMotion);
    };
  }, []);

  const frame =
    "relative aspect-square w-full overflow-hidden rounded-2xl";

  // Someone who asked for less motion gets the video's own first frame,
  // so the composition still matches the dark palette.
  if (isDark && reduceMotion) {
    return (
      <div className={frame}>
        <Image
          src={poster}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>
    );
  }

  if (isDark) {
    return (
      <div className={frame}>
        <video
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
          className="h-full w-full object-cover"
          // The clip's own backdrop is a few levels off the page black, so a
          // soft radial fade stops it reading as a pasted-in rectangle.
          style={{
            maskImage:
              "radial-gradient(ellipse at center, black 55%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 55%, transparent 82%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className={frame}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        priority
      />
    </div>
  );
}
