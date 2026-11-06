import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageOpenGraph } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

const description =
  "Política de privacidad de Doctor bolao en San Sebastián-Donostia.";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description,
  alternates: { canonical: absoluteUrl("/privacidad/") },
  openGraph: pageOpenGraph("/privacidad/", "Política de privacidad", description),
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated="1 de enero de 2026">
      <p>
        En la {site.nameFull} tratamos tus datos personales conforme al
        Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de
        Protección de Datos y Garantía de los Derechos Digitales.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>Responsable: {site.nameFull}</li>
        <li>Domicilio: {site.address}</li>
        <li>
          Email: <a href={site.emailHref}>{site.email}</a>
        </li>
      </ul>

      <h2>2. Finalidad del tratamiento</h2>
      <p>
        Tratamos los datos que nos facilitas a través del formulario de
        contacto o por teléfono para atender tus consultas, gestionar las citas
        y prestarte la asistencia solicitada.
      </p>

      <h2>3. Legitimación</h2>
      <p>
        La base legal del tratamiento es tu consentimiento y, en su caso, la
        ejecución de la relación de prestación de servicios sanitarios.
      </p>

      <h2>4. Conservación de los datos</h2>
      <p>
        Conservamos tus datos durante el tiempo necesario para atender tu
        solicitud y cumplir las obligaciones legales aplicables, especialmente
        las derivadas de la normativa sanitaria.
      </p>

      <h2>5. Destinatarios</h2>
      <p>
        No cedemos tus datos a terceros, salvo obligación legal o cuando sea
        imprescindible para la prestación del servicio.
      </p>

      <h2>6. Derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión,
        oposición, limitación del tratamiento y portabilidad escribiendo a{" "}
        <a href={site.emailHref}>{site.email}</a>. También puedes presentar una
        reclamación ante la Agencia Española de Protección de Datos.
      </p>
    </LegalPage>
  );
}
