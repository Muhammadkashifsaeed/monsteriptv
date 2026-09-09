import type { Metadata } from "next";
import SmartTVPage from '../../smart-tv/page';

export const metadata: Metadata = {
  title: "IPTV på Smart TV 2026 | Monster TV - Installationsguide",
  description: "Installera IPTV på din Smart TV (Samsung, LG och andra). Steg-för-steg guide och appar för att streama 13,000+ kanaler, filmer och live-sport.",
  keywords: ["IPTV", "Smart TV", "Samsung", "LG", "installera", "Monster TV", "guide"],
  alternates: { canonical: "https://monstertv.tv/installationsguider/smart-tv/" },
  openGraph: {
    title: "IPTV på Smart TV 2026 | Monster TV - Installationsguide",
    description: "Installera IPTV på din Smart TV. 13,000+ kanaler, filmer och live-sport.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/installationsguider/smart-tv/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - IPTV på Smart TV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV på Smart TV 2026 | Monster TV - Installationsguide",
    description: "Installera IPTV på din Smart TV. 13,000+ kanaler, filmer och live-sport.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default SmartTVPage;
