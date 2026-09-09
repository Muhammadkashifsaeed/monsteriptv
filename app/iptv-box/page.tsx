import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IptvBoxPricingSection from '@/components/IptvBoxPricingSection';
import ComparisonTable from '@/components/ComparisonTable';
import CtaSection from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "IPTV Box 2026 | Monster TV - Android IPTV Boxar, priser & abonnemang",
  description: "Köp en Android IPTV box från Monster TV 2026. Få tillgång till 13,000+ kanaler, 26,000+ filmer & serier, live-sport och PPV-evenemang. Paket från 1,899 kr med leverans och support.",
  keywords: ["IPTV box", "Android box", "IPTV box 2026", "Monster TV box", "Formuler", "TVIP", "streaming box", "abonnemang", "kanaler", "sport", "filmer"],
  alternates: { canonical: "https://monstertv.tv/iptv-box/" },
  openGraph: {
    title: "IPTV Box 2026 | Monster TV - Android IPTV Boxar, priser & abonnemang",
    description: "Köp en Android IPTV box från Monster TV. 13,000+ kanaler, 26,000+ filmer & serier, live-sport och PPV. Paket från 1,899 kr.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/iptv-box/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - IPTV Box" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Box 2026 | Monster TV - Android IPTV Boxar, priser & abonnemang",
    description: "Köp en Android IPTV box från Monster TV. 13,000+ kanaler, 26,000+ filmer & serier, live-sport och PPV. Paket från 1,899 kr.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default function IptvBoxPage() {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center bg-[#0a0a0a]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/allsvenskan-2026.jpg" 
            alt="IPTV Box" 
            fill 
            className="object-cover object-top brightness-[1.2] contrast-110"
            quality={100}
            priority
          />
          {/* Dark gradient overlay focused on the left for text readability, fully clear on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 via-30% to-transparent to-60%"></div>
        </div>

        {/* Content Container positioned on the left */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex justify-start">
          <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col items-start text-left mt-10 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              IPTV Box
            </h1>
            
            <div 
              className="mb-8 flex items-center gap-2"
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontWeight: 400,
                color: "rgb(255, 255, 255)",
                fontSize: "15px",
                lineHeight: "24px"
              }}
            >
              <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <span>/</span>
              <span>IPTV Box</span>
            </div>

            <p 
              className="text-gray-200 text-lg md:text-xl mb-10"
              style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", lineHeight: "1.8" }}
            >
              Med Monster TV får du tillgång till ett av världens mest stabila streamingnätverk. Se dina favoritkanaler och program live eller on demand – när som helst, var som helst.
            </p>

            <Link 
              href="#paket"
              className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-10 rounded-full text-lg self-start transition-colors uppercase tracking-wider inline-block"
            >
              Köp nu
            </Link>
          </div>
        </div>
      </section>

      {/* Box Pricing Section */}
      <IptvBoxPricingSection id="paket" />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
