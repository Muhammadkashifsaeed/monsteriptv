import type { Metadata } from "next";
import AndroidBoxPage from '../../android-box/page';

export const metadata: Metadata = {
  title: "Android Box IPTV Instruktioner | Monster TV",
  description: "Installera Android Box på Android Box. Steg-för-steg guide för IPTV. 13,000+ kanaler, filmer och live-sport tillgängliga.",
  keywords: ["Android Box", "IPTV", "android-box", "Monster TV", "guide"],
  alternates: { canonical: "https://monstertv.tv/installationsguider/android-tv/" },
  openGraph: {
    title: "Android Box IPTV Instruktioner | Monster TV",
    description: "Android Box på Android Box. 13,000+ kanaler, filmer och live-sport.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/installationsguider/android-tv/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - Android Box IPTV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Android Box IPTV Instruktioner | Monster TV",
    description: "Android Box på Android Box. 13,000+ kanaler, filmer och live-sport.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default AndroidBoxPage;
