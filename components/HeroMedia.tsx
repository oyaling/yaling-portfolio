"use client";

import { useEffect, useState } from "react";

/**
 * Animated bulb in both themes: a warm cream clip in light, a near-black one
 * in dark.
 *
 * The posters are painted as CSS backgrounds and switched with the `dark`
 * class, so the correct frame is on screen before any JavaScript runs — no
 * wrong-theme flash. Once mounted, only the matching video is downloaded, so
 * a visitor never pays for the theme they are not using.
 */

// The clips' own backdrops sit a few levels off the page colour, so a soft
// radial fade stops them reading as pasted-in rectangles. `closest-side` is
// what makes the gradient reach every edge — the default farthest-corner
// sizing leaves the top and bottom still partly opaque, showing a seam.
const FADE =
  "radial-gradient(ellipse closest-side at center, black 45%, transparent 96%)";
const fade = { maskImage: FADE, WebkitMaskImage: FADE } as const;

export default function HeroMedia({
  lightVideo,
  lightPoster,
  darkVideo,
  darkPoster,
  alt,
}: {
  lightVideo: string;
  lightPoster: string;
  darkVideo: string;
  darkPoster: string;
  alt: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const read = () => setIsDark(root.classList.contains("dark"));
    read();
    setMounted(true);

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

  const showVideo = mounted && !reduceMotion;

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
      {/* Theme-correct still frame, live before hydration. */}
      <div
        aria-hidden
        style={{ ...fade, backgroundImage: `url(${lightPoster})` }}
        className="absolute inset-0 bg-cover bg-center dark:hidden"
      />
      <div
        aria-hidden
        style={{ ...fade, backgroundImage: `url(${darkPoster})` }}
        className="absolute inset-0 hidden bg-cover bg-center dark:block"
      />

      {showVideo && (
        <video
          key={isDark ? "dark" : "light"}
          src={isDark ? darkVideo : lightVideo}
          poster={isDark ? darkPoster : lightPoster}
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
          style={fade}
          className="relative h-full w-full object-cover"
        />
      )}
    </div>
  );
}
