"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ZoomableImage({
  src,
  alt,
  w,
  h,
  wide = false,
}: {
  src: string;
  alt: string;
  w?: number;
  h?: number;
  /** Break out of the reading column so multi-screen images stay legible. */
  wide?: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const frame =
    "block cursor-zoom-in overflow-hidden rounded-xl border border-ink/10 bg-surface transition-shadow hover:shadow-lg";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${alt} — click to zoom`}
        className={
          wide
            ? `relative left-1/2 mt-6 w-[min(94vw,1400px)] -translate-x-1/2 ${frame}`
            : `mt-4 w-full ${frame}`
        }
      >
        {w && h ? (
          <Image
            src={src}
            alt={alt}
            width={w}
            height={h}
            sizes="(min-width: 1500px) 1400px, 94vw"
            className="h-auto w-full"
          />
        ) : (
          <span className="relative block aspect-[3024/1964] w-full bg-brand/10">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-contain"
            />
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] cursor-zoom-out overflow-auto bg-panel/95 p-4 sm:p-8"
        >
          <span className="pointer-events-none fixed right-5 top-5 rounded-full bg-oncontrast/90 px-4 py-2 text-sm font-semibold text-panel">
            Close ✕
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="mx-auto h-auto w-full max-w-[1700px] rounded-lg bg-surface"
          />
        </div>
      )}
    </>
  );
}
