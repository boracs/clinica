import type { NextConfig } from "next";

// URL base del sitio. Con GitHub Pages (project site) usa el subdirectorio:
//   NEXT_PUBLIC_SITE_URL=https://USUARIO.github.io/REPO
// Con dominio definitivo (raíz), el basePath queda vacío automáticamente.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.doctorbolao.com";

let basePath = "";
try {
  basePath = new URL(siteUrl).pathname.replace(/\/+$/, "");
} catch {
  basePath = "";
}

const nextConfig: NextConfig = {
  // Export estático: genera HTML/CSS/JS para alojar en cualquier hosting (cPanel).
  output: "export",
  // Genera /contacto/index.html para que Apache/cPanel lo sirva sin configuración.
  trailingSlash: true,
  // Ruta base cuando el sitio vive bajo un subdirectorio (p. ej. GitHub Pages).
  basePath,
  images: {
    // Sin servidor de optimización de imágenes en hosting estático.
    unoptimized: true,
  },
};

export default nextConfig;
