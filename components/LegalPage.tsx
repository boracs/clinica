import type { ReactNode } from "react";
import styles from "./LegalPage.module.css";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

/**
 * Esqueleto común de las páginas legales (aviso legal, privacidad, cookies).
 * Contenido de DEMO: revisar con un profesional antes de publicar.
 */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <section className={styles.hero} aria-labelledby="legal-title">
        <div className={`container ${styles.heroCopy}`}>
          <p className={styles.kicker}>Información legal</p>
          <h1 id="legal-title">{title}</h1>
          <p className={styles.updated}>Última actualización: {updated}</p>
        </div>
      </section>

      <section className={styles.body}>
        <div className={`container ${styles.prose}`}>{children}</div>
      </section>
    </>
  );
}
