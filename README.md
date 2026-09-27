# GTA Roleplay Asia — Landing Komunitas

Landing page komunitas GTA Roleplay Asia (San Andreas + FiveM).
Next.js 14 App Router + Tailwind + JetBrains Mono, bilingual ID/EN.

> Bukan server, bukan event. Basecamp diskusi: ngobrol, mabar RP, cari circle baru.

## Dev di Termux

Termux tidak punya `/usr/bin/env`, jadi script npm memanggil `node` langsung
(sudah diatur di `package.json`). Catatan: `next build` **tidak bisa** jalan
di Termux karena Next.js tidak menerbitkan biner SWC `android-arm64`
(404 saat download). Verifikasi lokal pakai typecheck:

```
npm install --no-audit --no-fund
node node_modules/typescript/bin/tsc --noEmit
node node_modules/next/dist/bin/next dev --port 3000
# dev server juga butuh SWC — kalau gagal, langsung deploy ke Vercel
```

## Deploy (disarankan)

1. Ganti semua link `#` di `lib/site.ts` dengan link asli (Discord, TikTok, YouTube, WhatsApp).
2. Push ke GitHub:
   ```
   git init && git add -A && git commit -m "GTA RP Asia landing"
   gh repo create gta-rp-asia --public --source=. --push
   ```
3. Import repo di Vercel (framework: Next.js). Build & deploy jalan di Vercel, bukan di HP.

## Struktur

- `app/layout.tsx` — font JetBrains Mono 400/500/700/800
- `app/page.tsx` — Nav, Hero, Stats, Divisi SA/FiveM, Keseruan, Gabung, Rules, FAQ, Komunitas, Footer
- `components/Logo.tsx` — logo SVG geometris (tanpa gambar AI)
- `lib/site.ts` — semua link komunitas satu tempat
- `lib/dict.ts` — kamus ID/EN
