import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bright Spiral Literacy | Reading Support for International Families",
    template: "%s | Bright Spiral Literacy",
  },
  description: "Evidence-informed literacy assessment and support for international school families with children ages 5 to 11.",
  metadataBase: new URL("https://bright-spiral-literacy.jlaoverstreet.chatgpt.site"),
  openGraph: {
    title: "Bright Spiral Literacy",
    description: "Your child’s reading struggles have an explanation.",
    type: "website",
    siteName: "Bright Spiral Literacy",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Bright Spiral Literacy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Spiral Literacy",
    description: "Your child’s reading struggles have an explanation.",
    images: ["/og-image.svg"],
  },
  other: { "codex-preview": "development" },
  icons: {
    icon: [{ url: "/favicon-book.svg", type: "image/svg+xml" }],
    shortcut: "/favicon-book.svg",
    apple: "/favicon-book.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://brightspiralliteracy.com/#organization",
        name: "Bright Spiral Literacy",
        url: "https://brightspiralliteracy.com",
        email: "hello@brightspiralliteracy.com",
        founder: { "@id": "https://brightspiralliteracy.com/#jennifer-overstreet" },
        areaServed: "Worldwide",
        audience: "International school families with children ages 5 to 11",
      },
      {
        "@type": "Person",
        "@id": "https://brightspiralliteracy.com/#jennifer-overstreet",
        name: "Dr. Jennifer Overstreet",
        alternateName: "Dr. Jenn",
        jobTitle: "Literacy Specialist and Founder",
        worksFor: { "@id": "https://brightspiralliteracy.com/#organization" },
        sameAs: ["https://www.instagram.com/brightspiralliteracy"],
      },
      {
        "@type": "WebSite",
        "@id": "https://brightspiralliteracy.com/#website",
        name: "Bright Spiral Literacy",
        url: "https://brightspiralliteracy.com",
        publisher: { "@id": "https://brightspiralliteracy.com/#organization" },
      },
    ],
  };
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
