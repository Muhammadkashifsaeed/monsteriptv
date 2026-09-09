import React from 'react';
import Link from 'next/link';

export default function LightCtaSection() {
  return (
    <section className="bg-white py-24 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 font-sans tracking-tight">
          Har du frågor?
        </h2>
        <p
          className="text-gray-600 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
        >
          Vi hjälper mer än gärna till och svarar på alla frågor 24/7.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="https://jivo.chat/me628jLt79"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#e50000] text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-red-500/60 motion-reduce:transition-none font-sans inline-block uppercase tracking-wider"
          >
            Livechatt
          </Link>
          <Link
            href="/vara-paket"
            className="w-full sm:w-auto bg-black text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-gray-500/60 motion-reduce:transition-none font-sans inline-block uppercase tracking-wider"
          >
            Köp nu
          </Link>
        </div>
      </div>
    </section>
  );
}
