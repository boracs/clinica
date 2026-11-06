export const site = {
  nameFull: "Doctor bolao",
  nameShort: "Doctor bolao",
  nameMobile: "Doctor bolao",
  address: "Calle Loyola, 15 1 Dcha, 20005 San Sebastián-Donostia, SS",
  phoneDisplay: "943 42 82 24",
  phoneHref: "tel:+34943428224",
  email: "consulta@doctorbolao.com",
  emailHref: "mailto:consulta@doctorbolao.com",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Calle+Loyola+15,+20005+San+Sebastián-Donostia",
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=Calle+Loyola+15,+20005+San+Sebastián-Donostia&output=embed",
  city: "San Sebastián-Donostia",
  hours: {
    summary:
      "Lunes a jueves 9:00–13:00 y 16:00–19:30 · Viernes 9:00–13:00 · Fin de semana cerrado",
    days: [
      { day: "Lunes", intervals: ["9:00–13:00", "16:00–19:30"] },
      { day: "Martes", intervals: ["9:00–13:00", "16:00–19:30"] },
      { day: "Miércoles", intervals: ["9:00–13:00", "16:00–19:30"] },
      { day: "Jueves", intervals: ["9:00–13:00", "16:00–19:30"] },
      { day: "Viernes", intervals: ["9:00–13:00"] },
      { day: "Sábado y domingo", intervals: [] },
    ],
  },
  brand: {
    mark: "/brand/logo-mark.svg",
    markOnDark: "/brand/logo-mark-on-dark.svg",
    horizontal: "/brand/logo-horizontal.svg",
    stacked: "/brand/logo-stacked.svg",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#tratamientos", label: "Tratamientos" },
  { href: "/#sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

/**
 * Redes sociales de la barra lateral.
 * NOTA: URLs de demo — sustituir por las cuentas reales cuando existan.
 */
export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/doctorbolao",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/doctorbolao",
  },
] as const;

/**
 * URL base del sitio. Configurable en build mediante `NEXT_PUBLIC_SITE_URL`
 * para probar en GitHub Pages antes de publicar en el dominio definitivo.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.doctorbolao.com"
).replace(/\/+$/, "");

/** Ruta base (subdirectorio) derivada de `siteUrl`. Vacía en el dominio raíz. */
export const basePath = (() => {
  try {
    return new URL(siteUrl).pathname.replace(/\/+$/, "");
  } catch {
    return "";
  }
})();

/** URL local de un asset con el base path (necesario en `next/image` e `<img>`). */
export function assetUrl(path = "/"): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

/** URL absoluta para una ruta, conservando el base path (útil en GitHub Pages). */
export function absoluteUrl(path = "/"): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const siteDescription =
  "Doctor bolao en San Sebastián-Donostia. Pide cita por teléfono o escribe un mensaje.";

/**
 * Imagen Open Graph (compartir en WhatsApp/redes sociales).
 * TODO: sustituir por una imagen de marca dedicada de 1200×630 antes del lanzamiento.
 */
export const ogImage = {
  url: absoluteUrl("/images/bg-home-hero.jpg"),
  width: 1920,
  height: 1080,
  alt: site.nameShort,
};
