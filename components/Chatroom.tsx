"use client";

import { useEffect, useRef, useState } from "react";
import { getSupabase, type ChatMessage } from "../lib/supabase";
import { useAuth } from "./AuthContext";
import type { Lang } from "../lib/site";

const STR = {
  id: {
    title: "08 / LIVE CHAT",
    heading: "Ngobrol langsung di web.",
    desc: "Khusus member. Daftar gratis pake email, langsung bisa chat.",
    msgPh: "Tulis pesan... (max 500)",
    send: "Kirim",
    sending: "Mengirim...",
    empty: "Belum ada pesan. Jadi yang pertama sapa!",
    noEnv: "Chat belum dikonfigurasi (env Supabase kosong).",
    loadFail: "Gagal load chat.",
    sendFail: "Gagal kirim. Coba lagi.",
    cooldown: (s: number) => `Tunggu ${s}s...`,
    tabLogin: "Masuk",
    tabRegister: "Daftar",
    nickPh: "Nick (2-20 huruf)",
    emailPh: "Email",
    pwPh: "Password (min 6)",
    goLogin: "Masuk →",
    goRegister: "Buat akun →",
    sendingAuth: "Proses...",
    logout: "Keluar",
  },
  en: {
    title: "08 / LIVE CHAT",
    heading: "Chat right on the site.",
    desc: "Members only. Free email signup, then chat away.",
    msgPh: "Write a message... (max 500)",
    send: "Send",
    sending: "Sending...",
    empty: "No messages yet. Say hi first!",
    noEnv: "Chat not configured (missing Supabase env).",
    loadFail: "Failed to load chat.",
    sendFail: "Failed to send. Retry.",
    cooldown: (s: number) => `Wait ${s}s...`,
    tabLogin: "Login",
    tabRegister: "Sign up",
    nickPh: "Nick (2-20 chars)",
    emailPh: "Email",
    pwPh: "Password (min 6)",
    goLogin: "Login →",
    goRegister: "Create account →",
    sendingAuth: "Working...",
    logout: "Logout",
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

function AuthForm({ lang }: { lang: Lang }) {
  const t = STR[lang];
  const { msg, register, login } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("register");
  const [nick, setNick] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit() {
    if (busy) return;
    setBusy(true);
    if (mode === "register") await register(nick, email, pw);
    else await login(email, pw);
    setBusy(false);
  }

  return (
    <div>
      <div className="flex gap-2">
        {(["login", "register"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`border px-4 py-2 text-[12px] font-bold uppercase tracking-widest ${
              mode === m
                ? "border-blush bg-blush text-asphalt"
                : "border-line text-muted hover:text-paper"
            }`}
          >
            {m === "login" ? t.tabLogin : t.tabRegister}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {mode === "register" && (
          <input
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            placeholder={t.nickPh}
            maxLength={20}
            className="border border-line bg-asphalt px-3 py-2.5 text-[12px] text-paper placeholder:text-muted focus:border-blush focus:outline-none"
          />
        )}
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPh}
            type="email"
            autoComplete="email"
            className="flex-1 border border-line bg-asphalt px-3 py-2.5 text-[12px] text-paper placeholder:text-muted focus:border-blush focus:outline-none"
          />
          <input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
            }}
            placeholder={t.pwPh}
            type="password"
            autoComplete={mode === "register" ? "new-password" : "current-password"}
            className="flex-1 border border-line bg-asphalt px-3 py-2.5 text-[12px] text-paper placeholder:text-muted focus:border-blush focus:outline-none"
          />
          <button
            onClick={submit}
            disabled={busy}
            className="bg-blush px-5 py-2.5 text-[12px] font-bold text-asphalt hover:brightness-110 disabled:opacity-50"
          >
            {busy ? t.sendingAuth : mode === "register" ? t.goRegister : t.goLogin}
          </button>
        </div>
      </div>
      {msg && <p className="mt-2 text-[12px] text-blush">{msg}</p>}
      <p className="mt-2 text-[11px] text-muted">{t.desc}</p>
    </div>
  );
}

export default function Chatroom({ lang }: { lang: Lang }) {
  const t = STR[lang];
  const { user, nick } = useAuth();
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [envOk, setEnvOk] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);

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

  // Scroll cuma di dalam kotak chat — jangan pernah gerakin halaman.
  useEffect(() => {
    const box = boxRef.current;
    if (box) box.scrollTop = box.scrollHeight;
  }, [msgs.length]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [cooldown]);

  async function send() {
    const sb = getSupabase();
    if (!sb || !user || sending || cooldown > 0) return;
    const body = clean(text);
    if (body.length < 1) return;
    setSending(true);
    setStatus(null);
    const { error } = await sb
      .from("messages")
      .insert({ username: nick, text: body, user_id: user.id });
    setSending(false);
    if (error) {
      setStatus(t.sendFail);
      return;
    }
    setText("");
    setCooldown(3);
  }

  if (!envOk) {
    return (
      <div className="border border-line bg-panel p-5 text-[12px] text-muted">
        {t.noEnv}
      </div>
    );
  }

  return (
    <div className="border border-line bg-panel">
      <div ref={boxRef} className="h-72 overflow-y-auto divide-y divide-line">
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
      </div>
      <div className="border-t border-line p-4">
        {!user ? (
          <AuthForm lang={lang} />
        ) : (
          <div>
            <div className="flex flex-col gap-2 sm:flex-row">
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
          </div>
        )}
      </div>
    </div>
  );
}
