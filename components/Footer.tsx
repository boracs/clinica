import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";
import { navLinks, site } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.identity}>
          <BrandLogo variant="footer" />
          <p className={styles.address}>{site.address}</p>
          <p className={styles.contactLine}>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </p>
          <p className={styles.contactLine}>
            <a href={site.emailHref}>{site.email}</a>
          </p>
        </div>

        <nav className={styles.nav} aria-label="Pie">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.meta}>
          <p className={styles.hours}>
            <span className={styles.hoursLabel}>Horario</span>
            {site.hours.summary}
          </p>
          <p className={styles.legals}>
            <Link href="/aviso-legal">Aviso legal</Link> ·{" "}
            <Link href="/privacidad">Privacidad</Link> ·{" "}
            <Link href="/cookies">Cookies</Link>
          </p>
        </div>

        <div className={styles.social}>
          <span className={styles.socialLabel}>Síguenos</span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
