"use client";

import { useState } from "react";
import Logo from "../components/Logo";
import HeroArt from "../components/HeroArt";
import Chatroom from "../components/Chatroom";
import { SITE_LINKS, type Lang } from "../lib/site";
import { getDict } from "../lib/dict";

function SectionTitle({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.25em] text-amber">{children}</p>
  );
}

const GALLERY_GRAD = [
  "from-[#3a1c07] via-[#1a120b] to-[#111417]",
  "from-[#0e2a1f] via-[#101a15] to-[#111417]",
  "from-[#2a0e1c] via-[#1a1016] to-[#111417]",
  "from-[#0e1e2e] via-[#0f141b] to-[#111417]",
];

export default function Page() {
  const [lang, setLang] = useState<Lang>("id");
  const [div, setDiv] = useState(0);
  const t = getDict(lang);
  const active = t.divisi.cards[div];

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
              className="hidden bg-amber px-3.5 py-2 text-[12px] font-bold text-asphalt hover:brightness-110 sm:block"
            >
              {t.nav.discord}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        <HeroArt className="absolute inset-0 h-full w-full opacity-40 md:opacity-35" />
        <div className="bg-grid absolute inset-0" />
        <div className="bg-fade-b absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-16 md:pb-20 md:pt-24">
          <p className="mb-5 inline-block border border-line bg-panel px-2.5 py-1 text-[11px] font-bold tracking-[0.2em] text-muted">
            {t.hero.kicker}
          </p>
          <h1 className="font-display text-[13vw] uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-8xl">
            {t.hero.titleA}
            <br />
            <span className="text-amber">{t.hero.titleB}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-muted md:text-[14px]">
            {t.hero.lore}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={SITE_LINKS.discord}
              className="bg-amber px-5 py-3 text-[13px] font-bold text-asphalt hover:brightness-110"
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

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 divide-y divide-line border border-line bg-panel/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {t.stats.map((s) => (
              <div key={s.k} className="px-5 py-5">
                <p className="font-display text-3xl text-amber">{s.k}</p>
                <p className="mt-1 text-[12px] leading-snug text-muted">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b border-line bg-panel py-3">
        <div className="flex w-max animate-marquee gap-8">
          {[...t.marquee, ...t.marquee].map((w, i) => (
            <span key={i} className="font-display text-lg uppercase tracking-wide text-muted">
              {w} <span className="ml-8 text-amber">//</span>
            </span>
          ))}
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4">
        {/* DIVISI PICKER */}
        <section id="divisi" className="border-b border-line py-12 md:py-16">
          <SectionTitle>{t.divisi.title}</SectionTitle>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
            {t.divisi.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-[13px] text-muted">{t.divisi.sub}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {t.divisi.cards.map((c, i) => (
              <button
                key={c.tag}
                onClick={() => setDiv(i)}
                className={`border px-4 py-2.5 text-[12px] font-bold uppercase tracking-widest ${
                  i === div
                    ? "border-amber bg-amber text-asphalt"
                    : "border-line bg-panel text-muted hover:border-muted hover:text-paper"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          <article className="mt-4 border border-line bg-panel p-6 md:p-8">
            <p className="text-outline font-display text-5xl uppercase leading-none sm:text-7xl md:text-8xl">
              {active.big}
            </p>
            <p className="mt-4 text-[11px] font-bold tracking-[0.2em] text-amber">{active.tag}</p>
            <h3 className="mt-1 font-display text-2xl uppercase md:text-3xl">{active.name}</h3>
            <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-muted">{active.desc}</p>
            <ul className="mt-5 space-y-1.5 border-t border-line pt-4 text-[12px] text-paper">
              {active.points.map((p) => (
                <li key={p}>
                  <span className="mr-2 text-amber">›</span>
                  {p}
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* PILLARS */}
        <section className="border-b border-line py-12 md:py-16">
          <SectionTitle>{t.pillars.title}</SectionTitle>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
            {t.pillars.heading}
          </h2>
          <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {t.pillars.items.map((it) => (
              <div key={it.n} className="group bg-panel p-6 hover:bg-[#161b20]">
                <p className="font-display text-4xl text-line group-hover:text-amber">{it.n}</p>
                <h3 className="mt-3 text-[14px] font-bold text-paper">
                  <span className="mr-2 text-amber">#</span>
                  {it.t}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">{it.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALERI */}
        <section id="galeri" className="border-b border-line py-12 md:py-16">
          <SectionTitle>{t.galeri.title}</SectionTitle>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
            {t.galeri.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-[13px] text-muted">{t.galeri.desc}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.galeri.items.map((g, i) => (
              <article key={g.t} className="border border-line bg-panel hover:border-amber">
                <div className={`flex h-36 items-end bg-gradient-to-br p-4 ${GALLERY_GRAD[i % GALLERY_GRAD.length]}`}>
                  <span className="border border-line bg-asphalt/80 px-2 py-1 text-[10px] font-bold tracking-[0.2em] text-amber">
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
          <a href={SITE_LINKS.discord} className="mt-5 inline-block text-[12px] font-bold text-amber hover:underline">
            {t.galeri.cta}
          </a>
        </section>

        {/* GABUNG */}
        <section className="border-b border-line py-12 md:py-16">
          <SectionTitle>{t.gabung.title}</SectionTitle>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
            {t.gabung.heading}
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {t.gabung.steps.map((s) => (
              <li key={s.n} className="border border-line bg-panel p-6">
                <p className="font-display text-5xl text-amber">{s.n}</p>
                <h3 className="mt-3 text-[13px] font-bold">{s.t}</h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
          <a
            href={SITE_LINKS.discord}
            className="mt-6 inline-block bg-amber px-5 py-3 text-[13px] font-bold text-asphalt hover:brightness-110"
          >
            {t.hero.ctaDiscord} →
          </a>
        </section>

        {/* TEAM */}
        <section id="team" className="border-b border-line py-12 md:py-16">
          <SectionTitle>{t.team.title}</SectionTitle>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
            {t.team.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-[13px] text-muted">{t.team.desc}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.team.members.map((m) => (
              <article key={m.role} className="border border-line bg-panel p-6 hover:border-amber">
                <p className="flex h-12 w-12 items-center justify-center border border-amber font-display text-xl text-amber">
                  {m.init}
                </p>
                <h3 className="mt-4 text-[13px] font-bold">{m.role}</h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{m.d}</p>
              </article>
            ))}
          </div>
          <a href={SITE_LINKS.discord} className="mt-5 inline-block text-[12px] font-bold text-amber hover:underline">
            {t.team.cta}
          </a>
        </section>

        {/* RULES */}
        <section className="border-b border-line py-12 md:py-16">
          <SectionTitle>{t.rules.title}</SectionTitle>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
            {t.rules.heading}
          </h2>
          <ul className="mt-8 divide-y divide-line border border-line bg-panel">
            {t.rules.items.map((r, i) => (
              <li key={r} className="flex gap-3 px-5 py-3.5 text-[13px] leading-relaxed">
                <span className="font-bold text-amber">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-paper">{r}</span>
              </li>
            ))}
          </ul>
          <a href={SITE_LINKS.rulesDoc} className="mt-4 inline-block text-[12px] font-bold text-amber hover:underline">
            {t.rules.more}
          </a>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-line py-12 md:py-16">
          <SectionTitle>{t.faq.title}</SectionTitle>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
            {t.faq.heading}
          </h2>
          <div className="mt-8 space-y-3">
            {t.faq.items.map((f) => (
              <details key={f.q} className="group border border-line bg-panel">
                <summary className="cursor-pointer list-none px-5 py-4 text-[13px] font-bold text-paper marker:hidden hover:bg-[#161b20] [&::-webkit-details-marker]:hidden">
                  <span className="mr-2 text-amber">+</span>
                  {f.q}
                </summary>
                <p className="border-t border-line px-5 py-4 text-[12px] leading-relaxed text-muted">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CHAT */}
        <section id="chat" className="border-b border-line py-12 md:py-16">
          <SectionTitle>{t.chat.title}</SectionTitle>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
            {t.chat.heading}
          </h2>
          <div className="mt-8">
            <Chatroom lang={lang} />
          </div>
        </section>

        {/* KOMUNITAS */}
        <section id="komunitas" className="border-b border-line py-12 md:py-16">
          <SectionTitle>{t.komunitas.title}</SectionTitle>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-6xl">
            {t.komunitas.heading}
          </h2>
          <p className="mt-3 text-[13px] text-muted">{t.komunitas.desc}</p>
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
                className="border border-line bg-panel p-5 hover:border-amber"
              >
                <p className="text-[13px] font-bold">{s.n} ↗</p>
                <p className="mt-1 text-[12px] text-muted">{s.d}</p>
              </a>
            ))}
          </div>
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
