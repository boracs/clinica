"use client";

import Link from "next/link";
import { setConsent, useConsent } from "@/lib/consent";
import styles from "./CookieConsent.module.css";

/**
 * Banner de aviso de cookies. Guarda la elección (Aceptar/Rechazar) en
 * `localStorage`; otros componentes (p. ej. Analytics) reaccionan a ella.
 */
export function CookieConsent() {
  const saved = useConsent();
  const visible = saved !== "accepted" && saved !== "rejected";

  if (!visible) return null;

  return (
    <div className={styles.banner} role="region" aria-label="Aviso de cookies">
      <p className={styles.text}>
        Usamos cookies propias y de terceros para mejorar tu experiencia. Puedes
        consultar la{" "}
        <Link href="/cookies" className={styles.link}>
          política de cookies
        </Link>
        .
      </p>
      <div className={styles.actions}>
        <button
          type="button"
          className={`btn btn--primary ${styles.accept}`}
          onClick={() => setConsent("accepted")}
        >
          Aceptar
        </button>
        <button
          type="button"
          className={`btn btn--secondary ${styles.reject}`}
          onClick={() => setConsent("rejected")}
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
