import { Avatar } from "./Avatar";

/** Quote block used in RecommendationSection. */
export function Testimonial({
  quote,
  avatar,
  name,
  meta,
}: {
  quote: string;
  avatar: string;
  name: string;
  meta: string;
}) {
  return (
    <blockquote className="rounded-2xl border border-ink/10 bg-white/50 p-8">
      <p className="text-lg italic leading-relaxed text-ink/80">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-6 flex items-center gap-3">
        <Avatar src={avatar} alt={name} size={48} />
        <div>
          <p className="font-semibold text-ink">{name}</p>
          <p className="text-sm text-ink/60">{meta}</p>
        </div>
      </footer>
    </blockquote>
  );
}
