import type { Metadata } from "next"
import PartnershipPage from "./page-client"
import { generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Mitra & Partnership",
  description:
    "Dipercaya oleh instansi pemerintah, institusi pendidikan, dan brand lokal untuk kolaborasi strategis dalam ekosistem digital Indonesia.",
  alternates: {
    canonical: "https://kahiyang.id/partnership",
  },
  openGraph: {
    title: "Mitra & Partnership | Kahiyang",
    description:
      "Dipercaya oleh instansi pemerintah, institusi pendidikan, dan brand lokal untuk kolaborasi strategis.",
    url: "https://kahiyang.id/partnership",
    siteName: "Kahiyang",
    images: [
      {
        url: "https://kahiyang.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mitra & Partnership — Kahiyang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
}

export default function Partnership() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://kahiyang.id" },
    { name: "Partnership", url: "https://kahiyang.id/partnership" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PartnershipPage />
    </>
  )
}
