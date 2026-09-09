import React from 'react';
import { Unlock, Activity, MonitorPlay } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Unlock className="w-10 h-10 text-[#e50000]" />,
      title: 'Inga årskontrakt',
      text: 'Njut av flexibilitet utan årsavtal – betala endast för det du behöver.'
    },
    {
      icon: <Activity className="w-10 h-10 text-[#e50000]" />,
      title: '99,99 % drifttid',
      text: 'Alltid pålitlig drift – vi garanterar högsta tillgänglighet utan avbrott eller störningar.'
    },
    {
      icon: <MonitorPlay className="w-10 h-10 text-[#e50000]" />,
      title: 'Allt-i-ett-app',
      text: 'En app för allt ditt underhållning – TV, film, sport och mer på ett ställe.'
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
            Allt som direktsänd TV borde vara
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 lg:p-10 bg-[#111] rounded-2xl border border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-gray-700"
            >
              <div className="mb-6 p-5 bg-[#e50000]/10 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-sans">
                {benefit.title}
              </h3>
              <p 
                className="text-gray-400 text-lg"
                style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", lineHeight: "1.6" }}
              >
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
