"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Atmosphere.module.css";

type AtmosphereProps = {
  src: string;
  /** Decorative background — empty alt by design. */
  priority?: boolean;
  overlay?: "soft" | "strong" | "left";
  className?: string;
  /**
   * Parallax sutil al hacer scroll. Ligero: solo escritorio, con
   * `requestAnimationFrame`, desactivado en `prefers-reduced-motion`
   * y en pantallas táctiles.
   */
  parallax?: boolean;
};

export function Atmosphere({
  src,
  priority = false,
  overlay = "soft",
  className,
  parallax = false,
}: AtmosphereProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parallax) return;

    const root = rootRef.current;
    const img = root?.querySelector("img");
    if (!root || !img) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const narrow = window.matchMedia("(max-width: 899px)").matches;
    if (reduced || touch || narrow) return;

    let raf = 0;
    let visible = false;

    const update = () => {
      const rect = root.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      const maxShift = rect.height * 0.08;
      const y = Math.max(-maxShift, Math.min(maxShift, center * -0.12));
      img.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(1.25)`;
    };

    const onScroll = () => {
      if (!visible || raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? false;
        if (visible) {
          update();
        } else {
          img.style.transform = "";
        }
      },
      { rootMargin: "100px" },
    );

    observer.observe(root);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parallax]);

  const overlayClass =
    overlay === "strong"
      ? styles.overlayStrong
      : overlay === "left"
        ? styles.overlayLeft
        : styles.overlaySoft;

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${parallax ? styles.parallax : ""} ${className ?? ""}`.trim()}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className={styles.image}
      />
      <div className={`${styles.overlay} ${overlayClass}`} />
    </div>
  );
}
