import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BannerSection() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/Malik4.webp"
          alt="Sports and Entertainment Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark gradient overlay focused on the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-2xl text-left flex flex-col items-start">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight font-sans">
            Njut av sport och underhållning med Monster TV
          </h2>

          <div
            className="space-y-6 mb-10 text-gray-200 text-lg md:text-xl font-normal"
            style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
          >
            <p>
              Upptäck en flexibel streamingupplevelse med tillgängligt sport- och underhållningsinnehåll på kompatibla enheter. Oavsett om du vill följa sport eller koppla av med filmer och serier kan Monster TV ge dig ett enkelt sätt att använda digital underhållning i vardagen.
            </p>
            <p className="text-sm md:text-base text-gray-400 italic">
              Tillgängligt innehåll kan variera beroende på aktuella rättigheter, licenser och valt paket.
            </p>
          </div>

          <Link
            href="/vara-paket"
            className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-full text-lg transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-red-500/60 motion-reduce:transition-none inline-block text-center"
          >
            UTFORSKA STREAMINGPAKET
          </Link>
        </div>
      </div>
    </section>
  );
}
