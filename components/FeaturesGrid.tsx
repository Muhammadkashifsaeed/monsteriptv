import React from 'react';

const features = [
  {
    title: "Underhållning utan gränser",
    description: "Titta på Monster TV på Smart TV, Chromecast, Apple TV, PlayStation, Xbox och flera enheter – var du än är."
  },
  {
    title: "Dina favoriter, alltid nära",
    description: "Ladda ner program och se dina favoritserier när som helst, även utan internet."
  },
  {
    title: "Ett konto. Alla skärmar.",
    description: "Streama tusentals filmer, serier och TV-kanaler på mobil, surfplatta, laptop och TV."
  },
  {
    title: "Support som verkligen bryr sig",
    description: "Vårt supportteam är tillgängligt dygnet runt, året om – snabbt, vänligt och pålitligt."
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="mb-4 uppercase tracking-wide"
            style={{ fontFamily: "'Hellix Bold', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "rgb(255, 255, 255)" }}
          >
            Varför Monster TV är det självklara valet
          </h2>
          <p
            style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 400, color: "rgb(253, 254, 255)", fontSize: "17px", lineHeight: "28px" }}
          >
            Streama det du älskar, var du vill och när du vill, på alla dina enheter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111] border border-gray-800 p-10 rounded-xl flex flex-col justify-center items-center text-center hover:border-gray-600 transition-colors duration-300 motion-reduce:transition-none"
            >
              <h3 className="text-xl font-bold text-white mb-4 font-sans tracking-wide uppercase">
                {feature.title}
              </h3>
              <p
                style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 400, color: "rgb(253, 254, 255)", fontSize: "16px", lineHeight: "26px" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
