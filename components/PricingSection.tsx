import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PricingCard = ({
  title,
  price,
  people,
  isHighlighted,
  link
}: {
  title: string,
  price: string,
  people: string,
  isHighlighted?: boolean,
  link: string
}) => {
  return (
    <div className={`relative flex flex-col rounded-3xl border ${isHighlighted ? 'border-purple-600 bg-[#1e1338]' : 'border-gray-800 bg-[#0a0a0a]'} p-8 pt-16 md:mt-0 mt-16 transition-transform duration-300 hover:-translate-y-2 motion-reduce:hover:translate-y-0 shadow-2xl`}>
      {/* Top overlapping image */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <Image
          src="/images/cropped-2monsterIPTV.webp"
          alt="Pricing Logo"
          width={96}
          height={96}
          className="object-contain drop-shadow-2xl"
        />
      </div>

      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{title}</h3>
        <div
          className="mb-4"
          style={{
            fontFamily: "'Hellix Bold', sans-serif",
            fontWeight: 600,
            color: "rgb(253, 254, 255)",
            fontSize: "26px",
            lineHeight: "34px",
            fontStyle: "normal"
          }}
        >
          {price}
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-300 font-medium bg-black/40 py-2 px-4 rounded-full inline-flex mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
          {people}
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-grow text-gray-200">
        {[
          "+ 13,000 TV-kanaler",
          "+ 26,000 VoDs (Inkl. 4K)",
          "+ 1,000 Sportkanaler",
          "Titta på Live-TV i HD / FHD / 4K / UHD",
          "PPV Matcher (Viaplay, Dplay, UFC, Boxing, ESPN m.m)",
          "365 dagars svenskstandande support"
        ].map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-base font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={link}
        aria-label={`Välj paket ${title} för ${price}`}
        className={`block w-full text-center py-4 rounded-xl font-bold text-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] motion-reduce:transition-none shadow-lg ${
          isHighlighted
            ? 'bg-red-600 hover:bg-red-700 text-white focus-visible:ring-red-500/60 shadow-red-600/30'
            : 'bg-white hover:bg-gray-200 text-black focus-visible:ring-gray-500/60 shadow-white/10'
        }`}
      >
        VÄLJ PAKET
      </Link>

      <div
        className="text-center mt-8"
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontWeight: 400,
          color: "rgb(215, 215, 215)",
          fontSize: "15px",
          lineHeight: "25px",
          fontStyle: "normal"
        }}
      >
        Vår skräddarsydda VPN finns som tillval – funkar med alla enheter!
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <section className="bg-black py-24 border-t border-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-sans uppercase">
            VÄLJ DITT STREAMINGPAKET
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-10">
          <PricingCard
            title="3 månader"
            price="499 kr"
            people="8 personer beställer just nu."
            link="https://monstertv.tv/product/monster-iptv-3-man/"
          />
          <PricingCard
            title="12 månader"
            price="1,499 kr"
            people="14 personer beställer just nu."
            isHighlighted={true}
            link="https://monstertv.tv/product/monster-iptv-12-man/"
          />
          <PricingCard
            title="6 månader"
            price="899 kr"
            people="10 personer beställer just nu."
            link="https://monstertv.tv/product/monster-iptv-6-man/"
          />
        </div>
      </div>
    </section>
  );
}
