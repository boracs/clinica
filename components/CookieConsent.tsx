"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "cookie-consent";
const CHANGE_EVENT = "cookie-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): string | null {
  return window.localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot(): string | null {
  return null;
}

/**
 * Banner de aviso de cookies. Lee/escribe la elección en `localStorage`
 * mediante `useSyncExternalStore` para evitar el «flash» y los problemas de
 * hidratación en el export estático.
 */
export function CookieConsent() {
  const saved = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const visible = saved !== "accepted" && saved !== "rejected";

  function decide(value: "accepted" | "rejected") {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

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
          onClick={() => decide("accepted")}
        >
          Aceptar
        </button>
        <button
          type="button"
          className={`btn btn--secondary ${styles.reject}`}
          onClick={() => decide("rejected")}
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
