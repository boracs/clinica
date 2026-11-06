import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { SocialRail } from "@/components/SocialRail";
import { pageOpenGraph } from "@/lib/seo";
import { absoluteUrl, assetUrl, site, siteDescription, siteUrl } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-source-serif",
  display: "swap",
});

const defaultTitle =
  "Doctor bolao · Donostia";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template:
      "%s · Doctor bolao · Donostia",
  },
  description: siteDescription,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: pageOpenGraph("/", defaultTitle, siteDescription),
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteDescription,
    images: [absoluteUrl("/images/bg-home-hero.jpg")],
  },
  icons: {
    icon: [{ url: assetUrl("/brand/logo-mark.svg"), type: "image/svg+xml" }],
    apple: [
      { url: assetUrl("/brand/logo-mark-on-dark.svg"), type: "image/svg+xml" },
    ],
  },
};

const dayOfWeekMap: Record<string, string> = {
  Lunes: "Monday",
  Martes: "Tuesday",
  Miércoles: "Wednesday",
  Jueves: "Thursday",
  Viernes: "Friday",
};

function formatTime(value: string): string {
  const [hours, minutes] = value.split(":");
  return `${hours.padStart(2, "0")}:${minutes}`;
}

const openingHoursSpecification = site.hours.days
  .filter((day) => day.intervals.length > 0)
  .flatMap((day) =>
    day.intervals.map((interval) => {
      const [opens, closes] = interval
        .split(/[–-]/)
        .map((part) => part.trim());
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayOfWeekMap[day.day],
        opens: formatTime(opens),
        closes: formatTime(closes),
      };
    }),
  );

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${absoluteUrl("/")}#dentist`,
  name: site.nameFull,
  description: siteDescription,
  url: absoluteUrl("/"),
  telephone: "+34 943 42 82 24",
  email: site.email,
  image: absoluteUrl("/brand/logo-horizontal.svg"),
  medicalSpecialty: "Dentistry",
  hasMap: site.mapsHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Loyola, 15 1 Dcha",
    postalCode: "20005",
    addressLocality: "San Sebastián-Donostia",
    addressRegion: "Gipuzkoa",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.3181303,
    longitude: -1.9824521,
  },
  openingHoursSpecification,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sourceSans.variable} ${sourceSerif.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a className="skip-link" href="#contenido">
          Ir al contenido
        </a>
        <SocialRail />
        <div className="site-shell">
          <Header />
          <main id="contenido" className="site-main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <MobileCtaBar />
        </div>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
