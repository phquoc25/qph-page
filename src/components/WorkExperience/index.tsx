import type { ReactNode } from 'react';
import styles from './styles.module.css';
import resumeData from '@site/static/quoc-phan-resume.json';

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function getDateRange(startDate: string, endDate?: string): string {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';
    return `${start} – ${end}`;
}

export default function WorkExperience(): ReactNode {
    const { work } = resumeData;

    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
                Work<br />Experiences
            </h2>
            {work.map((job, index) => (
                <div key={index} className={styles.experienceItem}>
                    <div className={styles.dateRange}>
                        {getDateRange(job.startDate, job.endDate)}
                    </div>
                    <h3 className={styles.companyName}>{job.name}</h3>
                    <p className={styles.position}>{job.position}</p>
                    {job.summary && (
                        <p className={styles.summary}>{job.summary}</p>
                    )}
                    {job.highlights && job.highlights.length > 0 && (
                        <ul className={styles.highlights}>
                            {job.highlights.map((highlight, hIndex) => (
                                <li key={hIndex} className={styles.highlightTag}>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </section>
    );
}