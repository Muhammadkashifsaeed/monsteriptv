import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TVIP S-BOX IPTV Instruktioner | Monster TV",
  description: "Instruktioner for att konfigurera TVIP S-BOX.",
  keywords: ["TVIP S-BOX", "IPTV", "Monster TV", "installera", "guide", "TVIP Box"],
  alternates: { canonical: "https://monstertv.tv/tvip-box/" },
  openGraph: {
    title: "TVIP S-BOX IPTV Instruktioner | Monster TV",
    description: "Instruktioner for att konfigurera TVIP S-BOX.",
    type: "website",
    locale: "sv_SE",
    url: "https://monstertv.tv/tvip-box/",
    siteName: "Monster TV",
    images: [{ url: "https://monstertv.tv/images/allsvenskan-2026.jpg", width: 1200, height: 630, alt: "Monster TV - TVIP S-BOX" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "TVIP S-BOX IPTV Instruktioner | Monster TV",
    description: "Instruktioner for att konfigurera TVIP S-BOX.",
    images: ["https://monstertv.tv/images/allsvenskan-2026.jpg"]
  }
};

export default function TvipBoxLayout({ children }: { children: React.ReactNode }) {
  return children;
}
