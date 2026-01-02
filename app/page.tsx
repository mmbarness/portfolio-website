"use client";

import { Header, Section, Experience, Skills } from "@/components";
import type { Resume } from "@/lib/types";
import resumeData from "@/data/resume.json";
import styles from "./page.module.css";

export default function ResumePage() {
  const resume = resumeData as Resume;

  return (
    <main className={styles.main}>
      <button
        className={styles.printButton}
        onClick={() => window.print()}
        title="Export to PDF"
      >
        ↓
      </button>
      <Header basics={resume.basics} />

      <Section title="Skills">
        <p className={styles.skillsInline}>
          {resume.skills.flatMap(s => s.keywords).join(", ")}
        </p>
      </Section>

      <Section title="Experience">
        {resume.work.map((work, i) => (
          <Experience key={i} work={work} />
        ))}
      </Section>

      {resume.projects && resume.projects.length > 0 && (
        <Section title="Projects">
          <div className={styles.projects}>
            {resume.projects.map((project, i) => (
              <article key={i} className={styles.project}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectName}>
                    {project.name}
                    {project.company && (
                      <span className={styles.projectCompany}>
                        {" @ "}
                        {project.companyUrl ? (
                          <a href={project.companyUrl} target="_blank" rel="noopener noreferrer">
                            {project.company}
                          </a>
                        ) : (
                          project.company
                        )}
                      </span>
                    )}
                    {project.keywords && (
                      <span className={styles.projectKeywords}>
                        ({project.keywords.join(", ")})
                      </span>
                    )}
                    {project.status && (
                      <span className={styles.projectStatus}> - {project.status}</span>
                    )}
                  </h3>
                  <div className={styles.projectLinks}>
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Live
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
                <p className={styles.projectDesc}>{project.description}</p>
                {project.highlights && project.highlights.length > 0 && (
                  <ul className={styles.projectHighlights}>
                    {project.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section title="Education">
        <div className={styles.education}>
          {resume.education.map((edu, i) => (
            <div key={i} className={styles.eduItem}>
              <span className={styles.eduInstitution}>
                {edu.institution}
                {edu.location && `, ${edu.location}`}
              </span>
              <span className={styles.eduArea}>
                {edu.studyType ? `${edu.studyType} in ${edu.area}` : edu.area}
                {edu.endDate && ` (${edu.endDate})`}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <footer className={styles.footer}>
        <span className={styles.cursor}>_</span>
      </footer>
    </main>
  );
}
