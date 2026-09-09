import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppSidebar from '@/components/AppSidebar';

export const metadata: Metadata = {
  title: "IPTV Dator Instruktioner 2026 | Monster TV - Installationsguider",
  description: "Installera IPTV på Windows och Mac dator. Steg-för-steg guide. 13,000+ kanaler, filmer och live-sport tillgängliga.",
  keywords: ["IPTV", "Windows", "Mac", "datorn", "PC", "Monster TV", "guide", "installationsguider"],
  alternates: { canonical: "https://monstertv.tv/installationsguider/windows-mac/" },
  openGraph: {
    title: "IPTV Dator Instruktioner 2026 | Monster TV - Installationsguider",
    description: "Installera IPTV på Windows och Mac dator. Steg-för-steg guide.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/installationsguider/windows-mac/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - IPTV Dator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Dator Instruktioner 2026 | Monster TV - Installationsguider",
    description: "Installera IPTV på Windows och Mac dator. Steg-för-steg guide.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

const sidebarApps = [
  { name: 'Windows', url: '/installationsguider/windows-mac' },
  { name: 'MAC', url: '/installationsguider/windows-mac' },
  { name: 'Elgiganten', url: 'https://www.elgiganten.se/' },
  { name: 'Power', url: 'https://www.power.se/' },
  { name: 'Webhallen', url: 'https://www.webhallen.com/' },
  { name: 'Apple TV', url: '/installationsguider/apple-tv' },
  { name: 'Formuler Box', url: '/formuler-box' },
  { name: 'Playbutiken', url: 'https://play.google.com/store/apps?device=tv&hl=sv&gl=sv' },
  { name: 'Appstore', url: 'https://www.apple.com/app-store/' },
  { name: 'Läs mer om vårt utbud här', url: '/vart-paket' },
];

export default function WindowsMacPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[520px] py-20 flex items-center justify-center bg-[#0a0a0a]">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/backeed.webp"
            alt="IPTV Dator Instruktioner"
            fill
            className="object-cover object-[center_60%] brightness-50"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight drop-shadow-lg">
            IPTV Dator Instruktioner
          </h1>
          <nav className="flex items-center gap-2 text-white/80 text-base mb-8">
            <Link href="/" className="hover:text-white transition-colors">Hem</Link>
            <span>/</span>
            <span className="text-gray-300">IPTV Dator Instruktioner</span>
          </nav>
          <p className="text-gray-200 text-lg leading-relaxed max-w-3xl mb-10">
            IPTV med Dator – Här ser du hur man kommer igång med IPTV på sin Dator! För att kunna se på IPTV med din dator så behöver du ladda ned en IPTV app. Nedan ser du olika appar som fungerar med din dator. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din enhet men nedan finner du de som vi rekommenderar. Oavsett om du har en dator med Windows eller MAC OS så kan du givetvis se på IPTV. Det fungerar även väldigt bra om du använder apparna nedan. Självklart kan du använda andra appar också.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-2xl mb-8">
            <Link
              href="/installationsguider/windows-mac/windows"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-12 rounded-full text-center transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 text-lg"
            >
              Windows
            </Link>
            <Link
              href="/installationsguider/windows-mac/mac"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-12 rounded-full text-center transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 text-lg"
            >
              Mac
            </Link>
          </div>

          <p className="text-yellow-400 font-bold text-lg">
            Kom bara ihåg att vara nogi så att du endast använder en app åt gången!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Step 1 Section */}
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
                Köp en dator - IPTV på datorn
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Köp en dator på någon utav de större kedjorna som exempelvis <a href="https://www.elgiganten.se/" className="text-blue-400 hover:underline">Elgiganten</a>, <a href="https://www.power.se/" className="text-blue-400 hover:underline">Power</a> eller <a href="https://www.webhallen.com/" className="text-blue-400 hover:underline">Webhallen</a>. Vi rekommenderar inte att man köper en begagnad dator då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponeter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Dessutom så är en dator egentligen inte gjord för att hantera stora IPTV spellistor som kan ha flera hundra tusen titlar. Därför rekommenderas det att man helst använder en <a href="/installationsguider/apple-tv" className="text-blue-400 hover:underline">Apple TV</a> eller exempelvis en <a href="/formuler-box" className="text-blue-400 hover:underline">Formuler Box</a>. Låt dig dock inte bli avskräckt utav detta. En dator kommer alltid att fungera med IPTV men vill du få den bästa upplevelsen så är det givetvis en TV och Box som gäller.
                </p>
                <p>
                  Oavsett om du redan har en dator eller om du köper en ny så kan det vara bra att ta bort onödiga appar och program som inte används då de tar upp plats i lagringsutrymmet och även RAM minnet ibland om programmet körs i bakgrunden.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 Section */}
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
                  Genomför grundställningarna och acceptera eventuella villkor på din nya dator (om den är ny). Logga sedan in eller skapa ett google eller icloud konto på datorn beroende på om det är en MAC eller Windows baserad dator. Installera nödvändiga appar/program och spara förpackningen då din garanti kan vara knuten till den.
                </p>
                <p>
                  Koppla även upp din nya enhet till ditt nätverk. Det rekommenderas alltid att man använder en Ethernet kabel (nätverkssladd) men det fungerar även bra med Wifi förutsatt att din router inte är för långt bort samt att det är en bra router som ger en god täckning utav nätverket i hemmet.
                </p>
                <p>
                  Om stora saker såsom kylskåp, garderober, dörrar och annat står i vägen så kan din dator tappa eller få försämrad anslutning emellanåt. Ta därför det säkra före det osäkra och använd en nätverkskabel mellan enheten och routern.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 Section */}
          <div className="pt-24 pb-24 rounded-3xl bg-black px-6 md:px-12 shadow-2xl border border-gray-900">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">3<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Ladda ned en IPTV app
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Idag finns många olika IPTV appar till nästan alla datorer. De flesta är dock inte speciellt bra, vi har därför samlat de få som vi anser fungera bäst. Nedan ser du några som vi rekommenderar. Dessa appar fungerar utmärkt till Acer, Asus, MSI, Lenovo, MAC och många andra dator märken. Ladda helst ned apparna från <a href="https://play.google.com/store/apps?device=tv&hl=sv&gl=sv" className="text-blue-400 hover:underline">Playbutiken</a> eller <a href="https://www.apple.com/app-store/" className="text-blue-400 hover:underline">Appstore</a>.
              </p>
              
              <ul className="mb-10 w-full grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 text-left px-4 md:px-12">
                {[
                  { name: 'IPTV Smarters', url: '/datorn/iptv-smarters' },
                  { name: 'MyIPTV Player', url: '/datorn/myiptv-player' },
                  { name: 'Duplex Play', url: '/datorn/duplex-play' },
                  { name: 'GSE Smart IPTV Pro', url: '/datorn/gse-smart-iptv-pro' },
                ].map((app, i) => (
                  <li key={i}>
                    <a href={app.url} className="flex items-center text-white font-medium text-lg group">
                      <span className="text-blue-500 mr-3 text-xl leading-none">→</span>
                      {app.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Bästa IPTV appen läser du mer om här.
              </p>
            </div>
          </div>

          {/* Step 4 Section */}
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
                IPTV med datorn - Provperiod
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow mb-8">
                <p>
                  Nu är det dags för dig att begära ett gratis test utav oss genom att trycka på knappen nedan. Vi rekommenderar alltid att man köper 3 månader efter sitt gratis test för att hinna testa ordentligt då vårt utbud är enormt. Vi erbjuder i princip all sport, alla filmer samt alla serier och dokumentärer du kan tänka dig. Givetvis ingår hela utbudet även när du testar vår tjänst kostnadsfritt. <a href="/vart-paket" className="text-blue-400 hover:underline">Läs mer om vårt utbud här</a>.
                </p>
              </div>
              <a
                href="/vart-paket"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-center transition-colors text-lg shadow-lg shadow-blue-600/30 w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                GRATIS TEST
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Step 5 Section */}
          <div className="relative pt-24 pb-24 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src="/images/best-stream.webp"
                alt="Background"
                fill
                className="object-cover object-left md:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10 px-8 md:px-16 w-full lg:w-2/3 flex flex-col items-start text-left ml-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">5<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                IPTV dator är enklare än vad du tror
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Att använda IPTV på en dator är ett populärt och enkelt sätt att få tillgång till ett stort utbud av kanaler, filmer och serier via internet. För att komma igång behöver du en stabil internetuppkoppling och en IPTV-spelare som kan hantera de strömmar som din IPTV-leverantör erbjuder. Några av de vanligaste IPTV-spelarna för dator inkluderar VLC Media Player, Kodi och MyIPTV Player.
                </p>
                <p>
                  Processen för att använda IPTV på en dator är enkel. Först måste du ladda ner och installera en IPTV-spelare. Efter installationen behöver du IPTV-leverantörens M3U-länk eller en fil med dina kanaluppgifter. Denna länk eller fil laddas sedan in i spelaren, vilket ger dig tillgång till IPTV-tjänsten.
                </p>
                <p>
                  VLC Media Player är en av de enklaste och mest använda IPTV-spelarna för datorer. Det är gratis och stödjer en mängd olika filformat. Om du söker en mer anpassningsbar lösning med tillägg och extra funktioner kan Kodi vara ett bra alternativ. MyIPTV Player, tillgänglig för Windows, erbjuder också en enkel och ren användarupplevelse.
                </p>
                <p>
                  Med IPTV på din dator kan du enkelt streama live-TV, on-demand-filmer och serier, vilket ger en flexibel lösning för underhållning på din skärm.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6 Section - Sammanfattning */}
          <div className="pt-24 pb-24 rounded-3xl bg-black px-6 md:px-12 shadow-2xl border border-gray-900">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">6<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Sammanfattning
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 flex flex-col shadow-lg h-full">
                <div className="text-gray-300 text-lg leading-relaxed space-y-6 mb-8 shrink-0">
                  <p>
                    Sammanfattningsvis så rekommenderar vi att man köper en ny dator för att se IPTV. Sedan genomför men grundinställningarna och kopplar upp datorn till internet (helst med en nätverkskabel). Ladda sedan ned en IPTV app och begär ett gratis test eller köp 1-12 mån paket av oss.
                  </p>
                  <p>
                    Njut av, kanaler, filmer, serier, dokumentärer + alla PPV event! I och med att många utav apparna till datorer inte är speciellt bra så har vi listat de få som vi anser fungerar bäst med en dator oavsett Windows eller MAC OS som operativsystem. Du kan givetvis testa andra appar som finns tillgängliga då de flesta appar är ganska lika i hur de ska installeras.
                  </p>
                </div>
                
                <AppSidebar 
                   title="Guider för rekommenderade appar:"
                   apps={sidebarApps}
                   buttonText="Köp IPTV"
                   buttonUrl="/vart-paket"
                 />
                 </div>

              <div className="rounded-2xl border border-gray-800 shadow-lg h-full overflow-hidden min-h-[400px] md:min-h-[500px] relative">
                <Image 
                  src="/images/windows-mac-sammanfattning.webp"
                  alt="Sammanfattning"
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
