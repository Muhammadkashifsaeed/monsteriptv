import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Monster TV | Bästa IPTV med 13,000+ kanaler, filmer & live-sport",
    template: "%s | Monster TV",
  },
  description: "Prisvärd och pålitlig IPTV streaming. 13,000+ TV-kanaler, 26,000+ filmer och serier, live-sport och PPV-evenemang.",
  keywords: [
    "IPTV",
    "streaming",
    "Monster TV",
    "live-sport",
    "filmer",
    "serier",
    "kanaler",
    "paket",
    "gratis test",
    "abonnemang",
  ],
  authors: [{ name: "Monster TV" }],
  publisher: "Monster TV",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://monstertv.tv/",
  },
  openGraph: {
    title: "Monster TV | Bästa IPTV med 13,000+ kanaler, filmer & live-sport",
    description: "Streaming med Monster TV. 13,000+ TV-kanaler, 26,000+ filmer och serier, live-sport och PPV-evenemang.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - Bästa IPTV med 13,000+ kanaler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monster TV | Bästa IPTV med 13,000+ kanaler, filmer & live-sport",
    description: "13,000+ TV-kanaler, 26,000+ filmer och serier, live-sport och PPV-evenemang.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
  icons: {
    icon: "/images/cropped-2monsterIPTV.webp",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/webp" href="/images/cropped-2monsterIPTV.webp" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a]" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
