"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export function Nav() {
  const pathname = usePathname();
  const isResume = pathname === "/";
  const isBlog = pathname.startsWith("/blog");

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${styles.link} ${isResume ? styles.active : ""}`}
      >
        ~/resume
      </Link>
      <Link
        href="/blog"
        className={`${styles.link} ${isBlog ? styles.active : ""}`}
      >
        ~/blog
      </Link>
    </nav>
  );
}
