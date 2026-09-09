import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-gray-300 font-sans border-t border-gray-800" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Logo & Text */}
          <div className="flex flex-col space-y-6">
            <Link href="/" aria-label="Monster IPTV - Hem">
              <Image
                src="/images/logo.webp"
                alt="Monster IPTV"
                width={240}
                height={75}
                className="object-contain"
              />
            </Link>
            <p className="text-[15px] leading-relaxed text-gray-400">
              Letar du efter ett prisvärt och pålitligt sätt att titta på dina favoritprogram och livesport? Monster IPTV erbjuder högkvalitativa kanaler och on-demand-innehåll till konkurrenskraftiga priser. Njut av sömlös streaming och håll dig i nuet!
            </p>
          </div>

          {/* Column 2: Snabblänkar */}
          <nav aria-label="Snabblänkar">
            <h3 className="text-white text-lg font-semibold mb-6">Snabblänkar</h3>
            <ul className="space-y-4">
              {[
                { name: "Hem", href: "/" },
                { name: "IPTV abonnemang", href: "/iptv-abonnemang" },
                { name: "IPTV Box", href: "/iptv-box" },
                { name: "Installationsguider", href: "/installationsguider" },
                { name: "IPTV Bäst i Test", href: "/bast-i-test" },
                { name: "Kontakta oss", href: "https://jivo.chat/me628jLt79" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center group text-[15px] hover:text-[#e50000] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
                    target={link.href.startsWith("https") ? "_blank" : undefined}
                    rel={link.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  >
                    <ChevronRight className="w-4 h-4 text-[#e50000] mr-2 flex-shrink-0" strokeWidth={3} aria-hidden="true" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Instruktioner */}
          <nav aria-label="Installationsguider">
            <h3 className="text-white text-lg font-semibold mb-6">Instruktioner</h3>
            <ul className="space-y-4">
              {[
                { name: "Apple TV", href: "/installationsguider/apple-tv" },
                { name: "Smart TV", href: "/installationsguider/smart-tv" },
                { name: "iOS/Android", href: "/installationsguider/ios-android" },
                { name: "Windows/Mac", href: "/installationsguider/windows-mac" },
                { name: "Android TV", href: "/installationsguider/android-tv" },
                { name: "Formuler Box", href: "/installationsguider/formuler" },
                { name: "TVIP Box", href: "/installationsguider/tvip-s-box" },
                { name: "Nvidia Shield", href: "/installationsguider/nvidia-shield" },
                { name: "Chromecast", href: "/installationsguider/chromecast-instruktioner" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center group text-[15px] hover:text-[#e50000] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
                    target={item.href.startsWith("https") ? "_blank" : undefined}
                    rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  >
                    <ChevronRight className="w-4 h-4 text-[#e50000] mr-2 flex-shrink-0" strokeWidth={3} aria-hidden="true" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Stöd */}
          <nav aria-label="Stöd och support">
            <h3 className="text-white text-lg font-semibold mb-6">Stöd</h3>
            <div className="mb-6 space-y-1 text-[15px]">
              <p>Öppettider:</p>
              <p>Varje dag: 11:00–23:00</p>
            </div>
            <ul className="space-y-4">
              {[
                { name: "Live Support", href: "https://jivo.chat/me628jLt79" },
                { name: "DMCA", href: "/dmca" },
                { name: "Integritetspolicy", href: "/integritetspolicy" },
                { name: "Villkor", href: "/villkor" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center group text-[15px] hover:text-[#e50000] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
                    target={item.href.startsWith("https") ? "_blank" : undefined}
                    rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  >
                    <ChevronRight className="w-4 h-4 text-[#e50000] mr-2 flex-shrink-0" strokeWidth={3} aria-hidden="true" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800/80 text-center">
          <p className="text-[14px] text-gray-400">
            © Monster TV 2026 | Alla rättigheter förbehållna
          </p>
        </div>
      </div>
    </footer>
  );
}