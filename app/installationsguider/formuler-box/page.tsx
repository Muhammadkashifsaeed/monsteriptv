import type { Metadata } from "next";
import FormulerBoxPage from '../../formuler-box/page';

export const metadata: Metadata = {
  title: "Formuler IPTV Box Instruktioner | Monster TV Guide",
  description: "Formuler IPTV-instruktioner - kom igång med din Formuler box. Guide för MYTVOnline, TiviMate, IPTV Smarters och andra appar. 13,000+ kanaler.",
  keywords: ["Formuler box", "IPTV", "instruktioner", "installera", "MYTVOnline", "Monster TV"],
  alternates: { canonical: "https://monstertv.tv/installationsguider/formuler-box/" },
  openGraph: {
    title: "Formuler IPTV Box Instruktioner | Monster TV Guide",
    description: "Formuler IPTV-instruktioner - kom igång med din Formuler box.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/installationsguider/formuler-box/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - Formuler IPTV Box",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formuler IPTV Box Instruktioner | Monster TV Guide",
    description: "Formuler IPTV-instruktioner - kom igång med din Formuler box.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default FormulerBoxPage;
