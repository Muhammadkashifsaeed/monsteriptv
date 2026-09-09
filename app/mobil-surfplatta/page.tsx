import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppSidebar from '@/components/AppSidebar';

export const metadata: Metadata = {
  title: "IPTV på mobil & surfplatta 2026 | Monster TV",
  description: "Hur du kör IPTV på mobil (iOS/Android) eller surfplatta. Streama sport, filmer och serier var som helst med Monster TV. 13,000+ kanaler tillgängliga.",
  keywords: ["IPTV", "mobil", "surfplatta", "iOS", "Android", "Monster TV", "streaming"],
  alternates: { canonical: "https://monstertv.tv/mobil-surfplatta/" },
  openGraph: {
    title: "IPTV på mobil & surfplatta 2026 | Monster TV",
    description: "Streama sport, filmer och serier på din mobil eller surfplatta.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/mobil-surfplatta/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - Mobil & Surfplatta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV på mobil & surfplatta 2026 | Monster TV",
    description: "Streama sport, filmer och serier på din mobil eller surfplatta.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
  robots: { index: true, follow: true },
};

const sidebarApps = [
  { name: 'ip-tv', url: '/mobil-surfplatta' },
  { name: 'Elgiganten', url: 'https://www.elgiganten.se/' },
  { name: 'Power', url: 'https://www.power.se/' },
  { name: 'Webhallen', url: 'https://www.webhallen.com/' },
  { name: 'Playbutiken', url: 'https://play.google.com/store/apps?device=tv&hl=sv&gl=sv' },
  { name: 'Appstore', url: 'https://www.apple.com/app-store/' },
];

export default function MobilSurfplattaPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative w-full h-[300px] md:h-[380px] flex items-center justify-center bg-[#0a0a0a]">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/backeed.webp"
            alt="Installationsguide – iOS/Android"
            fill
            className="object-cover object-[center_60%] brightness-50"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight drop-shadow-lg">
            Installationsguide – iOS/Android
          </h1>
          <nav className="flex items-center gap-2 text-white/80 text-base">
            <Link href="/" className="hover:text-white transition-colors">Hem</Link>
            <span>/</span>
            <span className="text-gray-300">Installationsguide – iOS/Android</span>
          </nav>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* ── 1. Article Intro: Centered Text Only (No Box) ── */}
          <div className="py-8">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                IPTV Mobil Instruktioner
              </h2>
              <div className="text-gray-300 text-lg leading-relaxed space-y-5">
                <p>
                  IPTV med Mobilen eller Surfplattan – Här ser du hur man kommer igång med sin Mobil eller surfplatta! För att kunna se på IPTV med din Mobil så behöver du ladda ned en IPTV app. Nedan ser du olika appar som fungerar med din Smartphone. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din telefon men nedan finner du de som vi rekommenderar.
                </p>
                <p>
                  Nedan ser du vilken utav apparna som kan laddas ned till respektive mobil (iPhone, Android eller till båda). Dessa appar fungerar nästan alltid likadant på surfplattor med iOS eller Android operativsystem.
                </p>
              </div>
            </div>
          </div>

          {/* ── 2. KOM IGÅNG Section ── */}
          <div className="rounded-3xl bg-black px-6 md:px-12 py-16 border border-gray-900 shadow-2xl">
            {/* Top part */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="text-blue-500 font-black text-sm tracking-[0.3em] uppercase mb-4">
                KOM IGÅNG
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Kom igång
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                När du ska komma igång så börjar du med att söka efter nedanstående appar i ordningen de syns. Skulle det visa sig att du inte lyckas komma igång med första appen du testar så testar du med nästa och nästa tills det fungerar för dig. Med dina inloggningsuppgifter kan du använda vilka appar du vill. Du är alltså inte begränsad till en specifik app.
              </p>
              <div className="w-full max-w-2xl bg-[#111] border-l-4 border-yellow-500 rounded-xl p-6 text-left shadow-inner">
                <p className="text-white font-semibold text-lg leading-relaxed">
                  Kom bara ihåg att vara noga så att du endast använder en app åt gången!
                </p>
              </div>
            </div>

            {/* Sub-section 1: iPhone & Android */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mt-20">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                IPTV appar till iPhone & Android
              </h3>
              <div className="w-24 h-1 bg-yellow-500 rounded-full mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed">
                Om du har en iOS och Android baserad mobil så kan du använda någon utav dessa appar. Dessa appar fungerar alltså till båda. Fler appar till iOS och Android baserade mobiler ser du längre ned.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { img: 'iptv smarter.webp', name: 'IPTV Smarters' , url: '/mobil-surfplatta/iptv-smarters' },
                { img: 'GSE smart iptv.webp', name: 'GSE Smart IPTV' , url: '/mobil-surfplatta/gse-smart-iptv' },
                { img: 'iptv streamers.webp', name: 'IPTV Streamers' , url: '/mobil-surfplatta/iptv-streamers' },
                { img: 'Xtream-IPTV.webp', name: 'Xtream IPTV' , url: '/mobil-surfplatta/xtream-iptv' },
              ].map((app, i) => (
                <Link key={i} href={app.url} className="group">
                  <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 flex flex-col items-center text-center shadow-lg h-full">
                    <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-[#0a0a0a]">
                      <Image src={`/images/${app.img}`} alt={app.name} fill className="object-contain p-2" />
                    </div>
                    <h3 className="font-bold text-white text-base mb-3">{app.name}</h3>
                    <span className="text-yellow-500 font-bold text-xs border border-yellow-500/40 rounded-full px-3 py-1 mt-auto">
                      Bäst på Android
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sub-section 2: iPhone */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mt-20">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                Rekommenderade appar till iPhone
              </h3>
              <div className="w-24 h-1 bg-yellow-500 rounded-full mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed">
                Dessa appar fungerar bäst på iPhone och rekommenderas i följande ordning.
              </p>
            </div>
            
            {/* Displaying 5 cards: 4 on top, 1 centered below */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { img: 'iptv x.jpg', name: 'IPTV X' , url: '/mobil-surfplatta/iptv-x' },
                { img: 'perfect iptv.webp', name: 'Perfect IPTV' , url: '/mobil-surfplatta/perfect-iptv' },
                { img: 'IPTV Expert.webp', name: 'IPTV Expert' , url: '/mobil-surfplatta/iptv-expert' },
                { img: 'mega IPTV.webp', name: 'Mega IPTV' , url: '/mobil-surfplatta/mega-iptv' },
              ].map((app, i) => (
                <Link key={i} href={app.url} className="group">
                  <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 flex flex-col items-center text-center shadow-lg h-full">
                    <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-[#0a0a0a]">
                      <Image src={`/images/${app.img}`} alt={app.name} fill className="object-contain p-2" />
                    </div>
                    <h3 className="font-bold text-white text-base mb-3">{app.name}</h3>
                    <span className="text-yellow-500 font-bold text-xs border border-yellow-500/40 rounded-full px-3 py-1 mt-auto">
                      iPhone
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <Link href="/mobil-surfplatta/iptv-world" className="group w-full md:w-1/4">
                <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 flex flex-col items-center text-center shadow-lg h-full">
                  <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-[#0a0a0a]">
                    <Image src="/images/iptv world.webp" alt="IPTV World" fill className="object-contain p-2" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-3">IPTV World</h3>
                  <span className="text-yellow-500 font-bold text-xs border border-yellow-500/40 rounded-full px-3 py-1 mt-auto">
                    iPhone
                  </span>
                </div>
              </Link>
            </div>

            {/* Sub-section 3: Android */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mt-20">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                Rekommenderade appar till Android
              </h3>
              <div className="w-24 h-1 bg-yellow-500 rounded-full mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed">
                Dessa appar fungerar bäst på Android mobiler och rekommenderas i följande ordning.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { img: 'iptv pro.webp', name: 'IPTV Pro' , url: '/mobil-surfplatta/iptv-pro' },
                { img: 'teleivizeo iptv.webp', name: 'Televizio IPTV' , url: '/mobil-surfplatta/televizo' },
                { img: '9xtreame.webp', name: '9xtreame' , url: '/mobil-surfplatta/9xtream' },
                { img: 'implayer mobile.webp', name: 'Implayer Mobile' , url: '/mobil-surfplatta/implayer-mobile' },
              ].map((app, i) => (
                <Link key={i} href={app.url} className="group">
                  <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 flex flex-col items-center text-center shadow-lg h-full">
                    <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-[#0a0a0a]">
                      <Image src={`/images/${app.img}`} alt={app.name} fill className="object-contain p-2" />
                    </div>
                    <h3 className="font-bold text-white text-base mb-3">{app.name}</h3>
                    <span className="text-yellow-500 font-bold text-xs border border-yellow-500/40 rounded-full px-3 py-1 mt-auto">
                      Android
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          {/* ── 3. Step 1 Section ── */}
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
                IPTV på mobilen
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Med IPTV på Mobilen får du ett utav de bästa sätten att se på IPTV. IPTV med mobilen innebär att du kan ha med dig alla dina kanaler i fickan så länge du har en internet anslutning. Apparna kan med andra ord ersätta dina dyra streamingtjänster då du har allt i mobilen på resande fot. Självklart fungerar våra kanaler i alla länder runtom i världen.                    Vill du spara pengar kan du säga upp dina streamingtjänster då du inte kommer att behöva de efter att du börjat se på <a href="/mobil-surfplatta" className="text-blue-400 hover:underline">ip-tv</a> i din mobiltelefon.
                </p>
              </div>
            </div>
          </div>

          {/* ── 4. Step 2 Section ── */}
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
                IPTV med surfplatta
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  IPTV med Surfplatta – Genomför grundinställningarna och acceptera eventuella villkor på din nya mobil eller surfplatta om den är ny. Logga sedan in eller skapa ett Google konto eller iCloud konto beroende på om din enhet har ett iOS eller Android baserat system. Spara förpackningen då din garanti kan vara knuten till den.
                </p>
                <p>
                  Koppla även upp din nya enhet till ditt nätverk (du kan givetvis använda din mobil surf också men se då till så att den inte tar slut om den är begränsad). Det rekommenderas alltid att man använder en Ethernet kabel/nätverkssladd (dock fungerar det ju givetvis inte i ditt fall) men det fungerar även bra med Wifi förutsatt att din router inte är för långt bort samt att det är en bra router som ger en god täckning utav nätverket i hemmet. När du sedan är på resande fot så fungerar 4G och 5G utmärkt.
                </p>
                <p>
                  Om stora saker såsom kylskåp, garderober, dörrar och annat står i vägen så kan din enhet tappa eller få försämrad anslutning emellanåt.
                </p>
                <p>
                  Vi rekommenderar följande Smartphones för IPTV även om i princip alla smarta mobiltelefoner fungerar: iPhone (X – 15 PRO), Samsung (senare Galaxy-modeller), Samsung (Z Fold eller Flip).
                </p>
                <p>
                  Har du inte någon utav dessa modeller så kan du vara lugn! Detta är endast en rekommendation, egentligen ska man givetvis se på IPTV med en box kopplad till sin TV hemma för att uppleva det på bästa sätt.
                </p>
              </div>
            </div>
          </div>

          {/* ── 5. Step 3 Section ── */}
          <div className="relative pt-24 pb-24 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src="/images/sveirge-banner.webp"
                alt="Background"
                fill
                className="object-cover object-right md:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10 px-8 md:px-16 w-full lg:w-2/3 flex flex-col items-start text-left">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">3<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                IPTV med iPhone
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Vi rekommenderar att man köper en ny iPhone-modell från någon utav de större kedjorna som exempelvis <a href="https://www.elgiganten.se/" className="text-blue-400 hover:underline">Elgiganten</a>, <a href="https://www.power.se/" className="text-blue-400 hover:underline">Power</a> eller <a href="https://www.webhallen.com/" className="text-blue-400 hover:underline">Webhallen</a>. Givetvis kan du använda den du redan har. Vi rekommenderar inte att man köper en begagnad mobil eller surfplatta då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk.
                </p>
                <p>
                  Om din enhet ska användas för att se på IPTV när du reser eller bara är utanför hemmet så är detta en utmärkt lösning för dig. Tänker du däremot att din mobila enhet ska ersätta en box eller TV så rekommenderas det istället att man helst använder en Apple TV eller exempelvis en Formuler Box.
                </p>
                <p>
                  Oavsett om du redan har en iPhone-enhet eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i enhetens lagringsutrymme och RAM-minne då många appar är påslagna i bakgrunden.
                </p>
              </div>
            </div>
          </div>

          {/* ── 6. Step 4 Section ── */}
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
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">4<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                IPTV med Android
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Vi rekommenderar att man köper en ny Android-modell från någon utav de större kedjorna som exempelvis Elgiganten, Power eller Webhallen. Givetvis kan du använda den du redan har. Vi rekommenderar inte att man köper en begagnad mobil eller surfplatta då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk.
                </p>
                <p>
                  Om din enhet ska användas för att se på IPTV när du reser eller bara är utanför hemmet så är detta en utmärkt lösning för dig. Tänker du däremot att din mobila enhet ska ersätta en box eller TV så rekommenderas det istället att man helst använder en Apple TV eller exempelvis en Formuler Box.
                </p>
                <p>
                  Oavsett om du redan har en Android-enhet eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i enhetens lagringsutrymme och RAM-minne då många appar är påslagna i bakgrunden.
                </p>
              </div>
            </div>
          </div>

          {/* ── 7. Step 5 Section ── */}
          <div className="pt-24 pb-24 rounded-3xl bg-black px-6 md:px-12 shadow-2xl border border-gray-900">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">5<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Ladda ned en IPTV mobil app
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Idag finns många olika iptv appar till mobiltelefoner och surfplattor. Nedan ser du några som vi rekommenderar. De flesta av dessa appar fungerar utmärkt till både Apple (iOS) enheter samt Android baserade enheter. Ladda helst ned apparna från <a href="https://play.google.com/store/apps?device=tv&hl=sv&gl=sv" className="text-blue-400 hover:underline">Playbutiken</a> eller <a href="https://www.apple.com/app-store/" className="text-blue-400 hover:underline">Appstore</a>.
              </p>
              
              <ul className="mb-10 w-full grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 text-left px-4 md:px-12">
                  {[
                    { name: 'IPTV Smarters (iOS & Android)', url: '/mobil-surfplatta/iptv-smarters' },
                    { name: 'IPTV Streamer (iOS & Android)', url: '/mobil-surfplatta/iptv-streamers' },
                    { name: 'GSE Smart IPTV Pro (iOS & Android)', url: '/mobil-surfplatta/gse-smart-iptv' },
                    { name: 'Perfect IPTV (iOS)', url: '/mobil-surfplatta/perfect-iptv' },
                    { name: 'IPTVX (iOS)', url: '/mobil-surfplatta/iptv-x' },
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

          {/* ── 8. Step 6 Section ── */}
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
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">6<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                IPTV med mobilen - GRATIS TEST
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

          {/* ── 9. Step 7 Section (Sammanfattning) ── */}
          <div className="pt-24 pb-24 rounded-3xl bg-black px-6 md:px-12 shadow-2xl border border-gray-900">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">7<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Sammanfattning
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              <div className="bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 flex flex-col shadow-lg h-full">
                <div className="text-gray-300 text-lg leading-relaxed space-y-6 mb-8 shrink-0">
                  <p>
                    Sammanfattningsvis så rekommenderar vi att man köper en ny Mobil eller Surfplatta om man inte redan har en. Sedan genomför man grundinställningarna och kopplar upp Mobilen/Surfplattan till internet (Wifi eller mobil surf). Ladda sedan ned en IPTV app och begär ett gratis test eller köp 1-12 mån paket av oss.
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
