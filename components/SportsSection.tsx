import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SportsSection() {
  const cards = [
    {
      image: '/images/Malik2.webp',
      title: 'NHL & SHL',
      text: 'Titta på NHL och SHL live – från Stanley Cup till Sveriges högsta ligamatcher och cuptävlingar.',
      link: 'https://monstertv.tv/nhl-shl/'
    },
    {
      image: '/images/Malik3.webp',
      title: 'Fotbolls-VM 2026',
      text: 'Se världsmästerskapet live med Monster TV',
      link: 'https://monstertv.tv/2026-world-cup/'
    },
    {
      image: '/images/Malik6.webp',
      title: 'Allsvenskan',
      text: 'Allsvenskan & Superettan – Sveriges främsta liga inom fotboll.',
      link: 'https://monstertv.tv/allsvenskan/'
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight font-sans">
            Sport och underhållning på ett enkelt sätt
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <div key={idx} className="relative flex flex-col rounded-3xl overflow-hidden shadow-md h-[450px] lg:h-[500px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              {/* Gradient overlay to make text readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

              <div className="relative z-10 p-8 flex flex-col flex-grow justify-end">
                <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                <p
                  className="text-gray-200 text-lg mb-6"
                  style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
                >
                  {card.text}
                </p>
                <Link
                  href={card.link}
                  className="inline-block bg-black text-white border-2 border-white font-bold py-3 px-8 rounded-full text-center hover:bg-gray-900 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white motion-reduce:transition-none self-start"
                >
                  Titta nu
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
