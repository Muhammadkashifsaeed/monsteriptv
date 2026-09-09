import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Smart Stb IPTV Instruktioner | Monster TV",
  description: "Installera Smart Stb på Android Box. Steg-för-steg guide för IPTV. 13,000+ kanaler, filmer och live-sport tillgängliga.",
  keywords: ["smart-stb", "IPTV", "android-box", "Monster TV", "guide"],
  alternates: { canonical: "https://monstertv.tv/android-box/smart-stb/" },
  openGraph: {
    title: "Smart Stb IPTV Instruktioner | Monster TV",
    description: "Smart Stb på Android Box. 13,000+ kanaler, filmer och live-sport.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/android-box/smart-stb/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - Smart Stb" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Stb IPTV Instruktioner | Monster TV",
    description: "Smart Stb på Android Box. 13,000+ kanaler, filmer och live-sport.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
  robots: { index: true, follow: true },
};


export default function SmartStbPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      <section className="relative w-full py-12 md:py-16 flex items-center justify-center bg-[#0a0a0a]">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/images/backeed.webp"
            alt="Smart STB IPTV"
            fill
            className="object-cover object-center brightness-[0.75] contrast-[1.1] saturate-[1.1]"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight drop-shadow-lg">
            Smart STB IPTV Instruktioner
          </h1>
          
          <nav className="flex items-center gap-2 text-white/80 text-base mb-8">
            <Link href="/" className="hover:text-white transition-colors">Hem</Link>
            <span>/</span>
            <Link href="/android-box" className="hover:text-white transition-colors">Android Box</Link>
            <span>/</span>
            <span className="text-gray-300">Smart STB</span>
          </nav>
          
          <div className="text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl">
            <p>
              Smart STB IPTV Instruktioner – Här ser du hur man kommer igång med Smart STB för att se på IPTV. Klicka på knappen nedan för att läsa mer om hur du installerar och konfigurerar Smart STB på din enhet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Så här installerar du Smart STB
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Följ våra steg-för-steg instruktioner för att komma igång med Smart STB. Med våra guider blir installationen enkel och smidig.
              </p>
              <Link href="/android-box" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-center transition-colors shadow-lg shadow-blue-500/30 text-lg inline-flex items-center justify-center gap-2">
                Tillbaka till Android Box
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
