import type { Lang } from "./site";

const dict = {
  id: {
    nav: { divisi: "Divisi", seru: "Keseruan", gabung: "Gabung", rules: "Rules", faq: "FAQ", discord: "Join Discord" },
    hero: {
      kicker: "KOMUNITAS ROLEPLAY // ASIA",
      titleA: "GTA ROLEPLAY",
      titleB: "ASIA",
      desc: "Bukan server, bukan event. Ini basecamp: tempat ngobrol, diskusi lore, mabar RP, dan cari circle baru — untuk pemain San Andreas maupun FiveM.",
      ctaDiscord: "Join Discord",
      ctaDivisi: "Pilih Divisi",
      note: "> online setiap malam // pemula welcome",
    },
    stats: [
      { k: "2", v: "Divisi aktif — SA & FiveM" },
      { k: "ID+EN", v: "Dua bahasa, satu tongkrongan" },
      { k: "0", v: "Syarat ribet — join, sapa, main" },
    ],
    divisi: {
      title: "01 / DIVISI",
      heading: "Dua pintu, satu rumah.",
      cards: [
        {
          tag: "SA // KLASIK",
          name: "San Andreas (SA-MP)",
          desc: "Buat yang cinta era 2004: ringan, jalan di PC kentang, HP ikut nimbrung diskusi. Fokus RP teks, faksi, dan cerita kota.",
          points: ["Cocok: pemula & spek pas-pasan", "Syarat: GTA SA + SA-MP", "Nongkrong: #sa-lounge"],
        },
        {
          tag: "V // MODERN",
          name: "FiveM (GTA V)",
          desc: "Buat yang mau visual modern: job kompleks, voice RP, sinematik. Diskusi setting, whitelist, dan cari faction bareng.",
          points: ["Cocok: pemburu immersion", "Syarat: GTA V + FiveM", "Nongkrong: #fivem-lounge"],
        },
      ],
    },
    seru: {
      title: "02 / YANG SERU",
      heading: "Ngapain aja di sini?",
      items: [
        { t: "Ngobrol & diskusi", d: "Lore kota, ide karakter, debat faksi — rame tiap malam." },
        { t: "Mabar RP", d: "Patungan bikin skenario, bagi peran polisi/mekanik/kriminal." },
        { t: "Cari circle", d: "Solo player langsung dapat teman satu timezone Asia." },
        { t: "Sharing mod & setting", d: "ENB, crosshair, setting voice — biar tidak ngelag." },
        { t: "Sesi sinematik", d: "Foto & klip RP terbaik dipajang tiap minggu." },
        { t: "Tanya jawab pemula", d: "Bedain MG/PG/DM? Ditanya, dijawab, tanpa bully." },
      ],
    },
    gabung: {
      title: "03 / CARA GABUNG",
      heading: "Tiga langkah, lima menit.",
      steps: [
        { n: "01", t: "Join Discord", d: "Masuk server, baca #rules, ambil role SA / FiveM." },
        { n: "02", t: "Sapa & perkenalan", d: "Nick, timezone (WIB/WITA/WIT/+8), divisi pilihan." },
        { n: "03", t: "Pilih divisi", d: "Masuk #sa-lounge atau #fivem-lounge, langsung ikut obrolan." },
      ],
    },
    rules: {
      title: "04 / RULES",
      heading: "Biar tongkrongan awet.",
      items: [
        "No SARA, no hate speech, no toxic ke pemain baru.",
        "No cheat, no dox, no sebar data pribadi orang.",
        "Iklan server lain izin admin dulu.",
        "Bedakan IC/OOC — masalah karakter jangan dibawa ke personal.",
        "Spoiler cerita faksi pakai tag spoiler.",
        "Pemula bertanya, senior menjawab. Bullying = kick.",
      ],
      more: "Rules lengkap →",
    },
    faq: {
      title: "05 / FAQ",
      heading: "Yang sering ditanya.",
      items: [
        { q: "Ini server SA-MP / FiveM?", a: "Bukan. Ini komunitas diskusi. Kamu main di server favoritmu, nongkrongnya di sini." },
        { q: "HP bisa ikut?", a: "Bisa untuk diskusi, cari teman, dan ikut sesi non-game. Main gamenya tetap butuh PC." },
        { q: "Pemula total boleh?", a: "Justru target utama. Ada channel khusus tanya jawab tanpa judge." },
        { q: "SA atau FiveM, pilih mana?", a: "Spek ringan / suka RP teks → SA. PC kuat / suka voice & visual → FiveM. Boleh dua-duanya." },
        { q: "Ada event resmi?", a: "Tidak ada kalender event. Yang ada mabar spontan dari member — post di channel, yang mau join tinggal reply." },
      ],
    },
    komunitas: {
      title: "06 / KOMUNITAS",
      heading: "Nongkrong di mana?",
      desc: "Semua link terpusat di Discord. Sisanya arsip & hiburan.",
    },
    footer: {
      line: "GTA ROLEPLAY ASIA — komunitas penggemar. Tidak berafiliasi dengan Rockstar Games / Take-Two Interactive.",
      made: "Dibangun dengan Next.js + JetBrains Mono.",
    },
  },
  en: {
    nav: { divisi: "Divisions", seru: "Fun stuff", gabung: "Join", rules: "Rules", faq: "FAQ", discord: "Join Discord" },
    hero: {
      kicker: "ROLEPLAY COMMUNITY // ASIA",
      titleA: "GTA ROLEPLAY",
      titleB: "ASIA",
      desc: "Not a server, not an event. A basecamp: chat, discuss lore, play RP together, and find your new circle — for both San Andreas and FiveM players.",
      ctaDiscord: "Join Discord",
      ctaDivisi: "Pick a division",
      note: "> online every night // beginners welcome",
    },
    stats: [
      { k: "2", v: "Active divisions — SA & FiveM" },
      { k: "ID+EN", v: "Two languages, one hangout" },
      { k: "0", v: "Hassle — join, say hi, play" },
    ],
    divisi: {
      title: "01 / DIVISIONS",
      heading: "Two doors, one home.",
      cards: [
        {
          tag: "SA // CLASSIC",
          name: "San Andreas (SA-MP)",
          desc: "For the 2004 era lovers: lightweight, runs on weak PCs, phones welcome for chat. Text RP, factions, city stories.",
          points: ["For: beginners & low-spec", "Need: GTA SA + SA-MP", "Hangout: #sa-lounge"],
        },
        {
          tag: "V // MODERN",
          name: "FiveM (GTA V)",
          desc: "For modern visuals: complex jobs, voice RP, cinematics. Settings talk, whitelist help, faction hunting.",
          points: ["For: immersion hunters", "Need: GTA V + FiveM", "Hangout: #fivem-lounge"],
        },
      ],
    },
    seru: {
      title: "02 / FUN STUFF",
      heading: "What do people do here?",
      items: [
        { t: "Chat & discuss", d: "City lore, character ideas, faction debates — busy every night." },
        { t: "Play RP together", d: "Crowdsource scenarios, split cop/mechanic/criminal roles." },
        { t: "Find your circle", d: "Solo players instantly meet the same Asia timezone." },
        { t: "Share mods & settings", d: "ENB, crosshair, voice settings — no lag." },
        { t: "Cinematic sessions", d: "Best RP shots & clips featured weekly." },
        { t: "Beginner Q&A", d: "MG/PG/DM explained, asked and answered, no bullying." },
      ],
    },
    gabung: {
      title: "03 / HOW TO JOIN",
      heading: "Three steps, five minutes.",
      steps: [
        { n: "01", t: "Join Discord", d: "Enter the server, read #rules, pick SA / FiveM role." },
        { n: "02", t: "Say hi & intro", d: "Nick, timezone (WIB/WITA/WIT/+8), chosen division." },
        { n: "03", t: "Pick a division", d: "Enter #sa-lounge or #fivem-lounge, join the chat." },
      ],
    },
    rules: {
      title: "04 / RULES",
      heading: "Keep the hangout alive.",
      items: [
        "No hate speech, no toxicity toward new players.",
        "No cheats, no doxxing, no sharing personal data.",
        "Ask admins before advertising other servers.",
        "Separate IC/OOC — character beef stays in character.",
        "Faction story spoilers use spoiler tags.",
        "Beginners ask, seniors answer. Bullying = kick.",
      ],
      more: "Full rules →",
    },
    faq: {
      title: "05 / FAQ",
      heading: "Frequently asked.",
      items: [
        { q: "Is this a SA-MP / FiveM server?", a: "No. A discussion community. You play on your favorite server, you hang out here." },
        { q: "Can I join from phone?", a: "Yes for chat, finding friends, non-game sessions. Playing still needs a PC." },
        { q: "Total beginner allowed?", a: "You are the main target. Dedicated no-judge Q&A channel." },
        { q: "SA or FiveM, which one?", a: "Low-spec / text RP lover → SA. Strong PC / voice & visuals → FiveM. Both is fine." },
        { q: "Any official events?", a: "No event calendar. Spontaneous member sessions — post in channel, whoever wants in replies." },
      ],
    },
    komunitas: {
      title: "06 / COMMUNITY",
      heading: "Where to hang out?",
      desc: "Everything hubs through Discord. The rest is archive & fun.",
    },
    footer: {
      line: "GTA ROLEPLAY ASIA — fan community. Not affiliated with Rockstar Games / Take-Two Interactive.",
      made: "Built with Next.js + JetBrains Mono.",
    },
  },
} as const;

export type Dict = (typeof dict)["id"];
export function getDict(lang: Lang): Dict {
  return dict[lang] as unknown as Dict;
}
