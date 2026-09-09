import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Nvidia Shield IPTV Instruktioner | Monster TV",
  description: "Få ut maximal prestanda genom att installera IPTV korrekt på din Nvidia Shield. Steg-för-steg guide för bästa IPTV-appar.",
  keywords: ["Nvidia Shield", "IPTV", "guide", "installera", "Monster TV", "appar", "streaming"],
  alternates: { canonical: "https://monstertv.tv/installationsguider/nvidia-shield/" },
  openGraph: {
    title: "Nvidia Shield IPTV Instruktioner | Monster TV",
    description: "Installera IPTV på Nvidia Shield. Steg-för-steg guide.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/installationsguider/nvidia-shield/",
    siteName: "Monster TV",
    images: [
      {
        url: "https://monstertv.tv/images/allsvenskan-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Monster TV - Nvidia Shield IPTV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nvidia Shield IPTV Instruktioner | Monster TV",
    description: "Installera IPTV på Nvidia Shield. Steg-för-steg guide.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"],
  },
};

export default function NvidiaShieldLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
