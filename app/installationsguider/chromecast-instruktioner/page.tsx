import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Chromecast IPTV Instruktioner | Monster TV',
  description: 'Så castar du IPTV från din telefon eller surfplatta direkt till din Chromecast. Steg-för-steg guide för Chromecast IPTV.',
  keywords: ['Chromecast', 'IPTV', 'guide', 'cast', 'streaming', 'Monster TV', 'installera'],
  alternates: { canonical: 'https://monstertv.tv/installationsguider/chromecast-instruktioner/' },
  openGraph: {
    title: 'Chromecast IPTV Instruktioner | Monster TV',
    description: 'Streama IPTV med Chromecast på din TV.',
    type: 'website',
    locale: 'sv_SE',
    url: 'https://monstertv.tv/installationsguider/chromecast-instruktioner/',
    siteName: 'Monster TV',
    images: [
      {
        url: 'https://monstertv.tv/images/allsvenskan-2026.jpg',
        width: 1200,
        height: 630,
        alt: 'Monster TV - Chromecast IPTV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chromecast IPTV Instruktioner | Monster TV',
    description: 'Streama IPTV med Chromecast på din TV.',
    images: ['https://monstertv.tv/images/allsvenskan-2026.jpg'],
  },
};

const appLinks = [
  { name: 'IPTV Smarters', url: '/installationsguider/apple-tv/iptv-smarters' },
  { name: 'Tivimate', url: '/installationsguider/apple-tv/tivimate' },
  { name: 'SET IPTV', url: '/installationsguider/apple-tv/set-iptv' },
  { name: 'NET IPTV', url: '/installationsguider/apple-tv/net-iptv' },
  { name: 'IPTV Streamer', url: '/installationsguider/apple-tv/iptv-streamer' },
  { name: 'Duplex Play', url: '/installationsguider/apple-tv/duplex-play' },
  { name: 'Extreme IPTV Pro', url: '/installationsguider/apple-tv/iptv-extreme' },
  { name: 'Smart STB', url: '/installationsguider/apple-tv/smart-stb' },
  { name: 'GSE Smart IPTV Pro', url: '/installationsguider/apple-tv/gse-smart-iptv-pro' },
  { name: '9Xstream IPTV', url: '/installationsguider/apple-tv/9xtream-iptv' },
  { name: 'XUI IPTV Player', url: '/installationsguider/apple-tv/xui-iptv-player' },
  { name: 'IPTV Pro', url: '/installationsguider/apple-tv/iptv-pro' },
  { name: 'Xtream IPTV', url: '/installationsguider/apple-tv/xtream-iptv' },
  { name: 'IBO Premium', url: '/installationsguider/apple-tv/ibo-player' },
  { name: 'HOT IPTV', url: '/installationsguider/apple-tv/hot-iptv' },
];

function AppSidebar() {
  return (
    <div className="w-full">
      <h3 className="text-white font-bold text-lg mb-6">Guider för rekommenderade appar:</h3>
      <div className="flex flex-col">
        {appLinks.map((app, i) => (
          <a
            key={i}
            href={app.url}
            className="flex items-center gap-3 py-3 px-4 transition-colors group"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="text-white font-bold text-base">
              {app.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function InstallationsguideChromecastPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center bg-[#0a0a0a]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/backeed.webp" 
            alt="Installationsguide – Chromecast" 
            fill 
            className="object-cover object-[center_60%] brightness-50"
            quality={100}
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Container positioned in the center */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            IPTV Chromecast Instruktioner
          </h1>
          
          <div 
            className="flex items-center gap-2 mb-6"
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontWeight: 400,
              color: "rgb(255, 255, 255)",
              fontSize: "15px",
              lineHeight: "24px"
            }}
          >
            <Link href="/" className="hover:text-[#e50000] transition-colors">Hem</Link>
            <span>/</span>
            <span className="text-gray-300">IPTV Chromecast Instruktioner</span>
          </div>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl">
            IPTV Chromecast Instruktioner – För att kunna se på IPTV med din Chromecast så behöver du ladda ned en IPTV app. Nedan ser du olika appar som fungerar med din Chromecast IPTV. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din enhet men nedan finner du de som vi rekommenderar. Vi har listat apparna i ordning efter vilken vi anser vara enklast att komma igång med där bäst är först/högst upp.
          </p>
        </div>
      </section>

      {/* Article Section */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-7xl">
          {/* Kom igång section */}
          <div className="max-w-4xl mx-auto text-center mt-12 mb-10">
            <span className="inline-block text-blue-500 font-bold uppercase tracking-wider text-sm mb-3">
              KOM IGÅNG
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 tracking-tight">
              Kom igång
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
              När du ska komma igång med iptv chromecast så börjar du med att söka efter nedanstående appar i ordningen de syns. Skulle det visa sig att du inte lyckas komma igång med första appen du testar så testar du med nästa och nästa tills det fungerar för dig. Med dina inloggningsuppgifter kan du använda vilka appar du vill. Du är alltså inte begränsad till en specifik app.
            </p>
            
            {/* Yellow divider box */}
            <div className="bg-[#111] border-l-4 border-yellow-500 p-6 md:p-8 rounded-r-xl shadow-lg inline-block text-left w-full max-w-3xl">
              <p className="text-white text-lg md:text-xl font-medium flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Kom bara ihåg att vara noga så att du endast använder en app åt gången!
              </p>
            </div>
          </div>

          {/* Rekommenderade appar att börja med Section */}
          <div className="pt-12 mt-12 border-t border-gray-800">
            <h2 className="mb-4 uppercase tracking-wide text-center" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}>
              Rekommenderade appar att börja med
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-center mb-12">
              Vi rekommenderar att man börjar med någon utav nedanstående appar då de är enklast att komma igång med om man börjar med ett gratis test eller om man är nybörjare. Spellistan är enkel att aktivera på dessa appar.
              <br /><br />
              De &quot;relativt enkla apparna&quot; är också enkla att komma igång med men här behöver man besöka appens hemsida och ladda upp sin spellista genom att kopiera och klistra in sin m3u länk man får från oss vid test/köp.
            </p>
            
            {/* App Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { name: 'IPTV Smarters', href: '/installationsguider/apple-tv/iptv-smarters', img: '/images/iptv smarter.webp', label: 'Enkel installation' },
                { name: 'IPTV Streamer', href: '/installationsguider/apple-tv/iptv-streamer', img: '/images/iptv streamer.webp', label: 'Enkel installation' },
                { name: 'Televizo IPTV', href: '/installationsguider/apple-tv/televizo-iptv', img: '/images/teleivizeo iptv.webp', label: 'Enkel installation' },
                { name: '9Xtream IPTV', href: '/installationsguider/apple-tv/9xtream-iptv', img: '/images/9xtreame.webp', label: 'Enkel installation' },
                { name: 'Xtream IPTV', href: '/installationsguider/apple-tv/xtream-iptv', img: '/images/Xtream IPTV.webp', label: 'Enkel installation' },
                { name: 'SET IPTV', href: '/installationsguider/apple-tv/set-iptv', img: '/images/set iptv.webp', label: 'Relativt enkel installation' },
                { name: 'NET IPTV', href: '/installationsguider/apple-tv/net-iptv', img: '/images/net iptv.webp', label: 'Relativt enkel installation' },
              ].map((app, idx) => (
                <Link key={idx} href={app.href} className="block">
                  <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg h-full hover:border-blue-600/50 transition-colors">
                    <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-[#0a0a0a]">
                      <Image src={app.img} alt={app.name} fill className="object-contain p-2" />
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

          {/* Fler IPTV appar till Chromecast Section */}
          <div className="pt-12 mt-12 border-t border-gray-800">
            <h2 className="mb-4 uppercase tracking-wide text-center" style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}>
              Fler IPTV appar till Chromecast
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
            
            {/* More Apps Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { name: 'Tivimate', href: '/installationsguider/apple-tv/tivimate' },
                { name: 'IPTV Extreme', href: '/installationsguider/apple-tv/iptv-extreme' },
                { name: 'IBO Player', href: '/installationsguider/apple-tv/ibo-player' },
                { name: 'IPTV Pro', href: '/installationsguider/apple-tv/iptv-pro' },
                { name: 'HOT IPTV', href: '/installationsguider/apple-tv/hot-iptv' },
                { name: 'Duplex Play', href: '/installationsguider/apple-tv/duplex-play' },
                { name: 'Smart STB', href: '/installationsguider/apple-tv/smart-stb' },
              ].map((app, idx) => (
                <Link 
                  key={idx} 
                  href={app.href} 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl text-left transition-colors shadow-lg"
                >
                  {app.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Step 1 Section */}
          <div className="relative pt-24 pb-24 mt-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            {/* Background Image - iptvsvsport */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image 
                src="/images/iptvsvsport.webp" 
                alt="IPTV Sport"
                fill
                className="object-cover object-left md:object-center"
              />
              {/* Gradient overlay: solid black on left, fading to transparent on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 w-full lg:w-2/3 flex flex-col items-start text-left">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">1<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                Köp en Chromecast
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Köp en Chromecast på någon utav de större kedjorna som exempelvis Elgiganten, Power eller Webhallen alternativt Satvision. Vi rekommenderar inte att man köper en begagnad chromecast då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Det rekommenderas alltid att man använder en Apple TV eller exempelvis en Formuler Box.
                </p>
                <p>
                  Oavsett om du redan har en chromecast eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i chromecastens lagringsutrymme.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 Section */}
          <div className="relative pt-24 pb-24 mt-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            {/* Background Image - backeed */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image 
                src="/images/backeed.webp" 
                alt="Background"
                fill
                className="object-cover object-left md:object-center"
              />
              {/* Gradient overlay: solid black on right, fading to transparent on left */}
              <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 w-full lg:w-2/3 flex flex-col items-start text-left ml-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">2<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                Grundinställningar
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Genomför grundinställningarna och acceptera eventuella villkor på din nya Chromecast IPTV om den är ny. Spara förpackningen då din garanti kan vara knuten till den.
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

          {/* Step 3 Section - Left content with sidebar + Right image */}
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            {/* Left side - Sidebar Navigation */}
            <div className="w-full md:w-1/3 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center shadow-lg shadow-blue-500/50 shrink-0">
                  <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">3<br/>STEG</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Ladda ned en IPTV app
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Idag finns många olika ip tv appar till IPTV Chromecast. Nedan ser du några som vi rekommenderar. Ladda helst ned apparna från Playbutiken.
              </p>
              
              {/* Sidebar Navigation */}
              <AppSidebar />
            </div>

            {/* Right side - Image */}
            <div className="w-full md:w-2/3 flex items-center justify-center">
              <div className="relative w-full max-w-3xl h-[600px]">
                <Image 
                  src="/images/iptv-chromecast.webp" 
                  alt="IPTV Chromecast"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Step 4 Section - GRATIS TEST */}
          <div className="relative pt-24 pb-24 mt-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            {/* Background Image - sveirge-banner */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image 
                src="/images/sveirge-banner.webp" 
                alt="Sweden Banner"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 w-full lg:w-2/3 flex flex-col items-start text-left ml-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">4<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                IPTV - GRATIS TEST
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Nu är det dags för dig att begära ett gratis test utav oss genom att trycka på knappen nedan. Vi rekommenderar alltid att man köper 3 månader efter sitt gratis test för att hinna testa ordentligt då vårt utbud är enormt. Vi erbjuder i princip all sport, alla filmer samt alla serier och dokumentärer du kan tänka dig. Givetvis ingår hela utbudet även när du testar vår tjänst kostnadsfritt. Läs mer om vårt utbud <Link href="/" className="text-blue-400 hover:underline">här</Link>.
                </p>
              </div>
              
              {/* GRATIS TEST Button - Blue and Left-aligned like Step 2 */}
              <div className="mt-8">
                <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-center transition-colors shadow-lg text-lg inline-flex items-center justify-center gap-2">
                  GRATIS TEST
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Step 5 Section - Sammanfattning */}
          <div className="py-16 mt-12 rounded-3xl bg-black px-6 md:px-12 shadow-2xl border border-gray-900">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">5<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Sammanfattning
              </h2>
              <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                <p>
                  Sammanfattningsvis så rekommenderar vi att man köper en ny Chromecast för att se IPTV på chromecast. Sedan genomför men grundinställningarna och kopplar upp boxen till internet (helst med en nätverkskabel). Ladda sedan ned en IPTV app och begär ett gratis test eller köp 1-12 mån paket av oss.
                </p>
                <p className="font-semibold text-white">
                  Njut av, kanaler, filmer, serier, dokumentärer + alla PPV event!
                </p>
                <p>
                  IPTV på Chromecast är ett enkelt och bekvämt sätt att strömma TV-kanaler, filmer och serier direkt till din TV via internet. Genom att använda en IPTV-app på din mobil, surfplatta eller dator, som TiviMate eller IPTV Smarters, kan du enkelt casta innehållet till din Chromecast-enhet ansluten till TV. Chromecast fungerar genom att streama IPTV-innehåll från din enhet till TV via Wi-Fi, vilket ger en sömlös upplevelse. Detta gör det möjligt att njuta av IPTV-tjänster på en större skärm, samtidigt som du kontrollerar uppspelningen via din mobila enhet eller dator.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 Bottom Section - 2 Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Left Box - App Sidebar */}
            <div className="bg-black rounded-3xl p-8 shadow-2xl border border-gray-900">
              <AppSidebar />
            </div>

            {/* Right Box - Image */}
            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-900 flex flex-col">
              <div className="relative w-full h-full min-h-[400px]">
                <Image 
                  src="/images/banner_img.webp" 
                  alt="Banner"
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
