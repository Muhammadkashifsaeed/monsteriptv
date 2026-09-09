import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import SmartTVSection from "@/components/SmartTVSection";
import SportsSection from "@/components/SportsSection";
import BannerSection from "@/components/BannerSection";
import TrendingMoviesSection from "@/components/TrendingMoviesSection";
import TrendingSportsSection from "@/components/TrendingSportsSection";
import TrendingKidsSection from "@/components/TrendingKidsSection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroTypingText from "@/components/HeroTypingText";

export const metadata: Metadata = {
  title: "Monster TV | Bästa IPTV med 13,000+ kanaler, filmer & live-sport",
  description: "Streaming med Monster TV. 13,000+ TV-kanaler, 26,000+ filmer och serier, live-sport och PPV-evenemang. Konkurrenskraftiga paket och gratis test. Säker, stabil och snabbaktiverad IPTV. Välj mellan 3 månaders (499 kr), 6 månaders (899 kr) eller 12 månaders (1,499 kr) paket.",
  keywords: ["IPTV", "streaming", "Monster TV", "live-sport", "filmer", "serier", "kanaler", "paket", "gratis test", "3 månader", "6 månader", "12 månader", "abonnemang"],
  alternates: {
    canonical: "https://monstertv.tv/",
  },
  openGraph: {
    title: "Monster TV | Bästa IPTV med 13,000+ kanaler, filmer & live-sport",
    description: "Streaming med Monster TV. 13,000+ TV-kanaler, 26,000+ filmer och serier, live-sport och PPV-evenemang.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - Bästa IPTV med 13,000+ kanaler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monster TV | Bästa IPTV med 13,000+ kanaler, filmer & live-sport",
    description: "13,000+ TV-kanaler, 26,000+ filmer och serier, live-sport och PPV-evenemang.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden font-sans">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-[-1] bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://monstertv.tv/wp-content/uploads/2026/02/Monster-iptv.mp4" type="video/mp4" />
        </video>
        {/* Lighter Gradient Overlay for readability while keeping the video bright/white */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-white/10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 z-10 text-white">
        <div className="max-w-3xl flex flex-col items-start text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1] text-white">
            <HeroTypingText />
          </h1>
          
          <div 
            className="space-y-4 mb-10" 
            style={{ 
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", 
              fontSize: "18px", 
              lineHeight: "30px", 
              color: "rgb(255, 255, 255)", 
              fontWeight: 400 
            }}
          >
            <p>
              <strong className="font-bold">Monster TV</strong> erbjuder en modern och användarvänlig streamingupplevelse för dig som vill njuta av digital underhållning på ett enkelt sätt.
            </p>
            <p>
              Upptäck tillgängligt innehåll inom <strong className="font-bold">sport, filmer, serier och liveunderhållning</strong> via kompatibla enheter. Välj en streaminglösning som passar din vardag och njut av en smidig upplevelse på Smart TV, mobil, surfplatta och andra digitala enheter.
            </p>
            <p>
              Med enkel aktivering och flexibla streamingpaket får du en lösning som är utformad för modern underhållning.
            </p>
          </div>

          <Link
            href="/vara-paket"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-full text-lg mb-10 transition-all shadow-xl hover:scale-105 duration-300 inline-block text-center"
          >
            SE VÅRA STREAMINGPAKET
          </Link>

          <div className="flex items-center w-auto mt-2 opacity-90 hover:opacity-100 transition-opacity duration-300">
            <Image 
              src="/images/Google-review.webp" 
              alt="Google Review" 
              width={150} 
              height={48} 
              className="object-contain h-auto w-auto drop-shadow-xl"
              quality={100}
            />
          </div>
        </div>
      </div>
      </div>

      {/* Intro Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left side: Video */}
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl relative h-[350px] sm:h-[400px] lg:h-[450px]">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              >
                <source src="https://monstertv.tv/wp-content/uploads/2026/02/monster-tv-intro.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right side: Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 leading-tight tracking-tight">
                MONSTER TV – Modern och smidig streaming
              </h2>
              
              <div 
                className="space-y-5 mb-10 text-gray-700 font-normal"
                style={{ 
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", 
                  fontSize: "18px", 
                  lineHeight: "30px"
                }}
              >
                <p>
                  Monster TV erbjuder en flexibel streamingupplevelse för dig som vill samla digital underhållning på ett enkelt och användarvänligt sätt. Utforska tillgängligt innehåll inom live-TV, sport, filmer och serier och använd tjänsten på kompatibla enheter som passar din vardag.
                </p>
                <p>
                  En modern streaminglösning ger dig möjlighet att njuta av underhållning på ett flexibelt sätt, med enkel aktivering och en användarvänlig upplevelse.
                </p>
                <p>
                  Välj ett paket som passar dina behov och använd Monster TV på kompatibla Smart TV-enheter, mobiler, surfplattor, datorer och andra stödda streaming-enheter.
                </p>
              </div>

          <Link
            href="/vara-paket"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300 inline-block text-center"
          >
            BESTÄLL NU
          </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <PricingSection />

      {/* Devices Section */}
      <DevicesSection />

      {/* Smart TV Section */}
      <SmartTVSection />

      {/* Sports Section */}
      <SportsSection />

      {/* Banner Section */}
      <BannerSection />

      {/* Trending Movies Section */}
      <TrendingMoviesSection />

      {/* Trending Sports Section */}
      <TrendingSportsSection />

      {/* Trending Kids/Series Section */}
      <TrendingKidsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Features Section */}
      <FeaturesSection />
    </main>
  );
}
