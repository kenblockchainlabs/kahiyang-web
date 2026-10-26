import type { Metadata } from "next"
import TermsPage from "./page-client"
import { generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan penggunaan layanan Kahiyang.id — aturan, hak, dan kewajiban pengguna.",
  alternates: {
    canonical: "https://kahiyang.id/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Terms() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://kahiyang.id" },
    { name: "Syarat & Ketentuan", url: "https://kahiyang.id/terms" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <TermsPage />
    </>
  )
}
