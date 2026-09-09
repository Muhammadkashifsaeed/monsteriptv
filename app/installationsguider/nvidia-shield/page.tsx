'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppSidebar from '@/components/AppSidebar';
const sidebarAppsNvidia = [
  { name: 'IPTV Smarters', url: '/installationsguider/nvidia-shield/iptv-smarters' },
  { name: 'Tivimate', url: '/installationsguider/nvidia-shield/tivimate' },
  { name: 'SET IPTV', url: '/installationsguider/nvidia-shield/set-iptv' },
  { name: 'NET IPTV', url: '/installationsguider/nvidia-shield/net-iptv' },
  { name: 'IPTV Streamer', url: '/installationsguider/nvidia-shield/iptv-streamer' },
  { name: 'Duplex Play', url: '/installationsguider/nvidia-shield/duplex-play' },
  { name: 'Extreme IPTV Pro', url: '/installationsguider/nvidia-shield/iptv-extreme' },
  { name: 'Smart STB', url: '/installationsguider/nvidia-shield/smart-stb' },
  { name: 'GSE Smart IPTV Pro', url: '/installationsguider/nvidia-shield/gse-smart-iptv-pro' },
  { name: '9Xtream IPTV', url: '/installationsguider/nvidia-shield/9xtream-iptv' },
  { name: 'XUI IPTV Player', url: '/installationsguider/nvidia-shield/xui-iptv-player' },
  { name: 'IPTV Pro', url: '/installationsguider/nvidia-shield/iptv-pro' },
  { name: 'Xtream IPTV', url: '/installationsguider/nvidia-shield/xtream-iptv' },
  { name: 'IBO Premium', url: '/installationsguider/nvidia-shield/ibo-player' },
  { name: 'HOT IPTV', url: '/installationsguider/nvidia-shield/hot-iptv' },
];

export default function NvidiaShieldPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">

      {/* ── Hero Section ── */}
      <section className="relative w-full py-8 md:py-10 flex items-center justify-center bg-[#0a0a0a]">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/images/backeed.webp"
            alt="IPTV Nvidia Shield Instruktioner"
            fill
            className="object-cover object-center brightness-[0.75] contrast-[1.1] saturate-[1.1]"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          <h1
            style={{
              fontFamily: 'Sora, "Sora Fallback", Arial, Helvetica, sans-serif',
              fontWeight: 700,
              color: 'rgb(237, 237, 237)',
              fontSize: '48px',
              lineHeight: '66px',
            }}
            className="mb-5 tracking-tight drop-shadow-lg text-center"
          >
            IPTV Nvidia Shield Instruktioner
          </h1>

          <nav className="flex items-center gap-2 text-white/80 text-base mb-8">
            <Link href="/" className="hover:text-white transition-colors">Hem</Link>
            <span>/</span>
            <span className="text-gray-300">IPTV Nvidia Shield Instruktioner</span>
          </nav>

          <div className="text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl">
            <p>
              IPTV Nvidia Shield Instruktioner – För att kunna se på IPTV med din Nvidia Shield så behöver du ladda ned en IPTV app. Nedan ser du olika appar som fungerar med din Nvidia Shield. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din enhet men nedan finner du de som vi rekommenderar. Vi har listat apparna i ordning efter vilken vi anser vara enklast att komma igång med där bäst är först/högst upp.
            </p>
          </div>
        </div>
      </section>


      {/* ── Main Content ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

          {/* KOM IGÅNG label */}
          <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
            KOM IGÅNG
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
            Kom igång
          </h2>

          {/* Intro paragraph */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mb-10">
            När du ska komma igång med iptv Nvidia Shield så börjar du med att söka efter nedanstående appar i ordningen de syns. Skulle det visa sig att du inte lyckas komma igång med första appen du testar så testar du med nästa och nästa tills det fungerar för dig. Med dina inloggingsuppgifter kan du använda vilka appar du vill. Du är alltså inte begränsad till en specifik app.
          </p>

          {/* Warning Box */}
          <div className="w-full max-w-2xl mb-14 rounded-2xl bg-gray-900 border border-gray-800 px-8 py-6 flex items-center gap-5">
            <div className="w-1 self-stretch rounded-full bg-yellow-400 flex-shrink-0" />
            <p className="text-gray-200 text-base md:text-lg font-medium text-left leading-relaxed">
              Kom bara ihåg att vara noga så att du <span className="text-white font-bold">endast använder en app åt gången!</span>
            </p>
          </div>

          {/* Rekommenderade appar heading */}
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
            Rekommenderade appar att börja med
          </h3>

          {/* Yellow divider */}
          <div className="w-16 h-1 rounded-full bg-yellow-400 mb-6" />

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mb-10">
            Vi rekommenderar att man börjar med någon utav nedanstående appar då de är enklast att komma igång med om man börjar med ett gratis test eller om man är nybörjare. Spellistan är enkel att aktivera på dessa appar.
            <br /><br />
            De <span className="text-white font-semibold">&quot;relativt enkla apparna&quot;</span> är också enkla att komma igång med men här behöver man besöka appens hemsida och ladda upp sin spellista genom att kopiera och klistra in sin m3u länk man får från oss vid test/köp.
          </p>

          {/* App Cards Grid - wrapped in big box */}
          <div className="w-full rounded-3xl bg-black border border-gray-900 shadow-2xl px-6 md:px-12 py-12 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
              {[
                { name: 'IPTV Smarters', label: 'Enkel installation', href: '/installationsguider/nvidia-shield/iptv-smarters', img: '/images/iptv smarter.webp' },
                { name: 'IPTV Streamer', label: 'Enkel installation', href: '/installationsguider/nvidia-shield/iptv-streamer', img: '/images/iptv streamer.webp' },
                { name: 'Televizo IPTV', label: 'Enkel installation', href: '/installationsguider/nvidia-shield/televizo-iptv', img: '/images/teleivizeo iptv.webp' },
                { name: '9Xtream IPTV', label: 'Enkel installation', href: '/installationsguider/nvidia-shield/9xtream-iptv', img: '/images/9xtreame.webp' },
                { name: 'Xtream IPTV', label: 'Enkel installation', href: '/installationsguider/nvidia-shield/xtream-iptv', img: '/images/Xtream IPTV.webp' },
                { name: 'SET IPTV', label: 'Relativt enkel installation', href: '/installationsguider/nvidia-shield/set-iptv', img: '/images/set iptv.webp' },
                { name: 'NET IPTV', label: 'Relativt enkel installation', href: '/installationsguider/nvidia-shield/net-iptv', img: '/images/net iptv.webp' },
              ].map((app, idx) => (
                <Link key={idx} href={app.href} className="block">
                  <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg h-full hover:border-blue-600/50 transition-colors">
                    <div className="relative w-full aspect-square mb-5 rounded-xl overflow-hidden bg-[#0a0a0a]">
                      <Image src={app.img} alt={app.name} fill className="object-contain p-3" />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-3">{app.name}</h3>
                    <span className="text-yellow-500 font-bold text-xs border border-yellow-500/40 rounded-full px-4 py-1.5 mt-auto">
                      {app.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Flera appar heading */}
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
            Flera appar till IPTV Nvidia Shield
          </h3>

          {/* Yellow divider */}
          <div className="w-16 h-1 rounded-full bg-yellow-400 mb-8" />

          {/* More Apps Buttons - wrapped in big box */}
          <div className="w-full rounded-3xl bg-black border border-gray-900 shadow-2xl px-6 md:px-12 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {[
                { name: 'Tivimate', href: '/installationsguider/nvidia-shield/tivimate' },
                { name: 'IPTV Extreme', href: '/installationsguider/nvidia-shield/iptv-extreme' },
                { name: 'IBO Player', href: '/installationsguider/nvidia-shield/ibo-player' },
                { name: 'IPTV Pro', href: '/installationsguider/nvidia-shield/iptv-pro' },
                { name: 'HOT IPTV', href: '/installationsguider/nvidia-shield/hot-iptv' },
                { name: 'Duplex Play', href: '/installationsguider/nvidia-shield/duplex-play' },
                { name: 'Smart STB', href: '/installationsguider/nvidia-shield/smart-stb' },
              ].map((app, idx) => (
                <Link
                  key={idx}
                  href={app.href}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded-xl text-left transition-colors shadow-lg text-base"
                >
                  {app.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

        {/* ── Steps Section ── */}
        <div className="max-w-7xl mx-auto space-y-8 px-4 pb-16">

          {/* ── Step 1: Köp en IPTV Nvidia Shield ── */}
          <div className="relative pt-20 pb-20 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image src="/images/iptvsvsport.webp" alt="Köp Nvidia Shield" fill className="object-cover object-right md:object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10 px-8 md:px-16 w-full lg:w-2/3 flex flex-col items-start text-left">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">1<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                Köp en IPTV Nvidia Shield
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-4 drop-shadow">
                <p>
                  Köp en Nvidia Shield på någon utav de större kedjorna som exempelvis{' '}
                  <a href="https://www.elgiganten.se/" className="text-blue-400 hover:underline">Elgiganten</a>,{' '}
                  <a href="https://www.power.se/" className="text-blue-400 hover:underline">Power</a> eller{' '}
                  <a href="https://www.webhallen.com/" className="text-blue-400 hover:underline">Webhallen</a> alternativt{' '}
                  <a href="https://satvision.se/" className="text-blue-400 hover:underline">Satvision</a>. Vi rekommenderar inte att man köper en begagnad iptv nvidia shield då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Det rekommenderas alltid att man använder en Nvidia Shield, TVIP box,{' '}
                  <a href="/installationsguider/apple-tv" className="text-blue-400 hover:underline">Apple TV</a> eller en{' '}
                  <a href="/formuler-box" className="text-blue-400 hover:underline">Formuler Box</a>.
                </p>
                <p>
                  Oavsett om du redan har en Nvidia Shield eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i boxens lagringsutrymme.
                </p>
              </div>
            </div>
          </div>

          {/* ── Step 2: Grundinställningar ── */}
          <div className="relative pt-20 pb-20 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image src="/images/backeed.webp" alt="Grundinställningar" fill className="object-cover object-center brightness-50" />
              <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10 px-8 md:px-16 w-full lg:w-2/3 ml-auto flex flex-col items-start text-left">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">2<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                Grundinställningar
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-4 drop-shadow">
                <p>
                  Genomför grundinställningarna och acceptera eventuella villkor på din nya Nvidia Shield om den är ny. Spara förpackningen då din garanti kan vara knuten till den.
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

          {/* ── Step 3: Ladda ned en IPTV app ── */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            <div className="flex flex-col lg:flex-row">
              {/* Left: content */}
              <div className="flex-1 px-8 md:px-14 py-20 flex flex-col items-start text-left">
                <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                  <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">3<br/>STEG</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                  Ladda ned en IPTV app
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Idag finns många olika ip tv appar till Nvidia Shield. Nedan ser du några som vi rekommenderar. Ladda helst ned apparna från{' '}
                  <a href="https://play.google.com/store/apps?device=tv&hl=sv&gl=sv" className="text-blue-400 hover:underline">Playbutiken</a>.
                </p>
                <ul className="flex flex-col space-y-2 text-white" style={{ fontFamily: "Sora, 'Sora Fallback', Arial, Helvetica, sans-serif", fontWeight: 600, fontSize: '16px', lineHeight: '24px' }}>
                  {[
                    { name: 'IPTV Smarters', href: '/installationsguider/nvidia-shield/iptv-smarters' },
                    { name: 'Tivimate', href: '/installationsguider/nvidia-shield/tivimate' },
                    { name: 'SET IPTV', href: '/installationsguider/nvidia-shield/set-iptv' },
                    { name: 'NET IPTV', href: '/installationsguider/nvidia-shield/net-iptv' },
                    { name: 'IPTV Streamer', href: '/installationsguider/nvidia-shield/iptv-streamer' },
                    { name: 'Duplex Play', href: '/installationsguider/nvidia-shield/duplex-play' },
                    { name: 'Extreme IPTV Pro', href: '/installationsguider/nvidia-shield/iptv-extreme' },
                    { name: 'Smart STB', href: '/installationsguider/nvidia-shield/smart-stb' },
                    { name: 'GSE Smart IPTV Pro', href: '/installationsguider/nvidia-shield/gse-smart-iptv-pro' },
                    { name: '9Xtream IPTV', href: '/installationsguider/nvidia-shield/9xtream-iptv' },
                    { name: 'XUI IPTV Player', href: '/installationsguider/nvidia-shield/xui-iptv-player' },
                    { name: 'IPTV Pro', href: '/installationsguider/nvidia-shield/iptv-pro' },
                    { name: 'Xtream IPTV', href: '/installationsguider/nvidia-shield/xtream-iptv' },
                    { name: 'IBO Premium', href: '/installationsguider/nvidia-shield/ibo-player' },
                    { name: 'HOT IPTV', href: '/installationsguider/nvidia-shield/hot-iptv' },
                  ].map((app, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-blue-500">›</span>
                      <a href={app.href} className="hover:text-blue-400 transition-colors">{app.name}</a>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-sm mt-4">Bästa IPTV appen läser du mer om här.</p>
              </div>
              {/* Right: image */}
              <div className="lg:w-[420px] relative min-h-[400px] lg:min-h-0">
                <Image src="/images/banner_img.webp" alt="IPTV appar" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent lg:bg-gradient-to-l" />
              </div>
            </div>
          </div>

          {/* ── Step 4: IPTV - GRATIS TEST ── */}
          <div className="relative pt-20 pb-20 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image src="/images/sveirge-banner.webp" alt="GRATIS TEST" fill className="object-cover object-center brightness-50" />
              <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10 px-8 md:px-16 w-full lg:w-2/3 ml-auto flex flex-col items-start text-left">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">4<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                IPTV – GRATIS TEST
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-8 drop-shadow">
                Nu är det dags för dig att begära ett gratis test utav oss genom att trycka på knappen nedan. Vi rekommenderar alltid att man köper 3 månader efter sitt gratis test för att hinna testa ordentligt då vårt utbud är enormt. Vi erbjuder i princip all sport, alla filmer samt alla serier och dokumentärer du kan tänka dig. Givetvis ingår hela utbudet även när du testar vår tjänst kostnadsfritt.{' '}
                <a href="/vart-paket" className="text-blue-400 hover:underline">Läs mer om vårt utbud här</a>.
              </p>
              <Link
                href="/vart-paket"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5"
              >
                GRATIS TEST
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ── Step 5: Sammanfattning ── */}
          <div className="rounded-3xl bg-black border border-gray-900 shadow-2xl px-6 md:px-12 py-16">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">5<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                IPTV Nvidia Shield: Sammanfattning
              </h2>
              <div className="text-gray-300 text-lg leading-relaxed space-y-4 text-left">
                <p>
                  Sammanfattningsvis så rekommenderar vi att man köper en ny Nvidia Shield för att se IPTV Nvidia Shield. Sedan genomför men grundinställningarna och kopplar upp boxen till internet (helst med en nätverkskabel). Ladda sedan ned en IPTV app och begär ett gratis test eller köp 1-12 mån paket av oss.
                </p>
                <p>Njut av, kanaler, filmer, serier, dokumentärer + alla PPV event!</p>
                <p>
                  IPTV på NVIDIA Shield är ett utmärkt val för dig som vill ha en kraftfull och stabil streamingupplevelse. NVIDIA Shield, som drivs av Android TV, har tillgång till många IPTV-appar som TiviMate, IPTV Smarters och Perfect Player. Genom att ansluta till en IPTV-tjänst kan du streama tusentals TV-kanaler, filmer och serier direkt via internet. Enhetens starka hårdvara, inklusive en snabb processor och stöd för 4K och HDR, säkerställer en hög bildkvalitet och smidig uppspelning, även vid högupplösta strömmar.
                </p>
                <p>
                  Installationen är enkel: ladda ner en IPTV-app från Google Play Store, mata in din M3U-länk eller användaruppgifter från din IPTV-leverantör, och börja titta. Med NVIDIA Shields stöd för stabil internetanslutning via Wi-Fi eller Ethernet får du en problemfri upplevelse utan buffring. Enheten erbjuder också bekväm navigering med fjärrkontroll och stöd för röststyrning via Google Assistant, vilket gör det enkelt att byta mellan kanaler och program.
                </p>
              </div>
            </div>

             {/* 2 bottom boxes */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Left box: AppSidebar */}
               <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 flex flex-col">
                 <AppSidebar 
                   title="Guider för rekommenderade appar:"
                   apps={sidebarAppsNvidia}
                   buttonText="Köp IPTV"
                   buttonUrl="/vart-paket"
                 />
               </div>

               {/* Right box: image */}
               <div className="relative rounded-2xl overflow-hidden min-h-[400px] border border-gray-800">
                 <Image src="/images/Nvidia Shield.webp" alt="IPTV Nvidia Shield" fill className="object-contain p-8 bg-[#111]" />
               </div>
             </div>
          </div>

        </div>

    </div>

  );
}
