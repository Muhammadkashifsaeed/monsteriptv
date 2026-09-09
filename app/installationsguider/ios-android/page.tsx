import type { Metadata } from "next";
import MobilSurfplattaPage from '../../mobil-surfplatta/page';

export const metadata: Metadata = {
  title: "IPTV på iOS & Android 2026 | Monster TV - Installationsguide",
  description: "Så här installerar du IPTV på din iPhone, iPad, Android-telefon eller surfplatta. Steg-för-steg guide och bästa appar för mobil IPTV.",
  keywords: ["IPTV", "iOS", "Android", "iPhone", "iPad", "mobil", "surfplatta", "Monster TV", "guide"],
  alternates: { canonical: "https://monstertv.tv/installationsguider/ios-android/" },
  openGraph: {
    title: "IPTV på iOS & Android 2026 | Monster TV - Installationsguide",
    description: "Installera IPTV på iOS och Android. 13,000+ kanaler, filmer och live-sport.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/installationsguider/ios-android/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - IPTV på iOS och Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV på iOS & Android 2026 | Monster TV - Installationsguide",
    description: "Installera IPTV på iOS och Android. 13,000+ kanaler, filmer och live-sport.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default MobilSurfplattaPage;
