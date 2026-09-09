import React from 'react';

export default function SmartTVSection() {
  return (
    <section className="bg-black py-24 border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight font-sans">
          Titta på Smart TV eller kompatibla streamingenheter.
        </h2>
        <p
          className="text-lg md:text-xl font-normal mx-auto"
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            color: "rgb(215, 215, 215)",
            lineHeight: "32px"
          }}
        >
          Använd Monster TV på kompatibla enheter och njut av tillgänglig underhållning med en enkel och flexibel streamingupplevelse.
        </p>
      </div>
    </section>
  );
}
