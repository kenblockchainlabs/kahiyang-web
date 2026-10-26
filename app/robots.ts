import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/test-shader/", "/api/"],
      },
    ],
    sitemap: "https://kahiyang.id/sitemap.xml",
  }
}
