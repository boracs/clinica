import type { Metadata } from "next";
import { absoluteUrl, ogImage, site } from "@/lib/site";

/**
 * Open Graph por página. Se repite completo porque Next.js reemplaza (no
 * fusiona) el objeto `openGraph` del layout al definirlo en una página.
 */
export function pageOpenGraph(
  path: string,
  title: string,
  description: string,
): NonNullable<Metadata["openGraph"]> {
  return {
    type: "website",
    locale: "es_ES",
    url: absoluteUrl(path),
    siteName: site.nameShort,
    title,
    description,
    images: [ogImage],
  };
}
