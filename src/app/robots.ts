import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://waystoweb.com/sitemap.xml",
      "https://waystoweb.com/sitemap-0.xml",
    ],
  };
}
