import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Chromecast IPTV Instruktioner | Monster TV",
  description: "Streama IPTV med Chromecast på din TV. Installera appar och konfigurera Chromecast för att se IPTV på stora skärmen.",
  keywords: ["Chromecast", "IPTV", "chromecast", "Monster TV", "guide"],
  alternates: { canonical: "https://monstertv.tv/chromecast/" },
  openGraph: {
    title: "Chromecast IPTV Instruktioner | Monster TV",
    description: "Chromecast streaming för IPTV. 13,000+ kanaler, filmer och live-sport.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/chromecast/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - Chromecast" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chromecast IPTV Instruktioner | Monster TV",
    description: "Chromecast streaming för IPTV.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
  robots: { index: true, follow: true },
};


export default function ChromecastPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      
      {/* ── Hero Section ── */}
      <section className="relative w-full py-12 md:py-16 flex items-center justify-center bg-[#0a0a0a]">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/images/backeed.webp"
            alt="IPTV Chromecast Instruktioner"
            fill
            className="object-cover object-center brightness-[0.75] contrast-[1.1] saturate-[1.1]"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight drop-shadow-lg">
            IPTV Chromecast Instruktioner
          </h1>
          
          <nav className="flex items-center gap-2 text-white/80 text-base mb-8">
            <Link href="/" className="hover:text-white transition-colors">Hem</Link>
            <span>/</span>
            <span className="text-gray-300">IPTV Chromecast Instruktioner</span>
          </nav>
          
          <div className="text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl">
            <p>
              IPTV med Chromecast – Här ser du hur man kommer igång med IPTV på Chromecast! Chromecast är ett utmärkt och kostnadseffektivt sätt att förvandla din vanliga TV till en smart TV med full tillgång till IPTV. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis också andra appar som fungerar med din enhet men nedan finner du de som vi rekommenderar.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* ── 1. KOM IGÅNG ── */}
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <span className="text-blue-500 font-black text-sm tracking-[0.3em] uppercase mb-4">KOM IGÅNG</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Kom igång</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                När du ska komma igång med Chromecast så börjar du med att söka efter nedanstående appar i ordningen de syns. Skulle det visa sig att du inte lyckas komma igång med första appen du testar så testar du med nästa och nästa tills det fungerar för dig. Med dina inloggningsuppgifter kan du använda vilka appar du vill. Du är alltså inte begränsad till en specifik app.
              </p>
              
              <div className="w-full max-w-3xl bg-[#111] border-l-4 border-yellow-500 rounded-xl p-6 text-left shadow-inner">
                <p className="text-white font-semibold text-lg leading-relaxed">
                  Kom bara ihåg att vara noga så att du endast använder en app åt gången!
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
