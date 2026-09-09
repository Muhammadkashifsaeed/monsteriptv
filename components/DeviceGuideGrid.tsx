import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const devices = [
  {
    id: 'smart-tv',
    href: '/installationsguider/smart-tv',
    title: 'Smart TV',
    image: '/images/smart-tv.webp',
    description: 'Komplett guide för att installera och ställa in IPTV på din Smart TV (Samsung, LG, Philips m.fl.).',
    tags: [
      { name: 'IPTV Smarters', url: '/smart-tv' },
      { name: 'Xtream IPTV', url: '/smart-tv' },
      { name: 'IBO Player', url: '/smart-tv' },
      { name: 'IPTV Pro', url: '/smart-tv' },
      { name: 'Televizo IPTV', url: '/smart-tv' },
      { name: 'SET IPTV', url: '/smart-tv' },
      { name: 'NET IPTV', url: '/smart-tv' },
      { name: 'Tivimate', url: '/smart-tv' },
      { name: 'IPTV Extreme', url: '/smart-tv' },
      { name: 'IPTV Streamer', url: '/smart-tv' },
      { name: 'Duplex Play', url: '/smart-tv' },
      { name: 'HOT IPTV', url: '/smart-tv' },
      { name: 'XUI IPTV Player', url: '/smart-tv' },
      { name: 'Smart STB', url: '/smart-tv' }
    ]
  },
  {
    id: 'android-tv',
    href: '/installationsguider/android-tv',
    title: 'Android TV',
    image: '/images/android-tv.webp',
    description: 'Steg-för-steg guide för Android TV-apparater och medieboxar som kör Android OS.',
    tags: [
      { name: 'IPTV Smarters', url: '/installationsguider/android-tv' },
      { name: 'IPTV Streamer', url: '/installationsguider/android-tv' },
      { name: 'Televizo IPTV', url: '/installationsguider/android-tv' },
      { name: '9Xtream IPTV', url: '/installationsguider/android-tv' },
      { name: 'Xtream IPTV', url: '/installationsguider/android-tv' },
      { name: 'SET IPTV', url: '/installationsguider/android-tv' },
      { name: 'NET IPTV', url: '/installationsguider/android-tv' },
      { name: 'Tivimate', url: '/installationsguider/android-tv' },
      { name: 'IPTV Extreme', url: '/installationsguider/android-tv' },
      { name: 'IBO Player', url: '/installationsguider/android-tv' },
      { name: 'IPTV Pro', url: '/installationsguider/android-tv' },
      { name: 'HOT IPTV', url: '/installationsguider/android-tv' },
      { name: 'Duplex Play', url: '/installationsguider/android-tv' },
      { name: 'Smart STB', url: '/installationsguider/android-tv' }
    ]
  },
  {
    id: 'ios-android',
    href: '/installationsguider/ios-android',
    title: 'iOS/Android',
    image: '/images/iOS.webp',
    description: 'Så här installerar du IPTV på din iPhone, iPad, Android-telefon eller surfplatta.',
    tags: [
      { name: 'IPTV Smarters', url: '/installationsguider/ios-android' },
      { name: 'GSE Smart IPTV', url: '/installationsguider/ios-android' },
      { name: 'IPTV Streamer', url: '/installationsguider/ios-android' },
      { name: 'Xtream IPTV', url: '/installationsguider/ios-android' },
      { name: 'IPTVX', url: '/installationsguider/ios-android' },
      { name: 'Perfect IPTV', url: '/installationsguider/ios-android' },
      { name: 'IPTV Expert', url: '/installationsguider/ios-android' },
      { name: 'Mega IPTV', url: '/installationsguider/ios-android' },
      { name: 'IPTV World', url: '/installationsguider/ios-android' },
      { name: 'IPTV Pro', url: '/installationsguider/ios-android' },
      { name: 'Televizo', url: '/installationsguider/ios-android' },
      { name: '9Xtream', url: '/installationsguider/ios-android' },
      { name: 'iMPlayer Mobile', url: '/installationsguider/ios-android' }
    ]
  },
  {
    id: 'nvidia-shield',
    href: '#',
    title: 'Nvidia Shield',
    image: '/images/Nvidia Shield.webp',
    description: 'Få ut maximal prestanda genom att installera IPTV korrekt på din Nvidia Shield.',
    tags: [
      { name: 'IPTV Smarters', url: '/installationsguider/nvidia-shield' },
      { name: 'IPTV Streamer', url: '/installationsguider/nvidia-shield' },
      { name: 'Televizo IPTV', url: '/installationsguider/nvidia-shield' },
      { name: '9Xtream IPTV', url: '/installationsguider/nvidia-shield' },
      { name: 'Xtream IPTV', url: '/installationsguider/nvidia-shield' },
      { name: 'SET IPTV', url: '/installationsguider/nvidia-shield' },
      { name: 'NET IPTV', url: '/installationsguider/nvidia-shield' },
      { name: 'Tivimate', url: '/installationsguider/nvidia-shield' },
      { name: 'IPTV Extreme', url: '/installationsguider/nvidia-shield' },
      { name: 'IBO Player', url: '/installationsguider/nvidia-shield' },
      { name: 'IPTV Pro', url: '/installationsguider/nvidia-shield' },
      { name: 'HOT IPTV', url: '/installationsguider/nvidia-shield' },
      { name: 'Duplex Play', url: '/installationsguider/nvidia-shield' },
      { name: 'Smart STB', url: '/installationsguider/nvidia-shield' }
    ]
  },
  {
    id: 'formuler',
    href: '/formuler-box',
    title: 'Formuler',
    image: '/images/formuler.webp',
    description: 'Guide för att ställa in MYTVOnline på din Formuler-mottagare för bästa upplevelse.',
    tags: [
      { name: 'My TV Online 3', url: '/formuler-box' },
      { name: 'IPTV Smarters', url: '/formuler-box' },
      { name: 'IPTV Streamer', url: '/formuler-box' },
      { name: 'Tivimate', url: '/formuler-box' },
      { name: 'Xtream IPTV', url: '/formuler-box' },
      { name: 'IBO Player', url: '/formuler-box' },
    ]
  },
  {
    id: 'chromecast',
    href: '/installationsguider/chromecast-instruktioner',
    title: 'Chromecast',
    image: '/images/chromecast.webp',
    description: 'Så castar du IPTV från din telefon eller surfplatta direkt till din Chromecast.',
    tags: [
      { name: 'IPTV Smarters', url: '/installationsguider/apple-tv/iptv-smarters' },
      { name: 'IPTV Streamer', url: '/installationsguider/apple-tv/iptv-streamer' },
      { name: 'Televizo IPTV', url: '/installationsguider/apple-tv/televizo-iptv' },
      { name: 'Xtream IPTV', url: '/installationsguider/apple-tv/xtream-iptv' },
      { name: 'Duplex Play', url: '/installationsguider/apple-tv/duplex-play' },
    ]
  },
  {
    id: 'windows-mac',
    href: '/installationsguider/windows-mac',
    title: 'Windows/Mac',
    image: '/images/windows-mac.webp',
    description: 'Installation och inställningar för IPTV på din stationära eller bärbara dator.',
    tags: [
      { name: 'IPTV Smarters', url: '/installationsguider/windows-mac' },
      { name: 'MyIPTV Player', url: '/installationsguider/windows-mac' },
      { name: 'Duplex Play', url: '/installationsguider/windows-mac' },
      { name: 'GSE Smart IPTV Pro', url: '/installationsguider/windows-mac' }
    ]
  },
  {
    id: 'tvip-s-box',
    href: '/tvip-box',
    title: 'TVIP S-BOX',
    image: '/images/TVIP S-BOX.webp',
    description: 'Instruktioner för att konfigurera TVIP S-BOX via MAC-adress eller portal URL.',
    tags: [
      { name: 'TVIP 705', url: '/tvip-box' },
      { name: 'TVIP 605', url: '/tvip-box' },
      { name: 'Övriga TVIP boxar', url: '/tvip-box' }
    ]
  },
  {
    id: 'apple-tv',
    href: '/installationsguider/apple-tv',
    title: 'Apple TV',
    image: '/images/apple-tv.webp',
    description: 'De bästa apparna och inställningarna för att använda IPTV på din Apple TV.',
    tags: [
      { name: 'IPTVX', url: '/installationsguider/apple-tv' },
      { name: 'iPlayTV', url: '/installationsguider/apple-tv' },
      { name: 'Perfect IPTV', url: '/installationsguider/apple-tv' },
      { name: 'IPTV Expert', url: '/installationsguider/apple-tv' },
      { name: 'Xtream IPTV', url: '/installationsguider/apple-tv' },
      { name: 'GSE Smart IPTV Pro', url: '/installationsguider/apple-tv' },
      { name: 'IPTV Streamer', url: '/installationsguider/apple-tv' },
      { name: 'IPTV Smarters', url: '/installationsguider/apple-tv' },
      { name: 'IBO Player', url: '/installationsguider/apple-tv' }
    ]
  },
  {
    id: 'xbox',
    href: '#',
    title: 'Xbox',
    image: '/images/xbox.webp',
    description: 'Hur du installerar IPTV-appar på din Xbox One eller Xbox Series X/S.',
    tags: [
      { name: 'MyIPTV Player', url: '/installationsguider/apple-tv' }
    ]
  }
];

export default function DeviceGuideGrid() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a] border-t border-gray-900">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <span className="inline-block text-purple-500 font-bold uppercase tracking-wider text-sm mb-3 px-4 py-1.5 bg-purple-900/30 rounded-full border border-purple-700/50">
            VÄLJ DIN ENHET
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Välj enhet och följ guiden
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {devices.map((device) => (
            <div 
              key={device.id} 
              className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:border-gray-700 hover:shadow-2xl duration-300 flex flex-col"
            >
              <div className="flex flex-col sm:flex-row p-6 gap-6 flex-grow">
                {/* Device Image */}
                <div className="w-full sm:w-1/3 h-32 sm:h-28 relative rounded-xl bg-white flex-shrink-0 border border-gray-700/50 flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image 
                      src={device.image} 
                      alt={device.title} 
                      fill 
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="flex flex-col justify-center flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{device.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {device.description}
                  </p>
                  
                  {/* CTA Link */}
                  <Link href={device.href} className="inline-flex items-center text-blue-500 font-bold text-sm hover:text-blue-400 transition-colors group w-fit">
                    Visa installationsguide
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
              
              {/* Divider and Tags */}
              <div className="px-6 py-4 border-t border-gray-800 bg-[#161616]">
                <div className="flex flex-wrap gap-2">
                  {device.tags.map((tag, idx) => (
                    <Link 
                      key={idx} 
                      href={tag.url}
                      className="px-2.5 py-1 text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors rounded-md border border-gray-700 hover:border-gray-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
