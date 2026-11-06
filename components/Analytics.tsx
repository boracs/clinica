"use client";

import { useEffect } from "react";
import { useConsent } from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Carga Google Analytics únicamente si el usuario ha aceptado las cookies y
 * hay un ID configurado (`NEXT_PUBLIC_GA_ID`). Si rechaza (o no hay ID), no se
 * inyecta ningún script, de modo que «Rechazar» bloquea la analítica de verdad.
 */
export function Analytics() {
  const consent = useConsent();
  const enabled = consent === "accepted" && Boolean(GA_ID);

  useEffect(() => {
    if (!enabled) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);

    return () => {
      document.head.removeChild(script);
    };
  }, [enabled]);

  return null;
}
