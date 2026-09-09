import React from 'react';
import Image from 'next/image';

export default function TrendingMoviesSection() {
  const images = [
    '/images/friends1.webp',
    '/images/friends2.webp',
    '/images/friends3.png',
    '/images/friends4.png',
    '/images/friends5.png',
    '/images/friends6.png',
    '/images/friends7.png',
    '/images/friends8.webp',
  ];

  return (
    <section className="bg-black py-24 overflow-hidden border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 text-left font-sans tracking-tight">
          Trendande filmer
        </h2>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation-play-state: paused; }
        }
        @media (prefers-reduced-motion: no-preference) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
          .carousel-wrapper:hover .animate-marquee {
            animation-play-state: paused;
          }
        }
      `}} />

      {/* Carousel Container */}
      <div className="relative flex w-full overflow-hidden carousel-wrapper">
        {/* We use two identical blocks that slide to the left */}
        {[0, 1].map((i) => (
          <div key={i} className="flex gap-1 md:gap-2 min-w-max animate-marquee pr-1 md:pr-2" aria-hidden={i === 1}>
            {images.map((src, index) => (
              <div key={index} className="w-[180px] h-[270px] md:w-[240px] md:h-[360px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <Image
                  src={src}
                  alt={`Trending Movie ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 180px, 240px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
