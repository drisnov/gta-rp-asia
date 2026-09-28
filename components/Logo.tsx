// "Kota yang Tidak Pernah Tidur" — logo GTA RP Asia.
// Filosofi:
// - Bingkai rounded = basecamp, wadah komunitas.
// - Skyline 3 gedung = dua kota (SA klasik yang pendek + FiveM modern yang tinggi).
// - Jendela blush menyala = member yang online dan main tiap malam.
// - Bulan blush = kota tidak pernah tidur.
// - "//" di wordmark = slash command RP (/me, /do) + dua divisi.
export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="GTA Roleplay Asia">
      <svg width={size} height={size} viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="32" height="32" rx="7" fill="#181222" stroke="#F4EEE3" strokeWidth="2" />
        <circle cx="24.5" cy="9.5" r="3" fill="#FF5D8F" />
        <rect x="6" y="17" width="6" height="10" fill="#F4EEE3" />
        <rect x="14" y="11" width="7" height="16" fill="#F4EEE3" />
        <rect x="16.5" y="14" width="2.5" height="3" fill="#181222" />
        <rect x="16.5" y="19" width="2.5" height="3" fill="#FF5D8F" />
        <rect x="23" y="19" width="5" height="8" fill="#F4EEE3" />
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
