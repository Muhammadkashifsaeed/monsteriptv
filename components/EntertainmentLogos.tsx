import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EntertainmentLogos() {
  const logos = Array.from({ length: 16 }, (_, i) => `/images/Dina${i + 1}.webp`);

  return (
    <section className="bg-[#0a0a0a] py-24 border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-sans tracking-tight">
            Underhållning utan gränser.
          </h2>
          <p
            className="text-gray-400 text-lg md:text-xl font-medium"
            style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
          >
            Dina favoritkanaler. Ett klick bort.
          </p>
        </div>

        {/* 2 lines of 8 logos on md+ screens */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 mb-16 items-center justify-items-center max-w-5xl mx-auto">
          {logos.map((src, index) => (
            <div
              key={index}
              className="relative w-20 h-20 md:w-28 md:h-28"
            >
              <Image
                src={src}
                alt={`Kanal Logo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 80px, 112px"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="https://monstertv.tv/product/monster-iptv-2-man/"
            className="w-full sm:w-auto bg-white text-black font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] focus-visible:ring-red-500/60 motion-reduce:transition-none font-sans inline-block text-center"
          >
            VÄLJ PAKET
          </Link>
          <Link
            href="/vara-paket"
            className="w-full sm:w-auto bg-[#e50000] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-red-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] focus-visible:ring-red-500/60 motion-reduce:transition-none font-sans inline-block text-center uppercase tracking-wider"
          >
            PRISJÄMFÖRELSE
          </Link>
        </div>
      </div>
    </section>
  );
}
