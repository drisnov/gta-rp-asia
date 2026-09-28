export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="GTA Roleplay Asia">
      <svg width={size} height={size} viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="32" height="32" fill="#111417" stroke="#E8E6DF" strokeWidth="2" />
        <rect x="6" y="6" width="9" height="9" fill="#ff5d8f" />
        <rect x="19" y="6" width="9" height="9" fill="none" stroke="#E8E6DF" strokeWidth="2" />
        <rect x="6" y="19" width="9" height="9" fill="none" stroke="#E8E6DF" strokeWidth="2" />
        <rect x="19" y="19" width="9" height="9" fill="#E8E6DF" />
      </svg>
      <span className="leading-none">
<span className="block text-[15px] font-extrabold tracking-tight text-paper">
            GTA<span className="text-blush">//</span>RP_ASIA
        </span>
        <span className="block text-[10px] font-medium tracking-[0.22em] text-muted">
          ROLEPLAY COMMUNITY
        </span>
      </span>
    </span>
  );
}
