import type { ReactNode } from 'react';
import styles from './styles.module.css';
import resumeData from '@site/static/quoc-phan-resume.json';

export default function TechnicalSkills(): ReactNode {
    const { skills } = resumeData;

    return (
        <section className={styles.technicalSkills}>
            <h2 className={styles.sectionTitle}>
                Technical<br />Skills
            </h2>
            {skills.map((skillGroup, index) => (
                <div key={index} className={styles.skillGroup}>
                    <div className={styles.skillCategory}>{skillGroup.name}</div>
                    <p className={styles.skillKeywords}>
                        {skillGroup.keywords.join(' / ')}
                    </p>
                </div>
            ))}
        </section>
    );
}