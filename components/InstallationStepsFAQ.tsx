'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const StepCard = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 bg-[#111] border border-gray-800 p-6 sm:p-8 rounded-2xl w-full max-w-4xl mx-auto shadow-lg transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full border-2 border-cyan-500 text-cyan-400 font-bold text-2xl bg-cyan-950/20">
        {number}
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const SupportCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#111] border border-gray-800 p-8 rounded-2xl w-full max-w-4xl mx-auto shadow-lg mt-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-cyan-500/10 text-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Behöver du hjälp?</h3>
          <p className="text-gray-400 text-sm md:text-base max-w-lg">
            Vårt supportteam finns här för dig om du stöter på problem eller har frågor om installation, konfiguration eller kompatibilitet.
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
        <Link
          href="/support"
          className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-base transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] focus-visible:ring-purple-500/60 motion-reduce:transition-none shadow-lg shadow-purple-600/20"
        >
          Kontakta support
          <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "Vad du ska tänka på vid installation av streaming",
      answer: (
        <div className="space-y-4 text-gray-400">
          <p>
            Vid installation av streaming finns det några viktiga saker att tänka på för att säkerställa att allt fungerar smidigt. Följ anvisningarna i manualen steg för steg – det hjälper dig att undvika vanliga problem och förseningar.
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>Kontrollera att du har en stabil och snabb internetanslutning. Att installera streaming kräver hög bandbredd för att fungera utan avbrott.</li>
            <li>Använd de specifika appar och boxar som rekommenderas i manualen. Om du använder annan utrustning kan vi inte garantera att det fungerar som förväntat.</li>
            <li>Se till att alla appar och enheter är uppdaterade till de senaste versionerna, eftersom detta kan lösa kompatibilitetsproblem och förbättra prestandan.</li>
            <li>Kontrollera att du har den senaste kanallistan från din streamingleverantör. Felaktiga listor kan leda till att vissa kanaler inte fungerar.</li>
            <li>Ibland kan brandväggar och antivirusprogram blockera streamingtrafik. Se till att din enhet har de nödvändiga undantagen i dessa program.</li>
            <li>Anpassa inställningarna för bästa möjliga prestanda och bildkvalitet utifrån din internetanslutning och enhetens kapacitet.</li>
          </ul>
        </div>
      )
    },
    {
      question: "Behöver jag en streamingbox eller räcker det med en app?",
      answer: (
        <div className="space-y-4 text-gray-400">
          <p>En streamingbox är en dedikerad enhet som ansluts till din TV och hanterar streaming. En streamingapp är en programvara som du kan installera på olika enheter, som en smart-TV, smartphone, surfplatta eller dator.</p>
          <p>Valet mellan en streamingbox och en app beror på din nuvarande utrustning och dina preferenser. Om du har en modern smart-TV och vill ha flexibilitet, kan en app räcka. Om du vill ha en stabil och pålitlig upplevelse, särskilt om du har en äldre TV, kan en streamingbox vara det bästa alternativet.</p>
        </div>
      )
    },
    {
      question: "Kontakta Sverige Streaming kundtjänst vid installationsproblem",
      answer: (
        <div className="space-y-4 text-gray-400">
          <p>När du installerar streaming är det viktigt att noggrant följa anvisningarna i manualen och använda de rekommenderade applikationerna och boxarna för att säkerställa en smidig installation. Vid eventuella installationsproblem, tveka inte att kontakta oss för hjälp.</p>
          <p>Vi strävar efter att erbjuda Sveriges främsta kundservice och är tillgängliga dygnet runt för att assistera dig. Du kan enkelt nå oss genom att skicka ett e-postmeddelande till <a href="mailto:supporten@sverigeiptv.net" className="text-purple-400 hover:text-purple-300 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 rounded">supporten@sverigeiptv.net</a>.</p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl w-full max-w-4xl mx-auto overflow-hidden shadow-lg mt-12">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const contentId = `install-faq-content-${index}`;
        const buttonId = `install-faq-header-${index}`;
        return (
          <div key={index} className="border-b border-gray-800 last:border-b-0">
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleFaq(index)}
              className="flex items-center justify-between w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] focus-visible:ring-red-500/60 group transition-colors duration-300 hover:bg-white/5 motion-reduce:transition-none"
            >
              <h3 className="text-lg md:text-xl font-bold text-white pr-8">{faq.question}</h3>
              <div className={`flex-shrink-0 text-gray-400 transition-transform duration-300 motion-reduce:transition-none ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0'
              }`}
            >
              <div className="p-6 pt-0">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


// --- Main Section Export ---

export default function InstallationStepsFAQ() {
  const steps = [
    {
      number: 1,
      title: "Kontrollera din internetanslutning",
      description: "För att streaming ska fungera smidigt är en stabil och snabb internetanslutning ett måste. Kontrollera din internethastighet och se till att den är tillräcklig för att streama högupplöst video."
    },
    {
      number: 2,
      title: "Installera med rätt utrustning",
      description: "Se till att din enhet är uppdaterad och stödjer de senaste streamingstandarderna innan du fortsätter med installationen."
    },
    {
      number: 3,
      title: "Installera mjukvaran",
      description: "Ladda ner och installera den nödvändiga appen. Vi rekommenderar en app som stödjer M3U-listor eller Xtream Codes."
    },
    {
      number: 4,
      title: "Ange dina uppgifter",
      description: "Ange de uppgifter du fått via mejl efter ditt köp: användarnamn, lösenord och server-URL (eller M3U-länk)."
    },
    {
      number: 5,
      title: "Njut av ditt innehåll",
      description: "När allt är inställt är det bara att börja bläddra i kanalerna och njuta av ditt innehåll."
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto">

        {/* Section 1: STEG FÖR STEG */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-block text-purple-500 font-bold uppercase tracking-wider text-sm mb-3 px-4 py-1.5 bg-purple-900/30 rounded-full border border-purple-700/50">
              STEG FÖR STEG
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Så fungerar installationen
            </h2>
          </div>

          <div className="space-y-6">
            {steps.map((step) => (
              <StepCard key={step.number} number={step.number} title={step.title} description={step.description} />
            ))}
          </div>
        </div>

        {/* Section 2: SUPPORT CARD */}
        <SupportCard />

        {/* Section 3: FAQ */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <span className="inline-block text-purple-500 font-bold uppercase tracking-wider text-sm mb-3 px-4 py-1.5 bg-purple-900/30 rounded-full border border-purple-700/50">
              VANLIGA FRÅGOR
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Vanliga frågor
            </h2>
          </div>

          <FAQAccordion />
        </div>

      </div>
    </section>
  );
}
