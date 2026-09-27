import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Lazy client so build doesn't crash when env missing (e.g. Vercel preview without env).
export function getSupabase() {
  if (!url || !anon) return null;
  return createClient(url, anon);
}

export type ChatMessage = {
  id: number;
  username: string;
  text: string;
  created_at: string;
};
