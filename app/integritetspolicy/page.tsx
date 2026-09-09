import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integritetspolicy | Monster TV - Sekretesspolicy",
  description: "Läs Monster TVs integritetspolicy. Vi förklarar hur vi samlar in, använder, lagrar och skyddar information när du besöker vår webbplats eller använder våra IPTV-tjänster.",
  keywords: ["integritetspolicy", "sekretesspolicy", "Monster TV", "personuppgifter", "cookies"],
  alternates: { canonical: "https://monstertv.tv/integritetspolicy/" },
  openGraph: {
    title: "Integritetspolicy | Monster TV",
    description: "Läs Monster TVs integritetspolicy för insamling, användning och skydd av personuppgifter.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/integritetspolicy/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - Integritetspolicy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integritetspolicy | Monster TV",
    description: "Läs Monster TVs integritetspolicy för insamling, användning och skydd av personuppgifter.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default function IntegritetspolicyPage() {
  return (
    <div className="w-full font-sans">
      {/* Hero Section: full-bleed background image with heading on the left */}
      <section className="relative w-full h-[400px] md:h-[480px] flex items-center bg-[#0a0a0a]">
        {/* Background Image covering entire hero section */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/689e1bffcfc04e97619b6ca0.webp"
            alt="Integritetspolicy Monster TV"
            fill
            className="object-cover object-top brightness-[1.2] contrast-110"
            quality={100}
            priority
          />
          {/* Strong dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 via-30% to-transparent to-60%" />
        </div>

        {/* Left-side content: heading + breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex justify-start">
          <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col items-start text-left mt-10 md:mt-0 text-white">
            {/* Main heading: large, bold */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
              Integritetspolicy
            </h1>

            {/* Breadcrumb below the heading */}
            <nav
              className="mb-8 flex items-center gap-2"
              aria-label="Breadcrumb"
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontWeight: 400,
                color: "rgb(255, 255, 255)",
                fontSize: "15px",
                lineHeight: "24px",
              }}
            >
              <Link
                href="/"
                className="hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span>Integritetspolicy</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Divider line between main content and the policy sections */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="h-px w-full max-w-4xl bg-gray-700" />
      </div>

      {/* Policy content container (below the hero section) */}
      <div className="w-full bg-black py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="w-full text-left">
            {/* Last updated: bold white */}
            <p className="text-sm font-bold text-white mb-4">
              Senast uppdaterad: 11 juni 2026
            </p>

            {/* Welcome paragraph */}
            <p
              className="text-gray-200 text-lg md:text-xl mb-10"
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                lineHeight: "1.8",
              }}
            >
              Denna integritetspolicy förklarar hur Monster TV samlar in,
              använder, lagrar och skyddar information när du besöker vår
              webbplats, kontaktar oss eller köper våra IPTV-tjänster. Vi
              respekterar din integritet och strävar efter att hantera information
              på ett säkert och transparent sätt.
            </p>

            {/* Eleven policy sections */}
            <div className="space-y-10 text-white">
              {/* 1. Information vi samlar in */}
              <section>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Hellix Bold', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    fontSize: "30px",
                    lineHeight: "39px",
                  }}
                >
                  1. Information vi samlar in
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Vi kan samla in följande typer av information:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 mt-4">
                  <li>Namn, om det anges</li>
                  <li>E-postadress</li>
                  <li>Beställningsuppgifter</li>
                  <li>Abonnemangsuppgifter</li>
                  <li>Enhets- eller appinformation som delas vid support</li>
                  <li>
                    Meddelanden som skickas via kontaktformulär eller e-post
                  </li>
                  <li>
                    Teknisk information såsom IP-adress, webbläsartyp,
                    enhetstyp, besökta sidor och användningsdata
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Vi samlar endast in information som behövs för att
                  tillhandahålla våra tjänster, hantera beställningar, svara på
                  supportförfrågningar, förbättra webbplatsen och upprätthålla
                  säkerheten.
                </p>
              </section>

              {/* 2. Hur vi använder din information */}
              <section>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Hellix Bold', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    fontSize: "30px",
                    lineHeight: "39px",
                  }}
                >
                  2. Hur vi använder din information
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Vi kan använda din information för att:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 mt-4">
                  <li>Behandla och hantera beställningar</li>
                  <li>Leverera abonnemangs- och aktiveringsuppgifter</li>
                  <li>Ge kundsupport</li>
                  <li>Svara på frågor och meddelanden</li>
                  <li>Hjälpa till med installation och aktivering</li>
                  <li>Förbättra webbplatsens prestanda</li>
                  <li>Förhindra bedrägeri eller missbruk</li>
                  <li>Upprätthålla tjänstens säkerhet</li>
                  <li>Följa juridiska skyldigheter där det krävs</li>
                </ul>
              </section>

              {/* 3. Cookies och spårning */}
              <section>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Hellix Bold', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    fontSize: "30px",
                    lineHeight: "39px",
                  }}
                >
                  3. Cookies och spårning
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Vår webbplats kan använda cookies eller liknande tekniker för
                  att förbättra användarupplevelsen, komma ihåg inställningar,
                  analysera trafik och stödja webbplatsens funktionalitet.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Du kan inaktivera eller hantera cookies via inställningarna i
                  din webbläsare. Observera att vissa delar av webbplatsen kanske
                  inte fungerar korrekt om cookies är inaktiverade.
                </p>
              </section>

              {/* 4. Betalningsinformation */}
              <section>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Hellix Bold', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    fontSize: "30px",
                    lineHeight: "39px",
                  }}
                >
                  4. Betalningsinformation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Om betalningar hanteras via tredjepartsleverantörer behandlas
                  dina betalningsuppgifter av dessa leverantörer enligt deras
                  egna integritets- och säkerhetspolicyer.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Monster TV lagrar inte fullständiga kreditkorts- eller
                  betalkortsuppgifter när betalningen behandlas av externa
                  betalningsleverantörer.
                </p>
              </section>

              {/* 5. Delning av information */}
              <section>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Hellix Bold', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    fontSize: "30px",
                    lineHeight: "39px",
                  }}
                >
                  5. Delning av information
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Vi säljer inte dina personuppgifter. Vi kan endast dela
                  begränsad information när det är nödvändigt för att behandla
                  beställningar, ge support, driva webbplatsen, samarbeta med
                  tjänsteleverantörer, förhindra missbruk eller uppfylla juridiska
                  krav.
                </p>
              </section>

              {/* 6. Datasäkerhet */}
              <section>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Hellix Bold', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    fontSize: "30px",
                    lineHeight: "39px",
                  }}
                >
                  6. Datasäkerhet
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Vi använder rimliga tekniska och organisatoriska åtgärder för
                  att skydda användarinformation mot obehörig åtkomst, förlust,
                  missbruk eller utlämnande. Ingen onlineplattform kan dock
                  garanteras vara helt säker.
                </p>
              </section>

              {/* 7. Lagring av data */}
              <section>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Hellix Bold', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    fontSize: "30px",
                    lineHeight: "39px",
                  }}
                >
                  7. Lagring av data
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Vi sparar personuppgifter endast så länge det är nödvändigt
                  för att tillhandahålla tjänister, hantera beställningar, svara
                  på supportförfrågningar, lösa tvister, förhindra missbruk eller
                  uppfylla juridiska och administrativa krav.
                </p>
              </section>

              {/* 8. Dina rättigheter */}
              <section>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Hellix Bold', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    fontSize: "30px",
                    lineHeight: "39px",
                  }}
                >
                  8. Dina rättigheter
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Beroende på var du befinner dig kan du ha rätt att begära
                  tillgång till dina personuppgifter, be om korrigering, begära
                  radering eller invända mot vissa typer av behandling.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  För integritetsrelaterade frågor, kontakta oss:
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  E-post: support@monstertv.tv
                </p>
              </section>

              {/* 9. Tredjepartslänkar */}
              <section>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Hellix Bold', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    fontSize: "30px",
                    lineHeight: "39px",
                  }}
                >
                  9. Tredjepartslänkar
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Vår webbplats kan innehålla länkar till tredjepartswebbplatser,
                  applikationer, betalningsplattformar eller tjänsteleverantörer.
                  Vi ansvarar inte för tredje parts integritetspraxis, policyer
                  eller innehåll. Vi rekommenderar att du läser deras
                  integritetspolicyer innan du använder dem.
                </p>
              </section>

              {/* 10. Barns integritet */}
              <section>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Hellix Bold', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    fontSize: "30px",
                    lineHeight: "39px",
                  }}
                >
                  10. Barns integritet
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Våra tjänster är inte avsedda för barn. Vi samlar inte
                  medvetet in personuppgifter från barn. Om du tror att ett barn
                  har lämnat personuppgifter via vår webbplats, vänligen kontakta
                  oss så att vi kan vidta lämpliga åtgärder.
                </p>
              </section>

              {/* 11. Ändringar av denna integritetspolicy */}
              <section>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Hellix Bold', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "rgb(30, 41, 59)",
                    fontSize: "30px",
                    lineHeight: "39px",
                  }}
                >
                  11. Ändringar av denna integritetspolicy
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Vi kan uppdatera denna integritetspolicy från tid till annan.
                  Eventuella ändringar publiceras på denna sida med det senaste
                  uppdateringsdatumet.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
