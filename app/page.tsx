import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Atmosphere } from "@/components/Atmosphere";
import { assetUrl, site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Clínica dental Javier Giménez · Donostia",
  description:
    "Clínica dental del doctor Javier Giménez Turrillas en San Sebastián-Donostia. Pide cita por teléfono o escribe un mensaje.",
};

/**
 * Servicios básicos de una clínica dental, agrupados por categoría.
 * Listado orientativo a confirmar con la clínica.
 */
const treatmentGroups = [
  {
    title: "Odontología general",
    items: [
      "Limpiezas e higiene dental",
      "Empastes y obturaciones",
      "Endodoncias",
      "Extracciones",
    ],
  },
  {
    title: "Implantes y prótesis",
    items: [
      "Implantes dentales",
      "Coronas y puentes",
      "Prótesis removibles",
    ],
  },
  {
    title: "Estética y ortodoncia",
    items: [
      "Ortodoncia",
      "Blanqueamiento dental",
      "Carillas y estética dental",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="home-hero-title">
        <Atmosphere
          src={assetUrl("/images/illustration-hero.svg")}
          priority
          overlay="left"
          parallax
        />
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1 id="home-hero-title">
              Clínica dental en San Sebastián-Donostia
            </h1>
            <p className={`${styles.heroLead} prose-measure`}>
              Soy el doctor Javier Giménez Turrillas. Aquí te atienden con
              calma, te explican qué ven y puedes preguntar sin prisa.
            </p>
            <div className={`btn-group ${styles.heroActions}`}>
              <Link href="/contacto" className="btn btn--primary btn--block">
                Pedir cita
              </Link>
              <a href={site.phoneHref} className="btn btn--secondary btn--block">
                Llamar
              </a>
            </div>
          </div>

          <figure className={styles.photoBlock}>
            <Image
              src={assetUrl("/images/clinic-generic.jpg")}
              alt="Gabinete dental moderno y luminoso"
              width={1200}
              height={900}
              className={styles.photo}
              sizes="(min-width: 900px) 40vw, 100vw"
              priority
            />
            <figcaption className={styles.photoLabel}>
              Gabinete de la clínica dental en Donostia
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        id="tratamientos"
        className={`${styles.section} ${styles.sectionAfterHero}`}
        aria-labelledby="home-treatments-title"
      >
        <div className="container">
          <div className={styles.treatmentsHeader}>
            <span className="section-label">Qué hacemos</span>
            <h2 id="home-treatments-title">Revisión, diagnóstico y un plan claro</h2>
            <p className="prose-measure">
              Empezamos por escucharte y revisar tu boca. Después te contamos
              qué hay y qué opciones tienes, en lenguaje sencillo. Estos son los
              servicios más habituales que puedes encontrar en la clínica.
            </p>
          </div>

          <div className={styles.treatmentsGrid}>
            {treatmentGroups.map((group) => (
              <div className={styles.treatmentGroup} key={group.title}>
                <h3>{group.title}</h3>
                <ul className={styles.treatmentList}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="pending-note">
            Listado orientativo: te confirmamos los tratamientos concretos al
            pedir cita.
          </p>

          <div className={styles.actions}>
            <Link href="/contacto" className="btn btn--primary">
              Pedir cita
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.sectionAtmosphere}`}
        aria-labelledby="home-reparo-title"
      >
        <Atmosphere
          src={assetUrl("/images/bg-home-calm.jpg")}
          overlay="soft"
          parallax
        />
        <div className={`container ${styles.sectionCentered}`}>
          <span className="section-label">Primera visita</span>
          <h2 id="home-reparo-title">Puedes venir solo a preguntar</h2>
          <p>
            No hace falta que tengas claro el problema. En la primera visita
            miramos, te explicamos y dejas las dudas sobre la mesa. Tú decides
            el siguiente paso.
          </p>
          <p>
            Te recibimos, hablamos de lo que te preocupa y hacemos la revisión.
            Si hace falta un plan de tratamiento, lo repasamos contigo antes de
            seguir.
          </p>
          <p className={styles.gapNote}>
            La primera visita dura unos 40 minutos.
          </p>
          <div className={`btn-group ${styles.centeredActions}`}>
            <Link href="/contacto" className="btn btn--primary">
              Pedir cita
            </Link>
            <a href={site.emailHref} className="btn btn--secondary">
              Escribir
            </a>
          </div>
        </div>
      </section>

      <section
        id="sobre-nosotros"
        className={`${styles.section} ${styles.sectionDoctor}`}
        aria-labelledby="home-doctor-title"
      >
        <div className={`container ${styles.doctorSplit}`}>
          <figure className={styles.photoBlock}>
            <Image
              src={assetUrl("/images/doctor-generic.jpg")}
              alt="Dentista atendiendo a un paciente en el gabinete"
              width={1200}
              height={900}
              className={styles.photo}
              sizes="(min-width: 768px) 46vw, 100vw"
            />
            <figcaption className={styles.photoLabel}>
              El doctor Javier Giménez Turrillas en consulta
            </figcaption>
          </figure>
          <div className={styles.doctorCopy}>
            <span className="section-label">Sobre nosotros</span>
            <h2 id="home-doctor-title">Doctor Javier Giménez Turrillas</h2>
            <p>
              Te atiende el doctor Javier Giménez Turrillas. El objetivo es que
              entiendas qué ocurre en tu boca y qué opciones tienes, sin prisas
              y sin tecnicismos de más.
            </p>
            <ul className={styles.credentials}>
              <li>N.º de colegiado: 2451 · Colegio de Odontólogos de Gipuzkoa</li>
              <li>Licenciado en Odontología · Universidad del País Vasco (UPV/EHU)</li>
              <li>Máster en Implantología y Cirugía Oral</li>
              <li>Formación continua en ortodoncia y estética dental</li>
            </ul>
            <div className={styles.actions}>
              <Link href="/contacto" className="btn btn--primary">
                Pedir cita
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.sectionSurface}`}
        aria-labelledby="home-location-title"
      >
        <div className={`container ${styles.locationSection}`}>
          <div className={styles.sectionTitle}>
            <span className="section-label">Dónde</span>
            <h2 id="home-location-title">En el centro de Donostia</h2>
          </div>
          <div className={styles.locationCard}>
            <div className={styles.locationInfo}>
              <p className={styles.address}>{site.address}</p>
              <ul className={styles.contactLines}>
                <li>
                  <span className={styles.contactLabel}>Teléfono</span>
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                </li>
                <li>
                  <span className={styles.contactLabel}>Email</span>
                  <a href={site.emailHref}>{site.email}</a>
                </li>
                <li>
                  <span className={styles.contactLabel}>Horario</span>
                  <span>{site.hours.summary}</span>
                </li>
              </ul>
            </div>
            <div className={styles.locationActions}>
              <a
                href={site.mapsHref}
                className="btn btn--secondary btn--block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar
              </a>
              <Link href="/contacto" className="btn btn--primary btn--block">
                Pedir cita
              </Link>
            </div>
          </div>
          <figure className={`${styles.photoBlock} ${styles.locationPhoto}`}>
            <Image
              src={assetUrl("/images/portal-clinica.png")}
              alt="Portal de acceso a Calle Loyola, 15, San Sebastián-Donostia"
              width={1200}
              height={900}
              className={styles.photo}
              sizes="(min-width: 768px) 60vw, 100vw"
            />
            <figcaption className={styles.photoLabel}>
              Entrada · Calle Loyola, 15
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
