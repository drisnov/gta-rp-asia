import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GTA Roleplay Asia — Komunitas RP SA & FiveM",
  description:
    "Basecamp pemain GTA Roleplay Asia: ngobrol, diskusi lore, mabar SA & FiveM, cari circle baru. ID+EN.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${jbmono.variable} font-mono bg-asphalt text-paper antialiased`}>
        {children}
      </body>
    </html>
  );
}
