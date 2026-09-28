"use client";

import { useEffect, useRef, useState } from "react";
import { getSupabase, type ChatMessage } from "../lib/supabase";
import type { Lang } from "../lib/site";

const STR = {
  id: {
    title: "07 / LIVE CHAT",
    heading: "Ngobrol langsung di web.",
    desc: "Tanpa login dulu untuk sekarang. Isi nick + pesan, cooldown 3 detik. Login Discord nyusul.",
    nickPh: "Nick (2-20 huruf)",
    msgPh: "Tulis pesan... (max 500)",
    send: "Kirim",
    sending: "Mengirim...",
    loginDiscord: "Login Discord (segera)",
    empty: "Belum ada pesan. Jadi yang pertama sapa!",
    noEnv: "Chat belum dikonfigurasi (env Supabase kosong).",
    loadFail: "Gagal load chat.",
    sendFail: "Gagal kirim. Coba lagi.",
    cooldown: (s: number) => `Tunggu ${s}s...`,
  },
  en: {
    title: "07 / LIVE CHAT",
    heading: "Chat right on the site.",
    desc: "No login for now. Pick a nick + message, 3s cooldown. Discord login coming.",
    nickPh: "Nick (2-20 chars)",
    msgPh: "Write a message... (max 500)",
    send: "Send",
    sending: "Sending...",
    loginDiscord: "Login with Discord (soon)",
    empty: "No messages yet. Say hi first!",
    noEnv: "Chat not configured (missing Supabase env).",
    loadFail: "Failed to load chat.",
    sendFail: "Failed to send. Retry.",
    cooldown: (s: number) => `Wait ${s}s...`,
  },
} as const;

const BANNED = ["kontol", "memek", "anjing", "bangsat", "fuck", "shit", "bitch"];

function clean(text: string): string {
  let out = text.trim().replace(/\s+/g, " ").slice(0, 500);
  for (const w of BANNED) {
    out = out.replace(new RegExp(w, "gi"), "***");
  }
  return out;
}

export default function Chatroom({ lang }: { lang: Lang }) {
  const t = STR[lang];
  const [nick, setNick] = useState("");
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [envOk, setEnvOk] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sb = getSupabase();
    if (!sb) {
      setEnvOk(false);
      return;
    }
    let alive = true;
    (async () => {
      const { data, error } = await sb
        .from("messages")
        .select("id,username,text,created_at")
        .order("created_at", { ascending: false })
        .limit(50);
      if (!alive) return;
      if (error) setStatus(t.loadFail);
      else setMsgs((data ?? []).reverse() as ChatMessage[]);
    })();

    const ch = sb
      .channel("messages-live")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          const m = payload.new as ChatMessage;
          setMsgs((prev) => [...prev.slice(-49), m]);
        }
      )
      .subscribe();
    return () => {
      alive = false;
      sb.removeChannel(ch);
    };
  }, [t]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs.length]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [cooldown]);

  async function send() {
    const sb = getSupabase();
    if (!sb || sending || cooldown > 0) return;
    const username = nick.trim().slice(0, 20);
    const body = clean(text);
    if (username.length < 2 || body.length < 1) return;
    setSending(true);
    setStatus(null);
    const { error } = await sb.from("messages").insert({ username, text: body });
    setSending(false);
    if (error) {
      setStatus(t.sendFail);
      return;
    }
    setText("");
    setCooldown(3);
    try {
      localStorage.setItem("gta-rp-nick", username);
    } catch {}
  }

  useEffect(() => {
    try {
      const saved = localStorage.getItem("gta-rp-nick");
      if (saved) setNick(saved);
    } catch {}
  }, []);

  if (!envOk) {
    return (
      <div className="border border-line bg-panel p-5 text-[12px] text-muted">
        {t.noEnv}
      </div>
    );
  }

  return (
    <div className="border border-line bg-panel">
      <div className="h-72 overflow-y-auto divide-y divide-line">
        {msgs.length === 0 && (
          <p className="px-5 py-4 text-[12px] text-muted">{t.empty}</p>
        )}
        {msgs.map((m) => (
          <div key={m.id} className="px-5 py-2.5 text-[12px] leading-relaxed">
            <span className="font-bold text-blush">{m.username}</span>{" "}
            <span className="text-muted">
              {new Date(m.created_at).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            <p className="text-paper break-words">{m.text}</p>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="border-t border-line p-4">
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            placeholder={t.nickPh}
            maxLength={20}
            className="border border-line bg-asphalt px-3 py-2.5 text-[12px] text-paper placeholder:text-muted focus:border-blush focus:outline-none sm:w-44"
          />
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") send();
            }}
            placeholder={t.msgPh}
            maxLength={500}
            className="flex-1 border border-line bg-asphalt px-3 py-2.5 text-[12px] text-paper placeholder:text-muted focus:border-blush focus:outline-none"
          />
          <button
            onClick={send}
            disabled={sending || cooldown > 0}
            className="bg-blush px-5 py-2.5 text-[12px] font-bold text-asphalt hover:brightness-110 disabled:opacity-50"
          >
            {sending ? t.sending : cooldown > 0 ? t.cooldown(cooldown) : t.send}
          </button>
        </div>
        {status && <p className="mt-2 text-[12px] text-blush">{status}</p>}
        <p className="mt-2 text-[11px] text-muted">{t.desc}</p>
      </div>
    </div>
  );
}
