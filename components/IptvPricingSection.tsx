import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const IptvPricingCard = ({
  title,
  price,
  people,
  link,
  isHighlighted
}: {
  title: string,
  price: string,
  people: string,
  link: string,
  isHighlighted?: boolean
}) => {
  return (
    <div className="relative flex flex-col rounded-3xl border border-gray-800 bg-[#0a0a0a] hover:bg-[#111] hover:border-white p-8 pt-16 mt-12 transition-all duration-300 hover:-translate-y-2 motion-reduce:hover:translate-y-0 motion-reduce:hover:bg-[#0a0a0a] shadow-2xl">
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
          "+ 26,000 VoD's (Inkl. 4K)",
          "+ 1,000 Sportkanaler",
          "Titta på Live-TV i HD / FHD / 4K / UHD",
          "PPV Matcher (Viaplay, Dplay, UFC, Boxning, ESPN m.m)",
          "365 dagars svensktalande support"
        ].map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontWeight: 400,
                color: "rgb(253, 254, 255)",
                fontSize: "16px",
                lineHeight: "26px"
              }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={link}
        aria-label={`Välj paket ${title} för ${price}`}
        className={`block text-center w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] motion-reduce:transition-none shadow-lg ${
          isHighlighted
            ? 'bg-[#e50000] hover:bg-red-700 text-white focus-visible:ring-red-500/60 shadow-red-600/30'
            : 'bg-white hover:bg-gray-200 text-black focus-visible:ring-gray-500/60 shadow-white/10'
        }`}
      >
        Välj Paket
      </Link>

      <div
        className="text-center mt-6 text-gray-400"
        style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "14px" }}
      >
        Tillgängliga paket är med VPN och utan VPN
      </div>
    </div>
  );
};

export default function IptvPricingSection() {
  const packages = [
    { title: "Monster IPTV 10 Dagar", price: "99 kr – 104 kr", people: "4 personer beställer just nu.", link: "https://monstertv.tv/product/monster-iptv-10-dagar/" },
    { title: "Monster IPTV 1 MåN", price: "299 kr - 349 kr", people: "5 personer beställer just nu.", link: "https://monstertv.tv/product/monster-iptv-1-man/", isHighlighted: true },
    { title: "Monster IPTV 3 MÅN", price: "499 kr – 649 kr", people: "8 personer beställer just nu.", link: "https://monstertv.tv/product/monster-iptv-3-man/" },
    { title: "Monster IPTV 6 MÅN", price: "899 kr – 1,199 kr", people: "10 personer beställer just nu.", link: "https://monstertv.tv/product/monster-iptv-6-man/" },
    { title: "Monster IPTV 12 MÅN", price: "1,499 kr – 1,999 kr", people: "14 personer beställer just nu.", link: "https://monstertv.tv/product/monster-iptv-12-man/", isHighlighted: true },
    { title: "Monster IPTV 2*12 MÅN", price: "2,899 kr – 3,199 kr", people: "7 personer beställer just nu.", link: "https://monstertv.tv/product/monster-iptv-212-man/" },
  ];

  return (
    <section className="bg-black py-24 border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight font-sans uppercase">
            VÄLJ DITT PAKET
          </h2>
          <p
            className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
          >
            För dig som vill ha det allra bästa för live sport, film & serier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-10">
          {packages.map((pkg, index) => (
            <IptvPricingCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              people={pkg.people}
              link={pkg.link}
              isHighlighted={pkg.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
