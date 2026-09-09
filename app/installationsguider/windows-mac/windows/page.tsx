import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "IPTV på Windows 2026 | Monster TV - Installationsguide",
  description: "Installera IPTV på Windows PC. Steg-för-steg guide för Windows 10 och 11. 13,000+ kanaler, filmer och live-sport tillgängliga.",
  keywords: ["IPTV", "Windows", "Windows 10", "Windows 11", "PC", "Monster TV", "guide", "installationsguider"],
  alternates: { canonical: "https://monstertv.tv/installationsguider/windows-mac/windows/" },
  openGraph: {
    title: "IPTV på Windows 2026 | Monster TV - Installationsguide",
    description: "Installera IPTV på Windows PC. Steg-för-steg guide.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/installationsguider/windows-mac/windows/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - IPTV Windows" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV på Windows 2026 | Monster TV - Installationsguide",
    description: "Installera IPTV på Windows PC. Steg-för-steg guide.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

const apps = [
  { name: 'IPTV Smarters', url: '/datorn/iptv-smarters' },
  { name: 'Tivimate', url: '/datorn/tivimate' },
  { name: 'SET IPTV', url: '/datorn/set-iptv' },
  { name: 'NET IPTV', url: '/datorn/net-iptv' },
  { name: 'IPTV Streamer', url: '/datorn/iptv-streamer' },
  { name: 'Duplex Play', url: '/datorn/duplex-play' },
  { name: 'Extreme IPTV Pro', url: '/datorn/iptv-extreme' },
  { name: 'Smart STB', url: '/datorn/smart-stb' },
  { name: 'GSE Smart IPTV Pro', url: '/datorn/gse-smart-iptv-pro' },
];

export default function WindowsPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[450px] py-20 flex items-center justify-center bg-[#0a0a0a]">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/backeed.webp"
            alt="IPTV Windows Instruktioner"
            fill
            className="object-cover object-[center_60%] brightness-50"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight drop-shadow-lg">
            IPTV Windows Instruktioner
          </h1>
          <nav className="flex items-center gap-2 text-white/80 text-base mb-8">
            <Link href="/" className="hover:text-white transition-colors">Hem</Link>
            <span>/</span>
            <span className="text-gray-300">IPTV Windows Instruktioner</span>
          </nav>
          <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
            IPTV Windows – Här ser du hur man kommer igång med IPTV på din Windows dator! Detta är ett av de smidigaste sätten att njuta av IPTV, särskilt om du vill ha flexibilitet och kontroll över din streamingupplevelse. Även om det kan vara praktiskt att använda andra enheter som IPTV med Smart TV eller mobiltelefoner, fungerar även en Windows-dator bra, speciellt om du är på resande fot och vill se på dina favorit kanaler på en större skärm en IPTV med mobil. Börja med att ladda ned valfri IPTV app windows som är kompatibel från Microsoft Store. Nedan ser du några av de mest populära apparna som vi rekommenderar för Windows plattformen. Klicka på valfri app för att läsa hur du kommer igång och få ut det mesta av din IPTV tjänst. Det finns naturligtvis även andra program som fungerar med Windows, men här hittar du de appar som vi anser är bäst lämpade för en smidig och pålitlig IPTV-upplevelse.
          </p>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0d111d] rounded-3xl border border-gray-800/50 p-10 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">
              IPTV Windows - Kom igång
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              När du ska komma igång så börjar du med att söka efter nedanstående appar i ordningen de syns. Skulle det visa sig att du inte lyckas komma igång med första appen du testar så testar du med nästa och nästa tills det fungerar för dig. Med dina inloggingsuppgifter kan du använda vilka appar du vill. Du är alltså inte begränsad till en specifik app.
            </p>

            <p className="text-yellow-400 font-bold text-lg mb-10">
              Kom bara ihåg att vara nogi så att du endast använder en app åt gången!
            </p>

            {/* Premium Purple App Buttons - one horizontal row */}
            <div className="w-full overflow-x-auto">
              <div className="flex gap-4 justify-center min-w-[640px]">
                <Link href="/datorn/iptv-pro" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1">
                  IPTV Expert
                </Link>
                <Link href="/datorn/iptv-smarters" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1">
                  IPTV Smarters
                </Link>
                <Link href="/datorn/hot-iptv" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1">
                  HOT IPTV Player
                </Link>
                <Link href="/datorn/ibo-player" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1">
                  IBO Player Pro
                </Link>
                <Link href="/datorn/myiptv-player" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1">
                  MyIPTV Player
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Container with gaps */}
      <section className="py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto space-y-8">

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
                IPTV app Windows
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Köp en Windows dator på någon utav de större kedjorna som exempelvis Elgiganten, Power eller Webhallen. Vi rekommenderar inte att man köper en begagnad windows dator då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Dessutom så är en dator egentligen inte gjord för att hantera stora IPTV spellistor som kan ha flera hundra tusen titlar. Därför rekommenderas det att man helst använder en Apple TV eller exempelvis en Formuler Box.
                </p>
                <p>
                  Oavsett om du redan har en dator eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i TVns lagringsutrymme.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 Section */}
          <div className="relative pt-24 pb-24 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src="/images/ptb.webp"
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
                  Genomför grundinställningarna och acceptera eventuella villkor på din Windows-dator om den är ny. Logga sedan in eller skapa ett Microsoft-konto för att få tillgång till alla nödvändiga tjänster och appar. Installera de IPTV-program du behöver, såsom VLC Media Player eller Kodi, som är populära alternativ för IPTV på Windows. Kom ihåg att spara eventuell dokumentation och förpackning, då garantin för din dator ofta är knuten till dessa.
                </p>
                <p>
                  Koppla även upp din dator till nätverket. Det rekommenderas alltid att använda en Ethernet-kabel (nätverkssladd) för bästa prestanda och stabilitet, men det fungerar även bra med WiFi om din router är tillräckligt nära och ger en stark signal. För att säkerställa en jämn IPTV-upplevelse, se till att din router ger tillräcklig täckning och hastighet i hemmet.
                </p>
                <p>
                  Om stora föremål som väggar, möbler eller dörrar blockerar signalen kan din Windows-enhet få försämrad anslutning, vilket kan påverka IPTV-streamingen. Därför är det bäst att använda en nätverkskabel direkt mellan datorn och routern för att undvika avbrott och optimera din IPTV-anslutning.
                </p>
                <p>
                  För att komma igång med IPTV på din Windows-dator behöver du först välja en IPTV-leverantör. Det är viktigt att välja en pålitlig leverantör som erbjuder bra innehåll och stabil streaming. Dessutom bör du kontrollera att leverantören har stöd för de appar och program du planerar att använda. Många IPTV-leverantörer erbjuder M3U-listor, som kan importeras till olika IPTV-spelare, inklusive VLC och Kodi.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 Section */}
          <div className="pt-24 pb-24 rounded-3xl bg-black px-6 md:px-12 shadow-2xl border border-gray-900">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">3<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Ladda ned en IPTV Windows app
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                Idag finns många olika ip tv appar till IPTV windows datorer. Nedan ser du några som vi rekommenderar. Dessa appar fungerar utmärkt till Acer, Asus, MSI, HP, Dell och många andra märken. Ladda helst ned apparna från Microsoft Store.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left: App List */}
              <div className="flex flex-col space-y-4">
                {apps.map((app, i) => (
                  <Link
                    key={i}
                    href={app.url}
                    className="flex items-center text-white font-medium text-lg group hover:text-[#e50000] transition-colors"
                  >
                    <span className="text-blue-500 mr-3 text-xl leading-none group-hover:text-[#e50000]">→</span>
                    {app.name}
                  </Link>
                ))}
                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                  Bästa IPTV appen läser du mer om här.
                </p>
              </div>

              {/* Right: Image */}
              <div className="rounded-2xl border border-gray-800 shadow-lg h-full overflow-hidden min-h-[300px] md:min-h-[400px] relative">
                <Image
                  src="/images/iptv-windows-app.webp"
                  alt="IPTV Windows App"
                  fill
                  className="object-cover"
                />
              </div>
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
                IPTV - GRATIS TEST
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow mb-8">
                <p>
                  Nu är det dags för dig att begära ett gratis test utav oss genom att trycka på knappen nedan. Vi rekommenderar alltid att man köper 3 månader efter sitt gratis test för att hinna testa ordentligt då vårt utbud är enormt. Vi erbjuder i princip all sport, alla filmer samt alla serier och dokumentärer du kan tänka dig. Givetvis ingår hela utbudet även när du testar vår tjänst kostnadsfritt. Läs mer om vårt utbud här.
                </p>
              </div>
              <Link
                href="/vart-paket"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-center transition-colors text-lg shadow-lg shadow-blue-600/30 w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                GRATIS TEST
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
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
                Varför Välja Windows för IPTV?
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Först och främst erbjuder Windows operativsystem stabilitet och användarvänlighet. Detta gör det till en idealisk plattform för IPTV-tjänster. Dessutom finns det ett stort urval av program och appar som är designade för Windows, vilket gör att användare kan välja vad som passar deras behov bäst. Populära IPTV-appar som VLC Media Player och Kodi fungerar sömlöst på Windows. Vidare är det också möjligt att installera dedikerade IPTV-spelare som MyIPTV Player och Simple TV, vilka ger bättre streamingalternativ och fler anpassningsmöjligheter.
                </p>
                <p>
                  En annan fördel med att använda Windows är att operativsystemet ofta får uppdateringar som förbättrar prestandan och säkerheten. Därför kan du alltid vara säker på att du får en smidig och säker IPTV-upplevelse, utan avbrott eller osäkerheter. Dessutom har du möjligheten att enkelt hantera andra uppgifter på din dator medan du streamar, vilket skapar en flexibel och produktiv arbetsmiljö.
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
              {/* Left: Image */}
              <div className="rounded-2xl border border-gray-800 shadow-lg h-full overflow-hidden min-h-[300px] md:min-h-[400px] relative">
                <Image
                  src="/images/iptv-windows-app.webp"
                  alt="IPTV Windows App"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right: Text + App Links */}
              <div className="flex flex-col justify-center">
                <div className="text-gray-300 text-lg leading-relaxed space-y-6 mb-8">
                  <p>
                    Sammanfattningsvis rekommenderar vi att du använder en Windows-dator för att se IPTV på bästa sätt. Börja med att se till att din dator är uppdaterad och konfigurerad med rätt inställningar. Anslut sedan din dator till internet, helst via en nätverkskabel för att få stabil och pålitlig anslutning. Därefter laddar du ner en IPTV-app som VLC Media Player eller Kodi och begär ett gratis test eller köp ett 1-12 månaders paket från oss.
                  </p>
                  <p>
                    Njut av ett brett utbud av kanaler, filmer, serier, dokumentärer och alla PPV-evenemang direkt på din Windows-dator!
                  </p>
                </div>

                <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800">
                  <h3 className="text-white font-bold text-lg mb-6">Guider för rekommenderade appar och installationer:</h3>
                  <ul className="mb-8 w-full space-y-3 text-left">
                    {apps.map((app, i) => (
                      <li key={i}>
                        <Link href={app.url} className="flex items-center text-white font-medium text-lg group hover:text-[#e50000] transition-colors">
                          <span className="text-blue-500 mr-3 text-xl leading-none group-hover:text-[#e50000]">→</span>
                          {app.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/vart-paket"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-center transition-colors shadow-lg text-base inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    Köp IPTV
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
