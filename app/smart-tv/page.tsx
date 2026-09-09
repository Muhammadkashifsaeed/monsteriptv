import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppSidebar from '@/components/AppSidebar';

export const metadata: Metadata = {
  title: "IPTV på Smart TV 2026 | Monster TV - Installationsguide",
  description: "Installera IPTV på din Smart TV (Samsung, LG och andra). Steg-för-steg guide och appar för att streama 13,000+ kanaler, filmer och live-sport.",
  keywords: ["IPTV", "Smart TV", "Samsung", "LG", "installera", "Monster TV", "guide"],
  alternates: { canonical: "https://monstertv.tv/smart-tv/" },
  openGraph: {
    title: "IPTV på Smart TV 2026 | Monster TV - Installationsguide",
    description: "Installera IPTV på din Smart TV. 13,000+ kanaler, filmer och live-sport.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/smart-tv/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - Smart TV" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV på Smart TV 2026 | Monster TV - Installationsguide",
    description: "Installera IPTV på din Smart TV.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
  robots: { index: true, follow: true },
};

const easyApps = [
  { img: 'iptv smarter.webp',        name: 'IPTV Smarters',   label: 'Enkel installation', url: '/smart-tv/iptv-smarters' },
  { img: 'Xtream-IPTV.webp',         name: 'Xtream IPTV',     label: 'Enkel installation', url: '/smart-tv/xtream-iptv' },
  { img: 'ibo-player-juo-logo.avif', name: 'IBO Player',      label: 'Enkel installation', url: '/smart-tv/ibo-player' },
  { img: 'iptv pro.webp',            name: 'IPTV Pro',         label: 'Enkel installation', url: '/smart-tv/iptv-pro' },
  { img: 'teleivizeo iptv.webp',     name: 'Televizio IPTV',  label: 'Relativt enkle installation', url: '/smart-tv/televizio-iptv' },
  { img: 'set iptv.webp',            name: 'SET IPTV',         label: 'Relativt enkle installation', url: '/smart-tv/set-iptv' },
  { img: 'net iptv.webp',            name: 'NET IPTV',         label: 'Relativt enkle installation', url: '/smart-tv/net-iptv' },
];

const moreApps = [
  { img: 'tivimate.webp',            name: 'Tivimate', url: '/smart-tv/tivimate' },
  { img: 'iptv Extreame.webp',       name: 'IPTV Extreme', url: '/smart-tv/iptv-extreme' },
  { img: 'IPTV-Smarters-PRO.webp',   name: 'IPTV Smarters', url: '/smart-tv/iptv-smarters-pro' },
  { img: 'duplex play.webp',         name: 'Duplex Play', url: '/smart-tv/duplex-play' },
  { img: 'hot iptv.webp',            name: 'HOT IPTV', url: '/smart-tv/hot-iptv' },
  { img: 'Xtream-IPTVs.webp',        name: 'Xtream IPTV', url: '/smart-tv/xtream-iptvs' },
  { img: 'xui iptv palyer.webp',     name: 'XUI IPTV Player', url: '/smart-tv/xui-iptv-player' },
  { img: 'smart stb.webp',           name: 'Smart STB', url: '/smart-tv/smart-stb' },
];

const sidebarApps: { name: string; url: string }[] = [
];

export default function SmartTvPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">

      {/* ── Hero Section ── */}
      <section className="relative w-full h-[300px] md:h-[380px] flex items-center justify-center bg-[#0a0a0a]">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/backeed.webp"
            alt="Installationsguide – Smart TV"
            fill
            className="object-cover object-[center_60%] brightness-50"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight drop-shadow-lg">
            Installationsguide – Smart TV
          </h1>
          <nav className="flex items-center gap-2 text-white/80 text-base">
            <Link href="/" className="hover:text-white transition-colors">Hem</Link>
            <span>/</span>
            <span className="text-gray-300">Installationsguide – Smart TV</span>
          </nav>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* ── 1. Article Intro: left text + right image ── */}
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                  IPTV Smart TV Instruktioner
                </h2>
                <div className="text-gray-300 text-lg leading-relaxed space-y-5">
                  <p>
                    IPTV med Smart TV – Här ser du hur man kommer igång med sin Smart TV! Detta är en utav de smidigaste sätten att se på IPTV. Även om det in många fall ger en bra upplevelse så rekommenderas det alltid att man använder en IPTV box. Börja med att ladda ned valfri app. Nedan ser du de olika apparna som vi rekommenderar till Smart TV. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din enhet men här finner du de som vi rekommenderar mest.
                  </p>
                  <p className="font-semibold text-white">
                    IPTV Smarters är enklast att komma igång med men Tivimate är bäst på Smart TV.
                  </p>
                </div>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
                <Image src="/images/IPTV-Smart-TV.webp" alt="Smart TV IPTV" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* ── 2. KOM IGÅNG Section ── */}
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="text-blue-500 font-black text-sm tracking-[0.3em] uppercase mb-4">KOM IGÅNG</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Kom igång</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                När du ska komma igång så börjar du med att söka efter nedanstående appar i ordningen de syns. Skulle det visa sig att du inte lyckas komma igång med första appen du testar så testar du med nästa och nästa tills det fungerar för dig. Med dina inloggningsuppgifter kan du använda vilka appar du vill. Du är alltså inte begränsad till en specifik app.
              </p>
              <div className="w-full max-w-2xl bg-[#111] border-l-4 border-yellow-500 rounded-xl p-6 text-left shadow-inner">
                <p className="text-white font-semibold text-lg leading-relaxed">
                  Kom bara ihåg att vara noga så att du endast använder en app åt gången!
                </p>
              </div>
            </div>

            {/* Recommended apps heading */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mt-16">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                Rekommenderade appar att börja med
              </h3>
              <div className="w-24 h-1 bg-yellow-500 rounded-full mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed">
                Vi rekommenderar att man börjar med någon utav nedanstående appar då de är enklast att komma igång med om man börjar med ett gratis test eller om man är nybörjare. Spellistan är enkel att aktivera på dessa appar.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                De &quot;relativt enkla apparna&quot; är också enkla att komma igång med men här behöver man besöka appens hemsida och ladda upp sin spellista genom att kopiera och klistra in sin m3u länk man får från oss vid test/köp.
              </p>
            </div>

            {/* Row 1: 4 cards */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {easyApps.slice(0, 4).map((app, i) => (
                <Link key={i} href={app.url} className="group">
                  <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 flex flex-col items-center text-center shadow-lg h-full">
                    <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-[#0a0a0a]">
                      <Image src={`/images/${app.img}`} alt={app.name} fill className="object-contain p-2" />
                    </div>
                    <h3 className="font-bold text-white text-base mb-3">{app.name}</h3>
                    <span className="text-yellow-500 font-bold text-xs border border-yellow-500/40 rounded-full px-3 py-1 mt-auto">
                      {app.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Row 2: 3 cards */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {easyApps.slice(4).map((app, i) => (
                <Link key={i} href={app.url} className="group">
                  <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 flex flex-col items-center text-center shadow-lg h-full">
                    <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-[#0a0a0a]">
                      <Image src={`/images/${app.img}`} alt={app.name} fill className="object-contain p-2" />
                    </div>
                    <h3 className="font-bold text-white text-base mb-3">{app.name}</h3>
                    <span className="text-yellow-500 font-bold text-xs border border-yellow-500/40 rounded-full px-3 py-1 mt-auto">
                      {app.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── 3. Fler IPTV appar (8 apps) ── */}
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Fler IPTV appar till Smart TV
              </h2>
              <div className="w-24 h-1 bg-yellow-500 rounded-full" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {moreApps.map((app, i) => (
                <Link key={i} href={app.url} className="group">
                  <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 flex flex-col items-center text-center shadow-lg h-full">
                    <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-[#0a0a0a]">
                      <Image src={`/images/${app.img}`} alt={app.name} fill className="object-contain p-2" />
                    </div>
                    <h3 className="font-bold text-white text-base mb-3">{app.name}</h3>
                    <span className="text-blue-400 font-bold text-xs border border-blue-500/40 rounded-full px-3 py-1 mt-auto">
                      Kompatibel med Smart TV
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── 4. Step 1 Section ── */}
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
                Köp en Smart TV
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Köp en Smart TV på någon utav de större kedjorna som exempelvis Elgiganten, Power eller Webhallen. Vi rekommenderar inte att man köper en begagnad Smart TV då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Dessutom så är en Smart TV egentligen inte gjord för att hantera stora IPTV spellistor som kan ha flera hundra tusen titlar. Därför rekommenderas det att man helst använder en Apple TV eller exempelvis en Formuler Box.
                </p>
                <p>
                  Oavsett om du redan har en Smart TV eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i TVns lagringsutrymme.
                </p>
              </div>
            </div>
          </div>

          {/* ── 5. Step 2 Section ── */}
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
                  Genomför grundinställningarna och acceptera eventuella villkor på din nya Smart TV om den är ny. Logga sedan in eller skapa ett LG, Samsung, Philips konto på TVn och installera nödvändiga appar. Spara förpackningen då din garanti kan vara knuten till den.
                </p>
                <p>
                  Koppla även upp din nya enhet till ditt nätverk. Det rekommenderas alltid att man använder en Ethernet kabel (nätverkssladd) men det fungerar även bra med Wifi förutsatt att din router inte är för långt bort samt att det är en bra router som ger en god täckning utav nätverket i hemmet.
                </p>
                <p>
                  Om stora saker såsom kylskåp, garderober, dörrar och annat står i vägen så kan din Smart TV tappa eller få försämrad anslutning emellanåt. Ta därför det säkra före det osäkra och använd en nätverkskabel mellan enheten och routern.
                </p>
              </div>
            </div>
          </div>

          {/* ── 6. Step 3 Section ── */}
          <div className="pt-24 pb-24 rounded-3xl bg-black px-6 md:px-12 shadow-2xl border border-gray-900">
            {/* Top Centered Part */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">3<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Ladda ned en IPTV app
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Idag finns många olika IPTV appar till Smart TV. Nedan ser du några som vi rekommenderar. Dessa appar fungerar utmärkt till Samsung, LG, Philips, Sony, TCL och många andra TV märken. Ladda helst ned apparna från Playbutiken.
              </p>
            </div>

            {/* Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
              {/* Left Box */}
              <div className="bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 flex flex-col shadow-lg h-full">
                <p className="text-gray-300 text-lg leading-relaxed mb-8 shrink-0">
                  Sök upp valfri app nedan direkt i din TV:s app-butik (Google Play, Samsung Smart Hub eller LG Content Store). Har du redan inloggningsuppgifter från oss kan du testa apparna i den ordning de listas tills en av dem fungerar som du vill.
                </p>
                <ul className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 content-start">
                  {[
                    'IPTV Smarters', 'Tivimate', 'SET IPTV', 'NET IPTV',
                    'IPTV Streamer', 'Duplex Play', 'Extreme IPTV Pro',
                    'Smart STB', 'GSE Smart IPTV Pro', 'SS IPTV'
                  ].map((app, i) => (
                    <li key={i} className="flex items-center text-white font-medium text-lg">
                      <span className="text-blue-500 mr-3 text-xl leading-none">→</span>
                      {app}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href="/smart-tv#appar"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-center transition-colors text-sm shadow-lg shadow-blue-600/30 w-full sm:w-auto inline-flex items-center justify-center gap-2"
                  >
                    Se alla appar och guider
                    <span className="text-base">→</span>
                  </a>
                </div>
              </div>

              {/* Right Box — Image */}
              <div className="bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 flex flex-col shadow-lg h-full justify-center">
                <div className="relative w-full h-72 md:h-80 rounded-xl overflow-hidden bg-[#0a0a0a] flex items-center justify-center border border-gray-900 shrink-0">
                  <Image
                    src="/images/smart-tv.webp"
                    alt="Smart TV"
                    fill
                    className="object-contain p-4 scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Bottom 3 Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                <h4 className="text-yellow-500 font-bold text-lg mb-3">Kompatibla modeller</h4>
                <p className="text-gray-300 text-base">De flesta Android baserade Smart TV-apparater, Samsung och LG.</p>
              </div>
              <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                <h4 className="text-yellow-500 font-bold text-lg mb-3">Säker nedladdning</h4>
                <p className="text-gray-300 text-base">Hämta appar endast från din TV:s officiella app-butik.</p>
              </div>
              <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                <h4 className="text-yellow-500 font-bold text-lg mb-3">Nästa steg</h4>
                <p className="text-gray-300 text-base">Installera appen och följ instruktionerna.</p>
              </div>
            </div>
          </div>

          {/* ── 7. Step 4 Section ── */}
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

          {/* ── 8. Step 5 Section ── */}
          <div className="pt-24 pb-24 rounded-3xl bg-black px-6 md:px-12 shadow-2xl border border-gray-900">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">5<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Sammanfattning
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              <div className="bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 flex flex-col shadow-lg h-full">
                <div className="text-gray-300 text-lg leading-relaxed space-y-6 mb-8 shrink-0">
                  <p>
                    Sammanfattningsvis så rekommenderar vi att man köper en ny Smart TV för att se IPTV på Smart TV. Sedan genomför man grundinställningarna och kopplar upp Smart TVn till internet (helst med en nätverkskabel). Ladda sedan ned en IPTV app och begär ett gratis test eller köp 1-12 mån paket av oss.
                  </p>
                  <p>
                    Njut av, kanaler, filmer, serier, dokumentärer + alla PPV event!
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
                  src="/images/Sammanfattning.webp"
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
