import Image from "next/image";

/** Single circular avatar, e.g. the recommendation author photo. */
export function Avatar({
  src,
  alt,
  size = 48,
}: {
  src: string;
  alt: string;
  size?: number;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-full"
      style={{ height: size, width: size }}
    >
      <Image src={src} alt={alt} fill sizes={`${size}px`} className="object-cover" />
    </div>
  );
}

/** Overlapping avatar stack, e.g. the case study team row. */
export function AvatarGroup({ avatars }: { avatars: string[] }) {
  return (
    <div className="flex -space-x-3">
      {avatars.map((src, i) => (
        <div
          key={i}
          className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-cream"
        >
          <Image src={src} alt="" fill sizes="40px" className="object-cover" />
        </div>
      ))}
    </div>
  );
}
