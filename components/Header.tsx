import Link from "next/link";
import type { Basics } from "@/lib/types";
import styles from "./Header.module.css";

interface HeaderProps {
  basics: Basics;
}

export function Header({ basics }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>{basics.name}</h1>
      <div className={styles.contact}>
        {basics.phone && <span>{basics.phone}</span>}
        <a href={`mailto:${basics.email}`}>{basics.email}</a>
        {basics.profiles.map((profile) => (
          <a
            key={profile.network}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.network}
          </a>
        ))}
        <Link href="/blog" className={styles.blogLink}>
          Blog
        </Link>
        {basics.location && (
          <span>{basics.location.city}</span>
        )}
      </div>
    </header>
  );
}
