"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ShoppingCart, User, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  const isVaraPaketActive = ["/iptv-abonnemang", "/iptv-box"].includes(
    pathname || "",
  );

  const isInstallationsguiderActive =
    pathname?.startsWith("/installationsguider") || false;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement }>({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleKeyDown = (e: React.KeyboardEvent, dropdownName: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown(dropdownName);
    } else if (e.key === "Escape") {
      setOpenDropdown(null);
    }
  };

  const dropdownItems = (name: string) => {
    if (name === "vara-paket") {
      return [
        {
          href: "/iptv-abonnemang",
          label: "IPTV abonnemang",
        },
        {
          href: "/iptv-box",
          label: "IPTV Box",
        },
      ];
    }

    if (name === "installationsguider") {
      return [
        {
          href: "/installationsguider",
          label: "Översikt",
        },
        {
          href: "/installationsguider/apple-tv",
          label: "Apple TV",
        },
        {
          href: "/installationsguider/smart-tv",
          label: "Smart TV",
        },
        {
          href: "/installationsguider/ios-android",
          label: "iOS/Android",
        },
        {
          href: "/installationsguider/windows-mac",
          label: "Windows/Mac",
        },
        {
          href: "/installationsguider/android-tv",
          label: "Android TV",
        },
        {
          href: "/installationsguider/formuler",
          label: "Formuler box",
        },
        {
          href: "/installationsguider/tvip-s-box",
          label: "TVIP S-BOX",
        },
        {
          href: "/installationsguider/nvidia-shield",
          label: "Nvidia Shield",
        },
        {
          href: "/installationsguider/chromecast-instruktioner",
          label: "Chromecast",
        },
      ];
    }

    return [];
  };

  return (
    <header className="w-full bg-[#0a0a0a] border-b border-gray-800 text-gray-100 font-sans sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" aria-label="Monster IPTV - Hem">
            <Image
              src="/images/logo.webp"
              alt="Monster IPTV"
              width={240}
              height={75}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center space-x-7 text-[15px]"
          aria-label="Huvudnavigering"
        >
          <Link
            href="/"
            className={`${
              isActive("/") ? "text-[#e50000]" : "hover:text-[#e50000]"
            } font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded`}
          >
            Hem
          </Link>

          {/* Våra paket Dropdown */}
          <div
            className={`group relative flex items-center cursor-pointer ${
              isVaraPaketActive ? "text-[#e50000]" : "hover:text-[#e50000]"
            } font-medium transition-colors h-[80px]`}
            onMouseEnter={() => setOpenDropdown("vara-paket")}
            onMouseLeave={() => setOpenDropdown(null)}
            onFocus={() => setOpenDropdown("vara-paket")}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setOpenDropdown(null);
              }
            }}
          >
            <button
              type="button"
              id="dropdown-vara-paket-trigger"
              aria-haspopup="true"
              aria-expanded={openDropdown === "vara-paket"}
              aria-controls="dropdown-vara-paket"
              className="flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
              onClick={() => toggleDropdown("vara-paket")}
              onKeyDown={(e) => handleKeyDown(e, "vara-paket")}
            >
              Våra paket
              <ChevronDown
                className={`w-4 h-4 opacity-70 transition-transform duration-200 ${
                  openDropdown === "vara-paket" ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id="dropdown-vara-paket"
              ref={(el) => {
                if (el) {
                  dropdownRefs.current["vara-paket"] = el;
                }
              }}
              role="menu"
              className={`absolute top-[80px] left-0 flex-col bg-white border border-gray-200 rounded-b-md shadow-xl min-w-[200px] z-50 overflow-hidden text-gray-800 ${
                openDropdown === "vara-paket" ? "flex" : "hidden"
              }`}
              onMouseEnter={() => setOpenDropdown("vara-paket")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {dropdownItems("vara-paket").map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className={`px-4 py-3 ${
                    isActive(item.href)
                      ? "text-[#e50000] font-bold"
                      : "text-blue-600 hover:text-white hover:bg-black"
                  } transition-colors border-b border-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Installationsguider Dropdown */}
          <div
            className={`group relative flex items-center cursor-pointer ${
              isInstallationsguiderActive
                ? "text-[#e50000]"
                : "hover:text-[#e50000]"
            } font-medium transition-colors h-[80px]`}
            onMouseEnter={() => setOpenDropdown("installationsguider")}
            onMouseLeave={() => setOpenDropdown(null)}
            onFocus={() => setOpenDropdown("installationsguider")}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setOpenDropdown(null);
              }
            }}
          >
            <button
              type="button"
              id="dropdown-installationsguider-trigger"
              aria-haspopup="true"
              aria-expanded={openDropdown === "installationsguider"}
              aria-controls="dropdown-installationsguider"
              className="flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
              onClick={() => {
                toggleDropdown("installationsguider");
                router.push("/installationsguider");
              }}
              onKeyDown={(e) => handleKeyDown(e, "installationsguider")}
            >
              Installationsguider
              <ChevronDown
                className={`w-4 h-4 opacity-70 transition-transform duration-200 ${
                  openDropdown === "installationsguider" ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id="dropdown-installationsguider"
              ref={(el) => {
                if (el) {
                  dropdownRefs.current["installationsguider"] = el;
                }
              }}
              role="menu"
              className={`absolute top-[80px] left-0 flex-col bg-white border border-gray-200 rounded-b-md shadow-xl min-w-[220px] z-50 overflow-hidden text-gray-800 ${
                openDropdown === "installationsguider" ? "flex" : "hidden"
              }`}
              onMouseEnter={() => setOpenDropdown("installationsguider")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {dropdownItems("installationsguider").map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className={`px-4 py-3 ${
                    isActive(item.href)
                      ? "text-[#e50000] font-bold"
                      : "text-blue-600 hover:text-white hover:bg-black"
                  } transition-colors border-b border-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/nyheter"
            className={`${
              isActive("/nyheter") ? "text-[#e50000]" : "hover:text-[#e50000]"
            } font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded`}
          >
            Nyheter
          </Link>

          <Link
            href="https://jivo.chat/me628jLt79"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e50000] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
          >
            Kontakta
          </Link>

          <Link
            href="/bast-i-test"
            className={`${
              isActive("/bast-i-test")
                ? "text-[#e50000]"
                : "hover:text-[#e50000]"
            } font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded`}
          >
            IPTV Bäst i Test 🏆
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-6">
          <button
            type="button"
            className="relative hover:text-[#e50000] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-full p-1"
            aria-label="Varukorg, 0 produkter"
          >
            <ShoppingCart className="w-6 h-6" aria-hidden="true" />

            <span
              className="absolute -top-1.5 -right-2 bg-[#e50000] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
              aria-hidden="true"
            >
              0
            </span>
          </button>

          <Link
            href="/login"
            className="hidden lg:flex items-center gap-2 hover:text-[#e50000] transition-colors text-[15px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
          >
            <User className="w-5 h-5" aria-hidden="true" />
            <span>Logga in</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
            aria-label={mobileMenuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`lg:hidden overflow-hidden transition-all duration-300 motion-reduce:transition-none bg-[#0a0a0a] border-t border-gray-800 ${
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        role="navigation"
        aria-label="Mobil navigering"
      >
        <div className="px-4 py-4 space-y-2">
          <Link
            href="/"
            className={`${
              isActive("/")
                ? "text-[#e50000]"
                : "text-gray-300 hover:text-[#e50000]"
            } font-medium block py-3 px-3 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]`}
            onClick={closeMobileMenu}
          >
            Hem
          </Link>

          {/* Våra paket Mobile Dropdown */}
          <div className="space-y-1">
            <button
              type="button"
              className={`w-full text-left flex items-center justify-between py-3 px-3 font-medium rounded transition-colors ${
                isVaraPaketActive
                  ? "text-[#e50000]"
                  : "text-gray-300 hover:text-[#e50000]"
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]`}
              aria-expanded={openDropdown === "vara-paket"}
              aria-controls="mobile-dropdown-vara-paket"
              onClick={() => toggleDropdown("vara-paket")}
            >
              Våra paket
              <ChevronDown
                className={`w-4 h-4 opacity-70 transition-transform duration-200 ${
                  openDropdown === "vara-paket" ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id="mobile-dropdown-vara-paket"
              className={`overflow-hidden transition-all duration-300 motion-reduce:transition-none bg-gray-900 rounded-b-lg ${
                openDropdown === "vara-paket"
                  ? "max-h-60 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              role="menu"
            >
              {dropdownItems("vara-paket").map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className="block px-6 py-3 text-blue-400 hover:text-white hover:bg-gray-800 transition-colors border-t border-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Installationsguider Mobile Dropdown */}
          <div className="space-y-1">
            <button
              type="button"
              className={`w-full text-left flex items-center justify-between py-3 px-3 font-medium rounded transition-colors ${
                isInstallationsguiderActive
                  ? "text-[#e50000]"
                  : "text-gray-300 hover:text-[#e50000]"
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]`}
              aria-expanded={openDropdown === "installationsguider"}
              aria-controls="mobile-dropdown-installationsguider"
              onClick={() => {
                toggleDropdown("installationsguider");
                router.push("/installationsguider");
              }}
            >
              Installationsguider
              <ChevronDown
                className={`w-4 h-4 opacity-70 transition-transform duration-200 ${
                  openDropdown === "installationsguider" ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id="mobile-dropdown-installationsguider"
              className={`overflow-hidden transition-all duration-300 motion-reduce:transition-none bg-gray-900 rounded-b-lg ${
                openDropdown === "installationsguider"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              role="menu"
            >
              {dropdownItems("installationsguider").map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className="block px-6 py-3 text-blue-400 hover:text-white hover:bg-gray-800 transition-colors border-t border-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/nyheter"
            className={`${
              isActive("/nyheter")
                ? "text-[#e50000]"
                : "text-gray-300 hover:text-[#e50000]"
            } font-medium block py-3 px-3 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]`}
            onClick={closeMobileMenu}
          >
            Nyheter
          </Link>

          <Link
            href="https://jivo.chat/me628jLt79"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#e50000] font-medium block py-3 px-3 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            onClick={closeMobileMenu}
          >
            Kontakta
          </Link>

          <Link
            href="/bast-i-test"
            className={`${
              isActive("/bast-i-test")
                ? "text-[#e50000]"
                : "text-gray-300 hover:text-[#e50000]"
            } font-medium block py-3 px-3 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]`}
            onClick={closeMobileMenu}
          >
            IPTV Bäst i Test 🏆
          </Link>

          {/* Mobile Login */}
          <Link
            href="/login"
            className="flex items-center gap-2 text-gray-300 hover:text-[#e50000] font-medium block py-3 px-3 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            onClick={closeMobileMenu}
          >
            <User className="w-5 h-5" aria-hidden="true" />
            <span>Logga in</span>
          </Link>

          {/* Mobile Cart */}
          <button
            type="button"
            className="flex items-center gap-2 text-gray-300 hover:text-[#e50000] font-medium w-full py-3 px-3 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            aria-label="Varukorg, 0 produkter"
          >
            <ShoppingCart className="w-5 h-5" aria-hidden="true" />

            <span>Varukorg</span>

            <span
              className="ml-auto bg-[#e50000] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
              aria-hidden="true"
            >
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
