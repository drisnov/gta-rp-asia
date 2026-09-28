import type { Lang } from "./site";

const dict = {
  id: {
    nav: { divisi: "Divisi", galeri: "Galeri", team: "Pengurus", faq: "FAQ", chat: "Live Chat", discord: "Join Discord" },
    hero: {
      kicker: "KOMUNITAS ROLEPLAY // ASIA // EST. 2024",
      titleA: "PILIH JALANMU.",
      titleB: "TULIS CERITAMU.",
      lore: "Kota ini tidak pernah tidur. Dari gang sempit San Andreas sampai jalanan neon Los Santos — setiap sirene, setiap transaksi, setiap tawa di warung kopi adalah cerita yang menunggu dimainkan. GTA RP Asia adalah basecamp-nya: satu tongkrongan untuk tiga divisi, dua bahasa, dan ratusan karakter yang hidup setiap malam.",
      ctaDiscord: "Masuk Basecamp",
      ctaDivisi: "Pilih Divisimu",
      note: "> online setiap malam // pemula selalu welcome",
    },
    stats: [
      { k: "03", v: "Divisi aktif — SA, FiveM, Hybrid" },
      { k: "ID+EN", v: "Dua bahasa, satu timezone Asia" },
      { k: "24/7", v: "Obrolan & mabar jalan terus" },
    ],
    marquee: ["SAN ANDREAS", "FIVEM", "ROLEPLAY", "MABAR", "LORE", "SINEMATIK", "KOMUNITAS"],
    divisi: {
      title: "01 / PILIH DIVISIMU",
      heading: "Tiga pintu, satu rumah.",
      sub: "Klik tiap divisi. Tidak ada pilihan yang salah — boleh pindah kapan saja, boleh ikut semuanya.",
      cards: [
        {
          tag: "SA // KLASIK",
          name: "San Andreas",
          big: "SA-MP",
          desc: "Era 2004 yang abadi: ringan, jalan di PC kentang, RP teks yang dalam. Faksi, teritorial, dan drama kota yang ditulis kata per kata.",
          points: ["Cocok: pemula & spek pas-pasan", "Syarat: GTA SA + SA-MP", "Nongkrong: #sa-lounge"],
        },
        {
          tag: "V // MODERN",
          name: "FiveM",
          big: "FIVEM",
          desc: "Visual modern, voice RP, job kompleks. Kejar-kejaran polisi, bisnis legal maupun gelap, dan sinematik kelas film.",
          points: ["Cocok: pemburu immersion", "Syarat: GTA V + FiveM", "Nongkrong: #fivem-lounge"],
        },
        {
          tag: "X // HYBRID",
          name: "Hybrid",
          big: "HYBRID",
          desc: "Main dua-duanya. Satu karakter, dua kota — atau dua karakter beda nasib. Buat yang tidak bisa memilih dan tidak mau memilih.",
          points: ["Cocok: veteran & eksplorator", "Syarat: ikut salah satu divisi dulu", "Nongkrong: #hybrid-lounge"],
        },
      ],
    },
    pillars: {
      title: "02 / KENAPA DI SINI",
      heading: "Bukan server. Ekosistem.",
      items: [
        { n: "01", t: "Mabar", d: "Skenario patungan tiap malam: bagi peran polisi, EMS, mekanik, kriminal. Post di channel, yang mau join tinggal reply." },
        { n: "02", t: "Lore & Karakter", d: "Bedah backstory, debat faksi, bangun arc karakter bareng. Karakter bagus lahir dari diskusi, bukan contekan." },
        { n: "03", t: "Mod & Setting", d: "ENB, crosshair, setting voice, optimasi FPS. Biar sinematik mulus dan tidak ngelag pas adegan penting." },
        { n: "04", t: "Sinematik", d: "Foto dan klip RP terbaik dipajang tiap minggu di galeri. Main bagus, diabadikan, ditonton semua." },
        { n: "05", t: "Sekolah RP", d: "Bedain MG, PG, DM, RDM? Ditanya, dijawab, tanpa bully. Pemula adalah target utama, bukan bahan olok-olok." },
        { n: "06", t: "Circle Asia", d: "Satu timezone, satu bahasa gaul. Solo player masuk langsung dapat teman mabar malam ini juga." },
      ],
    },
    galeri: {
      title: "03 / GALERI",
      heading: "Dipotret dari jalanan.",
      desc: "Klip dan foto terbaik member. Punyamu bisa nangkring di sini minggu depan.",
      cta: "Kirim karyamu via Discord →",
      items: [
        { tag: "FIVEM // KEJARAN", t: "Patroli malam minggu", d: "10 unit vs 1 pelarian — berakhir damai di parkiran." },
        { tag: "SA-MP // FAKSI", t: "Serah terima wilayah", d: "Diplomasi dua faksi, nol tembakan, sejuta tensi." },
        { tag: "HYBRID // SINE", t: "Kota bangun pagi", d: "Sesi foto sunrise, 14 karakter, 1 momen." },
        { tag: "FIVEM // BISNIS", t: "Grand opening bengkel", d: "Hari pertama buka, antrean sampai tikungan." },
      ],
    },
    gabung: {
      title: "04 / CARA GABUNG",
      heading: "Tiga langkah, lima menit.",
      steps: [
        { n: "01", t: "Masuk basecamp", d: "Join Discord, baca #rules, ambil role divisimu." },
        { n: "02", t: "Perkenalan", d: "Nick, timezone (WIB/WITA/WIT/+8), divisi pilihan." },
        { n: "03", t: "Gas mabar", d: "Masuk lounge divisimu, sapa, langsung ikut obrolan." },
      ],
    },
    team: {
      title: "05 / PENGURUS",
      heading: "Dijaga yang begadang.",
      desc: "Tim kecil yang mastiin tongkrongan tetap sehat. Sapa mereka di Discord — atau gabung jadi bagian tim.",
      cta: "Mau jadi pengurus? Sapa di Discord →",
      members: [
        { init: "F", role: "Founder", d: "Nyalain api pertama, jaga arah komunitas tetap ke RP berkualitas." },
        { init: "SA", role: "Admin SA-MP", d: "Urus divisi klasik: faksi, event teks, dan sekolah RP pemula." },
        { init: "V", role: "Admin FiveM", d: "Urus divisi modern: whitelist, skenario voice, dan sesi sinematik." },
        { init: "C", role: "Content Crew", d: "Panen klip terbaik, urus galeri, dan arsip momen mingguan." },
      ],
    },
    rules: {
      title: "06 / RULES",
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
      title: "07 / FAQ",
      heading: "Yang sering ditanya.",
      items: [
        { q: "Ini server SA-MP / FiveM?", a: "Bukan. Ini komunitas diskusi. Kamu main di server favoritmu, nongkrongnya di sini." },
        { q: "HP bisa ikut?", a: "Bisa untuk diskusi, cari teman, dan ikut sesi non-game. Main gamenya tetap butuh PC." },
        { q: "Pemula total boleh?", a: "Justru target utama. Ada sesi sekolah RP dan channel tanya jawab tanpa judge." },
        { q: "SA atau FiveM, pilih mana?", a: "Spek ringan / suka RP teks → SA. PC kuat / suka voice & visual → FiveM. Ragu? Ambil Hybrid, coba dua-duanya." },
        { q: "Ada event resmi?", a: "Mabar spontan dari member tiap malam, plus sesi sinematik mingguan. Post di channel, yang mau join tinggal reply." },
      ],
    },
    chat: {
      title: "08 / LIVE CHAT",
      heading: "Sapa duluan dari web.",
    },
    komunitas: {
      title: "09 / KOMUNITAS",
      heading: "Nongkrong di mana?",
      desc: "Semua link terpusat di Discord. Sisanya arsip & hiburan.",
    },
    footer: {
      line: "GTA ROLEPLAY ASIA — komunitas penggemar. Tidak berafiliasi dengan Rockstar Games / Take-Two Interactive.",
      made: "Dibangun dengan Next.js + Supabase. Foto: Unsplash.",
    },
  },
  en: {
    nav: { divisi: "Divisions", galeri: "Gallery", team: "Crew", faq: "FAQ", chat: "Live Chat", discord: "Join Discord" },
    hero: {
      kicker: "ROLEPLAY COMMUNITY // ASIA // EST. 2024",
      titleA: "PICK YOUR PATH.",
      titleB: "WRITE YOUR STORY.",
      lore: "This city never sleeps. From the narrow alleys of San Andreas to the neon streets of Los Santos — every siren, every deal, every laugh at the corner shop is a story waiting to be played. GTA RP Asia is the basecamp: one hangout for three divisions, two languages, and hundreds of characters alive every night.",
      ctaDiscord: "Enter Basecamp",
      ctaDivisi: "Pick Your Division",
      note: "> online every night // beginners always welcome",
    },
    stats: [
      { k: "03", v: "Active divisions — SA, FiveM, Hybrid" },
      { k: "ID+EN", v: "Two languages, one Asia timezone" },
      { k: "24/7", v: "Chat & sessions never stop" },
    ],
    marquee: ["SAN ANDREAS", "FIVEM", "ROLEPLAY", "SESSIONS", "LORE", "CINEMATICS", "COMMUNITY"],
    divisi: {
      title: "01 / PICK YOUR DIVISION",
      heading: "Three doors, one home.",
      sub: "Click each division. No wrong choice — switch anytime, or join them all.",
      cards: [
        {
          tag: "SA // CLASSIC",
          name: "San Andreas",
          big: "SA-MP",
          desc: "The eternal 2004 era: lightweight, runs on weak PCs, deep text RP. Factions, turf, and city drama written word by word.",
          points: ["For: beginners & low-spec", "Need: GTA SA + SA-MP", "Hangout: #sa-lounge"],
        },
        {
          tag: "V // MODERN",
          name: "FiveM",
          big: "FIVEM",
          desc: "Modern visuals, voice RP, complex jobs. Cop chases, legal and shady business, film-grade cinematics.",
          points: ["For: immersion hunters", "Need: GTA V + FiveM", "Hangout: #fivem-lounge"],
        },
        {
          tag: "X // HYBRID",
          name: "Hybrid",
          big: "HYBRID",
          desc: "Play both. One character, two cities — or two characters with different fates. For those who can't and won't choose.",
          points: ["For: veterans & explorers", "Need: join one division first", "Hangout: #hybrid-lounge"],
        },
      ],
    },
    pillars: {
      title: "02 / WHY HERE",
      heading: "Not a server. An ecosystem.",
      items: [
        { n: "01", t: "Sessions", d: "Crowdfunded scenarios every night: split cop, EMS, mechanic, criminal roles. Post in channel, whoever wants in replies." },
        { n: "02", t: "Lore & Characters", d: "Dissect backstories, debate factions, build arcs together. Great characters are born from discussion." },
        { n: "03", t: "Mods & Settings", d: "ENB, crosshair, voice settings, FPS tuning. Smooth cinematics, no lag during key scenes." },
        { n: "04", t: "Cinematics", d: "Best RP shots & clips featured weekly in the gallery. Play well, get immortalized." },
        { n: "05", t: "RP School", d: "MG, PG, DM, RDM explained — asked and answered, no bullying. Beginners are the main target." },
        { n: "06", t: "Asia Circle", d: "One timezone, one slang. Solo players walk in and find tonight's squad instantly." },
      ],
    },
    galeri: {
      title: "03 / GALLERY",
      heading: "Shot from the streets.",
      desc: "Members' best clips and photos. Yours could hang here next week.",
      cta: "Submit via Discord →",
      items: [
        { tag: "FIVEM // CHASE", t: "Saturday night patrol", d: "10 units vs 1 runner — ended peacefully in a parking lot." },
        { tag: "SA-MP // FACTION", t: "Turf handover", d: "Two-faction diplomacy, zero shots, a million tension." },
        { tag: "HYBRID // CINE", t: "City wakes up", d: "Sunrise photo session, 14 characters, 1 moment." },
        { tag: "FIVEM // BUSINESS", t: "Workshop grand opening", d: "Day one open, queue around the corner." },
      ],
    },
    gabung: {
      title: "04 / HOW TO JOIN",
      heading: "Three steps, five minutes.",
      steps: [
        { n: "01", t: "Enter basecamp", d: "Join Discord, read #rules, grab your division role." },
        { n: "02", t: "Say hi", d: "Nick, timezone (WIB/WITA/WIT/+8), chosen division." },
        { n: "03", t: "Play now", d: "Enter your division lounge, greet, join the chat." },
      ],
    },
    team: {
      title: "05 / CREW",
      heading: "Kept up by night owls.",
      desc: "A small team keeping the hangout healthy. Greet them on Discord — or join the crew.",
      cta: "Want to crew up? Say hi on Discord →",
      members: [
        { init: "F", role: "Founder", d: "Lit the first fire, keeps the community pointed at quality RP." },
        { init: "SA", role: "SA-MP Admin", d: "Runs the classic division: factions, text events, beginner RP school." },
        { init: "V", role: "FiveM Admin", d: "Runs the modern division: whitelist, voice scenarios, cinematic sessions." },
        { init: "C", role: "Content Crew", d: "Harvests the best clips, curates the gallery, archives weekly moments." },
      ],
    },
    rules: {
      title: "06 / RULES",
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
      title: "07 / FAQ",
      heading: "Frequently asked.",
      items: [
        { q: "Is this a SA-MP / FiveM server?", a: "No. A discussion community. You play on your favorite server, you hang out here." },
        { q: "Can I join from phone?", a: "Yes for chat, finding friends, non-game sessions. Playing still needs a PC." },
        { q: "Total beginner allowed?", a: "You are the main target. RP school sessions plus a no-judge Q&A channel." },
        { q: "SA or FiveM, which one?", a: "Low-spec / text RP lover → SA. Strong PC / voice & visuals → FiveM. Unsure? Go Hybrid, try both." },
        { q: "Any official events?", a: "Spontaneous member sessions nightly, plus weekly cinematic shoots. Post in channel, whoever wants in replies." },
      ],
    },
    chat: {
      title: "08 / LIVE CHAT",
      heading: "Say hi from the web.",
    },
    komunitas: {
      title: "09 / COMMUNITY",
      heading: "Where to hang out?",
      desc: "Everything hubs through Discord. The rest is archive & fun.",
    },
    footer: {
      line: "GTA ROLEPLAY ASIA — fan community. Not affiliated with Rockstar Games / Take-Two Interactive.",
      made: "Built with Next.js + Supabase. Photos: Unsplash.",
    },
  },
} as const;

export type Dict = (typeof dict)["id"];
export function getDict(lang: Lang): Dict {
  return dict[lang] as unknown as Dict;
}
