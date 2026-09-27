"use client";

import { useState } from "react";
import Logo from "../components/Logo";
import { SITE_LINKS, type Lang } from "../lib/site";
import { getDict } from "../lib/dict";

function SectionTitle({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.25em] text-amber">{children}</p>
  );
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("id");
  const t = getDict(lang);

  return (
    <div className="min-h-screen bg-asphalt text-paper">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-line bg-asphalt/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <a href="#top" className="shrink-0">
            <Logo />
          </a>
          <nav className="hidden items-center gap-5 text-[12px] font-medium text-muted md:flex">
            <a href="#divisi" className="hover:text-paper">{t.nav.divisi}</a>
            <a href="#seru" className="hover:text-paper">{t.nav.seru}</a>
            <a href="#gabung" className="hover:text-paper">{t.nav.gabung}</a>
            <a href="#rules" className="hover:text-paper">{t.nav.rules}</a>
            <a href="#faq" className="hover:text-paper">{t.nav.faq}</a>
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

      <main id="top" className="mx-auto max-w-5xl px-4">
        {/* HERO */}
        <section className="border-b border-line py-14 md:py-20">
          <p className="mb-4 inline-block border border-line bg-panel px-2.5 py-1 text-[11px] font-bold tracking-[0.2em] text-muted">
            {t.hero.kicker}
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
            {t.hero.titleA}
            <br />
            <span className="text-amber">{t.hero.titleB}</span>
            <span className="text-muted">_</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[14px] leading-relaxed text-muted">
            {t.hero.desc}
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
        </section>

        {/* STATS */}
        <section className="grid grid-cols-1 divide-y divide-line border-b border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {t.stats.map((s) => (
            <div key={s.v} className="px-5 py-5">
              <p className="text-2xl font-extrabold text-paper">{s.k}</p>
              <p className="mt-1 text-[12px] leading-snug text-muted">{s.v}</p>
            </div>
          ))}
        </section>

        {/* DIVISI */}
        <section id="divisi" className="border-b border-line py-12">
          <SectionTitle>{t.divisi.title}</SectionTitle>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t.divisi.heading}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {t.divisi.cards.map((c) => (
              <article key={c.name} className="border border-line bg-panel p-6">
                <p className="text-[11px] font-bold tracking-[0.2em] text-amber">{c.tag}</p>
                <h3 className="mt-2 text-lg font-extrabold">{c.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{c.desc}</p>
                <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-[12px] text-paper">
                  {c.points.map((p) => (
                    <li key={p}>
                      <span className="mr-2 text-amber">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* SERU */}
        <section id="seru" className="border-b border-line py-12">
          <SectionTitle>{t.seru.title}</SectionTitle>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t.seru.heading}
          </h2>
          <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {t.seru.items.map((it) => (
              <div key={it.t} className="bg-panel p-5">
                <h3 className="text-[13px] font-bold text-paper">
                  <span className="mr-2 text-amber">#</span>
                  {it.t}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">{it.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GABUNG */}
        <section id="gabung" className="border-b border-line py-12">
          <SectionTitle>{t.gabung.title}</SectionTitle>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t.gabung.heading}
          </h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {t.gabung.steps.map((s) => (
              <li key={s.n} className="border border-line bg-panel p-5">
                <p className="text-xl font-extrabold text-amber">{s.n}</p>
                <h3 className="mt-2 text-[13px] font-bold">{s.t}</h3>
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

        {/* RULES */}
        <section id="rules" className="border-b border-line py-12">
          <SectionTitle>{t.rules.title}</SectionTitle>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t.rules.heading}
          </h2>
          <ul className="mt-6 divide-y divide-line border border-line bg-panel">
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
        <section id="faq" className="border-b border-line py-12">
          <SectionTitle>{t.faq.title}</SectionTitle>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t.faq.heading}
          </h2>
          <div className="mt-6 space-y-3">
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

        {/* KOMUNITAS */}
        <section id="komunitas" className="border-b border-line py-12">
          <SectionTitle>{t.komunitas.title}</SectionTitle>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t.komunitas.heading}
          </h2>
          <p className="mt-2 text-[13px] text-muted">{t.komunitas.desc}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
