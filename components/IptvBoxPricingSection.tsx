import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const IptvBoxPricingCard = ({
  title,
  price,
  people,
  link,
  imageSrc,
  isHighlighted
}: {
  title: string,
  price: string,
  people: string,
  link: string,
  imageSrc: string,
  isHighlighted?: boolean
}) => {
  return (
    <div className="relative flex flex-col rounded-3xl border border-gray-800 bg-[#0a0a0a] hover:bg-[#111] hover:border-white p-8 mt-12 transition-all duration-300 hover:-translate-y-2 motion-reduce:hover:translate-y-0 motion-reduce:hover:bg-[#0a0a0a] shadow-2xl">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{title}</h3>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-300 font-medium bg-black/40 py-2 px-4 rounded-full inline-flex mx-auto mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
          {people}
        </div>

        <div className="flex items-center justify-center mb-8">
          <Image
            src={imageSrc}
            alt={title}
            width={160}
            height={160}
            className="object-contain max-h-[140px] w-auto drop-shadow-2xl rounded-md"
          />
        </div>

        <div
          className="mb-2"
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

export default function IptvBoxPricingSection({ id }: { id?: string }) {
  const packages = [
    { title: "Tvip 705 s", price: "1,999 kr", people: "6 personer beställer just nu.", link: "https://monstertv.tv/product/tvip-705-s/", imageSrc: "/images/just1.webp" },
    { title: "Z11 Pro MAX", price: "2,999 kr", people: "3 personer beställer just nu.", link: "https://monstertv.tv/product/z11-pro-max/", imageSrc: "/images/just2.webp", isHighlighted: true },
    { title: "IPTV för Formuler Z Mini", price: "2,499 kr", people: "4 personer beställer just nu.", link: "https://monstertv.tv/product/iptv-for-z-mini/", imageSrc: "/images/just3.webp" },

    { title: "Formuler Z11 Pro + 12 Månader", price: "3,899 kr – 4,349 kr", people: "12 personer beställer just nu.", link: "https://monstertv.tv/product/formuler-z11-pro-12-manader/", imageSrc: "/images/just4.webp" },
    { title: "Formuler Z11 Pro MAX + 12 Månader", price: "4,299 kr - 4,749 kr", people: "7 personer beställer just nu.", link: "https://monstertv.tv/product/formuler-z11-pro-max-12-manader/", imageSrc: "/images/just5.webp", isHighlighted: true },
    { title: "TVIP and 12 MåNADER", price: "3,099 kr – 3,549 kr", people: "4 personer beställer just nu.", link: "https://monstertv.tv/product/tvip-and-12-manader/", imageSrc: "/images/just6.webp" },

    { title: "Formuler Z12 Ultra (4K)", price: "3,199 kr", people: "9 personer beställer just nu.", link: "https://monstertv.tv/product/formuler-z12-ultra-4k/", imageSrc: "/images/just7.png" },
    { title: "Formuler Z11 Pro", price: "2,699 kr", people: "5 personer beställer just nu.", link: "https://monstertv.tv/product/formuler-z11-pro/", imageSrc: "/images/just8.jpg", isHighlighted: true },
    { title: "Onyx IPTV Box", price: "1,899 kr – 2,199 kr", people: "12 personer beställer just nu.", link: "https://monstertv.tv/product/onyx-iptv-box/", imageSrc: "/images/just9.png" },

    { title: "ProxyPass 12 Månader", price: "549 kr", people: "18 personer beställer just nu.", link: "https://monstertv.tv/product/proxypass-12-manader/", imageSrc: "/images/just10.webp" },
  ];

  return (
    <section id={id} className="bg-black py-24 border-t border-gray-900">
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
            <IptvBoxPricingCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              people={pkg.people}
              link={pkg.link}
              imageSrc={pkg.imageSrc}
              isHighlighted={pkg.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
