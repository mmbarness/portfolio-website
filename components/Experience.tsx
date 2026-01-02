import type { Work } from "@/lib/types";
import styles from "./Experience.module.css";

interface ExperienceProps {
  work: Work;
}

function formatDate(date: string): string {
  const [year, month] = date.split("-");
  if (!month) return year;
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}

export function Experience({ work }: ExperienceProps) {
  const dateRange = work.endDate
    ? `${formatDate(work.startDate)} - ${formatDate(work.endDate)}`
    : `${formatDate(work.startDate)} - Present`;

  return (
    <article className={styles.experience}>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h3 className={styles.company}>
            {work.url ? (
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                {work.name}
              </a>
            ) : (
              work.name
            )}
          </h3>
          <span className={styles.date}>{dateRange}</span>
        </div>
        <div className={styles.position}>
          <span className={styles.prompt}>$</span> {work.position}
          {work.summary && <span className={styles.summary}> — {work.summary}</span>}
        </div>
      </header>
      {work.highlights.length > 0 && (
        <ul className={styles.highlights}>
          {work.highlights.map((highlight, i) => (
            <li key={i} className={styles.highlight}>
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
