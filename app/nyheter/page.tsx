import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import FootballSchedule from "@/components/FootballSchedule";
import NyheterBlogGrid from "@/components/NyheterBlogGrid";
import { blogPosts } from "@/lib/blogData";
import CtaSection from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "Nyheter | Monster TV - IPTV Nyheter, Streaming & Guider",
  description: "Följ de senaste nyheterna inom IPTV, streaming, sport, filmer och serier. Här hittar du tips, guider och uppdateringar från Monster TV.",
  keywords: ["IPTV", "nyheter", "streaming", "sport", "filmer", "serier", "Monster TV", "guider", "tips"],
  alternates: {
    canonical: "https://monstertv.tv/nyheter/",
  },
  openGraph: {
    title: "Nyheter | Monster TV - IPTV Nyheter, Streaming & Guider",
    description: "Följ de senaste nyheterna inom IPTV, streaming, sport, filmer och serier. Här hittar du tips, guider och uppdateringar från Monster TV.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/nyheter/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - Nyheter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyheter | Monster TV - IPTV Nyheter, Streaming & Guider",
    description: "Följ de senaste nyheterna inom IPTV, streaming, sport, filmer och serier.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default function NyheterPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center bg-[#0a0a0a]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/allsvenskan-2026.jpg" 
            alt="Nyheter" 
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
          <div className="w-full md:w-1/2 lg:w-6/12 flex flex-col items-start text-left mt-10 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Nyheter
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
              <span>Nyheter</span>
            </div>

            <p 
              className="text-gray-200 text-lg md:text-xl mb-10"
              style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", lineHeight: "1.8" }}
            >
              I vår blogg delar vi de senaste nyheterna, tipsen och guiderna inom streaming och Streaming. Här hittar du hjälpsamma artiklar om hur du installerar Streaming, upptäcker nya filmer och serier samt får ut det mesta av din underhållningsupplevelse.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/vara-paket" 
                className="bg-[#e50000] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg text-center transition-colors uppercase tracking-wider shadow-lg"
              >
                Köp nu
              </Link>
              <Link 
                href="https://monstertv.tv/2026-world-cup/" 
                className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-full text-lg text-center transition-colors uppercase tracking-wider shadow-lg"
              >
                VM 2026 Schema
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          {/* Blog Cards Grid with Staggered Animation */}
          <NyheterBlogGrid posts={blogPosts} />

          {/* Football World Cup 2026 Schedule Section */}
          <div className="mt-32">
            <FootballSchedule />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
