import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ComparisonTable from '@/components/ComparisonTable';
import CtaSection from '@/components/CtaSection';
import BastITestFaq from '@/components/BastITestFaq';
import FeaturesGrid from '@/components/FeaturesGrid';

export const metadata: Metadata = {
  title: "IPTV Bäst i Test 2026 | Monster TV - Jämförelse av leverantörer",
  description: "Vi har jämfört de populäraste IPTV-leverantörerna 2026. Här ser du vilken streamingtjänst som ger mest värde för sport, filmer och live-TV.",
  keywords: ["IPTV", "bäst i test", "jämförelse", "streaming", "Monster TV", "paket"],
  alternates: { canonical: "https://monstertv.tv/bast-i-test/" },
  openGraph: {
    title: "IPTV Bäst i Test 2026 | Monster TV - Jämförelse av leverantörer",
    description: "Jämför de populäraste IPTV-leverantörerna 2026. Hitta rätt streamingtjänst för sport, filmer och live-TV.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/bast-i-test/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - IPTV Bäst i Test" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Bäst i Test 2026 | Monster TV - Jämförelse av leverantörer",
    description: "Jämför de populäraste IPTV-leverantörerna 2026.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default function BastITestPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center bg-[#0a0a0a]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/download-4.webp" 
            alt="Streaming Bäst i Test" 
            fill 
            className="object-cover object-top brightness-100 contrast-125 saturate-110"
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
              Streaming Bäst i Test
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
              <span>Streaming Bäst i Test</span>
            </div>

            <p 
              className="text-gray-200 text-lg md:text-xl mb-10"
              style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", lineHeight: "1.8" }}
            >
              Letar du efter den bästa Streaming-tjänsten 2026? Vi har jämfört marknadens mest populära leverantörer baserat på kanalutbud, sportinnehåll, bildkvalitet, stabilitet, kundsupport och pris. Här kan du enkelt se vilken Streaming-tjänst som ger mest värde och välja den lösning som passar dina behov bäst för sport, filmer och live-TV.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/vara-paket" 
                className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-10 rounded-full text-lg text-center transition-colors uppercase tracking-wider shadow-lg inline-block"
              >
                Köp nu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <ComparisonTable />

      {/* Article Content Section */}
      <section className="py-20 px-4">
        <div 
          className="max-w-4xl mx-auto space-y-12"
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "17px",
            lineHeight: "28px"
          }}
        >
          
          {/* Intro */}
          <div className="text-left space-y-6">
            <p className="font-bold tracking-wide">
              Att välja rätt Streaming-leverantör kan kännas som ett lotteri
            </p>
            <p>
              På ytan ser många tjänster likadana ut, men skillnaderna märks snabbt när du faktiskt börjar använda dem. Billiga överbelastade servrar och långsam eller obefintlig support är tyvärr standard hos många aktörer.
            </p>
            <p>
              Det är därför vi på Monster TV inte bara levererar kanaler – vi har byggt en plattform med fokus på stabilitet, kvalitet och med ett av marknadens största innehållsutbud. Varför stå ut med lagg och svarta skärmar när du kan få en premiumupplevelse utan kompromisser?
            </p>
          </div>

          <div className="space-y-12 mt-16">
            
            <div>
              <h2 className="mb-6 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}>Allt om Streaming – det här behöver du veta</h2>
              <p className="mb-4">
                Många leverantörer lovar fantastiska upplevelser, men problemen visar sig ofta när du försöker se en viktig match och bilden fryser. Många leverantörer är bara återförsäljare som delar på svag serverkapacitet.
              </p>
              <p>
                En tjänst som säger sig ha 90 % drifttid betyder i praktiken att din TV kan ligga nere flera dagar varje månad. Därför har Monster TV byggt en egen stabil infrastruktur för att leverera 99,9 % drifttid och över 46 000 livekanaler, så att du slipper chansa när det verkligen gäller.
              </p>
            </div>

            <div>
              <h2 className="mb-6 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}>Så valdes de bästa Streaming-leverantörerna ut</h2>
              <p className="mb-4">
                Marknaden fylls ständigt med nya aktörer som påstår sig vara bäst, men vi tittade bortom reklamen och fokuserade på verklig användarupplevelse.
              </p>
              <p className="mb-4">Vi jämförde leverantörer utifrån det som verkligen betyder något:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>innehållsutbud</li>
                <li>stabilitet och drifttid</li>
                <li>support och svarstider</li>
                <li>serverteknik och infrastruktur</li>
              </ul>
              <p className="mb-4">
                Skillnaderna visade sig vara enorma. Vissa tjänster erbjuder bara några tusen kanaler medan andra levererar tiotusentals. Kundtjänsten svarar på minuter hos vissa, medan andra låter kunder vänta i mer än ett dygn.
              </p>
              <p>
                Monster TV använder modern serverteknik och dedikerad infrastruktur, vilket ger en stabilare upplevelse än många billiga, delade lösningar på marknaden.
              </p>
            </div>

            <div>
              <h2 className="mb-6 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}>Vad ingår egentligen i en Streaming-tjänst?</h2>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Mer än bara siffror</h3>
              <p className="mb-4">
                Många tjänster skryter om “tusentals kanaler”, men kvaliteten och variationen skiljer sig stort.
              </p>
              <p>
                Hos Monster TV får du tillgång till över 46 000 livekanaler samt ett massivt VOD-bibliotek med över 165 000 filmer och serier. Det ger dig betydligt större valfrihet än många konkurrenter.
              </p>
            </div>

            <div>
              <h2 className="mb-6 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}>Sport och 4K – där kvalitet verkligen märks</h2>
              <p className="mb-4">
                Det räcker inte med många kanaler om kvaliteten faller när det verkligen gäller. Många leverantörer saknar stabil teknik och levererar streams som hackar under stora matcher.
              </p>
              <p className="mb-4">Monster TV erbjuder:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Full sporttäckning</li>
                <li>Premium PPV-event</li>
                <li>Äkta 4K-kanaler</li>
                <li>Stabil streaming även under stora sportevenemang</li>
              </ul>
              <p className="font-medium text-white italic">
                När finalen spelas ska du se matchen – inte buffringssymbolen.
              </p>
            </div>

            <div>
              <h2 className="mb-6 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}>För sportfans – stabilitet är allt</h2>
              <p className="mb-4">
                Inget förstör stämningen snabbare än lagg mitt i en avgörande situation. Budgetlösningar kan fungera ibland, men vid stora live-event blir problemen tydliga.
              </p>
              <p>
                Monster TVs stabila infrastruktur gör att du kan följa matcher och evenemang utan avbrott.
              </p>
            </div>

            <div>
              <h2 className="mb-6 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}>Varför driftsäkerhet betyder mer än du tror</h2>
              <p className="mb-4">
                Att stirra sig blind på kanalantalet hjälper inte om bilden fryser vid avgörande ögonblick. Många leverantörer använder billiga, delade servrar, vilket orsakar instabilitet.
              </p>
              <p>
                Monster TV fokuserar på hög drifttid och stabil streaming så att upplevelsen fungerar när det verkligen gäller.
              </p>
            </div>

            <div>
              <h2 className="mb-6 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}>Support – när hjälp verkligen behövs</h2>
              <p className="mb-4">
                Problem uppstår ibland, och då är snabb hjälp avgörande. Skillnaden mellan en förstörd kväll och en räddad upplevelse är ofta hur snabbt kundtjänsten svarar.
              </p>
              <p>
                Monster TV satsar på snabb och tillgänglig kundtjänst så att problem kan lösas snabbt när det behövs.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wide">Streaming Bäst i Test 2026 – Slutsats</h2>
              <p className="mb-4">
                Marknaden är full av billiga alternativ, men kvalitet och stabilitet varierar kraftigt. Skillnaden mellan att bara sälja kanaler och att leverera en fungerande plattform märks snabbt i praktiken.
              </p>
              <p className="mb-4">
                Monster TV fokuserar på stabilitet, innehåll och användarupplevelse så att din streaming fungerar när du trycker på play.
              </p>
              <p className="mt-6">
                Varför nöja sig med buffring och osäker kvalitet när du kan välja en tjänst som bara fungerar?
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <BastITestFaq />

      {/* Features Grid Section */}
      <FeaturesGrid />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
