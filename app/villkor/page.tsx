import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Villkor | Monster TV - Allmänna villkor",
  description: "Läs Monster TVs allmänna villkor. Dessa villkor beskriver reglerna för användning av vår webbplats, IPTV-tjänster, abonnemang och digital åtkomst.",
  keywords: ["villkor", "allmänna villkor", "Monster TV", "IPTV", "abonnemang"],
  alternates: { canonical: "https://monstertv.tv/villkor/" },
  openGraph: {
    title: "Villkor | Monster TV",
    description: "Läs Monster TVs allmänna villkor för användning av våra IPTV-tjänster och abonnemang.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/villkor/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - Villkor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villkor | Monster TV",
    description: "Läs Monster TVs allmänna villkor för användning av våra IPTV-tjänster och abonnemang.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default function VillkorPage() {
  return (
    <div className="w-full font-sans">
      {/* Hero Section: full-bleed background image with heading on the left */}
      <section className="relative w-full h-[400px] md:h-[480px] flex items-center bg-[#0a0a0a]">
        {/* Background Image covering entire hero section */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/689e1bffcfc04e97619b6ca0.webp"
            alt="Villkor Monster TV"
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
              Villkor
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
              <span>Villkor</span>
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
              Välkommen till Monster TV. Dessa villkor beskriver reglerna för
              användning av vår webbplats, våra IPTV-tjänster, abonnemang, produkter
              och digital åtkomst. Genom att besöka vår webbplats eller köpa ett
              abonnemang godkänner du dessa villkor.
            </p>

            {/* Twelve policy sections */}
            <div className="space-y-10 text-white">
              {/* 1. Allmän information */}
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
                  1. Allmän information
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Monster TV erbjuder IPTV-relaterade tjänster, inklusive tillgång
                  till TV-kanaler, filmer, serier, sport och digital
                  underhållning via internetanslutna enheter.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Våra tjänster är utformade för användare som vill ha ett
                  flexibelt och modernt sätt att titta på underhållning via
                  kompatibla enheter som Smart TV, Apple TV, Android, iOS,
                  datorer, surfplattor och IPTV-boxar.
                </p>
              </section>

              {/* 2. Användning av tjänsten */}
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
                  2. Användning av tjänsten
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  För att använda Monster TV behöver du en stabil
                  internetanslutning samt en kompatibel enhet eller applikation.
                  Streamingkvaliteten kan påverkas av internethastighet, enhetens
                  prestanda, appinställningar, nätverksstabilitet och andra
                  tekniska faktorer.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Du samtycker till att använda våra tjänster på ett ansvarsfullt
                  och lagligt sätt. Du får inte missbruka tjänsten, dela
                  åtkomstuppgifter med obehöriga personer, sälja vidare
                  abonnemang, försöka påverka systemets funktion eller använda
                  tjänsten på ett sätt som bryter mot gällande lagar eller
                  tredje parts rättigheter.
                </p>
              </section>

              {/* 3. Abonnemang och aktivering */}
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
                  3. Abonnemang och aktivering
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Efter slutförd beställning kan användaren få
                  abonnemangsuppgifter, aktiveringsinstruktioner eller
                  åtkomstinformation via e-post eller annan tillgänglig
                  kontaktmetod.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Du ansvarar för att ange korrekta kontaktuppgifter vid beställning.
                  Monster TV ansvarar inte för förseningar som orsakas av
                  felaktig e-postadress, ofullständiga beställningsuppgifter,
                  skräppostfilter eller betalningsverifiering.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Om du inte får dina aktiveringsuppgifter efter köp, vänligen
                  kontakta oss med din beställningsinformation.
                </p>
              </section>

              {/* 4. Betalningar */}
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
                  4. Betalningar
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Alla priser som visas på vår webbplats kan ändras eller
                  uppdateras när som helst. Det pris som bekräftas i kassan är
                  det pris som kunden accepterar vid köptillfället.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Betalningar kan hanteras via tredjepartsleverantörer. Monster TV
                  lagrar inte fullständiga kortuppgifter när betalningar
                  behandlas av externa betalningsleverantörer.
                </p>
              </section>

              {/* 5. Återbetalningar och teknisk support */}
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
                  5. Återbetalningar och teknisk support
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Eftersom IPTV-abonnemang är digitala tjänster kan möjligheten
                  till återbetalning vara begränsad efter att åtkomst har
                  aktiverats, levererats eller använts.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Om du upplever ett tekniskt problem ska du kontakta vårt
                  supportteam så att vi kan hjälpa dig med felsökning. Begäranden
                  om återbetalning granskas individuellt och kan bero på
                  problemets art, om tjänsten har aktiverats och om
                  supportinstruktioner har följts.
                </p>
              </section>

              {/* 6. Tjänstens tillgänglighet */}
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
                  6. Tjänstens tillgänglighet
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Vi arbetar för att erbjuda en stabil och pålitlig tjänst, men vi
                  kan inte garantera att åtkomsten alltid är oavbruten eller fri
                  från fel. IPTV-prestanda kan påverkas av internetproblem,
                  enhetsproblem, appfel, serverunderhåll, tredjepartssystem eller
                  andra faktorer utanför vår kontroll.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Monster TV ansvarar inte för problem som orsakas av din
                  internetleverantör, begränsningar i din enhet, felaktig
                  appinstallation, VPN-inställningar eller nätverksbegränsningar.
                </p>
              </section>

              {/* 7. Användarens ansvar */}
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
                  7. Användarens ansvar
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Användaren ansvarar för att säkerställa att enheten,
                  applikationen och internetanslutningen är lämpliga för
                  IPTV-streaming. Användaren ansvarar även för att kontrollera
                  om IPTV-tjänster är tillåtna enligt lagar och regler i det land
                  eller den region där tjänsten används.
                </p>
              </section>

              {/* 8. Konto och åtkomstsäkerhet */}
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
                  8. Konto och åtkomstsäkerhet
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Du måste hålla dina abonnemangsuppgifter privata och säkra. Att
                  dela kontouppgifter, sälja vidare åtkomst eller använda
                  tjänsten på fler anslutningar än vad abonnemanget tillåter kan
                  leda till avstängning eller avslutning av tjänsten.
                </p>
              </section>

              {/* 9. Webbplatsens innehåll */}
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
                  9. Webbplatsens innehåll
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Informationen på vår webbplats tillhandahålls som allmän
                  vägledning om våra tjänster. Vi kan när som helst uppdatera,
                  ändra eller ta bort webbplatsinnehåll, priser,
                  abonnemangsalternativ, funktioner eller tjänstebeskrivningar
                  utan föregående meddelande.
                </p>
              </section>

              {/* 10. Ansvarsbegränsning */}
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
                  10. Ansvarsbegränsning
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Monster TV ansvarar inte för förluster, avbrott i tjänsten,
                  enhetsproblem, problem hos internetleverantör, apprelaterade
                  fel, begränsningar hos tredjepartstjänster eller indirekta skador
                  som kan uppstå vid användning eller oförmåga att använda våra
                  tjänster.
                </p>
              </section>

              {/* 11. Kontakt */}
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
                  11. Kontakt
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  För frågor om dessa villkor, abonnemang eller support, kontakta
                  oss:
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  E-post: support@monstertv.tv
                </p>
              </section>

              {/* 12. Ändringar av dessa villkor */}
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
                  12. Ändringar av dessa villkor
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Vi kan uppdatera dessa villkor från tid till annan. Den senaste
                  versionen publiceras på denna sida med uppdaterat datum.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
