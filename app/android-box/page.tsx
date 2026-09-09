import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppSidebar from '@/components/AppSidebar';

export const metadata: Metadata = {
  title: "Android Box IPTV Instruktioner | Monster TV",
  description: "Installera Android Box på Android Box. Steg-för-steg guide för IPTV. 13,000+ kanaler, filmer och live-sport tillgängliga.",
  keywords: ["Android Box", "IPTV", "android-box", "Monster TV", "guide"],
  alternates: { canonical: "https://monstertv.tv/android-box/" },
  openGraph: {
    title: "Android Box IPTV Instruktioner | Monster TV",
    description: "Android Box på Android Box. 13,000+ kanaler, filmer och live-sport.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/android-box/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - Android Box" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Android Box IPTV Instruktioner | Monster TV",
    description: "Android Box på Android Box. 13,000+ kanaler, filmer och live-sport.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
  robots: { index: true, follow: true },
};


const sidebarApps = [
  { name: 'Elgiganten', url: 'https://www.elgiganten.se/' },
  { name: 'Power', url: 'https://www.power.se/' },
  { name: 'Webhallen', url: 'https://www.webhallen.com/' },
  { name: 'Satvision', url: 'https://satvision.se/' },
  { name: 'Apple TV', url: '/installationsguider/apple-tv' },
  { name: 'Formuler Box', url: '/formuler-box' },
  { name: 'IPTV med TVIP box', url: '/tvip-box' },
  { name: 'Playbutiken', url: 'https://play.google.com/store/apps?device=tv&hl=sv&gl=sv' },
  { name: 'Läs mer om vårt utbud här', url: '/vart-paket' },
  { name: 'GRATIS TEST', url: '/iptv-abonnemang' },
];

export default function AndroidBoxPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      
      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-[400px] py-20 flex items-center justify-center bg-[#0a0a0a]">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/backeed.webp"
            alt="IPTV Android Boxar Instruktioner"
            fill
            className="object-cover object-[center_60%] brightness-50"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight drop-shadow-lg">
            IPTV Android Boxar Instruktioner
          </h1>
          <nav className="flex items-center gap-2 text-white/80 text-base mb-8">
            <Link href="/" className="hover:text-white transition-colors">Hem</Link>
            <span>/</span>
            <span className="text-gray-300">IPTV Android Boxar Instruktioner</span>
          </nav>
          
          <div className="text-gray-200 text-lg leading-relaxed space-y-5">
            <p>
              IPTV Android boxar Instruktioner – För att kunna se på IPTV med din Android Box så behöver du ladda ned en IPTV app. Nedan ser du olika appar som fungerar med din Android box. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din enhet men nedan finner du de som vi rekommenderar. Vi har listat apparna i ordning efter vilken vi anser vara enklast att komma igång med där bäst är först/högst upp.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* ── KOM IGÅNG ── */}
          <div className="flex flex-col items-center text-center">
            <span className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-3">KOM IGÅNG</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Kom igång</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
              När du ska komma igång med iptv android box så börjar du med att söka efter nedanstående appar i ordningen de syns. Skulle det visa sig att du inte lyckas komma igång med första appen du testar så testar du med nästa och nästa tills det fungerar för dig. Med dina inloggingsuppgifter kan du använda vilka appar du vill. Du är alltså inte begränsad till en specifik app.
            </p>
          </div>

          {/* ── Warning Box ── */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-[#111] border border-gray-800 rounded-xl p-6">
              <div className="w-1 min-h-full bg-yellow-500 rounded-full shrink-0 self-stretch" />
              <p className="text-gray-300 text-base leading-relaxed">
                Kom bara ihåg att vara noga så att du endast använder en app åt gången!
              </p>
            </div>
          </div>

          {/* ── Rekommenderade appar ── */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Rekommenderade appar att börja med</h2>
            <div className="w-24 h-1 bg-yellow-500 rounded-full mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
              Vi rekommenderar att man börjar med någon utav nedanstående appar då de är enklast att komma igång med om man börjar med ett gratis test eller om man är nybörjare. Spellistan är enkel att aktivera på dessa appar.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mt-4">
              De &quot;relativt enkla apparna&quot; är också enkla att komma igång med men här behöver man besöka appens hemsida och ladda upp sin spellista genom att kopiera och klistra in sin m3u länk man får från oss vid test/köp.
            </p>
          </div>

          {/* ── 7 App Image Boxes ── */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'IPTV Smarters', image: '/images/iptv smarter.webp', url: '/android-box/iptv-smarters', badge: 'Enkel installations' },
              { name: 'IPTV Streamer', image: '/images/iptv streamer.webp', url: '/android-box/iptv-streamer', badge: 'Enkel installations' },
              { name: 'Televizo IPTV', image: '/images/teleivizeo iptv.webp', url: '/android-box/televizo-iptv', badge: 'Enkel installations' },
              { name: '9Xtream', image: '/images/9xtreame.webp', url: '/android-box/9xtream', badge: 'Enkel installations' },
            ].map((app, i) => (
              <a key={i} href={app.url} className="group">
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

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Xtream IPTV', image: '/images/Xtream IPTV.webp', url: '/android-box/xtream-iptv', badge: 'Enkel installations' },
              { name: 'SET IPTV', image: '/images/set iptv.webp', url: '/android-box/set-iptv', badge: 'Relativt enkel installations' },
              { name: 'NET IPTV', image: '/images/net iptv.webp', url: '/android-box/net-iptv', badge: 'Relativt enkel installations' },
            ].map((app, i) => (
              <a key={i} href={app.url} className="group">
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

          {/* ── Fler IPTV appar ── */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">Fler IPTV appar till Android boxar</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Tivimate', url: '/android-box/tivimate' },
              { name: 'IPTV Extreme', url: '/android-box/iptv-extreme' },
              { name: 'IBO Player', url: '/android-box/ibo-player' },
              { name: 'IPTV Pro', url: '/android-box/iptv-pro' },
              { name: 'HOT IPTV', url: '/android-box/hot-iptv' },
              { name: 'Duplex Play', url: '/android-box/duplex-play' },
              { name: 'Smart STB', url: '/android-box/smart-stb' },
            ].map((app, i) => (
              <a key={i} href={app.url} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl text-left transition-colors shadow-lg">
                {app.name}
              </a>
            ))}
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
                      { name: 'IPTV Smarters', url: '/android-box/iptv-smarters' },
                      { name: 'Tivimate', url: '/android-box/tivimate' },
                      { name: 'SET IPTV', url: '/android-box/set-iptv' },
                      { name: 'NET IPTV', url: '/android-box/net-iptv' },
                      { name: 'IPTV Streamer', url: '/android-box/iptv-streamer' },
                      { name: 'Duplex Play', url: '/android-box/duplex-play' },
                      { name: 'Extreme IPTV Pro', url: '/android-box/iptv-extreme' },
                      { name: 'Smart STB', url: '/android-box/smart-stb' },
                      { name: 'GSE Smart IPTV Pro', url: '/android-box/gse-smart-iptv-pro' },
                      { name: 'SS IPTV', url: '#' },
                      { name: '9Xtream IPTV', url: '/android-box/9xtream' },
                      { name: 'XUI IPTV Player', url: '/android-box/xui-iptv-player' },
                      { name: 'IPTV Pro', url: '/android-box/iptv-pro' },
                      { name: 'Xtream IPTV', url: '/android-box/xtream-iptv' },
                      { name: 'IBO Premium', url: '/android-box/ibo-player' },
                      { name: 'HOT IPTV', url: '/android-box/hot-iptv' }
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
                  <Image src="/images/windows-mac-sammanfattning.webp" alt="Sammanfattning" fill className="object-cover" />
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
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              <div className="bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 flex flex-col shadow-lg h-full">
                <div className="text-gray-300 text-lg leading-relaxed space-y-6 mb-8 shrink-0">
                  <p>
                    Sammanfattningsvis så rekommenderar vi att man köper en ny Android Box för att se IPTV på android boxar. Sedan genomför men grundinställningarna och kopplar upp boxen till internet (helst med en nätverkskabel). Ladda sedan ned en IPTV app och begär ett gratis test eller köp 1-12 mån paket av oss.
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
                  src="/images/banner_img.webp"
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
