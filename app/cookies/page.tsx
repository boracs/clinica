import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageOpenGraph } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

const description =
  "Política de cookies de Doctor bolao en San Sebastián-Donostia.";

export const metadata: Metadata = {
  title: "Política de cookies",
  description,
  alternates: { canonical: absoluteUrl("/cookies/") },
  openGraph: pageOpenGraph("/cookies/", "Política de cookies", description),
};

export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies" updated="1 de enero de 2026">
      <p>
        Este sitio web utiliza cookies y tecnologías similares para mejorar la
        experiencia de navegación y analizar de forma anónima el uso de la
        página. A continuación te explicamos cuáles se utilizan y cómo
        gestionarlas.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Una cookie es un pequeño archivo que se almacena en tu dispositivo al
        visitar un sitio web. Permite, entre otras cosas, recordar tus
        preferencias o recopilar estadísticas de uso.
      </p>

      <h2>2. Cookies que utilizamos</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Cookie</th>
            <th scope="col">Tipo</th>
            <th scope="col">Finalidad</th>
            <th scope="col">Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cookie_consent</td>
            <td>Técnica</td>
            <td>Recordar tus preferencias de cookies</td>
            <td>1 año</td>
          </tr>
          <tr>
            <td>_ga</td>
            <td>Analítica (terceros)</td>
            <td>Estadísticas anónimas de uso del sitio</td>
            <td>2 años</td>
          </tr>
          <tr>
            <td>_gid</td>
            <td>Analítica (terceros)</td>
            <td>Distinguir usuarios en la sesión de navegación</td>
            <td>24 horas</td>
          </tr>
        </tbody>
      </table>
      <p>
        Las cookies analíticas de terceros solo se cargan si aceptas el aviso
        de cookies; si lo rechazas, no se instalan.
      </p>

      <h2>3. Cómo gestionar las cookies</h2>
      <p>
        Puedes configurar tu navegador para bloquear o eliminar las cookies. El
        procedimiento varía según el navegador:
      </p>
      <ul>
        <li>Chrome: Configuración → Privacidad y seguridad → Cookies.</li>
        <li>Firefox: Opciones → Privacidad y seguridad → Cookies.</li>
        <li>Safari: Preferencias → Privacidad → Cookies.</li>
        <li>Edge: Configuración → Cookies y permisos del sitio.</li>
      </ul>
      <p>
        Si bloqueas las cookies, algunas funciones del sitio podrían no estar
        disponibles.
      </p>

      <h2>4. Cambios en la política de cookies</h2>
      <p>
        La {site.nameShort} puede actualizar esta política para adaptarla a
        cambios normativos o del propio sitio. Te recomendamos revisarla
        periódicamente.
      </p>
    </LegalPage>
  );
}
