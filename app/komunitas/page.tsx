import type { Metadata } from "next"
import KomunitasPage from "./page-client"
import {
  generateBreadcrumbSchema,
  generateCommunitySchema,
} from "@/lib/seo"

export const metadata: Metadata = {
  title: "Komunitas TikTok Affiliate Indonesia",
  description:
    "Komunitas TikTok Affiliate Indonesia — bedah akun live, sharing strategi, template & tools gratis. Pecah telur dalam 7-14 hari. Gabung gratis.",
  alternates: {
    canonical: "https://kahiyang.id/komunitas",
  },
  openGraph: {
    title: "Komunitas TikTok Affiliate Indonesia | Kahiyang",
    description:
      "Bedah akun live, sharing strategi, template & tools gratis. Pecah telur dalam 7-14 hari.",
    url: "https://kahiyang.id/komunitas",
    siteName: "Kahiyang",
    images: [
      {
        url: "https://kahiyang.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Komunitas TikTok Affiliate Indonesia — Kahiyang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
}

export default function Komunitas() {
  const communitySchema = generateCommunitySchema()
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://kahiyang.id" },
    { name: "Komunitas", url: "https://kahiyang.id/komunitas" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(communitySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <KomunitasPage />
    </>
  )
}
