import styles from "./SocialIcon.module.css";

export function SocialIcon({ id }: { id: string }) {
  switch (id) {
    case "instagram":
      return (
        <svg
          className={styles.svg}
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <rect x="3" y="3" width="18" height="18" rx="5.5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.4" cy="6.6" r="1.2" className={styles.dot} />
        </svg>
      );
    case "facebook":
      return (
        <svg
          className={styles.svg}
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M14.2 8.4h2.4l-.3 3h-2.1v7h-3v-7H8.9v-3h2.3V6.9a3 3 0 0 1 3-3h2.2v3h-1.6a.7.7 0 0 0-.6.7v.8z" />
        </svg>
      );
    default:
      return null;
  }
}
