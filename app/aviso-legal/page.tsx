import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageOpenGraph } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

const description =
  "Aviso legal de la clínica dental del doctor Javier Giménez Turrillas en San Sebastián-Donostia.";

export const metadata: Metadata = {
  title: "Aviso legal",
  description,
  alternates: { canonical: absoluteUrl("/aviso-legal/") },
  openGraph: pageOpenGraph("/aviso-legal/", "Aviso legal", description),
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal" updated="1 de enero de 2026">
      <p>
        El presente aviso legal regula el acceso y el uso del sitio web de la{" "}
        {site.nameFull}, con domicilio en {site.address}. Al navegar por este
        sitio aceptas las condiciones que se detallan a continuación.
      </p>

      <h2>1. Titular del sitio web</h2>
      <ul>
        <li>Titular: {site.nameFull}</li>
        <li>Domicilio: {site.address}</li>
        <li>Teléfono: {site.phoneDisplay}</li>
        <li>
          Email: <a href={site.emailHref}>{site.email}</a>
        </li>
        <li>N.º de colegiado: 2451 (Colegio de Odontólogos de Gipuzkoa)</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web tiene carácter informativo. Su finalidad es dar a
        conocer la actividad de la clínica y facilitar el contacto para pedir
        cita o resolver dudas. No constituye asesoramiento médico y no sustituye
        la consulta presencial con un profesional.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El usuario se compromete a hacer un uso adecuado del sitio, sin
        emplearlo para actividades ilícitas o que puedan dañar los sistemas de
        la clínica o de terceros.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Los contenidos de este sitio (textos, logotipos, imágenes y diseño) son
        titularidad de la clínica o de terceros que han autorizado su uso.
        Queda prohibida su reproducción total o parcial sin autorización previa.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        La clínica no se hace responsable del uso indebido que los usuarios
        hagan de la información publicada, ni de los contenidos de páginas de
        terceros a las que se enlace desde este sitio.
      </p>

      <h2>6. Legislación aplicable</h2>
      <p>
        Estas condiciones se rigen por la legislación española. Para cualquier
        controversia, las partes se someten a los juzgados y tribunales de San
        Sebastián-Donostia, salvo que la ley disponga otra cosa.
      </p>
    </LegalPage>
  );
}
