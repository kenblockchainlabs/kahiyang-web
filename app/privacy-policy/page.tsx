import type { Metadata } from "next"
import PrivacyPolicyPage from "./page-client"
import { generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi Kahiyang.id — bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.",
  alternates: {
    canonical: "https://kahiyang.id/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://kahiyang.id" },
    { name: "Kebijakan Privasi", url: "https://kahiyang.id/privacy-policy" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PrivacyPolicyPage />
    </>
  )
}
