import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

import LenisProvider from "@/components/providers/lenis-provider"
import ScrollProgress from "@/components/scroll-progress"
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo"

export const metadata: Metadata = {
  metadataBase: new URL("https://kahiyang.id"),
  title: {
    default: "Kahiyang — Ekosistem Digital Indonesia",
    template: "%s | Kahiyang",
  },
  description:
    "Ekosistem digital Indonesia: komunitas TikTok Affiliate, tools AI untuk konten kreator, foto produk otomatis, dan layanan digital marketing. Mulai, tumbuh, dan berkembang tanpa batas.",
  keywords: [
    "Kahiyang",
    "TikTok Affiliate Indonesia",
    "komunitas TikTok",
    "foto produk AI",
    "digital marketing Indonesia",
    "konten kreator",
    "affiliate marketing",
    "tools AI",
    "Kahiyang Studio",
    "Kahiyang Visual",
  ],
  authors: [{ name: "Kahiyang", url: "https://kahiyang.id" }],
  creator: "Kahiyang",
  publisher: "Kahiyang",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo-sm.png",
    apple: "/logo.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Kahiyang",
  },
  openGraph: {
    title: "Kahiyang — Ekosistem Digital Indonesia",
    description:
      "Komunitas TikTok Affiliate, tools AI, foto produk otomatis, dan layanan digital marketing. Mulai, tumbuh, dan berkembang tanpa batas.",
    url: "https://kahiyang.id",
    siteName: "Kahiyang",
    images: [
      {
        url: "https://kahiyang.id/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Kahiyang — Ekosistem Digital Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kahiyang — Ekosistem Digital Indonesia",
    description:
      "Komunitas TikTok Affiliate, tools AI, dan layanan digital marketing Indonesia.",
    images: ["https://kahiyang.id/og-image.png"],
  },
  alternates: {
    canonical: "https://kahiyang.id",
  },
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
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="!scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />
        <ScrollProgress />
        <LenisProvider>{children}</LenisProvider>
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js');
            });
          }
        `}} />
      </body>
    </html>
  )
}
