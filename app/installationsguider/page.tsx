import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DeviceGuideGrid from '@/components/DeviceGuideGrid';
import InstallationStepsFAQ from '@/components/InstallationStepsFAQ';

export const metadata = {
  title: 'Installationsguider | Monster TV - Steg-för-steg IPTV guider',
  description: 'Komplett IPTV installationsguide för Smart TV, Android TV, iOS, Android, Windows, Mac, Apple TV och Nvidia Shield. Följ enkla steg-för-steg instruktioner.',
  keywords: ['installationsguider', 'IPTV', 'guide', 'Smart TV', 'Android TV', 'Apple TV', 'Windows', 'Mac', 'Monster TV'],
  alternates: { canonical: 'https://monstertv.tv/installationsguider/' },
  openGraph: {
    title: 'Installationsguider | Monster TV - Steg-för-steg IPTV guider',
    description: 'Komplett installationsguider för IPTV på alla enheter.',
    type: 'website',
    locale: 'sv_SE',
    url: 'https://monstertv.tv/installationsguider/',
    siteName: 'Monster TV',
    images: [
      {
        url: 'https://monstertv.tv/images/allsvenskan-2026.jpg',
        width: 1200,
        height: 630,
        alt: 'Monster TV - Installationsguider',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Installationsguider | Monster TV - Steg-för-steg IPTV guider',
    description: 'Komplett installationsguider för IPTV på alla enheter.',
    images: ['https://monstertv.tv/images/allsvenskan-2026.jpg'],
  },
};

export default function InstallationsguiderPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      <section className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center bg-[#0a0a0a]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/backeed.webp" 
            alt="Installationsguider" 
            fill 
            className="object-cover object-[center_60%] brightness-50"
            quality={100}
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Container positioned in the center */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Installationsguider
          </h1>
          
          <div 
            className="flex items-center gap-2"
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontWeight: 400,
              color: "rgb(255, 255, 255)",
              fontSize: "15px",
              lineHeight: "24px"
            }}
          >
            <Link href="/" className="hover:text-[#e50000] transition-colors">Hem</Link>
            <span>/</span>
            <span className="text-gray-300">Installationsguider</span>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-24 px-4 bg-[#0a0a0a] border-t border-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left side */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <span className="text-purple-500 font-bold uppercase tracking-wider text-sm mb-3 px-3 py-1 bg-purple-900/30 rounded-full border border-purple-700/50">
                Installation
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 font-sans tracking-tight text-white leading-tight">
                Installera IPTV enkelt på alla dina enheter
              </h2>
              <p 
                className="text-gray-300 text-lg mb-8" 
                style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", lineHeight: "1.8" }}
              >
                Få tillgång till dina favoritkanaler på nolltid. Vi har gjort det superenkelt att komma igång oavsett vilken enhet du använder. Följ våra tydliga steg-för-steg-guider och börja streama direkt.
              </p>
              
              <ul className="space-y-4 mb-10 w-full">
                {[
                  "Fungerar på Smart TV, mobil och dator",
                  "Ingen teknisk förkunskap krävs",
                  "Kom igång på under 5 minuter"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-700">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200 text-lg font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <Image 
                  src="/images/Live-TV.webp" 
                  alt="Live-TV web" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DeviceGuideGrid />
      <InstallationStepsFAQ />
    </div>
  );
}
