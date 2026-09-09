import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppSidebar from '@/components/AppSidebar';

export const metadata = {
  title: 'IPTV på Apple TV 2026 | Monster TV - Installationsguide',
  description: 'De bästa apparna och inställningarna för att använda IPTV på din Apple TV. Steg-för-steg guide för IPTVX, iPlayTV, Tivimate och andra appar.',
  keywords: ['Apple TV', 'IPTV', 'guide', 'installera', 'Monster TV', 'appar', 'IPTVX', 'iPlayTV', 'Tivimate'],
  alternates: { canonical: 'https://monstertv.tv/installationsguider/apple-tv/' },
  openGraph: {
    title: 'IPTV på Apple TV 2026 | Monster TV - Installationsguide',
    description: 'De bästa apparna för IPTV på Apple TV.',
    type: 'website',
    locale: 'sv_SE',
    url: 'https://monstertv.tv/installationsguider/apple-tv/',
    siteName: 'Monster TV',
    images: [
      {
        url: 'https://monstertv.tv/images/allsvenskan-2026.jpg',
        width: 1200,
        height: 630,
        alt: 'Monster TV - IPTV på Apple TV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV på Apple TV 2026 | Monster TV - Installationsguide',
    description: 'De bästa apparna för IPTV på Apple TV.',
    images: ['https://monstertv.tv/images/allsvenskan-2026.jpg'],
  },
};

const sidebarApps = [
  { name: 'IPTVX', url: '/installationsguider/apple-tv/iptvx' },
  { name: 'iPlayTV', url: '/installationsguider/apple-tv/iplaytv' },
  { name: 'Perfect IPTV', url: '/installationsguider/apple-tv/perfect-iptv' },
  { name: 'IPTV Expert', url: '/installationsguider/apple-tv/iptv-expert' },
  { name: 'Xtream IPTV', url: '/installationsguider/apple-tv/xtream-iptv' },
  { name: 'GSE Smart IPTV Pro', url: '/installationsguider/apple-tv/gse-smart-iptv-pro' },
  { name: 'IPTV Streamer', url: '/installationsguider/apple-tv/iptv-streamer' },
  { name: 'IPTV Smarters', url: '/installationsguider/apple-tv/iptv-smarters' },
  { name: 'IBO Player', url: '/installationsguider/apple-tv/ibo-player' },
];

export default function InstallationsguideAppleTvPage() {
  return (
    <div className="w-full font-sans bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center bg-[#0a0a0a]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/backeed.webp" 
            alt="Installationsguide – Apple TV" 
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
            Installationsguide – Apple TV
          </h1>
          
          <div 
            className="flex items-center gap-2"
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
            <span className="text-gray-300">Installationsguide – Apple TV</span>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-7xl">
          {/* Black bg section */}
          <div className="flex flex-col md:flex-row bg-black rounded-3xl overflow-hidden mb-16 shadow-2xl border border-gray-900">
            {/* Left side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                IPTV Apple TV Instruktioner
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                IPTV med Apple TV Instruktioner ser du här. Apple TV ger en utav de bästa IPTV upplevelserna man kan få när det kommer till TV tittande. Börja med att ladda ned valfri app. Nedan ser du de olika apparna som vi rekommenderar till Apple TV boxar. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din enhet men här finner du de som vi rekommenderar mest.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-semibold">
                Vi rekommenderar följande IPTV app: iPlayTV eller Perfect IPTV med Apple TV 4 och IPTVX eller Perfect IPTV med Apple TV gen 5 (4K) men läs texten på denna sida noga först!
              </p>
            </div>
            {/* Right side Image */}
            <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-full">
              <Image 
                src="/images/addsss.webp" 
                alt="IPTV Apple TV Instruktioner"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Centered section below */}
          <div className="max-w-4xl mx-auto text-center mt-32 mb-10">
            <span className="inline-block text-blue-500 font-bold uppercase tracking-wider text-sm mb-3">
              KOM IGÅNG
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 tracking-tight">
              Kom igång
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
              När du ska komma igång så börjar du med att söka efter nedanstående appar i ordningen de syns. Skulle det visa sig att du inte lyckas komma igång med första appen du testar så testar du med nästa och nästa tills det fungerar för dig. Med dina inloggningsuppgifter kan du använda vilka appar du vill. Du är alltså inte begränsad till en specifik app.
            </p>
            
            {/* Box type line */}
            <div className="bg-[#111] border-l-4 border-blue-500 p-6 md:p-8 rounded-r-xl shadow-lg inline-block text-left w-full max-w-3xl">
              <p className="text-white text-lg md:text-xl font-medium flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Kom bara ihåg att vara noga så att du endast använder en app åt gången!
              </p>
            </div>
          </div>

          {/* IPTV Apps Grid Section */}
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
                  <h3 className="font-bold text-white font-sans text-xl tracking-wide mb-3">{app.name}</h3>
                  <p 
                    className="mb-6 flex-grow"
                    style={{
                      fontFamily: 'Sora, "Sora Fallback", Arial, Helvetica, sans-serif',
                      fontWeight: 400,
                      color: 'oklab(0.999994 0.0000455677 0.0000200868 / 0.6)',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}
                  >
                    {app.text}
                  </p>
                  {app.showButton ? (
                    <div className="mt-auto w-full border border-yellow-500 text-yellow-500 rounded-full py-2.5 font-bold text-sm transition-opacity hover:opacity-80">
                      Rekommenderas
                    </div>
                  ) : (
                    <div 
                      className="mt-auto w-full border border-gray-700 rounded-full py-2.5 transition-opacity hover:opacity-80 flex items-center justify-center"
                      style={{
                        fontFamily: 'Sora, "Sora Fallback", Arial, Helvetica, sans-serif',
                        fontWeight: 700,
                        color: 'lab(70.687 -23.6078 -45.9483)',
                        fontSize: '12px',
                        lineHeight: '16px'
                      }}
                    >
                      Kompatibel med Apple TV
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Step 1 Section */}
          <div className="relative pt-24 pb-24 mt-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image 
                src="/images/iptvsvsport.webp"
                alt="Background"
                fill
                className="object-cover object-right md:object-center"
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
                IPTV med Apple TV Box
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Köp en Apple TV box på någon utav de större kedjorna som exempelvis Elgiganten, Power eller Webhallen. Vi rekommenderar inte att man köper en begagnad Apple TV Box då man aldrig kan veta hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Den föregående ägaren kan även ha tappat enheten eller låtit den samla på sig en massa damm som sugits in i enheten. I värsta fall kan interna delar sluta fungera pga syrebrist & värme av allt damm.
                </p>
                <p>
                  Det är viktigt att du köper en Apple TV 5 även om Apple TV 4 eller 4K också fungerar. IPTV med Apple TV 3 fungerar dessvärre inte då nedladdning utav de appar som krävs på en Apple TV 3 inte är möjligt. Även IPTV med TVIP box är ett bra sätt att se på IPTV.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 Section */}
          <div className="relative pt-24 pb-24 mt-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            {/* Background Image */}
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
                Grundinställningar till Apple TV
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow">
                <p>
                  Genomför grundinställningarna och acceptera eventuella villkor på din nya Apple TV. Logga även in på iCloud och installera nödvändiga appar. Spara förpackningen då din garanti kan vara knuten till den.
                </p>
                <p>
                  Koppla även upp din nya enhet till ditt nätverk. Det rekommenderas alltid att man använder en Ethernet kabel (nätverkssladd) men det fungerar även bra med Wifi förutsatt att din router inte är för långt bort samt att det är en bra router som ger en god täckning utav nätverket i hemmet.
                </p>
                <p>
                  Om stora saker såsom kylskåp, garderober, dörrar och annat står i vägen så kan din Apple TV tappa eller få försämrad anslutning emellanåt. Ta därför det säkra före det osäkra och använd en nätverkskabel mellan enheten och routern.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 Section */}
          <div className="pt-24 pb-24 mt-12 rounded-3xl bg-black px-6 md:px-12 shadow-2xl border border-gray-900">
            {/* Top Centered Part */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">3<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Ladda ned en IPTV app
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Idag finns det många olika IPTV-appar till Apple TV. Nedan ser du några som vi rekommenderar, och som fungerar utmärkt till Apple TV 4, 4K och Apple TV 5.
              </p>
            </div>

            {/* Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
              {/* Left Box */}
              <div className="bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 flex flex-col shadow-lg h-full">
                <p className="text-gray-300 text-lg leading-relaxed mb-8 shrink-0">
                  Sök upp valfri app nedan direkt i App Store på din Apple TV. Har du redan inloggningsuppgifter från oss kan du testa apparna i den ordning de listas tills en av dem fungerar som du vill.
                </p>
                <ul className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 content-start">
                  {[
                    'IPTVX', 'iPlayTV', 'Perfect IPTV', 'IPTV Expert', 
                    'Xtream IPTV', 'GSE Smart IPTV Pro', 'IPTV Streamer', 
                    'IPTV Smarters', 'IBO Player'
                  ].map((app, i) => (
                    <li key={i} className="flex items-center text-white font-medium text-lg">
                      <span className="text-blue-500 mr-3 text-2xl leading-none flex items-center justify-center">•</span> {app}
                    </li>
                  ))}
                </ul>
                <div>
                  <a 
                    href="/installationsguider/apple-tv#appar" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-center transition-colors text-sm shadow-lg shadow-blue-600/30 w-full sm:w-auto inline-flex items-center justify-center gap-2"
                  >
                    Se alla appar och guider
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Box */}
              <div className="bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 flex flex-col shadow-lg h-full justify-center">
                <div className="relative w-full h-72 md:h-80 rounded-xl overflow-hidden bg-[#0a0a0a] flex items-center justify-center border border-gray-900 shrink-0">
                  <Image 
                    src="/images/apple-tv-device.webp"
                    alt="Apple TV Device"
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>
            </div>

            {/* Bottom 3 Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                <h4 className="text-yellow-500 font-bold text-lg mb-3">Kompatibla modeller</h4>
                <p className="text-gray-300 text-base">Apple TV 4, 4K och Apple TV 5.</p>
              </div>
              <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                <h4 className="text-yellow-500 font-bold text-lg mb-3">Säker nedladdning</h4>
                <p className="text-gray-300 text-base">Hämta appar endast från App Store.</p>
              </div>
              <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg text-center">
                <h4 className="text-yellow-500 font-bold text-lg mb-3">Nästa steg</h4>
                <p className="text-gray-300 text-base">Installera appen och följ instruktionerna.</p>
              </div>
            </div>
          </div>

          {/* Step 4 Section */}
          <div className="relative pt-24 pb-24 mt-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-900 bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image 
                src="/images/sveirge-banner.webp"
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
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">4<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                Testa IPTV på Apple TV
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-6 drop-shadow mb-8">
                <p>
                  Nu är det dags för dig att begära ett gratis test utav oss genom att trycka på knappen nedan. Vi rekommenderar alltid att man köper 3 månader efter sitt gratis test för att hinna testa ordentligt då vårt utbud är enormt. Vi erbjuder i princip all sport, alla filmer samt alla serier och dokumentärer du kan tänka dig. Givetvis ingår hela utbudet även när du testar vår tjänst kostnadsfritt.
                </p>
                <p>
                  När du börjar med en längre period så har du möjligheten att hinna se många olika event som visas oavsett om du är sportintresserad eller inte. Givetvis ingår alla filmer, serier och dokumentärer du kan tänka dig. När du testat vårt IPTV-paket kommer du med stor sannolikhet att säga upp dina streamingtjänster och eventuellt TV-paket (om du har ett från exempelvis Telia, Tele2 osv).
                </p>
              </div>
              <a 
                href="/vart-paket" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-center transition-colors text-lg shadow-lg shadow-blue-600/30 w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                Gratis test
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Step 5 Section */}
          <div className="pt-24 pb-24 mt-12 rounded-3xl bg-black px-6 md:px-12 shadow-2xl border border-gray-900">
            {/* Top Centered Part */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 shrink-0">
                <span className="text-white font-black text-sm uppercase tracking-widest text-center leading-tight">5<br/>STEG</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Sammanfattning
              </h2>
            </div>

            {/* Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              {/* Left Box */}
              <div className="bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 flex flex-col shadow-lg h-full">
                <div className="text-gray-300 text-lg leading-relaxed space-y-6 mb-8 shrink-0">
                  <p>
                    Sammanfattningsvis rekommenderar vi att man köper en ny Apple TV för att se IPTV på Apple TV. Genomför sedan grundinställningarna och koppla upp Apple TV-boxen till internet, helst med en nätverkskabel. Ladda därefter ned en IPTV-app och begär ett gratis test, eller köp ett paket på 1–12 månader direkt av oss.
                  </p>
                  <p>
                    Njut av tusentals kanaler, filmer, serier och dokumentärer – plus alla PPV-event! Vi laddar upp nytt innehåll varje dag så att du som kund alltid har tillgång till det senaste inom TV och streaming.
                  </p>
                </div>
                
<AppSidebar 
                    title="Guider för rekommenderade appar:"
                    apps={sidebarApps}
                    buttonText="Köp IPTV"
                    buttonUrl="/vart-paket"
                  />
                </div>

              {/* Right Box */}
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

import type { Metadata } from "next";