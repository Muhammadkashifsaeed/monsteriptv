import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Flexibel streaming',
      text: 'Använd Monster TV på kompatibla enheter och skapa en streamingupplevelse som passar din vardag.'
    },
    {
      title: 'Underhållning för olika behov',
      text: 'Upptäck tillgängligt innehåll inom filmer, serier, sport och annan digital underhållning på ett enkelt sätt.'
    },
    {
      title: 'Anpassad för din vardag',
      text: 'Använd tjänsten på kompatibla skärmar och digitala enheter, hemma eller på andra platser där tjänsten är tillgänglig.'
    },
    {
      title: 'Enkel hjälp när du behöver den',
      text: 'Har du frågor om aktivering, kompatibilitet eller användning kan du kontakta vårt supportteam för vägledning.'
    }
  ];

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 font-sans tracking-tight">
            Varför välja Monster TV?
          </h2>
          <p
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
          >
            En enkel och flexibel streaminglösning för en modern digital underhållningsupplevelse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <h3 className="text-2xl font-bold text-black mb-4 font-sans tracking-tight">
                {feature.title}
              </h3>
              <p
                className="text-gray-700 text-lg"
                style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", lineHeight: "1.8" }}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
