export const site = {
  nameFull: "Clínica dental del doctor Javier Giménez Turrillas",
  nameShort: "Clínica dental Javier Giménez Turrillas",
  nameMobile: "Dr. Javier Giménez Turrillas",
  address: "Calle Loyola, 15 1 Dcha, 20005 San Sebastián-Donostia, SS",
  phoneDisplay: "943 42 82 24",
  phoneHref: "tel:+34943428224",
  email: "consulta@javiergimenezturrillas.com",
  emailHref: "mailto:consulta@javiergimenezturrillas.com",
  mapsHref:
    "https://www.google.com/maps/place/Cl%C3%ADnica+Dental+Gim%C3%A9nez+Turrillas/@43.3181303,-1.9824521,17z/data=!4m6!3m5!1s0xd51a551217c07db:0xb424d1e8f71ea0a2!8m2!3d43.3181303!4d-1.9824521!16s%2Fg%2F11b6dk59hd",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d725.5!2d-1.9824521!3d43.3181303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a551217c07db%3A0xb424d1e8f71ea0a2!2sCl%C3%ADnica%20Dental%20Gim%C3%A9nez%20Turrillas!5e0!3m2!1ses!2ses!4v1730840000000!5m2!1ses!2ses",
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
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

/**
 * URL base del sitio. Configurable en build mediante `NEXT_PUBLIC_SITE_URL`
 * para probar en GitHub Pages antes de publicar en el dominio definitivo.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.javiergimenezturrillas.com"
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
  "Clínica dental del doctor Javier Giménez Turrillas en San Sebastián-Donostia. Pide cita por teléfono o escribe un mensaje.";

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
