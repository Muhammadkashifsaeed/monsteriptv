import React from 'react';
import Image from 'next/image';

const tableData = [
  { label: 'Live-kanaler', cells: ['46 000+', '12 000', '25 000', '9 000', '35 000', '13 000'] },
  { label: 'VOD', cells: ['165 000+', '23 000', '90 000', '11 000', '100 000', '26 000'] },
  { label: 'Full Sport', cells: ['✓', '—', '—', '—', '✓', '—'] },
  { label: 'Premium PPV', cells: ['✓', '—', '—', '—', '✓', '—'] },
  { label: 'Verklig 4K', cells: ['✓', '—', '—', '—', '—', '—'] },
  { label: 'Kundsupport 24/7', cells: ['✓', '—', '—', '—', '—', '—'] },
  { label: 'Svarstid', cells: ['< 2 min 🟢', '< 3 h 🔴', '> 24 h 🔴', '< 5 h 🔴', '> 6 h 🔴', '< 4 h 🟠'] },
  { label: 'Betalsäkerhet', cells: ['✓', '—', '—', '✓', '✓', '—'] },
  { label: 'VPN-säkerhet', cells: ['✓', '✓', '—', '✓', '—', '—'] },
  { label: 'Up-time', cells: ['99.9% 🟢', '89.2% 🔴', '76.6% 🔴', '93.7% 🟠', '75.3% 🟢', '81.3% 🟠'] },
  { label: 'Prenumeration', cells: ['✓', '—', '—', '—', '—', '—'] },
  { label: 'Serverteknik', cells: ['Private QuantumFlow™', 'Xeon E5-2620', 'Shared Server', 'E5-2620 HDD', 'VPS 100 MBS', 'i3-7100T 2C'] },
  { label: 'Integritet', cells: ['✓', '✓', '—', '✓', '✓', '✓'] },
  { label: 'Betyg', cells: ['★★★★★', '★★', '★', '★★★', '★', '★★'] }
];

const logos = [
  { src: '/images/monster1.webp' },
  { src: '/images/monster2.png' },
  { src: '/images/monster3.webp' },
  { src: '/images/monster4.png' },
  { src: '/images/monster5.png' },
  { src: '/images/monster6.png' }
];

export default function ComparisonTable() {
  const formatCell = (val: string) => {
    if (val === '✓') {
      return <span className="text-green-500 font-bold text-lg">✓</span>;
    }
    if (val.includes('★')) {
      return <span className="text-yellow-400 text-lg tracking-widest">{val}</span>;
    }
    return val;
  };

  return (
    <section className="bg-[#0a0a0a] py-24 border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
            Varför är MonsterTV bäst?
          </h2>
        </div>

        <div className="overflow-x-auto pb-6">
          <table className="w-full min-w-[800px] border-collapse text-xs md:text-sm text-gray-300 shadow-2xl">
            <thead>
              <tr>
                <th className="p-3 md:p-4 border-x border-x-white/30 border-y border-y-gray-800 text-left font-bold text-gray-100 uppercase tracking-wider sticky left-0 bg-[#0a0a0a] z-10 min-w-[150px] shadow-[2px_0_5px_-2px_rgba(0,0,0,0.5)]">
                  Leverantör
                </th>
                {logos.map((logo, index) => (
                  <th
                    key={index}
                    className="p-3 border-x border-x-white/30 border-y border-y-gray-800 text-center relative min-w-[120px] bg-[#111]"
                  >
                    <div className="relative w-full max-w-[100px] mx-auto h-8 flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={`Provider ${index + 1}`}
                        fill
                        sizes="100px"
                        className="object-contain"
                      />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-[#111] hover:bg-[#1a1a1a] transition-colors motion-reduce:transition-none group">
                  <td className="p-3 md:p-4 border-x border-x-white/30 border-y border-y-gray-800 text-left font-medium sticky left-0 bg-[#111] group-hover:bg-[#1a1a1a] transition-colors motion-reduce:transition-none z-10 text-white shadow-[2px_0_5px_-2px_rgba(0,0,0,0.5)]">
                    {row.label}
                  </td>
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="p-3 border-x border-x-white/30 border-y border-y-gray-800 text-center transition-colors motion-reduce:transition-none"
                    >
                      {formatCell(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
