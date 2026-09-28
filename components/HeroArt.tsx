// Original hand-drawn panorama: SA dusk (left) blending into FiveM neon night (right).
// No third-party assets. Pure SVG, aria-hidden decoration.
export default function HeroArt({ className = "" }: { className?: string }) {
  const backBars = [
    { x: 0, w: 90, h: 70 }, { x: 95, w: 60, h: 110 }, { x: 160, w: 100, h: 80 },
    { x: 265, w: 70, h: 130 }, { x: 340, w: 110, h: 90 }, { x: 455, w: 80, h: 120 },
    { x: 540, w: 120, h: 85 }, { x: 665, w: 75, h: 140 }, { x: 745, w: 105, h: 100 },
    { x: 855, w: 90, h: 150 }, { x: 950, w: 120, h: 110 }, { x: 1075, w: 85, h: 160 },
    { x: 1165, w: 110, h: 120 }, { x: 1280, w: 90, h: 170 }, { x: 1375, w: 65, h: 130 },
  ];
  const towers = [
    { x: 990, w: 66, h: 210 }, { x: 1062, w: 52, h: 270 }, { x: 1120, w: 78, h: 185 },
    { x: 1204, w: 58, h: 245 }, { x: 1268, w: 70, h: 195 }, { x: 1344, w: 58, h: 235 },
  ];
  const windows: { x: number; y: number; o: number }[] = [];
  towers.forEach((tw, bi) => {
    const rows = Math.floor((tw.h - 30) / 22);
    const cols = Math.floor((tw.w - 20) / 16);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if ((bi * 31 + r * 17 + c * 7) % 4 === 0) continue;
        windows.push({
          x: tw.x + 10 + c * 16,
          y: 480 - tw.h + 16 + r * 22,
          o: (bi + r + c) % 3 === 0 ? 0.9 : 0.35,
        });
      }
    }
  });
  const stars = [
    { x: 880, y: 60 }, { x: 950, y: 110 }, { x: 1040, y: 55 }, { x: 1130, y: 100 },
    { x: 1210, y: 50 }, { x: 1300, y: 95 }, { x: 1380, y: 55 }, { x: 1000, y: 150 },
    { x: 1180, y: 150 }, { x: 1350, y: 150 }, { x: 920, y: 180 }, { x: 1260, y: 190 },
  ];

  return (
    <svg
      viewBox="0 0 1440 480"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3a1c07" />
          <stop offset="0.35" stopColor="#2a1420" />
          <stop offset="0.65" stopColor="#141428" />
          <stop offset="1" stopColor="#0b0d10" />
        </linearGradient>
        <radialGradient id="heroSun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F5A524" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#F5A524" stopOpacity="0.35" />
          <stop offset="1" stopColor="#F5A524" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect x="0" y="0" width="1440" height="480" fill="url(#heroSky)" />

      {/* stars (night side) */}
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={i % 3 === 0 ? 2 : 1.2} fill="#E8E6DF" opacity={0.35 + (i % 4) * 0.12} />
      ))}

      {/* sun + glow (dusk side) */}
      <circle cx="330" cy="310" r="150" fill="url(#heroSun)" />
      <circle cx="330" cy="310" r="82" fill="#F5A524" opacity="0.9" />

      {/* birds */}
      <g stroke="#0B0D10" strokeWidth="3" fill="none" opacity="0.8">
        <path d="M640,140 q8,-8 16,0 q8,-8 16,0" />
        <path d="M700,110 q6,-6 12,0 q6,-6 12,0" />
        <path d="M590,100 q5,-5 10,0 q5,-5 10,0" />
      </g>

      {/* back skyline (full width) */}
      {backBars.map((b, i) => (
        <rect key={i} x={b.x} y={480 - b.h} width={b.w} height={b.h} fill="#2b333c" opacity="0.6" />
      ))}

      {/* palms (dusk side silhouettes) */}
      <g fill="#0B0D10" opacity="0.95">
        <path d="M132,480 C138,420 144,360 152,306 L166,308 C158,362 152,422 148,480 Z" />
        <path d="M158,306 Q110,286 76,308 Q112,304 158,318 Z" />
        <path d="M158,306 Q206,284 240,304 Q204,302 158,318 Z" />
        <path d="M158,306 Q140,262 112,248 Q132,272 152,314 Z" />
        <path d="M158,306 Q178,262 206,250 Q184,272 164,314 Z" />
        <path d="M158,306 Q158,266 158,240 Q166,268 166,308 Z" />
        <circle cx="150" cy="316" r="7" />
        <circle cx="166" cy="318" r="6" />
      </g>
      <g fill="#0B0D10" opacity="0.9">
        <path d="M500,480 C504,440 508,400 512,364 L522,366 C518,402 514,442 512,480 Z" />
        <path d="M517,364 Q480,348 456,362 Q484,360 517,372 Z" />
        <path d="M517,364 Q554,348 578,360 Q550,360 517,372 Z" />
        <path d="M517,364 Q508,332 490,322 Q500,342 513,370 Z" />
        <circle cx="511" cy="372" r="5" />
      </g>

      {/* front towers (night side) */}
      {towers.map((tw, i) => (
        <rect key={i} x={tw.x} y={480 - tw.h} width={tw.w} height={tw.h} fill="#0B0D10" opacity="0.96" />
      ))}
      {windows.map((w, i) => (
        <rect key={i} x={w.x} y={w.y} width="8" height="11" fill="#F5A524" opacity={w.o} />
      ))}

      {/* ground */}
      <rect x="0" y="470" width="1440" height="10" fill="#0B0D10" />
    </svg>
  );
}
