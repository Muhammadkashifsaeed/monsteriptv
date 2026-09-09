import React from 'react';
import Image from 'next/image';

export default function TrendingSportsSection() {
  const images = [
    '/images/bull-1.png',
    '/images/bull-2.png',
    '/images/bull-3.webp',
    '/images/bull-4.png',
    '/images/bull-5.png',
    '/images/bull-6.png',
    '/images/bull-7.png',
  ];

  return (
    <section className="bg-white py-24 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-12 text-left font-sans tracking-tight">
          Trendande Sports
        </h2>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-sports { animation-play-state: paused; }
        }
        @media (prefers-reduced-motion: no-preference) {
          @keyframes marquee-sports {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee-sports {
            animation: marquee-sports 50s linear infinite;
          }
          .carousel-wrapper:hover .animate-marquee-sports {
            animation-play-state: paused;
          }
        }
      `}} />

      {/* Auto-scrolling Carousel Container */}
      <div className="relative flex w-full overflow-hidden carousel-wrapper">
        {[0, 1].map((i) => (
          <div key={i} className="flex gap-1 md:gap-2 min-w-max animate-marquee-sports pr-1 md:pr-2" aria-hidden={i === 1}>
            {images.map((src, index) => (
              <div
                key={index}
                className="w-[180px] md:w-[240px] lg:w-[280px] flex-shrink-0 relative aspect-[2/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              >
                <Image
                  src={src}
                  alt={`Trending Sport ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 180px, (max-width: 1024px) 240px, 280px"
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
