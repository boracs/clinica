import { socialLinks } from "@/lib/site";
import styles from "./SocialRail.module.css";

function Icon({ id }: { id: string }) {
  switch (id) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="3" y="3" width="18" height="18" rx="5.5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.4" cy="6.6" r="1.2" className={styles.iconDot} />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M14.2 8.4h2.4l-.3 3h-2.1v7h-3v-7H8.9v-3h2.3V6.9a3 3 0 0 1 3-3h2.2v3h-1.6a.7.7 0 0 0-.6.7v.8z" />
        </svg>
      );
    default:
      return null;
  }
}

export function SocialRail() {
  return (
    <aside className={styles.rail} aria-label="Redes sociales">
      <span className={styles.label} aria-hidden="true">
        Síguenos
      </span>
      {socialLinks.map((link) => {
        const placeholder = link.href === "#";
        return (
          <a
            key={link.id}
            href={placeholder ? undefined : link.href}
            className={styles.link}
            aria-label={placeholder ? `${link.label} (pendiente)` : link.label}
            title={placeholder ? `${link.label} — pendiente de URL` : link.label}
            {...(!placeholder
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Icon id={link.id} />
          </a>
        );
      })}
    </aside>
  );
}
