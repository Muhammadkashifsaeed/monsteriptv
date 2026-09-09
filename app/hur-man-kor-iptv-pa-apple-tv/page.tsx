import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CtaSection from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "Hur man kör IPTV på Apple TV 2026 | Monster TV Guide",
  description: "Steg-för-steg guide för att köra IPTV på Apple TV. Ladda ned appar, installera och få tillgång till 13,000+ kanaler och filmer på din Apple TV 4, 4K och 5.",
  keywords: ["IPTV", "Apple TV", "guide", "installera", "Monster TV", "appar"],
  alternates: { canonical: "https://monstertv.tv/hur-man-kor-iptv-pa-apple-tv/" },
  openGraph: {
    title: "Hur man kör IPTV på Apple TV 2026 | Monster TV Guide",
    description: "Steg-för-steg guide för IPTV på Apple TV. 13,000+ kanaler och filmer.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/hur-man-kor-iptv-pa-apple-tv/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - IPTV på Apple TV" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hur man kör IPTV på Apple TV 2026 | Monster TV Guide",
    description: "Steg-för-steg guide för IPTV på Apple TV.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default function AppleTvPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center bg-[#0a0a0a]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/allsvenskan-2026.jpg"
            alt="Apple TV Setup"
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
          <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col items-start text-left mt-10 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Hur man kör iptv på Apple TV
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
              <span>Hur man kör iptv på Apple TV</span>
            </div>

            <p
              className="text-gray-200 text-lg md:text-xl mb-10"
              style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", lineHeight: "1.8" }}
            >
              Med Monster TV får du tillgång till ett av världens mest stabila streamingnätverk. Se dina favoritkanaler och program live eller on demand – när som helst, var som helst.
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

      {/* Article Section */}
      <section className="py-20 px-4">
        <div
          className="max-w-4xl mx-auto space-y-12"
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontWeight: 400,
            color: "rgb(253, 254, 255)",
            fontSize: "17px",
            lineHeight: "28px"
          }}
        >
          <div>
            <h2 className="mb-10 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}>
              Steg för att komma igång med Monster TV på Apple TV
            </h2>

            <h2 className="mb-6 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "28px", lineHeight: "36px", color: "rgb(255, 255, 255)" }}>
              Steg 1: Använd IPTV med Apple TV
            </h2>
            <p className="mb-4">
              För bästa upplevelse rekommenderas att du använder en nyare Apple TV-enhet, som finns hos återförsäljare som Elgiganten, Power eller Webhallen. Apple TV 5 ger bäst kompatibilitet och prestanda, men även Apple TV 4 och 4K fungerar utmärkt. Observera att Apple TV 3 inte stöder IPTV, eftersom appar inte kan installeras på den modellen.
            </p>
            <p>
              Ett alternativ till Apple TV är att använda en TVIP-box, som också fungerar mycket bra för IPTV-streaming.
            </p>
          </div>

          <div className="w-full md:w-4/5 relative aspect-video my-10">
            <Image
              src="/images/Hur-man-kör-iptv-på-Apple-TV-2-.webp"
              alt="Apple TV Steg 1"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="mb-6 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "28px", lineHeight: "36px", color: "rgb(255, 255, 255)" }}>
              Steg 2: Grundinställningar av Apple TV
            </h2>
            <p className="mb-4">
              Starta din Apple TV och slutför de grundläggande inställningarna genom att acceptera villkor och logga in på ditt konto. Installera nödvändiga appar och behåll gärna förpackningen då den kan behövas för garantin.
            </p>
            <p>
              Anslut enheten till internet. För stabilast anslutning rekommenderas Ethernet-kabel, men WiFi fungerar bra om signalen är stark. Undvik hinder mellan router och enhet, såsom väggar, garderober eller större hushållsapparater, eftersom det kan påverka signalstyrkan. Kabelanslutning ger dock alltid den mest stabil upplevelsen.
            </p>
          </div>

          <div className="w-full md:w-4/5 relative aspect-video my-10">
            <Image
              src="/images/Hur-man-kör-iptv-på-Apple-TV-3-.webp.bv_.webp"
              alt="Apple TV Steg 2"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="mb-6 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "28px", lineHeight: "36px", color: "rgb(255, 255, 255)" }}>
              Steg 3: Installera en IPTV-app
            </h2>
            <p className="mb-4">
              Det finns flera appar som fungerar perfekt med Apple TV. Du kan ladda ner dem direkt från App Store. Några populära alternativ är:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>IPTVX</li>
              <li>iPlayTV</li>
              <li>GSE Smart IPTV PRO</li>
              <li>Perfect IPTV</li>
              <li>IPTV Smarters</li>
              <li>Xtream IPTV</li>
            </ul>
            <p>
              Dessa appar fungerar utmärkt tillsammans med Monster TV och ger en smidig tittarupplevelse.
            </p>
          </div>

          <div className="w-full md:w-4/5 relative aspect-video my-10">
            <Image
              src="/images/Hur-man-kör-iptv-på-Apple-TV-4-.webp.bv_.webp"
              alt="Apple TV Steg 3"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="mb-6 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "28px", lineHeight: "36px", color: "rgb(255, 255, 255)" }}>
              Steg 4: Testa Monster TV
            </h2>
            <p className="mb-4">
              Nu kan du prova Monster TV genom att begära ett kostnadsfritt test via knappen på vår hemsida. Efter testperioden rekommenderar vi att välja ett abonnemang på minst tre månader för att fullt ut uppleva vårt breda innehållsutbud.
            </p>
            <p className="mb-4">
              Hos Monster TV får du tillgång till ett enormt bibliotek av sport, filmer, serier, dokumentärer och livekanaler, och allt ingår även under testperioden.
            </p>
            <p>
              Med ett längre abonnemang kan du följa stora sportevenemang, nya filmer och populära serier året runt. Många användare väljer efter testperioden att minska eller avsluta sina traditionella TV- och streamingabonnemang tack vare det stora utbudet.
            </p>
          </div>

          <div className="w-full md:w-4/5 relative aspect-video my-10">
            <Image
              src="/images/Hur-man-kör-iptv-på-Apple-TV-5.webp.bv_.webp"
              alt="Apple TV Steg 4"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="mb-6 uppercase tracking-wide" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "28px", lineHeight: "36px", color: "rgb(255, 255, 255)" }}>
              Steg 5: Sammanfattning
            </h2>
            <p className="mb-4">
              För bästa IPTV-upplevelse rekommenderas att använda en modern Apple TV. Slutför grundinställningarna, anslut enheten till internet – helst via kabel – och installera sedan en IPTV-app. Därefter kan du starta med ett gratis test eller välja ett abonnemang på 1–12 månader hos Monster TV.
            </p>
            <p>
              Njut av tusentals kanaler, filmer, serier, dokumentärer och PPV-evenemang. Monster TV uppdaterar kontinuerligt innehållet så att du alltid har tillgång till det senaste inom underhållning.
            </p>
          </div>

          <div className="pt-12 mt-12 border-t border-gray-800">
            <h2 className="mb-4 uppercase tracking-wide text-center" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}>
              IPTV-appar till Apple TV
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: 'iptvx1.jpg', name: 'IPTVX', text: 'Kompatibel med Apple TV.', showButton: true, url: '/installationsguider/apple-tv/iptvx' },
                { img: 'iptvx2.webp', name: 'iPlayTV', text: 'Fungerar perfekt på Apple TV med kraftfullt appstöd.', showButton: true, url: '/installationsguider/apple-tv/iplaytv' },
                { img: 'iptvx3.webp', name: 'Perfect IPTV', text: 'Smidig och snabb app för live-TV och VOD på Apple TV.', showButton: true, url: '/installationsguider/apple-tv/perfect-iptv' },
                { img: 'iptvx4.webp', name: 'IPTV Expert', text: 'Avancerade inställningar och EPG-stöd för en bättre upplevelse.', showButton: true, url: '/installationsguider/apple-tv/iptv-expert' },
                { img: 'iptvx5.webp', name: 'Xtream IPTV', text: 'Stöd för Xtream Codes API och enkel integration på Apple TV.', showButton: false, url: '/installationsguider/apple-tv/xtream-iptv' },
                { img: 'iptvx6.webp', name: 'GSE Smart IPTV Pro', text: 'Flexibel app med stöd för flera spellistor och format på Apple TV.', showButton: false, url: '/installationsguider/apple-tv/gse-smart-iptv-pro' },
                { img: 'iptvx7.webp', name: 'IPTV Streamer', text: 'Populär app med stöd för flexibla användare och spellistor.', showButton: false, url: '/installationsguider/apple-tv/iptv-streamer' },
                { img: 'iptvx8.webp', name: 'IPTV Snarters', text: 'Enkel app för Smart TV med stöd för Xtream Codes API.', showButton: false, url: '/installationsguider/apple-tv/iptv-smarters' },
                { img: 'ibo-player-juo-logo.avif', name: 'IBO Player', text: 'Kraftfull och modern mediaspelare för bästa prestanda på Apple TV.', showButton: false, url: '/installationsguider/apple-tv/ibo-player' },
              ].map((app, index) => (
                <Link key={index} href={app.url} className="flex flex-col items-center text-center bg-[#111] border border-gray-800 rounded-xl p-6 shadow-xl h-full transition-transform hover:scale-[1.02] cursor-pointer">
                  <div className="relative w-full h-24 sm:h-32 mb-6 overflow-hidden flex-shrink-0">
                    <Image 
                      src={`/images/${app.img}`}
                      alt={app.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-white font-sans text-xl tracking-wide uppercase mb-3">{app.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {app.text}
                  </p>
                  {app.showButton && (
                    <div className="mt-auto w-full border border-yellow-500 text-yellow-500 rounded-full py-2.5 font-bold uppercase tracking-wide text-sm flex items-center justify-center">
                      Rekommenderas
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
