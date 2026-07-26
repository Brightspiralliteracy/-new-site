import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://bright-spiral-literacy.jlaoverstreet.chatgpt.site/sitemap.xml",
  };
}
