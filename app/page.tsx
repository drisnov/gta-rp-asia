"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "../components/Logo";
import HeroArt from "../components/HeroArt";
import Reveal from "../components/Reveal";
import { AuthProvider, useAuth } from "../components/AuthContext";
import Chatroom from "../components/Chatroom";
import { SITE_LINKS, type Lang } from "../lib/site";
import { getDict } from "../lib/dict";

function SectionTitle({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.25em] text-blush">{children}</p>
  );
}

const GALLERY_GRAD = [
  "from-[#3a1c07] via-[#1a120b] to-[#181222]",
  "from-[#0e2a1f] via-[#101a15] to-[#181222]",
  "from-[#2a0e1c] via-[#1a1016] to-[#181222]",
  "from-[#0e1e2e] via-[#0f141b] to-[#181222]",
];

const DIV_IMGS = ["/hero-sa.jpg", "/hero-fivem.jpg", "/hero-sa.jpg"];
const DIV_WORDS = ["SA-MP", "FIVEM", "HYBRID"];

function AuthButtons({ lang }: { lang: Lang }) {
  const { user, nick, logout } = useAuth();
  if (user) {
    return (
      <span className="hidden items-center gap-2 sm:flex">
        <span className="max-w-24 truncate text-[12px] font-bold text-blush">@{nick}</span>
        <button
          onClick={logout}
          className="border border-line px-2.5 py-1.5 text-[12px] font-bold text-muted hover:text-paper"
        >
          {lang === "id" ? "Keluar" : "Logout"}
        </button>
      </span>
    );
  }
  return (
    <a
      href="#chat"
      className="hidden border border-line px-3.5 py-2 text-[12px] font-bold text-paper hover:border-muted sm:block"
    >
      {lang === "id" ? "Masuk" : "Login"}
    </a>
  );
}

export default function Page() {
  return (
    <AuthProvider>
      <Site />
    </AuthProvider>
  );
}

function Site() {
  const [lang, setLang] = useState<Lang>("id");
  const [div, setDiv] = useState(0);
  const t = getDict(lang);
  const active = t.divisi.cards[div];
  const artRef = useRef<HTMLDivElement>(null);

  // Selalu mulai dari atas tiap refresh — jangan restore posisi scroll lama.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  // Parallax hero: background melambat saat scroll.
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (artRef.current) {
          artRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="min-h-screen bg-asphalt text-paper">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-line bg-asphalt/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#top" className="shrink-0">
            <Logo />
          </a>
          <nav className="hidden items-center gap-5 text-[12px] font-medium text-muted lg:flex">
            <a href="#divisi" className="hover:text-paper">{t.nav.divisi}</a>
            <a href="#galeri" className="hover:text-paper">{t.nav.galeri}</a>
            <a href="#team" className="hover:text-paper">{t.nav.team}</a>
            <a href="#faq" className="hover:text-paper">{t.nav.faq}</a>
            <a href="#chat" className="hover:text-paper">{t.nav.chat}</a>
          </nav>
          <div className="flex items-center gap-2">
            <AuthButtons lang={lang} />
            <div className="flex border border-line text-[12px] font-bold">
              {(["id", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1.5 uppercase ${
                    lang === l ? "bg-paper text-asphalt" : "text-muted hover:text-paper"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href={SITE_LINKS.discord}
              className="hidden bg-blush px-3.5 py-2 text-[12px] font-bold text-asphalt hover:brightness-110 sm:block"
            >
              {t.nav.discord}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        <div ref={artRef} className="absolute -top-16 left-0 right-0 bottom-0 will-change-transform">
          <HeroArt className="h-full w-full opacity-40 md:opacity-35" />
        </div>
        <div className="bg-fade-b absolute inset-0" />
        <div className="relative mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-center px-4 py-16">
          <Reveal>
            <p className="mb-5 inline-block border border-line bg-panel px-2.5 py-1 text-[11px] font-bold tracking-[0.2em] text-muted">
              {t.hero.kicker}
            </p>
            <h1 className="font-display text-[13vw] uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-8xl">
              {t.hero.titleA}
              <br />
              <span className="text-blush">{t.hero.titleB}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-muted md:text-[14px]">
              {t.hero.lore}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SITE_LINKS.discord}
                className="bg-blush px-5 py-3 text-[13px] font-bold text-asphalt hover:brightness-110"
              >
                {t.hero.ctaDiscord} →
              </a>
              <a
                href="#divisi"
                className="border border-line bg-panel px-5 py-3 text-[13px] font-bold text-paper hover:border-muted"
              >
                {t.hero.ctaDivisi}
              </a>
            </div>
            <p className="mt-5 text-[12px] text-muted">{t.hero.note}</p>
          </Reveal>

          {/* STATS */}
          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-1 divide-y divide-line border border-line bg-panel/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {t.stats.map((s) => (
                <div key={s.k} className="px-5 py-5">
                  <p className="font-display text-3xl text-blush">{s.k}</p>
                  <p className="mt-1 text-[12px] leading-snug text-muted">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b border-line bg-panel py-3">
        <div className="flex w-max animate-marquee gap-8">
          {[...t.marquee, ...t.marquee].map((w, i) => (
            <span key={i} className="font-display text-lg uppercase tracking-wide text-muted">
              {w} <span className="ml-8 text-blush">//</span>
            </span>
          ))}
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4">
        {/* DIVISI PICKER */}
        <section id="divisi" className="border-b border-line py-12 md:py-16">
          <Reveal>
            <SectionTitle>{t.divisi.title}</SectionTitle>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
              {t.divisi.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-[13px] text-muted">{t.divisi.sub}</p>
          </Reveal>

          <div className="mt-6 flex flex-wrap gap-2">
            {t.divisi.cards.map((c, i) => (
              <button
                key={c.tag}
                onClick={() => setDiv(i)}
                className={`border px-4 py-2.5 text-[12px] font-bold uppercase tracking-widest transition-colors ${
                  i === div
                    ? "border-blush bg-blush text-asphalt"
                    : "border-line bg-panel text-muted hover:border-muted hover:text-paper"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          <Reveal key={div}>
            <article className="mt-4 overflow-hidden border border-line bg-panel">
              <div className="relative h-44 md:h-64">
                <Image
                  src={DIV_IMGS[div]}
                  alt={active.name}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181222] via-transparent to-transparent" />
                <p className="text-outline absolute bottom-3 left-5 font-display text-5xl uppercase leading-none sm:text-7xl">
                  {active.big}
                </p>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[11px] font-bold tracking-[0.2em] text-blush">{active.tag}</p>
                <h3 className="mt-1 font-display text-2xl uppercase md:text-3xl">{active.name}</h3>
                <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-muted">{active.desc}</p>
                <ul className="mt-5 space-y-1.5 border-t border-line pt-4 text-[12px] text-paper">
                  {active.points.map((p) => (
                    <li key={p}>
                      <span className="mr-2 text-blush">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </section>

        {/* OUTLINE DIVIDER */}
        <div className="overflow-hidden border-b border-line py-5" aria-hidden="true">
          <div className="flex w-max animate-marquee gap-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="whitespace-nowrap font-display text-5xl uppercase leading-none md:text-7xl">
                <span className="text-outline">{DIV_WORDS[i % 3]}</span>
                <span className="ml-10 text-blush">//</span>
              </span>
            ))}
          </div>
        </div>

        {/* PILLARS */}
        <section className="border-b border-line py-12 md:py-16">
          <Reveal>
            <SectionTitle>{t.pillars.title}</SectionTitle>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
              {t.pillars.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {t.pillars.items.map((it) => (
                <div key={it.n} className="group bg-panel p-6 transition-colors hover:bg-[#1f1628]">
                  <p className="font-display text-4xl text-line transition-colors group-hover:text-blush">{it.n}</p>
                  <h3 className="mt-3 text-[14px] font-bold text-paper">
                    <span className="mr-2 text-blush">#</span>
                    {it.t}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted">{it.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* GALERI */}
        <section id="galeri" className="border-b border-line py-12 md:py-16">
          <Reveal>
            <SectionTitle>{t.galeri.title}</SectionTitle>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
              {t.galeri.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-[13px] text-muted">{t.galeri.desc}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.galeri.items.map((g, i) => (
                <article key={g.t} className="border border-line bg-panel transition-colors hover:border-blush">
                  <div className={`flex h-36 items-end bg-gradient-to-br p-4 ${GALLERY_GRAD[i % GALLERY_GRAD.length]}`}>
                    <span className="border border-line bg-asphalt/80 px-2 py-1 text-[10px] font-bold tracking-[0.2em] text-blush">
                      {g.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[14px] font-bold">{g.t}</h3>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{g.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
          <a href={SITE_LINKS.discord} className="mt-5 inline-block text-[12px] font-bold text-blush hover:underline">
            {t.galeri.cta}
          </a>
        </section>

        {/* GABUNG */}
        <section className="border-b border-line py-12 md:py-16">
          <Reveal>
            <SectionTitle>{t.gabung.title}</SectionTitle>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
              {t.gabung.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {t.gabung.steps.map((s) => (
                <li key={s.n} className="border border-line bg-panel p-6">
                  <p className="font-display text-5xl text-blush">{s.n}</p>
                  <h3 className="mt-3 text-[13px] font-bold">{s.t}</h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{s.d}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <a
            href={SITE_LINKS.discord}
            className="mt-6 inline-block bg-blush px-5 py-3 text-[13px] font-bold text-asphalt hover:brightness-110"
          >
            {t.hero.ctaDiscord} →
          </a>
        </section>

        {/* TEAM */}
        <section id="team" className="border-b border-line py-12 md:py-16">
          <Reveal>
            <SectionTitle>{t.team.title}</SectionTitle>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
              {t.team.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-[13px] text-muted">{t.team.desc}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.team.members.map((m) => (
                <article key={m.role} className="border border-line bg-panel p-6 transition-colors hover:border-blush">
                  <p className="flex h-12 w-12 items-center justify-center border border-blush font-display text-xl text-blush">
                    {m.init}
                  </p>
                  <h3 className="mt-4 text-[13px] font-bold">{m.role}</h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{m.d}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <a href={SITE_LINKS.discord} className="mt-5 inline-block text-[12px] font-bold text-blush hover:underline">
            {t.team.cta}
          </a>
        </section>

        {/* RULES */}
        <section className="border-b border-line py-12 md:py-16">
          <Reveal>
            <SectionTitle>{t.rules.title}</SectionTitle>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
              {t.rules.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-8 divide-y divide-line border border-line bg-panel">
              {t.rules.items.map((r, i) => (
                <li key={r} className="flex gap-3 px-5 py-3.5 text-[13px] leading-relaxed">
                  <span className="font-bold text-blush">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-paper">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <a href={SITE_LINKS.rulesDoc} className="mt-4 inline-block text-[12px] font-bold text-blush hover:underline">
            {t.rules.more}
          </a>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-line py-12 md:py-16">
          <Reveal>
            <SectionTitle>{t.faq.title}</SectionTitle>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
              {t.faq.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 space-y-3">
              {t.faq.items.map((f) => (
                <details key={f.q} className="group border border-line bg-panel">
                  <summary className="cursor-pointer list-none px-5 py-4 text-[13px] font-bold text-paper marker:hidden hover:bg-[#1f1628] [&::-webkit-details-marker]:hidden">
                    <span className="mr-2 text-blush">+</span>
                    {f.q}
                  </summary>
                  <p className="border-t border-line px-5 py-4 text-[12px] leading-relaxed text-muted">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CHAT */}
        <section id="chat" className="border-b border-line py-12 md:py-16">
          <Reveal>
            <SectionTitle>{t.chat.title}</SectionTitle>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
              {t.chat.heading}
            </h2>
            <div className="mt-8">
              <Chatroom lang={lang} />
            </div>
          </Reveal>
        </section>

        {/* KOMUNITAS */}
        <section id="komunitas" className="border-b border-line py-12 md:py-16">
          <Reveal>
            <SectionTitle>{t.komunitas.title}</SectionTitle>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
              {t.komunitas.heading}
            </h2>
            <p className="mt-3 text-[13px] text-muted">{t.komunitas.desc}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "Discord", h: SITE_LINKS.discord, d: "Basecamp utama" },
                { n: "WhatsApp", h: SITE_LINKS.whatsapp, d: "Info cepat" },
                { n: "TikTok", h: SITE_LINKS.tiktok, d: "Klip RP" },
                { n: "YouTube", h: SITE_LINKS.youtube, d: "Arsip sinematik" },
              ].map((s) => (
                <a
                  key={s.n}
                  href={s.h}
                  className="border border-line bg-panel p-5 transition-colors hover:border-blush"
                >
                  <p className="text-[13px] font-bold">{s.n} ↗</p>
                  <p className="mt-1 text-[12px] text-muted">{s.d}</p>
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="py-10">
          <Logo size={28} />
          <p className="mt-4 max-w-2xl text-[11px] leading-relaxed text-muted">
            {t.footer.line}
          </p>
          <p className="mt-2 text-[11px] text-muted">{t.footer.made}</p>
        </footer>
      </main>
    </div>
  );
}
