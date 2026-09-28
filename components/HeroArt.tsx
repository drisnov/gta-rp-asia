import Image from "next/image";

// Real-photo hero: SA sunset palms (left) blending into neon night street (right).
// Photos: Unsplash (Venti Views, ZHENYU LUO) — free to use. Local files in /public.
export default function HeroArt({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      {/* Mobile: single neon frame, crops cleanly full-frame */}
      <Image
        src="/hero-fivem.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="block object-cover object-center md:hidden"
      />
      {/* Desktop: SA + FiveM diptych with blended seam */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/hero-sa.jpg"
          alt=""
          fill
          priority
          sizes="60vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/hero-fivem.jpg"
          alt=""
          fill
          priority
          sizes="60vw"
          className="object-cover object-center [mask-image:linear-gradient(to_right,transparent_38%,black_55%)]"
        />
      </div>
    </div>
  );
}
