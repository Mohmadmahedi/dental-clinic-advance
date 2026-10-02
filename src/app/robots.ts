import { MetadataRoute } from "next";
import { CLINIC_INFO } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = CLINIC_INFO.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
