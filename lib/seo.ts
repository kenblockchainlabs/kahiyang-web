export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kahiyang",
    alternateName: "Negeri Kahiyang",
    url: "https://kahiyang.id",
    logo: "https://kahiyang.id/logo.png",
    description:
      "Ekosistem digital Indonesia — komunitas TikTok Affiliate, tools AI untuk konten kreator, dan layanan digital marketing.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Indonesian"],
    },
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kahiyang",
    url: "https://kahiyang.id",
    description:
      "Ekosistem digital Indonesia — komunitas TikTok Affiliate, tools AI, dan layanan digital marketing.",
    inLanguage: "id",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://kahiyang.id/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateCommunitySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Komunitas Kahiyang",
    url: "https://kahiyang.id/komunitas",
    description:
      "Komunitas TikTok Affiliate Indonesia — bedah akun live, sharing strategi, template & tools gratis. Pecah telur dalam 7-14 hari.",
    parentOrganization: {
      "@type": "Organization",
      name: "Kahiyang",
      url: "https://kahiyang.id",
    },
  }
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
