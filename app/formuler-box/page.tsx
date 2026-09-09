import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppSidebar from '@/components/AppSidebar';

export const metadata: Metadata = {
  title: "Formuler IPTV Box Instruktioner | Monster TV Guide",
  description: "Formuler IPTV-instruktioner - kom igång med din Formuler box. Guide för MYTVOnline, TiviMate, IPTV Smarters och andra appar. 13,000+ kanaler.",
  keywords: ["Formuler box", "IPTV", "instruktioner", "installera", "MYTVOnline", "Monster TV"],
  alternates: { canonical: "https://monstertv.tv/formuler-box/" },
  openGraph: {
    title: "Formuler IPTV Box Instruktioner | Monster TV Guide",
    description: "Formuler IPTV-instruktioner - kom igång med din Formuler box.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/formuler-box/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - Formuler Box" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formuler IPTV Box Instruktioner | Monster TV Guide",
    description: "Kom igång med din Formuler box med våra guide.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
  robots: { index: true, follow: true },
};

const sidebarApps = [
  { name: 'IPTV Smarters', url: '/formuler-box/iptv-smarters' },
  { name: 'Tivimate', url: '/formuler-box/tivimate' },
  { name: 'SET IPTV', url: '/formuler-box/set-iptv' },
  { name: 'NET IPTV', url: '/formuler-box/net-iptv' },
  { name: 'IPTV Streamer', url: '/formuler-box/iptv-streamer' },
  { name: 'Duplex Play', url: '/formuler-box/duplex-play' },
  { name: 'Extreme IPTV Pro', url: '/formuler-box/iptv-extreme' },
  { name: 'Smart STB', url: '/formuler-box/smart-stb' },
  { name: 'GSE Smart IPTV Pro', url: '/formuler-box/gse-smart-iptv-pro' },
  { name: '9Xtream IPTV', url: '/formuler-box/9xtream' },
  { name: 'XUI IPTV Player', url: '/formuler-box/xui-iptv-player' },
  { name: 'IPTV Pro', url: '/formuler-box/iptv-pro' },
  { name: 'Xtream IPTV', url: '/formuler-box/xtream-iptv' },
  { name: 'HOT IPTV', url: '/formuler-box/hot-iptv' },
];

const recommendedApps = [
  { name: 'IPTV Smarters', badge: 'Enkel installation', url: '/formuler-box/iptv-smarters', image: '/images/iptv smarter.webp' },
  { name: 'IPTV Streamer', badge: 'Enkel installation', url: '/formuler-box/iptv-streamer', image: '/images/iptv streamer.webp' },
  { name: 'Xtream IPTV', badge: 'Enkel installation', url: '/formuler-box/xtream-iptv', image: '/images/Xtream IPTV.webp' },
  { name: '9Xtream IPTV', badge: 'Enkel installation', url: '/formuler-box/9xtream', image: '/images/9xtreame.webp' },
  { name: 'SET IPTV', badge: 'Relativt enkel installation', url: '/formuler-box/set-iptv', image: '/images/set iptv.webp' },
  { name: 'NET IPTV', badge: 'Relativt enkel installation', url: '/formuler-box/net-iptv', image: '/images/net iptv.webp' },
  { name: 'Duplex Play', badge: 'Relativt enkel installation', url: '/formuler-box/duplex-play', image: '/images/duplex play.webp' },
  { name: 'Smart STB', badge: 'Relativt enkel installation', url: '/formuler-box/smart-stb', image: '/images/smart stb.webp' },
];

const moreFormulerApps = [
  { name: 'Tivimate', url: '/formuler-box/tivimate' },
  { name: 'IPTV Extreme', url: '/formuler-box/iptv-extreme' },
  { name: 'IPTV Pro', url: '/formuler-box/iptv-pro' },
  { name: 'HOT IPTV', url: '/formuler-box/hot-iptv' },
  { name: 'GSE Smart IPTV Pro', url: '/formuler-box/gse-smart-iptv-pro' },
  { name: 'XUI IPTV Player', url: '/formuler-box/xui-iptv-player' },
];

export default function FormulerBoxPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      
      {/* ── Hero Section ── */}
      <section className="relative w-full py-12 md:py-16 flex items-center justify-center bg-[#0a0a0a]">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/images/backeed.webp"
            alt="Formuler IPTV Instruktioner"
            fill
            className="object-cover object-center brightness-[0.75] contrast-[1.1] saturate-[1.1]"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight drop-shadow-lg">
            Formuler IPTV Instruktioner
          </h1>
          
          <nav className="flex items-center gap-2 text-white/80 text-base mb-8">
            <Link href="/" className="hover:text-white transition-colors">Hem</Link>
            <span>/</span>
            <span className="text-gray-300">Formuler IPTV Instruktioner</span>
          </nav>
          
          <div className="text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl">
            <p>
              Formuler IPTV Instruktioner – För att kunna se på IPTV med din Formuler iptv Box så behöver du ladda ned en IPTV app. Nedan ser du olika appar som fungerar med din Formuler box. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din enhet men nedan finner du de som vi rekommenderar. Vi har listat apparna i ordning efter vilken vi anser vara enklast att komma igång med där bäst är först/högst upp.
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
                När du ska komma igång med formuler iptv box så börjar du med att söka efter nedanstående appar i ordningen de syns. Skulle det visa sig att du inte lyckas komma igång med första appen du testar så testar du med nästa och nästa tills det fungerar för dig. Med dina inloggingsuppgifter kan du använda vilka appar du vill. Du är alltså inte begränsad till en specifik app. Läs mer nedan!
              </p>
              
              {/* Warning box with yellow left line */}
              <div className="w-full max-w-3xl bg-[#111] border-l-4 border-yellow-500 rounded-xl p-6 text-left shadow-inner">
                <p className="text-white font-semibold text-lg leading-relaxed">
                  Kom bara ihåg att vara noga så att du endast använder en app åt gången!
                </p>
              </div>
            </div>

            {/* ── Rekommenderade appar att börja med ── */}
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mt-16">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                Rekommenderade appar att börja med
              </h3>
              <div className="w-24 h-1 bg-yellow-500 rounded-full mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Observera att MyTVonline apparna är Formulers egna appar och därför rekommenderas det starkt att man använder dessa. Spellistan är enkel att aktivera på dessa appar.
              </p>
              
              {/* MyTVOnline App Links with increased width */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-16">
                <a 
                  href="/formuler-box" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-center transition-colors shadow-md hover:shadow-blue-500/20 w-full"
                >
                  My TV Online 3
                </a>
                <a 
                  href="/formuler-box" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-center transition-colors shadow-md hover:shadow-blue-500/20 w-full"
                >
                  MyTV Online 2
                </a>
                <a 
                  href="/formuler-box" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-center transition-colors shadow-md hover:shadow-blue-500/20 w-full"
                >
                  MyTV Online 1
                </a>
              </div>

              {/* ── Fler IPTV appar till Formuler boxar Heading ── */}
              <div className="flex flex-col items-center text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                  Fler IPTV appar till Formuler boxar
                </h3>
                <div className="w-24 h-1 bg-yellow-500 rounded-full" />
              </div>
            </div>

            {/* 8 App Image Boxes - Left-aligned 4 column grid without hover jump */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {recommendedApps.map((app, i) => (
                <a key={i} href={app.url} className="block">
                  <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 flex flex-col items-center text-center shadow-lg h-full">
                    <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-[#0a0a0a]">
                      <Image src={app.image} alt={app.name} fill className="object-contain p-2" />
                    </div>
                    <h3 className="font-bold text-white text-base mb-3">{app.name}</h3>
                    <span className="text-yellow-500 font-bold text-xs border border-yellow-500/40 rounded-full px-3 py-1 mt-auto">
                      {app.badge}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Fler IPTV appar (Buttons) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {moreFormulerApps.map((app, i) => (
                <a 
                  key={i} 
                  href={app.url} 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl text-left transition-colors shadow-lg"
                >
                  {app.name}
                </a>
              ))}
            </div>
          </div>

          {/* ── Step 1 Section ── */}
          <div className="relative pt-24 pb-24 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src="/images/iptvsvsport.webp"
                alt="Background"
                fill
                className="object-cover object-right md:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10 px-8 md:px-16 w-full lg:w-2/3 flex flex-col items-start text-left">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">1<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                Köp en Android Box
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Köp en Android box på någon utav de större kedjorna som exempelvis <a href="https://www.elgiganten.se/" className="text-blue-400 hover:underline">Elgiganten</a>, <a href="https://www.power.se/" className="text-blue-400 hover:underline">Power</a> eller <a href="https://www.webhallen.com/" className="text-blue-400 hover:underline">Webhallen</a> alternativt <a href="https://satvision.se/" className="text-blue-400 hover:underline">Satvision</a>. Vi rekommenderar inte att man köper en begagnad android box då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Det rekommenderas alltid att man använder en <a href="/installationsguider/apple-tv" className="text-blue-400 hover:underline">Apple TV</a> eller exempelvis en <a href="/formuler-box" className="text-blue-400 hover:underline">Formuler Box</a>.
                </p>
                <p>
                  Oavsett om du redan har en Android box eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i boxens lagringsutrymme. Även <a href="/tvip-box" className="text-blue-400 hover:underline">IPTV med TVIP box</a> är ett bra sätt att se på IPTV.
                </p>
              </div>
            </div>
          </div>

          {/* ── Step 2 Section ── */}
          <div className="relative pt-24 pb-24 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src="/images/backeed.webp"
                alt="Background"
                fill
                className="object-cover object-left md:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10 px-8 md:px-16 w-full lg:w-2/3 flex flex-col items-start text-left ml-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">2<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                Grundinställningar
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Genomför grundinställningarna och acceptera eventuella villkor på din nya Android box om den är ny. Spara förpackningen då din garanti kan vara knuten till den.
                </p>
                <p>
                  Koppla även upp din nya box till ditt nätverk. Det rekommenderas alltid att man använder en Ethernet kabel (nätverkssladd) men det fungerar även bra med Wifi förutsatt att din router inte är för långt bort samt att det är en bra router som ger en god täckning utav nätverket i hemmet.
                </p>
                <p>
                  Om stora saker såsom kylskåp, garderober, dörrar och annat står i vägen så kan din android box tappa eller få försämrad anslutning emellanåt. Ta därför det säkra före det osäkra och använd en nätverkskabel mellan enheten och routern.
                </p>
              </div>
            </div>
          </div>

          {/* ── Step 3 Section ── */}
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl relative">
            <div className="flex flex-col mb-12">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">3<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Ladda ned en IPTV app
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-gray-300 text-lg leading-relaxed space-y-5">
                  <p>
                    Ladda ned en IPTV app<br/>
                    Idag finns många olika ip tv appar till Android boxar. Nedan ser du några som vi rekommenderar. Ladda helst ned apparna från <a href="https://play.google.com/store/apps?device=tv&hl=sv&gl=sv" className="text-blue-400 hover:underline">Playbutiken</a>.
                  </p>
                  <ul className="flex flex-col space-y-2 mt-4 text-white" style={{ fontFamily: "Sora, 'Sora Fallback', Arial, Helvetica, sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "24px" }}>
                    {[
                      { name: 'IPTV Smarters', url: '/formuler-box/iptv-smarters' },
                      { name: 'Tivimate', url: '/formuler-box/tivimate' },
                      { name: 'SET IPTV', url: '/formuler-box/set-iptv' },
                      { name: 'NET IPTV', url: '/formuler-box/net-iptv' },
                      { name: 'IPTV Streamer', url: '/formuler-box/iptv-streamer' },
                      { name: 'Duplex Play', url: '/formuler-box/duplex-play' },
                      { name: 'Extreme IPTV Pro', url: '/formuler-box/iptv-extreme' },
                      { name: 'Smart STB', url: '/formuler-box/smart-stb' },
                      { name: 'GSE Smart IPTV Pro', url: '/formuler-box/gse-smart-iptv-pro' },
                      { name: 'SS IPTV', url: '/formuler-box/ss-iptv' },
                      { name: '9Xtream IPTV', url: '/formuler-box/9xtream' },
                      { name: 'XUI IPTV Player', url: '/formuler-box/xui-iptv-player' },
                      { name: 'IPTV Pro', url: '/formuler-box/iptv-pro' },
                      { name: 'Xtream IPTV', url: '/formuler-box/xtream-iptv' },
                      { name: 'IBO Premium', url: '/formuler-box/ibo-player' },
                      { name: 'HOT IPTV', url: '/formuler-box/hot-iptv' }
                    ].map((app, i) => (
                      <li key={i} className="flex items-center">
                        {app.url !== '#' ? (
                          <svg className="w-5 h-5 text-[#8E51FF] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        ) : (
                          <div className="w-2 h-2 bg-[#8E51FF] rounded-full mr-4 ml-1.5 shrink-0" />
                        )}
                        
                        {app.url !== '#' ? (
                          <a href={app.url} className="hover:text-gray-300 transition-colors">
                            {app.name}
                          </a>
                        ) : (
                          <span className="text-gray-300">{app.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-gray-300">
                    Bästa IPTV appen läser du mer om här.
                  </p>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <div className="relative w-full max-w-lg aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
                  <Image src="/images/formuler-z-iptv.webp" alt="Formuler IPTV" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Step 4 Section ── */}
          <div className="relative pt-24 pb-24 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src="/images/sveirge-banner.webp"
                alt="Background"
                fill
                className="object-cover object-left md:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10 px-8 md:px-16 w-full lg:w-2/3 flex flex-col items-start text-left ml-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">4<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                IPTV - GRATIS TEST
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Nu är det dags för dig att begära ett gratis test utav oss genom att trycka på knappen nedan. Vi rekommenderar alltid att man köper 3 månader efter sitt gratis test för att hinna testa ordentligt då vårt utbud är enormt. Vi erbjuder i princip all sport, alla filmer samt alla serier och dokumentärer du kan tänka dig. Givetvis ingår hela utbudet även när du testar vår tjänst kostnadsfritt. <a href="/vart-paket" className="text-blue-400 hover:underline">Läs mer om vårt utbud här</a>.
                </p>
                <div className="mt-8">
                  <a href="/iptv-abonnemang" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-center transition-colors shadow-lg shadow-blue-500/30 text-lg inline-block">
                    GRATIS TEST
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Step 5 Sammanfattning ── */}
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl relative">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">5<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Sammanfattning
              </h2>
              
              <div className="text-gray-300 text-lg leading-relaxed space-y-5 max-w-4xl text-center">
                <p>
                  Sammanfattningsvis så rekommenderar vi att man köper en ny Formuler Box för att se IPTV på Formuler IPTV boxar. Sedan genomför men grundinställningarna och kopplar upp boxen till internet (helst med en nätverkskabel). Ladda sedan ned en IPTV app och begär ett gratis test eller köp 1-12 mån paket av oss.
                </p>
                <p className="font-semibold text-white">
                  Njut av, kanaler, filmer, serier, dokumentärer + alla PPV event!
                </p>
                <p>
                  IPTV på Formuler-boxar erbjuder en av de bästa streamingupplevelserna tack vare enhetens kraftfulla hårdvara och intuitiva användargränssnitt. Formuler-boxar är byggda för att leverera högkvalitativ IPTV-streaming och fungerar smidigt med både live-TV och video-on-demand (VoD). En av de mest framstående funktionerna på Formuler-boxar är appen MyTVOnline, som är förinstallerad på enheten och ger enkel åtkomst till IPTV-tjänster.
                </p>
                <p>
                  Med MyTVOnline kan du ansluta till din IPTV-leverantör genom att lägga till en portal-URL eller M3U-länk. Den stöder också EPG (elektronisk programguide), inspelning av program, och Time Shift-funktioner, vilket gör att du kan pausa och spola tillbaka live-TV. Undertexter och flera ljudspår stöds också, vilket gör det enkelt att anpassa tittarupplevelsen.
                </p>
                <p>
                  Formuler-boxar, som Z8, Z10 och Alpha, är kända för att leverera jämn och stabil streaming i hög kvalitet, inklusive 4K-upplösning och HDR-stöd. Enheterna är användarvänliga och tillåter enkel installation och konfiguration av IPTV-tjänster. Med sin kombination av kraftfull hårdvara och avancerade mjukvarufunktioner är Formuler-boxar ett populärt val för IPTV-entusiaster som söker en smidig och professionell streaminglösning.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              <div className="bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 flex flex-col shadow-lg h-full">
                 <AppSidebar 
                   title="Guider för rekommenderade appar:"
                   apps={sidebarApps}
                   buttonText="Köp IPTV"
                   buttonUrl="/vart-paket"
                 />
              </div>

              <div className="rounded-2xl border border-gray-800 shadow-lg h-full overflow-hidden min-h-[400px] md:min-h-[500px] relative">
                <Image 
                  src="/images/formuler-z8-uhd-4k-android-iptv.webp"
                  alt="Formuler Z8 UHD 4K Android IPTV"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
