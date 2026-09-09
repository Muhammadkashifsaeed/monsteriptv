import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMCA-policy | Monster TV - Digital Millennium Copyright Act",
  description: "Läs Monster TVs DMCA-policy. Vi respekterar upphovsrätt och behandlar alla anmälningar om upphovsrättsintrång på ett professionellt sätt.",
  keywords: ["DMCA", "upphovsrätt", "policy", "Monster TV", "copyright", "Digital Millennium Copyright Act"],
  alternates: { canonical: "https://monstertv.tv/dmca/" },
  openGraph: {
    title: "DMCA-policy | Monster TV - Digital Millennium Copyright Act",
    description: "Läs Monster TVs DMCA-policy. Vi respekterar upphovsrätt och behandlar alla anmälningar om upphovsrättsintrång professionellt.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/dmca/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - DMCA-policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DMCA-policy | Monster TV - Digital Millennium Copyright Act",
    description: "Läs Monster TVs DMCA-policy. Vi respekterar upphovsrätt och behandlar alla anmälningar om upphovsräftsintrång professionellt.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default function DmcaPage() {
  return (
    <div className="w-full font-sans">
      {/* Hero Section: full-bleed background image with heading on the left */}
      <section className="relative w-full h-[400px] md:h-[480px] flex items-center bg-[#0a0a0a]">
        {/* Background Image covering entire hero section */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/689e1bffcfc04e97619b6ca0.webp"
            alt="DMCA-policy Monster TV"
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
              DMCA
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
              <span>DMCA</span>
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
            {/* Page heading */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-blue-400">
              DMCA-policy (Digital Millennium Copyright Act)
            </h2>

            {/* Welcome paragraph */}
            <p
              className="text-gray-200 text-lg md:text-xl mb-10"
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                lineHeight: "1.8",
              }}
            >
              Välkommen till Monster IPTV. Vi respekterar upphovsrätt och andra
              immateriella rättigheter samt behandlar alla rapporter om misstänkta
              upphovsrättsintrång på ett noggrant, rättvist och professionellt sätt.
              Om du anser att material som finns på vår webbplats kränker dina
              rättigheter kan du skicka in en DMCA-anmälan för granskning.
            </p>

            {/* Five policy sections */}
            <div className="space-y-10 text-white">
              {/* 1. Rapportera upphovsrättsintrång */}
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
                  1. Rapportera upphovsrättsintrång
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  För att vi ska kunna behandla en begäran om borttagning av
                  innehåll behöver din anmälan innehålla följande information:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 mt-4">
                  <li>
                    En fysisk eller elektronisk underskrift från
                    upphovsrättsinnehavaren eller en auktoriserad representant.
                  </li>
                  <li>
                    En tydlig beskrivning av det upphovsrättsskyddade materialet
                    som påstås ha blivit föremål av intrång.
                  </li>
                  <li>
                    Information som gör det möjligt för oss att hitta det aktuella
                    innehållet, såsom en exakt URL eller annan relevant beskrivning.
                  </li>
                  <li>
                    Dina fullständiga kontaktuppgifter inklusive namn, adress,
                    e-postadress och telefonnummer.
                  </li>
                  <li>
                    Ett uttalande om att du i god tro anser att användningen av
                    materialet inte är godkänd av rättighetsinnehavaren, dess
                    representant eller enligt gällande lag.
                  </li>
                  <li>
                    En bekräftelse på att informationen i anmälan är korrekt och
                    att du har behörighet att agera för upphovsrättsinnehavarens
                    vägnar.
                  </li>
                </ul>
              </section>

              {/* 2. Skicka en DMCA-anmälan */}
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
                  2. Skicka en DMCA-anmälan
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Alla upphovsrättsrelaterade förfrågningar kan skickas via vår
                  kontaktsida. För att säkerställa en snabb och effektiv behandling
                  rekommenderar vi att du lämnar så detaljerad och korrekt
                  information som möjligt.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Vi kan vid behov dela relevant information från en anmälan med
                  berörda parter för att undersöka ärendet och uppfylla rättsliga
                  skyldigheter.
                </p>
              </section>

              {/* 3. Motanmälan */}
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
                  3. Motanmälan
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Om du anser att innehåll har tagits bort eller begränsats av
                  misstag kan du skicka in en motanmälan. Den bör innehålla:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 mt-4">
                  <li>Din fysiska eller elektroniska underskrift.</li>
                  <li>
                    En beskrivning av det borttagna materialet och dess tidigare
                    placering på webbplatsen.
                  </li>
                  <li>
                    Ett uttalande om att du i god tro anser att borttagningen
                    skedde på grund av ett fel eller en felaktig identifiering.
                  </li>
                  <li>
                    Dina kontaktuppgifter samt övriga nödvändiga juridiska
                    bekräftelser enligt tillämpliga regler.
                  </li>
                </ul>
              </section>

              {/* 4. Återkommande överträdelser */}
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
                  4. Återkommande överträdelser
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Monster IPTV har en tydlig policy för hantering av upprepade
                  upphovsrättsöverträdelser. Användare som upprepade gånger bryter
                  mot immateriella rättigheter eller våra riktlinjer kan få sin
                  tillgång begränsad eller permanent avslutad.
                </p>
              </section>

              {/* 5. Ändringar av DMCA-policyn */}
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
                  5. Ändringar av DMCA-policyn
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Monster IPTV förbehåller sig rätten att när som helst uppdatera
                  eller ändra denna DMCA-policy för att anpassa den efter
                  förändringar i våra tjänster, interna rutiner eller gällande
                  lagkrav. Den senaste versionen av policyn kommer alltid att finnas
                  tillgänglig på denna sida.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
