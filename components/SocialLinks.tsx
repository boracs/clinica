import { SocialIcon } from "@/components/SocialIcon";
import { socialLinks } from "@/lib/site";
import styles from "./SocialLinks.module.css";

export function SocialLinks() {
  return (
    <ul className={styles.list}>
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className={styles.link}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon id={link.id} />
          </a>
        </li>
      ))}
    </ul>
  );
}
