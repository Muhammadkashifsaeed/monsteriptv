import type { Metadata } from "next";
import TvipBoxPage from '../../tvip-box/page';

export const metadata: Metadata = {
  title: "TVIP S-BOX IPTV Instruktioner | Monster TV",
  description: "Instruktioner för att konfigurera TVIP S-BOX via MAC-adress eller portal URL. Få tillgång till 13,000+ kanaler, filmer och live-sport.",
  keywords: ["TVIP", "S-BOX", "IPTV", "instruktioner", "installera", "Monster TV", "box"],
  alternates: { canonical: "https://monstertv.tv/installationsguider/tvip-s-box/" },
  openGraph: {
    title: "TVIP S-BOX IPTV Instruktioner | Monster TV",
    description: "Instruktioner för TVIP S-BOX. 13,000+ kanaler, filmer och live-sport.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/installationsguider/tvip-s-box/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - TVIP S-BOX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TVIP S-BOX IPTV Instruktioner | Monster TV",
    description: "Instruktioner för TVIP S-BOX. 13,000+ kanaler, filmer och live-sport.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default TvipBoxPage;
