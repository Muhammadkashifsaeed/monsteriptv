"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Hur snabbt internet behöver jag?",
    answer: "Det beror helt på din situation, har du sladd och 50mbit kommer du klara dig men det kan förekomma lagg någon gång ibland, men om du skulle kört med smart iptv appen eller liknande så är det helt annat och det hade varit svårt o klara sig på 50mbit. Men vi brukar säga att om du har fiber samt kör sladd genom routern med ungefär 100 mbit ner kommer du klara dig bra. Men! såklart kan det fungera även med lägre hastigheter dock kan det somsagt förekomma lagg! kom ihåg det iptv är bäst med sladd från routern och gärna till en box (Formuler) för ännu bättre tittarupplevelse."
  },
  {
    question: "Vad är TV Streaming?",
    answer: "TV Streaming är ett helt nytt sätt att titta på TV, du behöver ingen antenn och ingen parabol, det enda du behöver är en internetuppkoppling på ungefär 100mbit/s samt en enhet för att komma igång."
  },
  {
    question: "Vilka kanaler ingår? Vad ingår i Abonnemangen?",
    answer: "Alla kanaler som finns i vårat utbud (som du kan se här) ingår i alla våra abonnemang. Vi sänder alla Svenska Streaming Kanaler, C more, Viasat 4K (Ultra HD), Sportkanalen, Discovery, PPV, UFC, Motorsport, Golf, NHL, SHL, Allsvenskan, Champions League, Fotboll och mycket mer."
  },
  {
    question: "Vad innebär HD/FHD/UHD",
    answer: "HD eller HD-Ready hette således 720p, och när Full HD gjorde entré några år senare kallades det ofta för 1080p.\n\nFull HD har alltså 1080 vertikala pixlar, medan bilden samtidigt har 1920 horisontella pixlar.\n\nI början av det här årtiondet började tillverkarna så smånt ta tag i 4K-tekniken, även kallad Ultra HD eller UHD, som i mycket enkla ordalag är fyra gången så hög upplösning som Full HD.\n\nDet innebär 2160 pixlar vertikalt och 3840 pixlar horisontellt\n\nDe 4000, som namnet 4K syftar på är nämligen inte längre de vertikala pixlarna utan i stället de horisontella, och egentligen har formatet \"bara\" 3840 horisontella pixlar.\n\nOm man däremot går på bio och ser en film i 4K är formatet en aning bredare, nämligen 4096 pixlar, och det är detta som har lett till namnet 4K."
  },
  {
    question: "Hur långa är leveranstiderna på iptv boxarna?",
    answer: "1-3 dagar. Skulle boxarna mot förmodan vara slut hos leverantör så kan leveranstiden blir lite längre. Vi meddelar isållos."
  },
  {
    question: "Hur lägger jag en beställning?",
    answer: "För att göra en beställning går du till köp och väljer abonnemang sedan fyller du bara i och följer instruktionerna som står, om du skulde stöta på problem kan du alltid skicka ett mejl eller skriva till oss i livechatten."
  },
  {
    question: "Kan jag ångra mitt köp eller få en återbetalning?",
    answer: "Nej! det finns inget öppet köp eller liknande. En beställning är bindande. Det är därför vi tagit fram 10 dagars abonnemang för att garantera att alla kunder blir nöjda."
  }
];

export default function BastITestFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="mb-4 uppercase tracking-wide"
            style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}
          >
            Frågor? Svar.
          </h2>
          <p
            style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 400, color: "rgb(253, 254, 255)", fontSize: "17px", lineHeight: "28px" }}
          >
            Streama det du älskar, var du vill och när du vill, på alla dina enheter.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `bast-faq-content-${index}`;
            const buttonId = `bast-faq-header-${index}`;
            return (
              <div
                key={index}
                className="border border-gray-800 rounded-lg overflow-hidden bg-[#111] transition-all duration-300 motion-reduce:transition-none"
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleOpen(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] focus-visible:ring-red-500/60 group transition-colors duration-300 hover:bg-white/5 motion-reduce:transition-none"
                >
                  <span className="font-bold text-lg text-white font-sans transition-colors motion-reduce:transition-none">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 motion-reduce:transition-none" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 motion-reduce:transition-none" />
                  )}
                </button>
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen ? "max-h-[800px] pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-white font-sans leading-relaxed text-[16px] border-t border-gray-800 pt-4 whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
