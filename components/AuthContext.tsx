"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { getSupabase } from "../lib/supabase";

type AuthCtx = {
  user: User | null;
  nick: string;
  ready: boolean;
  msg: string | null;
  clearMsg: () => void;
  register: (nick: string, email: string, pw: string) => Promise<boolean>;
  login: (email: string, pw: string) => Promise<boolean>;
  logout: () => Promise<void>;
};

const C = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    const sb = getSupabase();
    if (!sb) {
      setReady(true);
      return;
    }
    sb.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setReady(true);
    });
    const { data: sub } = sb.auth.onAuthStateChange((_e, s) => {
      setUser(s?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const nick =
    (user?.user_metadata?.username as string) ||
    user?.email?.split("@")[0] ||
    "";

  async function register(nick: string, email: string, pw: string) {
    const sb = getSupabase();
    setMsg(null);
    if (!sb) {
      setMsg("Chat belum dikonfigurasi.");
      return false;
    }
    const n = nick.trim().slice(0, 20);
    if (n.length < 2) {
      setMsg("Nick minimal 2 huruf.");
      return false;
    }
    if (pw.length < 6) {
      setMsg("Password minimal 6 karakter.");
      return false;
    }
    const { data, error } = await sb.auth.signUp({
      email: email.trim(),
      password: pw,
      options: { data: { username: n } },
    });
    if (error) {
      setMsg(error.message);
      return false;
    }
    if (!data.session) {
      setMsg("Akun dibuat! Cek email untuk verifikasi, lalu login.");
      return false;
    }
    return true;
  }

  async function login(email: string, pw: string) {
    const sb = getSupabase();
    setMsg(null);
    if (!sb) {
      setMsg("Chat belum dikonfigurasi.");
      return false;
    }
    const { error } = await sb.auth.signInWithPassword({
      email: email.trim(),
      password: pw,
    });
    if (error) {
      setMsg(error.message);
      return false;
    }
    return true;
  }

  async function logout() {
    await getSupabase()?.auth.signOut();
  }

  return (
    <C.Provider
      value={{
        user,
        nick,
        ready,
        msg,
        clearMsg: () => setMsg(null),
        register,
        login,
        logout,
      }}
    >
      {children}
    </C.Provider>
  );
}

export function useAuth() {
  const v = useContext(C);
  if (!v) throw new Error("useAuth outside AuthProvider");
  return v;
}
