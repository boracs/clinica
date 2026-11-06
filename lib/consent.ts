import { useSyncExternalStore } from "react";

export const CONSENT_KEY = "cookie-consent";
export const CONSENT_EVENT = "cookie-consent-change";

export type ConsentValue = "accepted" | "rejected";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function getSnapshot(): string | null {
  return window.localStorage.getItem(CONSENT_KEY);
}

function getServerSnapshot(): string | null {
  return null;
}

/**
 * Estado de consentimiento de cookies, leído de `localStorage` con
 * `useSyncExternalStore` (evita «flash» e hidratación incorrecta).
 */
export function useConsent(): string | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setConsent(value: ConsentValue): void {
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
