'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export const metadata: Metadata = {
  title: "TVIP S-BOX IPTV Instruktioner | Monster TV",
  description: "Instruktioner for att konfigurera TVIP S-BOX.",
  keywords: ["TVIP S-BOX", "IPTV", "Monster TV", "installera", "guide", ""],
  alternates: { canonical: "https://monstertv.tv/tvip-box/" },
  openGraph: {
    title: "TVIP S-BOX IPTV Instruktioner | Monster TV",
    description: "Installera Tvip Box pa .",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/tvip-box/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - TVIP S-BOX" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "TVIP S-BOX IPTV Instruktioner | Monster TV",
    description: "Installera Tvip Box pa .",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"]
  }
};


export default function TvipBoxPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      
      {/* ── Hero Section ── */}
      <section className="relative w-full py-12 md:py-16 flex items-center justify-center bg-[#0a0a0a]">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/images/backeed.webp"
            alt="IPTV TVIP Instruktioner"
            fill
            className="object-cover object-center brightness-[0.75] contrast-[1.1] saturate-[1.1]"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight drop-shadow-lg">
            IPTV TVIP Instruktioner
          </h1>
          
          <nav className="flex items-center gap-2 text-white/80 text-base mb-8">
            <Link href="/" className="hover:text-white transition-colors">Hem</Link>
            <span>/</span>
            <span className="text-gray-300">IPTV TVIP Instruktioner</span>
          </nav>
          
          <div className="text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl">
            <p>
              IPTV TVIP Instruktioner till all TVIP boxar finns här. Boxen finns i många olika modeller men de tre vanligaste är TVIP 705, TVIP 605 och TV IP 415. Alla modeller är riktigt bra för att se på IPTV med.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* ── Section 1: Intro & 3 Model Buttons ── */}
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                IPTV TVIP Instruktioner för just din box
              </h2>
              
              {/* 3 Model Anchor Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-4">
                <a 
                  href="#instruktioner" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-center transition-colors shadow-md hover:shadow-blue-500/20 w-full"
                >
                  TVIP 705
                </a>
                <a 
                  href="#instruktioner" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-center transition-colors shadow-md hover:shadow-blue-500/20 w-full"
                >
                  TVIP 605
                </a>
                <a 
                  href="#instruktioner" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-center transition-colors shadow-md hover:shadow-blue-500/20 w-full"
                >
                  Övriga TVIP boxar
                </a>
              </div>
            </div>

            {/* Instruktioner för TVIP boxar text box */}
            <div className="max-w-4xl mx-auto text-left mt-12 bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight">
                Instruktioner för TVIP boxar
              </h3>
              <div className="text-gray-300 text-lg leading-relaxed space-y-5">
                <p>
                  TVIP boxen är en utav de mest avancerade IPTV boxarna på marknaden idag. Den dessutom relativt enkel att komma igång med. Boxen tillåter dig att installera dina kanaler via boxens portal inställningar.
                </p>
                <p>
                  Det rekommenderas i vanliga fall att man laddar upp sin IPTV spellista med Xtream Codes API (alltså med sitt användarnam, lösenord och Portal URL som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden.
                </p>
                <p>
                  Detta behöver du dock inte tänka på med din TVIP box. Med våra TVIP instruktioner kommer du enkelt igång med dina nya box.
                </p>
              </div>
            </div>
          </div>

          {/* ── Section 2: TVIP 705 (Image Left + Text Right) ── */}
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center w-full">
                <div className="relative w-full max-w-md aspect-[16/11] rounded-2xl overflow-hidden border border-gray-800 shadow-xl bg-[#0a0a0a]">
                  <Image 
                    src="/images/tvip-instruktioner-tvip-705-box.webp" 
                    alt="TVIP 705" 
                    fill 
                    className="object-contain p-3" 
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                  TVIP 705
                </h3>
                <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
                  <p>
                    TVIP Instruktioner. TVIP 705 är en populär IPTV-box känd för sin pålitliga prestanda och användarvänlighet. Den erbjuder en smidig och stabil upplevelse för att strömma TV-kanaler och on-demand-innehåll via internet. Boxen är kompatibel med olika IPTV-tjänster och har stöd för både högupplösta (HD) och ultra-högupplösta (4K) videoströmmar, vilket gör den till ett utmärkt val för de som vill njuta av högkvalitativ bild på sina TV-apparater.
                  </p>
                  <p>
                    En av de stora fördelarna med TVIP 705 är dess enkla installation och intuitiva användargränssnitt. Den levereras med en fjärrkontroll som gör det enkelt att navigera mellan olika appar och innehåll. Med stöd för både trådbundet (Ethernet) och trådlöst (Wi-Fi) internet, erbjuder den flexibilitet beroende på användarens nätverksinställningar. Boxen är även utrustad med en kraftfull processor, vilket gör att den kan hantera flera applikationer samtidigt utan förseningar. TVIP 705 har också stöd för populära format som MPEG-2, MPEG-4, H.264 och H.265, vilket säkerställer att den kan spela upp ett brett utbud av mediefiler utan problem.
                  </p>
                  <p>
                    Sammanfattningsvis är TVIP 705 en pålitlig och mångsidig IPTV-box som passar både nybörjare och erfarna användare som vill ha en enkel och stabil lösning för att strömma sina favoritkanaler och filmer. Förutom TVIP boxarna så rekommenderar via även <a href="/installationsguider/nvidia-shield" className="text-blue-400 hover:underline">IPTV Nvidia Shield</a>, <a href="/installationsguider/apple-tv" className="text-blue-400 hover:underline">IPTV Apple TV</a>, <a href="/formuler-box" className="text-blue-400 hover:underline">IPTV Formuler Box</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 3: TVIP 605 (Text Left + Image Right) ── */}
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left order-2 lg:order-1">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                  TVIP 605
                </h3>
                <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
                  <p>
                    Den föregående modellen TVIP 605, är en kompakt och prisvärd IPTV-box som erbjuder en pålitlig streamingupplevelse för TV-kanaler och on-demand-innehåll via internet. Boxen har stöd för HD-upplösning och erbjuder enkel installation med ett användarvänligt gränssnitt. Med stöd för både trådbundet Ethernet och Wi-Fi-anslutning, ger den flexibilitet beroende på användarens nätverksförhållanden.
                  </p>
                  <p>
                    TVIP 605 är utrustad med en effektiv processor som möjliggör snabb navigering och stabil prestanda. Den har också stöd för populära videoformat som MPEG-4 och H.264, vilket gör den till ett bra val för de som söker en smidig IPTV-lösning till ett överkomligt pris.
                  </p>
                </div>
              </div>
              <div className="flex justify-center w-full order-1 lg:order-2">
                <div className="relative w-full max-w-md aspect-[16/11] rounded-2xl overflow-hidden border border-gray-800 shadow-xl bg-[#0a0a0a]">
                  <Image 
                    src="/images/tvip-605-4k-iptv-box.webp" 
                    alt="TVIP 605 4K IPTV Box" 
                    fill 
                    className="object-contain p-3" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 4: Vilka enheter kan jag använda? & Modeller Info ── */}
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
              <span className="text-blue-500 font-black text-sm tracking-[0.3em] uppercase mb-4">Vilka enheter kan jag använda?</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Övriga TVIP boxar
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                TVIP Instruktioner för alla TVIP boxar. Alla TVIP boxar är likadana när det kommer till installationen. Oavsett om du har en äldre eller senare modell så är installationsprocessen snarlik om inte exakt likadan.
              </p>
            </div>

            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                TVIP 605 Instruktioner
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                TVIP Instruktioner för boxen 605. TVIP 605 är den föregående modellen som var väldigt populär i flera år. 605:an var den box som gjorde TVIP så pass kända som de blev. Installationsprocessen på denna box är likandan som på de andra TVIP boxarna i samma serie. Denna box installeras på följande sätt.
              </p>
            </div>

            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                TVIP 705 Instruktioner
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                TVIP instruktioner för TVIP 705. Denna box är den senare varianten i deras utbud. Boxen är relativt enkel att komma igång med och håller samma kvalite som de andra boxarna med något bättre funktioner. En uppsättning som håller samma kvalite som TVIP 705 är appen <a href="/tvip-box" className="text-blue-400 hover:underline">IPTVX med Apple TV</a>.
              </p>
            </div>

            {/* Specifikationer Box (Image Left + Specs Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-4xl mx-auto bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 shadow-xl">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-800">
                <Image 
                  src="/images/tvip-605-4k-iptv-box.webp" 
                  alt="TVIP 605 Specifikationer" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="text-left">
                <h4 className="text-2xl font-extrabold text-white mb-6 border-b border-gray-800 pb-3">
                  Specifikationer
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-800/80 pb-2">
                    <span className="text-gray-400 font-medium">App</span>
                    <span className="text-white font-semibold">Ingen app behövs</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800/80 pb-2">
                    <span className="text-gray-400 font-medium">Installationstid</span>
                    <span className="text-white font-semibold">Ca 5 min</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800/80 pb-2">
                    <span className="text-gray-400 font-medium">Wifi/Kabel</span>
                    <span className="text-white font-semibold">Stöd för båda</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800/80 pb-2">
                    <span className="text-gray-400 font-medium">Kostnad</span>
                    <span className="text-white font-semibold">Ca 1500 kr</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-gray-400 font-medium">Stabilitet</span>
                    <span className="text-yellow-500 font-bold">5/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 5: Instruktioner (5 Steg med bilder) ── */}
          <div id="instruktioner" className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl scroll-mt-24">
            <div className="flex flex-col items-center text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Instruktioner
              </h2>
              <div className="w-24 h-1 bg-yellow-500 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {[
                {
                  step: 1,
                  img: '/images/tvipss1.webp',
                  text: 'Har du köpt en begagnad box eller ska installera om kanalerna så bör du först genomföra en fabriksåterställning (se hur på steg 5). Ställ in boxens språk och tidzon och koppla den till ditt nätverk (helst med nätverkskabel).'
                },
                {
                  step: 2,
                  img: '/images/tvipss2.webp',
                  text: 'Se till så att följande text och inställningar är inlagda i din box (se bild), förutom "MPEG-TS buffer", där väljer du 5000 ms istället för No.'
                },
                {
                  step: 3,
                  img: '/images/tvipss3.webp',
                  text: 'På fliken "Content Source" eller "Innehållskälla" så väljer du "Web-Portal" och fyll därefter i Portal URL (som du får av oss efter köp). Se även till så att resten utav dina inställningar ser ut som på bilden. När du fyllt i allt trycker du på "Apply" och startar om boxen. OBS! Dubbelkolla så att du fyller i allt korrekt!'
                },
                {
                  step: 4,
                  img: '/images/tvipss4.webp',
                  text: 'Undertexter. Nu har du slutfört alla steg och kan behöva aktivera dina undertexter (subtitles). För att göra det väljer du förstoringsglaset på din fjärr när du är inne på en valfri kanal, sedan dyker olika alternativ upp där du kan aktivera undertexter på ditt språk. Finns inga alternativ så finns tyvärr inte undertexter för den kanalen/titeln.'
                },
                {
                  step: 5,
                  img: '/images/tvipss5.webp',
                  text: 'Fabriksåterställning. Här ser du hur man gör en fabriksåterställning på din TVIP box. Tryck på följande knappar i ordning: S.INFO, 4, 9, S.INFO. Du bör efter några sekunder se att boxen påbörjar en fabriksåterställning.'
                }
              ].map((item) => (
                <div key={item.step} className="bg-[#111] border border-gray-800 rounded-2xl p-4 flex flex-col items-center text-center shadow-lg h-full">
                  <div className="relative w-full aspect-[16/11] mb-4 rounded-xl overflow-hidden border border-gray-800 bg-[#0a0a0a]">
                    <Image 
                      src={item.img} 
                      alt={`Steg ${item.step}`} 
                      fill 
                      className="object-cover scale-105" 
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-3 shadow-md shadow-blue-500/30 shrink-0">
                    {item.step}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 6: TVIP Box FAQ & CTA ── */}
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                TVIP Box FAQ
              </h2>
              <div className="w-24 h-1 bg-yellow-500 rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto space-y-4 mb-12">
              {[
                {
                  q: 'Hur installerar man IPTV på en TVIP box?',
                  a: (
                    <p className="text-gray-300 text-base leading-relaxed pt-2">
                      För att installera sina kanaler på en TVIP box så behöver man en Portal URL/Server Adress. Denna får du utav oss när du begär ett gratis test och anger att du vill prova vår tjänst med en TVIP box.
                    </p>
                  )
                },
                {
                  q: 'Var köper man boxen?',
                  a: (
                    <p className="text-gray-300 text-base leading-relaxed pt-2">
                      Boxen finns att köpa på{' '}
                      <a href="https://www.iptv-box.se" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        www.iptv-box.se
                      </a>.
                    </p>
                  )
                },
                {
                  q: 'Hur får man undertexter på sin TVIP box?',
                  a: (
                    <p className="text-gray-300 text-base leading-relaxed pt-2">
                      Undertexter på appen får du genom att trycka på den röda knappen på din fjärrkontroll.
                    </p>
                  )
                },
                {
                  q: 'Behöver jag ladda ned någon app?',
                  a: (
                    <p className="text-gray-300 text-base leading-relaxed pt-2">
                      Nej det behövs inte.
                    </p>
                  )
                }
              ].map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors focus:outline-none"
                    >
                      <h4 className="text-white font-bold text-lg">
                        {faq.q}
                      </h4>
                      <div className={`w-8 h-8 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : 'text-gray-400'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 border-t border-gray-800/60">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link 
                href="/iptv-abonnemang" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-center transition-colors shadow-lg shadow-blue-500/30 text-lg inline-block"
              >
                Testa IPTV
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
