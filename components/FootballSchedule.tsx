"use client";

import { motion, useReducedMotion } from "framer-motion";

type Match = {
  id: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
};

type ScheduleDay = {
  date: string;
  matches: Match[];
};

const mockSchedule: ScheduleDay[] = [
  {
    date: "11 juni, 2026",
    matches: [
      { id: "11-1", time: "21:00", homeTeam: "Mexiko", awayTeam: "Sydafrika" }
    ]
  },
  {
    date: "13 juni, 2026",
    matches: [
      { id: "13-1", time: "03:00", homeTeam: "USA", awayTeam: "Paraguay" },
      { id: "13-2", time: "21:00", homeTeam: "Qatar", awayTeam: "Schweiz" }
    ]
  },
  {
    date: "14 juni, 2026",
    matches: [
      { id: "14-1", time: "00:00", homeTeam: "Brasilien", awayTeam: "Marocko" },
      { id: "14-2", time: "03:00", homeTeam: "Haiti", awayTeam: "Skottland" },
      { id: "14-3", time: "19:00", homeTeam: "Tyskland", awayTeam: "Curacao" },
      { id: "14-4", time: "22:00", homeTeam: "Nederländerna", awayTeam: "Japan" }
    ]
  },
  {
    date: "15 juni, 2026",
    matches: [
      { id: "15-1", time: "01:00", homeTeam: "Elfenbenskusten", awayTeam: "Ecuador" },
      { id: "15-2", time: "18:00", homeTeam: "Spanien", awayTeam: "Kap Verde" },
      { id: "15-3", time: "21:00", homeTeam: "Belgien", awayTeam: "Egypten" }
    ]
  },
  {
    date: "16 juni, 2026",
    matches: [
      { id: "16-1", time: "00:00", homeTeam: "Saudiarabien", awayTeam: "Uruguay" },
      { id: "16-2", time: "03:00", homeTeam: "Iran", awayTeam: "Nya Zeeland" },
      { id: "16-3", time: "21:00", homeTeam: "Frankrike", awayTeam: "Senegal" }
    ]
  },
  {
    date: "17 juni, 2026",
    matches: [
      { id: "17-1", time: "03:00", homeTeam: "Argentina", awayTeam: "Algeriet" },
      { id: "17-2", time: "06:00", homeTeam: "Österrike", awayTeam: "Jordanien" },
      { id: "17-3", time: "22:00", homeTeam: "England", awayTeam: "Kroatien" }
    ]
  },
  {
    date: "18 juni, 2026",
    matches: [
      { id: "18-1", time: "01:00", homeTeam: "Ghana", awayTeam: "Panama" },
      { id: "18-2", time: "04:00", homeTeam: "Uzbekistan", awayTeam: "Colombia" }
    ]
  },
  {
    date: "19 juni, 2026",
    matches: [
      { id: "19-1", time: "00:00", homeTeam: "Kanada", awayTeam: "Qatar" },
      { id: "19-2", time: "03:00", homeTeam: "Mexiko", awayTeam: "Sydkorea" },
      { id: "19-3", time: "21:00", homeTeam: "USA", awayTeam: "Australien" }
    ]
  },
  {
    date: "20 juni, 2026",
    matches: [
      { id: "20-1", time: "00:00", homeTeam: "Skottland", awayTeam: "Marocko" },
      { id: "20-2", time: "03:00", homeTeam: "Brasilien", awayTeam: "Haiti" },
      { id: "20-3", time: "22:00", homeTeam: "Tyskland", awayTeam: "Elfenbenskusten" }
    ]
  },
  {
    date: "21 juni, 2026",
    matches: [
      { id: "21-1", time: "02:00", homeTeam: "Ecuador", awayTeam: "Curacao" },
      { id: "21-2", time: "06:00", homeTeam: "Tunisien", awayTeam: "Japan" },
      { id: "21-3", time: "18:00", homeTeam: "Spanien", awayTeam: "Saudiarabien" },
      { id: "21-4", time: "21:00", homeTeam: "Belgien", awayTeam: "Iran" }
    ]
  },
  {
    date: "22 juni, 2026",
    matches: [
      { id: "22-1", time: "00:00", homeTeam: "Uruguay", awayTeam: "Kap Verde" },
      { id: "22-2", time: "03:00", homeTeam: "Nya Zeeland", awayTeam: "Egypten" },
      { id: "22-3", time: "19:00", homeTeam: "Argentina", awayTeam: "Österrike" }
    ]
  },
  {
    date: "23 juni, 2026",
    matches: [
      { id: "23-1", time: "02:00", homeTeam: "Norge", awayTeam: "Senegal" },
      { id: "23-2", time: "05:00", homeTeam: "Jordanien", awayTeam: "Algeriet" },
      { id: "23-3", time: "19:00", homeTeam: "Portugal", awayTeam: "Uzbekistan" },
      { id: "23-4", time: "22:00", homeTeam: "England", awayTeam: "Ghana" }
    ]
  },
  {
    date: "24 juni, 2026",
    matches: [
      { id: "24-1", time: "01:00", homeTeam: "Panama", awayTeam: "Kroatien" },
      { id: "24-2", time: "21:00", homeTeam: "Schweiz", awayTeam: "Kanada" }
    ]
  },
  {
    date: "25 juni, 2026",
    matches: [
      { id: "25-1", time: "00:00", homeTeam: "Marocko", awayTeam: "Haiti" },
      { id: "25-2", time: "00:00", homeTeam: "Skottland", awayTeam: "Brasilien" },
      { id: "25-3", time: "03:00", homeTeam: "Sydafrika", awayTeam: "Sydkorea" },
      { id: "25-4", time: "22:00", homeTeam: "Curacao", awayTeam: "Elfenbenskusten" },
      { id: "25-5", time: "22:00", homeTeam: "Ecuador", awayTeam: "Tyskland" }
    ]
  },
  {
    date: "26 juni, 2026",
    matches: [
      { id: "26-1", time: "01:00", homeTeam: "Tunisien", awayTeam: "Nederländerna" },
      { id: "26-2", time: "04:00", homeTeam: "Paraguay", awayTeam: "Australien" },
      { id: "26-3", time: "21:00", homeTeam: "Norge", awayTeam: "Frankrike" }
    ]
  },
  {
    date: "27 juni, 2026",
    matches: [
      { id: "27-1", time: "02:00", homeTeam: "Kap Verde", awayTeam: "Saudiarabien" },
      { id: "27-2", time: "02:00", homeTeam: "Uruguay", awayTeam: "Spanien" },
      { id: "27-3", time: "05:00", homeTeam: "Egypten", awayTeam: "Iran" },
      { id: "27-4", time: "05:00", homeTeam: "Nya Zeeland", awayTeam: "Belgien" },
      { id: "27-5", time: "23:00", homeTeam: "Kroatien", awayTeam: "Ghana" },
      { id: "27-6", time: "23:00", homeTeam: "Panama", awayTeam: "England" }
    ]
  },
  {
    date: "28 juni, 2026",
    matches: [
      { id: "28-1", time: "01:30", homeTeam: "Colombia", awayTeam: "Portugal" },
      { id: "28-2", time: "04:00", homeTeam: "Algeriet", awayTeam: "Österrike" },
      { id: "28-3", time: "04:00", homeTeam: "Jordanien", awayTeam: "Argentina" }
    ]
  }
];

export default function FootballSchedule() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full mb-16">
      <div className="w-full mx-auto bg-[#141414] rounded-lg overflow-hidden border border-[#222]">

        {/* Header */}
        <div className="bg-black p-4 text-center border-b border-[#333]">
          <h2 className="text-white font-bold text-2xl tracking-wide uppercase">
            Spelschema Fotbolls VM 2026
          </h2>
        </div>

        {/* Schedule List */}
        <div className="flex flex-col">
          {mockSchedule.map((day, dayIndex) => (
            <div key={dayIndex} className="flex flex-col">
              {/* Date Header */}
              <div className="bg-[#b91c1c] px-4 py-2">
                <h3 className="text-white font-bold text-sm md:text-base">
                  {day.date}
                </h3>
              </div>

              {/* Match Rows */}
              <div className="flex flex-col bg-white">
                {day.matches.map((match, matchIndex) => (
                  <motion.div
                    key={match.id}
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: matchIndex * 0.05 }}
                    className={`flex items-center px-4 py-3 md:py-4 transition-colors border-b border-gray-100 ${
                      matchIndex % 2 === 1 ? "bg-[#fff5f5]" : "bg-white"
                    } hover:bg-gray-50`}
                  >
                    {/* Time */}
                    <div className="w-[60px] md:w-[70px] text-black font-bold text-sm md:text-base">
                      {match.time}
                    </div>

                    {/* Teams (Left Aligned) */}
                    <div className="flex-1 flex items-center text-[#4b5563] text-sm md:text-base font-medium">
                      <span>{match.homeTeam}</span>
                      <span className="mx-2 md:mx-3 text-gray-400">-</span>
                      <span>{match.awayTeam}</span>
                    </div>

                    {/* Action/Score */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Poäng: ${match.homeTeam} vs ${match.awayTeam}`}
                        className="w-6 h-6 md:w-8 md:h-8 bg-[#b91c1c] rounded-full flex items-center justify-center hover:bg-red-800 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-red-500/60 motion-reduce:transition-none"
                      >
                        <span className="text-[#a78bea] font-black text-xs md:text-sm leading-none font-sans">4</span>
                      </button>
                      <button
                        type="button"
                        aria-label={`Spela match: ${match.homeTeam} vs ${match.awayTeam}`}
                        className="w-6 h-6 md:w-8 md:h-8 bg-[#b91c1c] rounded-full flex items-center justify-center hover:bg-red-800 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-red-500/60 relative group motion-reduce:transition-none"
                      >
                        <span className="text-[#a78bea] font-black text-xs md:text-sm leading-none font-sans mr-1">4</span>
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#a78bea] text-[10px] md:text-xs z-10 translate-x-1/4">▶</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
