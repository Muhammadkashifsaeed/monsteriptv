import React from 'react';
import Image from 'next/image';

const devices = [
  { name: 'Apple TV 4K', src: '/images/Apple TV 4K.webp' },
  { name: 'iPhone', src: '/images/iPhone.webp' },
  { name: 'iPad', src: '/images/iPad.webp' },
  { name: 'Mac', src: '/images/Mac.webp' },
  { name: 'Apple Vision Pro', src: '/images/Apple Vision Pro.webp' },
  { name: 'AirPlay', src: '/images/AirPlay.webp' },
  { name: 'Android', src: '/images/Android.webp' },
  { name: 'PC', src: '/images/PC.webp' }
];

export default function DevicesSection() {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-tight">
            Enkel streaming för en flexibel vardag.
          </h2>
          <p
            className="max-w-3xl mx-auto"
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontWeight: 400,
              color: "rgb(29, 27, 27)",
              fontSize: "17px",
              lineHeight: "28px",
              fontStyle: "normal"
            }}
          >
            Upptäck tillgänglig underhållning och använd din streamingtjänst på kompatibla enheter – hemma eller på språng.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {devices.map((device, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center">
                <Image
                  src={device.src}
                  alt={device.name}
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-contain"
                />
              </div>
              <h3
                className="text-center"
                style={{
                  fontFamily: "'Hellix Bold', sans-serif",
                  fontWeight: 600,
                  color: "rgb(0, 0, 0)",
                  fontSize: "22px",
                  lineHeight: "29px",
                  fontStyle: "normal"
                }}
              >
                {device.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
