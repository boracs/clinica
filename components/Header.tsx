"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { navLinks, site } from "@/lib/site";
import styles from "./Header.module.css";

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

function isCurrentPath(pathname: string, href: string) {
  return normalizePath(pathname) === normalizePath(href);
}

type NavItemProps = {
  href: string;
  label: string;
  className: string;
  current: boolean;
  onClick?: () => void;
};

/**
 * Los enlaces con ancla (`#`) se renderizan como <a> para que el scroll
 * nativo al ancla funcione siempre, también al venir de otra ruta.
 */
function NavItem({ href, label, className, current, onClick }: NavItemProps) {
  const ariaCurrent = current ? ("page" as const) : undefined;
  if (href.includes("#")) {
    return (
      <a href={href} className={className} aria-current={ariaCurrent} onClick={onClick}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className} aria-current={ariaCurrent} onClick={onClick}>
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandSlot}>
          <BrandLogo onNavigate={closeMenu} />
        </div>

        <nav className={styles.nav} aria-label="Principal">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              className={styles.navLink}
              current={isCurrentPath(pathname, link.href)}
            />
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.phone} href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <Link
            href="/contacto"
            className={`btn btn--primary ${styles.cta}`}
            onClick={closeMenu}
          >
            Pedir cita
          </Link>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Cerrar menú" : "Menú"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      {open ? (
        <div id={menuId} className={`${styles.mobilePanel} ${styles.mobilePanelOpen}`}>
          <nav className={styles.mobileNav} aria-label="Menú">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                className={styles.mobileNavLink}
                current={isCurrentPath(pathname, link.href)}
                onClick={closeMenu}
              />
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
