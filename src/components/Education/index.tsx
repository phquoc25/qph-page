import type { ReactNode } from 'react';
import styles from './styles.module.css';
import resumeData from '@site/static/quoc-phan-resume.json';

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function Education(): ReactNode {
    const { education } = resumeData;

    return (
        <section className={styles.education}>
            <h2 className={styles.sectionTitle}>Education</h2>
            {education.map((edu, index) => (
                <div key={index} className={styles.educationItem}>
                    <div className={styles.dateRange}>
                        {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                    </div>
                    <h3 className={styles.institution}>{edu.institution}</h3>
                    <p className={styles.degree}>
                        {edu.studyType} in {edu.area}
                    </p>
                </div>
            ))}
        </section>
    );
}