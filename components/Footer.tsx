import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";
import { navLinks, site } from "@/lib/site";
import styles from "./Footer.module.css";

const treatments = [
  "Odontología general",
  "Implantes y prótesis",
  "Estética y ortodoncia",
];

const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hours = site.hours.summary.split(" · ");

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <BrandLogo variant="footer" />
            <p className={styles.tagline}>
              Clínica dental en el centro de San Sebastián-Donostia. Te
              atendemos con calma y te explicamos cada paso.
            </p>
            <div className={styles.social}>
              <span className={styles.socialLabel}>Síguenos</span>
              <SocialLinks />
            </div>
          </div>

          <nav className={styles.col} aria-label="Navegación">
            <h2 className={styles.colTitle}>Navegación</h2>
            <ul className={styles.list}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.col} aria-label="Tratamientos">
            <h2 className={styles.colTitle}>Tratamientos</h2>
            <ul className={styles.list}>
              {treatments.map((item) => (
                <li key={item}>
                  <Link href="/#tratamientos">{item}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>Contacto</h2>
            <address className={styles.contact}>
              <p>{site.address}</p>
              <p>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </p>
              <p>
                <a href={site.emailHref}>{site.email}</a>
              </p>
            </address>

            <h3 className={styles.colTitle}>Horario</h3>
            <ul className={styles.hoursList}>
              {hours.map((part) => (
                <li key={part}>{part}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {site.nameShort}. Todos los derechos reservados.
          </p>
          <nav className={styles.legal} aria-label="Legal">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
