"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      q: 'Hur snabb internetanslutning behöver jag?',
      a: 'En stabil internetanslutning rekommenderas för en smidig streamingupplevelse. Kraven kan variera beroende på bildkvalitet och enhet.'
    },
    {
      q: 'Vad är streaming?',
      a: 'Streaming innebär att digitalt innehåll spelas upp via internet utan att du behöver ladda ner hela innehållet till din enhet först.'
    },
    {
      q: 'Vilka enheter kan användas',
      a: 'Monster TV kan användas på kompatibla enheter. Kontrollera alltid enhetens kompatibilitet innan beställning.'
    },
    {
      q: 'Vad ingår i ett streamingpaket?',
      a: 'Paketets innehåll och villkor kan variera. Se aktuell information på respektive paketsida innan du beställer.'
    },
    {
      q: 'Vilken bildkvalitet kan jag använda',
      a: 'Bildkvaliteten kan variera beroende på tillgängligt innehåll, internetanslutning, enhet och aktuella tekniska förutsättningar.'
    },
    {
      q: 'Hur gör jag en beställning?',
      a: 'Välj ett tillgängligt paket, följ beställningsstegen och kontrollera informationen innan du slutför köpet.'
    },
    {
      q: 'Kan jag ändra eller avsluta mitt paket?',
      a: 'Det beror på aktuella villkor för ditt valda paket. Kontrollera villkoren eller kontakta supporten om du behöver hjälp.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-24 border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-sans tracking-tight">
            Vanliga frågor om Monster TV
          </h2>
          <p
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
          >
            Här hittar du svar på vanliga frågor om streaming, kompatibla enheter, paket och användning.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-header-${index}`;
            return (
              <div
                key={index}
                className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 motion-reduce:transition-none"
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] focus-visible:ring-red-500/60 group transition-colors duration-300 hover:bg-white/5 motion-reduce:transition-none"
                >
                  <span className="font-semibold text-lg md:text-xl transition-colors font-sans text-gray-300 group-hover:text-white motion-reduce:transition-none">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-gray-400 group-hover:text-white flex-shrink-0 transition-colors motion-reduce:transition-none" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-white flex-shrink-0 transition-colors motion-reduce:transition-none" />
                  )}
                </button>
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={
                    "overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none " +
                    (isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
                  }
                >
                  <div
                    className="px-6 pb-5 pt-2 text-gray-300 text-base md:text-lg"
                    style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", lineHeight: "1.8" }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
