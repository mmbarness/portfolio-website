import type { Skill } from "@/lib/types";
import styles from "./Skills.module.css";

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <div className={styles.grid}>
      {skills.map((skill) => (
        <div key={skill.name} className={styles.category}>
          <span className={styles.name}>{skill.name}:</span>
          <span className={styles.keywords}>{skill.keywords.join(", ")}</span>
        </div>
      ))}
    </div>
  );
}
