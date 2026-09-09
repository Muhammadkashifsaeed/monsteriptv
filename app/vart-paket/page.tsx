import type { Metadata } from "next";
import IptvAbonnemangPage from '../iptv-abonnemang/page';

export const metadata: Metadata = {
  title: "Våra paket | Monster TV - IPTV Abonnemang & Streaming",
  description: "Upptäck Monster TVs konkurrenskraftiga streamingpaket. 13,000+ TV-kanaler, 26,000+ filmer och serier, live-sport och PPV-evenemang. Kostnadsfritt test och snabb aktivering.",
  keywords: ["IPTV", "streaming", "paket", "Monster TV", "kanaler", "sport", "filmer", "serier", "abonnemang"],
  alternates: {
    canonical: "https://monstertv.tv/vart-paket/",
  },
  openGraph: {
    title: "Våra paket | Monster TV - IPTV Abonnemang & Streaming",
    description: "Upptäck Monster TVs konkurrenskraftiga streamingpaket. 13,000+ TV-kanaler, 26,000+ filmer och serier, live-sport och PPV-evenemang.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/vart-paket/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - Våra paket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Våra paket | Monster TV - IPTV Abonnemang & Streaming",
    description: "Upptäck Monster TVs konkurrenskraftiga streamingpaket. 13,000+ TV-kanaler, 26,000+ filmer och serier, live-sport och PPV-evenemang.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default IptvAbonnemangPage;
