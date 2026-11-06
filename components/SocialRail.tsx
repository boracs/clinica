import { SocialIcon } from "@/components/SocialIcon";
import { socialLinks } from "@/lib/site";
import styles from "./SocialRail.module.css";

export function SocialRail() {
  return (
    <aside className={styles.rail} aria-label="Redes sociales">
      <span className={styles.label} aria-hidden="true">
        Síguenos
      </span>
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className={styles.link}
          aria-label={link.label}
          title={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon id={link.id} />
        </a>
      ))}
    </aside>
  );
}
